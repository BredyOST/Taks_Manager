import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IPortal {
    children: React.ReactNode;
    whereToAdd: HTMLElement;
}

const Portal = ({ children, whereToAdd = document.body }: IPortal) => {
    return createPortal(children, whereToAdd);
};

export default Portal;
