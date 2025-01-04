import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoArrowBack } from 'react-icons/io5';

const CardDetail = () => {
  const navigate = useNavigate();
  const { cardId } = useParams();
  const card = useSelector(state => 
    state.cards.items.find(card => card.id === cardId)
  );

  if (!card) {
    return (
      <div className="loading-spinner">
        <div className="loading-dot dot-1"></div>
        <div className="loading-dot dot-2"></div>
        <div className="loading-dot dot-3"></div>
      </div>
    );
  }

  const getTypeColor = (type) => {
    const colors = {
      Colorless: 'from-gray-400 to-gray-500',
      Darkness: 'from-purple-600 to-gray-900',
      Dragon: 'from-orange-500 to-red-700',
      Fairy: 'from-pink-400 to-purple-500',
      Fighting: 'from-orange-600 to-red-800',
      Fire: 'from-orange-500 to-red-600',
      Grass: 'from-green-400 to-green-700',
      Lightning: 'from-yellow-400 to-yellow-600',
      Metal: 'from-gray-400 to-gray-700',
      Psychic: 'from-purple-400 to-purple-700',
      Water: 'from-blue-400 to-blue-700',
    };
    return colors[type] || 'from-gray-400 to-gray-500';
  };

  return (
    <div className="container mx-auto p-6">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-gray-400 hover:text-purple-400 
                 transition-colors duration-300"
      >
        <IoArrowBack size={24} />
        Back to Set
      </button>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="relative group">
            <img 
              src={card.images[0].large} 
              alt={card.name}
              className="w-full rounded-xl shadow-2xl transition-transform duration-300 
                       group-hover:scale-[1.02] relative z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                         rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 
                         opacity-75 group-hover:opacity-100 -z-10"></div>
          </div>
        </div>
        
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 
                       bg-clip-text text-transparent">{card.name}</h1>
          
          <div className="space-y-6">
            {card.types && card.types.length > 0 && (
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                <h2 className="text-xl font-semibold text-gray-300 mb-3">Types</h2>
                <div className="flex flex-wrap gap-2">
                  {card.types.map(type => (
                    <span 
                      key={type}
                      className={`px-4 py-2 rounded-lg bg-gradient-to-r ${getTypeColor(type)} 
                               text-white font-medium shadow-lg`}
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {card.subtypes && card.subtypes.length > 0 && (
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                <h2 className="text-xl font-semibold text-gray-300 mb-3">Subtypes</h2>
                <div className="flex flex-wrap gap-2">
                  {card.subtypes.map(subtype => (
                    <span 
                      key={subtype}
                      className="px-4 py-2 rounded-lg bg-gray-700 text-gray-300 
                               shadow-lg font-medium"
                    >
                      {subtype}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {card.supertype && (
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                <h2 className="text-xl font-semibold text-gray-300 mb-3">Supertype</h2>
                <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 
                               to-pink-500 text-white shadow-lg font-medium">
                  {card.supertype}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail; 