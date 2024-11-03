import React from 'react';
import { store } from '../config/store';
import { Provider } from 'react-redux';

interface IReduxProvider {
    children: React.ReactNode;
}

const ReduxProvider = ({ children }: IReduxProvider) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
