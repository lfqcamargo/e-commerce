from fastapi import FastAPI
from api.modules.users.routes.user_router import router as user_router
from api.modules.users.routes.auth_router import router as auth_router

app = FastAPI(title="E-Commerce")

app.include_router(user_router, prefix="/users")
app.include_router(auth_router, prefix="/auth")

@app.get("/")
async def read_root():
    return {"message": "Welcome to E-Commerce!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("api.main:app", host="0.0.0.0", port=8000, log_level="info", reload=True)
