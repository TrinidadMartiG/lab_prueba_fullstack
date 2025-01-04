import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSets } from '../redux/setsSlice';
import { fetchSetCards } from '../redux/cardsSlice';

const SetList = () => {
  const dispatch = useDispatch();
  const { items: sets, status, error } = useSelector((state) => state.sets);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchSets());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return (
      <div className="loading-spinner">
        <div className="loading-dot dot-1"></div>
        <div className="loading-dot dot-2"></div>
        <div className="loading-dot dot-3"></div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="error-message">
        <p>⚠️ {error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {sets.map((set) => (
        <div
          key={set.id}
          className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl cursor-pointer 
                   transition-all duration-300 hover:bg-gray-700/50 
                   border border-gray-700/50 hover:border-purple-500/50
                   shadow-lg hover:shadow-purple-500/20
                   flex flex-col min-h-[200px]"
          onClick={() => dispatch(fetchSetCards(set.id))}
        >
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 
                       bg-clip-text text-transparent mb-2 ">{set.name}</h2>
          <p className="text-gray-400 font-medium mb-3 ">{set.series}</p>
          <div className="space-y-2 mt-auto">
            <p className="text-sm text-gray-300 flex items-center">
              <span className="inline-block w-4 h-4 mr-2 ">🎴</span>
              <span className="">Cards: {set.printed_total} / {set.total}</span>
            </p>
            <p className="text-sm text-gray-300 flex items-center">
              <span className="inline-block w-4 h-4 mr-2">📅</span>
              <span className="">Released: {new Date(set.release_date).toLocaleDateString()}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SetList; 