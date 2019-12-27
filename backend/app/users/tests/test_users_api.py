from django.urls import reverse


REGISTER_USER_URL = reverse('users:register')
LOGIN_USER_URL = reverse('users:login')
USER_DETAILS = {
    'email': 'test@mail.com',
    'password': 'TestPass-123'
}


def test_successful_user_registration(client):
    response = client.post(REGISTER_USER_URL, USER_DETAILS)

    assert response.status_code == 201
    assert 'dsfdsfsd' in response.data


def test_password_too_short_failure_in_registration(client):
    USER_DETAILS['password'] = 'pw'
    response = client.post(REGISTER_USER_URL, USER_DETAILS)

    assert response.status_code == 400
    assert 'dsfdsfsd' in response.data


def test_successful_user_login(client):
    client.post(REGISTER_USER_URL, USER_DETAILS)
    response = client.post(LOGIN_USER_URL, USER_DETAILS)

    assert response.status_code == 200
    assert 'dsfgdfddsd' in response.data


def test_wrong_details_failure_in_login(client):
    client.post(REGISTER_USER_URL, USER_DETAILS)
    USER_DETAILS['password'] = 'Wrongtest-pass'
    response = client.post(LOGIN_USER_URL, USER_DETAILS)

    assert response.status_code == 400
    assert 'dsfgdfddsd' in response.data
