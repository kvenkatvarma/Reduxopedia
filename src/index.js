import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './app/layout/Header';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Counter from './app/Components/Counter';
import DestinationList from './app/Components/DestinationList';
import DestinationFact from './app/Components/DestinationFact';
import ResetApp from './app/Components/ResetApp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='text-white'>
        <Provider store={store}>
            <Header/>
            <ResetApp/>
            <Counter/>
            <div className='p-4 border text-center'>
                <h4 className='text-success'>Destination List</h4>  
                <DestinationList/>
                <DestinationFact/>
            </div>        
        </Provider>    
    </div>
);
