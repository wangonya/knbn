from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser, BaseUserManager, PermissionsMixin
)


class UserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        """Creates and saves a new user"""
        if not (email and password):
            raise ValueError("User must have an email and password")
        user = self.model(email=self.normalize_email(email),
                          password=password, **extra_fields)
        user.set_password(password)
        user.save()

        return user


class User(AbstractBaseUser, PermissionsMixin):
    """Custom user model that supports using email instead of username"""
    email = models.EmailField(max_length=100, unique=True, null=False)
    name = models.CharField(max_length=50)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    password = models.CharField(null=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
