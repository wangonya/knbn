from django.urls import path

from . import views

app_name = 'users'


urlpatterns = [
    path('register/', views.CreateUserView.as_view(), name='register'),
    # path('login/', views.CreateUserView.as_view(), name='login'),
]
