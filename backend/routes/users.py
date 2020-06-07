import requests
import json

from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel

from ..firebase import auth, db

route = APIRouter()


class User(BaseModel):
    email: str
    password: str


@route.post('/register', status_code=201)
async def register_user(user_data: User):
    try:
        user = auth.create_user_with_email_and_password(user_data.email, user_data.password)
        auth.send_email_verification(user['idToken'])
        return {'user': user}
    except requests.HTTPError as e:
        err = json.loads(e.strerror).get('error')
        err_code = err.get('code')
        err_msg = {'detail': err.get('message')}
        return JSONResponse(status_code=err_code, content=err_msg)
    except HTTPException as e:
        err_msg = {'detail': str(e)}
        return JSONResponse(status_code=e.status_code, content=err_msg)
    except Exception as e:
        e = {'detail': str(e)}
        return JSONResponse(status_code=500, content=e)


@route.post('/login')
async def login_user(user_data: User):
    try:
        user = auth.sign_in_with_email_and_password(user_data.email, user_data.password)
        if not check_email_verified(auth.get_account_info(user['idToken'])):
            response = {'detail': 'Email unverified'}
            return JSONResponse(status_code=403, content=response)
        return {'user': user}
    except requests.HTTPError as e:
        err = json.loads(e.strerror).get('error')
        err_code = err.get('code')
        err_msg = {'detail': err.get('message')}
        return JSONResponse(status_code=err_code, content=err_msg)
    except HTTPException as e:
        err_msg = {'detail': str(e)}
        return JSONResponse(status_code=e.status_code, content=err_msg)
    except Exception as e:
        e = {'detail': str(e)}
        return JSONResponse(status_code=500, content=e)


def check_email_verified(login_response):
    verified = login_response['users'][0]['emailVerified']
    return verified
