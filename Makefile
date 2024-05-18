run:
	@uvicorn api.main:app --reload

test:
	@pytest --asyncio-mode=auto