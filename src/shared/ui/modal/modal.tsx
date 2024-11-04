import React from 'react';
import {ContentModal, WrapperModal} from "./styled/modalStyled";


interface IModal {
    children: React.ReactNode;
}

const Modal = ({children}: IModal) => {
    return (
        <WrapperModal>
            <ContentModal>
                {children}
            </ContentModal>
        </WrapperModal>
    );
};

export default Modal;