from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status, views, generics
from rest_framework.response import Response

from .serializers import UserSerializer

User = get_user_model()


class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer


class LoginUserView(views.APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')

        if username and password:
            try:
                user = User.objects.get(username=username)
                if user.check_password(password):
                    token = user.generate_token
                    return Response({
                        'token': token,
                        'username': username,
                        'user_id': user.id,
                    })
                else:
                    return Response({
                        'error': 'Wrong username or password.p'
                    }, status=status.HTTP_400_BAD_REQUEST)
            except ObjectDoesNotExist:
                return Response({
                    'error': 'Wrong username or password.o'
                }, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({
                'error': 'Please provide a username and password.',
            }, status=status.HTTP_400_BAD_REQUEST)
