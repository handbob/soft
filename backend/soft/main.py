from fastapi import FastAPI

app = FastAPI()

@app.get('/test')
def get_root():
    return {'Hello': 'Python!'}

@app.get('/items/{item_id}')
def read_item(item_id: int, q: str = None):
    return {'item_id': item_id, 'q': q}
