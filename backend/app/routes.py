from flask import Blueprint, jsonify
from app.models import Set, Card

bp = Blueprint('api', __name__, url_prefix='/api')

@bp.route('/sets', methods=['GET'])
def get_sets():
    sets = Set.query.all()
    return jsonify([{
        'id': s.id,
        'name': s.name,
        'series': s.series,
        'printed_total': s.printed_total,
        'total': s.total,
        'release_date': s.release_date.isoformat() if s.release_date else None
    } for s in sets])

@bp.route('/sets/<set_id>/cards', methods=['GET'])
def get_set_cards(set_id):
    cards = Card.query.filter_by(set_id=set_id).all()
    return jsonify([{
        'id': c.id,
        'name': c.name,
        'supertype': c.supertype,
        'subtypes': c.subtypes,
        'types': c.types,
        'images': [{
            'small': img.url,
            'large': img.url
        } for img in c.images]
    } for c in cards])

@bp.route('/cards/<card_id>', methods=['GET'])
def get_card(card_id):
    card = Card.query.get_or_404(card_id)
    return jsonify({
        'id': card.id,
        'name': card.name,
        'supertype': card.supertype,
        'subtypes': card.subtypes,
        'types': card.types,
        'images': [{
            'small': img.url,
            'large': img.url
        } for img in card.images]
    }) 