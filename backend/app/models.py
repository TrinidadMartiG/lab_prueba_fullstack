from app import db

class Set(db.Model):
    __tablename__ = 'set'
    
    id = db.Column(db.String, primary_key=True)
    name = db.Column(db.String, nullable=False)
    series = db.Column(db.String, nullable=False)
    printed_total = db.Column(db.Integer)
    total = db.Column(db.Integer)
    ptcgo_code = db.Column(db.String)
    release_date = db.Column(db.Date)
    updated_at = db.Column(db.DateTime(timezone=True))
    symbol_url = db.Column(db.String)
    logo_url = db.Column(db.String)
    cards = db.relationship('Card', backref='set', lazy=True)

class Card(db.Model):
    __tablename__ = 'card'
    
    id = db.Column(db.String, primary_key=True)
    name = db.Column(db.String, nullable=False)
    supertype = db.Column(db.String, nullable=False)
    subtypes = db.Column(db.ARRAY(db.String))
    types = db.Column(db.ARRAY(db.String))
    set_id = db.Column(db.String, db.ForeignKey('set.id'), nullable=False)
    number = db.Column(db.String, nullable=False)
    rarity = db.Column(db.String)
    images = db.relationship('Image', backref='card', lazy=True)

class Image(db.Model):
    __tablename__ = 'image'
    
    id = db.Column(db.BigInteger, primary_key=True)
    card_id = db.Column(db.String, db.ForeignKey('card.id'), nullable=False)
    url = db.Column(db.String, nullable=False)
    type = db.Column(db.String, nullable=False) 