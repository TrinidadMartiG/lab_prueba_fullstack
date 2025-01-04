import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'postgresql://ash:postgres@db:5432/pokemon_tcg')
    SQLALCHEMY_TRACK_MODIFICATIONS = False