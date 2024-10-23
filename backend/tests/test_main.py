from fastapi.testclient import TestClient
from soft.main import app

client = TestClient(app)

def test_get_root():
    response = client.get('/test')
    assert response.status_code == 200
    assert response.json() == {'Hello': 'Python!'}

def test_read_item():
    response = client.get('/items/42?q=test')
    assert response.status_code == 200
    assert response.json() == {'item_id': 42, 'q': 'test'}

def test_read_item_no_query():
    response = client.get('/items/42')
    assert response.status_code == 200
    assert response.json() == {'item_id': 42, 'q': None}
