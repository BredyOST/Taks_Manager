import React, { useState } from 'react';
import { ContentModal, StyledSvgClose, WrapperModal } from './styled/modalStyled';
import CustomButton from '../buttons/CustomButton';
import { HomeTypesButton } from '../../../pages/home/types/HomeTypes';
import { useClosePopups } from '../../hooks/hooks';
import { useAppSelector } from '../../../app/redux/hooks/hooks';

interface IModal {
    children: React.ReactNode;
    isActive: boolean;
}

const Modal = ({ isActive, children }: IModal) => {
    const { isCloseModalAddTask } = useAppSelector((state) => state.additionalIndicators);
    const closePopups = useClosePopups();

    return (
        <WrapperModal $isVisible={!isCloseModalAddTask}>
            <ContentModal>
                <CustomButton
                    type='button'
                    indicator={HomeTypesButton.closePopup}
                    isActive={false}
                    onClickTab={null}
                    onClickTask={closePopups}
                    onClickOpenTask={null}
                    activeTab={null}
                >
                    <StyledSvgClose />
                </CustomButton>
                {children}
            </ContentModal>
        </WrapperModal>
    );
};

export default Modal;
