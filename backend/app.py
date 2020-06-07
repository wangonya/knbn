from fastapi import FastAPI, Depends, Header, HTTPException
from .routes import users


async def get_token_header(x_token: str = Header(...)):
    if x_token != "fake-super-secret-token":
        raise HTTPException(status_code=400, detail="X-Token header invalid")

app = FastAPI()
app.include_router(
    users.route,
    prefix='/users',
    tags=['users'],
    # dependencies=[Depends(get_token_header)],
    # responses={404: {"description": "Not found"}},
)