import pytest


@pytest.fixture(autouse=True)
def enable_db_access_for_all_tests(db):
    pass


@pytest.fixture
def create_user(db, django_user_model):
    def make_user(**kwargs):
        kwargs['password'] = 'Test-pass123'
        kwargs['username'] = 'test_user'
        kwargs['email'] = 'test@mail.com'

        return django_user_model.objects.create_user(**kwargs)
    return make_user
