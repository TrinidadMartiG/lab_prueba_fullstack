from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
from dotenv import load_dotenv
from sqlalchemy.pool import QueuePool
import os

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    CORS(app)

    load_dotenv()

    # Import config
    from config import Config
    app.config.from_object(Config)

    # Configure pool settings directly in app config
    app.config['SQLALCHEMY_POOL_SIZE'] = 20
    app.config['SQLALCHEMY_MAX_OVERFLOW'] = 10
    app.config['SQLALCHEMY_POOL_TIMEOUT'] = 60
    app.config['SQLALCHEMY_POOL_RECYCLE'] = 3600

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)

    with app.app_context():
        from .routes import bp
        app.register_blueprint(bp)

    return app 