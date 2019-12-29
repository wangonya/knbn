from django.urls import reverse
from django.contrib.auth import get_user_model


REGISTER_USER_URL = reverse('users:register')
LOGIN_USER_URL = reverse('users:login')
USER_DETAILS = {
    'email': 'test@mail.com',
    'password': 'TestPass-123',
    'username': 'TestGuy',
}
User = get_user_model()


def test_successful_user_registration(client):
    response = client.post(REGISTER_USER_URL, USER_DETAILS)

    assert response.status_code == 201
    assert User.objects.get(username=USER_DETAILS['username'])


def test_password_too_short_failure_in_registration(client):
    USER_DETAILS['password'] = 'pw'
    response = client.post(REGISTER_USER_URL, USER_DETAILS)

    assert response.status_code == 400
    USER_DETAILS['password'] = 'TestPass-123'


def test_successful_user_login(client):
    client.post(REGISTER_USER_URL, USER_DETAILS)
    response = client.post(LOGIN_USER_URL, USER_DETAILS)

    assert response.status_code == 200


def test_wrong_details_failure_in_login(client):
    client.post(REGISTER_USER_URL, USER_DETAILS)
    USER_DETAILS['password'] = 'Wrongtest-pass'
    response = client.post(LOGIN_USER_URL, USER_DETAILS)

    assert response.status_code == 400
