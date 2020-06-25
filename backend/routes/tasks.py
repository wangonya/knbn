import requests
import json

from fastapi import APIRouter, HTTPException, Request
from fastapi.responses import JSONResponse
from pydantic import BaseModel

from ..firebase import auth, db

route = APIRouter()


class Task(BaseModel):
    name: str


@route.post('/backlog/create', status_code=201)
async def add_task(task: Task, request: Request):
    token = request.headers.get('x-token')
    data = {"name": task.name}
    db.child('tasks').child('backlog').push(data, token)
    return JSONResponse(data)
