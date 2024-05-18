from fastapi import FastAPI
from api.modules.users.routes import user_router

app = FastAPI(title="E-Commerce")

app.include_router(user_router.router, prefix="/users")

@app.get("/")
async def read_root():
    return {"message": "Welcome to E-Commerce!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("api.main:app", host="0.0.0.0", port=8000, log_level="info", reload=True)
