from rest_framework.test import APITestCase
from django.urls import reverse
from dotenv import load_dotenv
import os

load_dotenv()

class TestSetUp(APITestCase):

    def setUp(self):
        self.login_url = reverse('login')
        self.create_url = reverse('create_user')

        self.user_data ={

            "tipo": "Admin",
            "nombre": "prueba",
            "apellido": "prueba",
            "email": "test@test.com",
            "direccion": "calle test",
            "fecha_nacimiento": '2023-01-20',
            "salario": 100,
            "password": os.environ['TEST_PASSWORD']
        }
        self.login_data = {
            'username':'test@test.com',
            'password': os.environ['TEST_PASSWORD']
        }
        return super().setUp()
    
    def tearDown(self):
        return super().tearDown()