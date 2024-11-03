import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import ReduxProvider from './app/redux/provider/ReduxProvider';

createRoot(document.getElementById('root')!).render(
    <ReduxProvider>
        <App />
    </ReduxProvider>,
);
