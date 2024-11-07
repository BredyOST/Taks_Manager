import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import ReduxProvider from './app/redux/provider/ReduxProvider';
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <ReduxProvider>
        <App />
    </ReduxProvider>
    </BrowserRouter>
);
