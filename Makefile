run:
	@uvicorn api.main:app --reload

test:
	@PYTHONPATH=./ pytest