import pytest

from django.contrib.auth import get_user_model


def test_creating_user_is_successful():
    email = 'test@mail.com'
    password = 'testpass'
    username = 'testuser'
    user = get_user_model().objects.create_user(
        email=email,
        password=password,
        username=username
    )

    assert user.email == email
    assert user.username == username
    assert user.check_password(password)


def test_new_user_email_is_normalized():
    email = 'test@MAIL.com'
    user = get_user_model().objects.create_user(
        email=email,
        password='password',
        username='testuser',
    )

    assert user.email == email.lower()


def test_creating_user_without_details_raises_error():
    with pytest.raises(ValueError):
        assert get_user_model().objects.create_user(
            email=None,
            password=None,
            username=None,
        )
