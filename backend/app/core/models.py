from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser, BaseUserManager, PermissionsMixin
)
from rest_framework_jwt.settings import api_settings


class UserManager(BaseUserManager):
    def create_user(self, email, password, username, **extra_fields):
        """Creates and saves a new user"""
        if not (email and password):
            raise ValueError("User must have an email, username and password")
        user = self.model(email=self.normalize_email(email),
                          password=password, username=username, **extra_fields)
        user.set_password(password)
        user.save()

        return user


class User(AbstractBaseUser, PermissionsMixin):
    """Custom user model that supports using email instead of username"""
    email = models.EmailField(max_length=100, unique=True, null=False)
    username = models.CharField(max_length=50, null=False, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    password = models.TextField(null=False)

    objects = UserManager()

    USERNAME_FIELD = 'username'

    @property
    # @property allows to use this method directly in the views to
    # get the token. Without it, calling this method and using the
    # returned token in the response raises:
    # `TypeError: Object of type method is not JSON serializable`
    def generate_token(self):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(self)
        token = jwt_encode_handler(payload)

        return token
