import React, { SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { activeTaskSliceActions } from '../../app/redux/slices/additionalIndicators/additionalIndicators';

export const useClosePopups = () => {
    const dispatch = useDispatch();
    const { changeStateModalAddTask, handleIndicatorIsClosedModalAddTask } = activeTaskSliceActions;

    return React.useCallback(() => {
        dispatch(handleIndicatorIsClosedModalAddTask(true));
        setTimeout(() => {
            dispatch(handleIndicatorIsClosedModalAddTask(false));
            dispatch(changeStateModalAddTask(null));
        }, 400);
    }, []);
};
