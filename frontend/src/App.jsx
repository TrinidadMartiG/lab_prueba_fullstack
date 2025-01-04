import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as  Routes, Route } from 'react-router-dom';
import SetList from './components/SetList';
import CardList from './components/CardList';
import CardDetail from './components/CardDetail';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
        <div className="min-h-screen bg-gray-900">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 container mx-auto px-4">
                  <div className="lg:col-span-1">
                    <h2 className="text-xl font-bold mb-4 text-gray-200">Sets</h2>
                    <SetList />
                  </div>
                  <div className="lg:col-span-2">
                    <h2 className="text-xl font-bold mb-4 text-gray-200">Cards</h2>
                    <CardList />
                  </div>
                </div>
              } />
              <Route path="/cards/:cardId" element={<CardDetail />} />
            </Routes>
          </main>
        </div>
      
    </Provider>
  );
}

export default App; 