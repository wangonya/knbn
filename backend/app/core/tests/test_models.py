from django.contrib.auth import get_user_model


def test_create_user_with_email_successful():
    """Test creating a user with an email is successful"""
    email = 'test@mail.com'
    password = 'testpass'
    user = get_user_model().objects.create_user(
        email=email,
        password=password
    )

    assert user.email == email
    assert user.check_password(password)


def test_new_user_email_normalized():
    """Test the email for a new user is normalized"""
    email = 'test@MAIL.com'
    user = get_user_model().objects.create_user(
        email=email,
        password='password'
    )

    assert user.email == email.lower()
