from fastapi import FastAPI, Depends, Header, HTTPException
from .routes import users, tasks


async def get_token_header(x_token: str = Header(...)):
    if not x_token:
        raise HTTPException(status_code=400, detail="X-Token header required")

app = FastAPI()
app.include_router(
    users.route,
    prefix='/users',
    tags=['users'],
    # dependencies=[Depends(get_token_header)],
    # responses={404: {"description": "Not found"}},
)
app.include_router(
    tasks.route,
    prefix='/tasks',
    tags=['tasks'],
    dependencies=[Depends(get_token_header)],
    # responses={404: {"description": "Not found"}}
)
