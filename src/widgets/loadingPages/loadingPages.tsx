import React from 'react';
import {FallbackContainer, Spinner} from "./loadingStyled/loadingStyled";

const LoadingPages = () => {
    return (
        <FallbackContainer>
            <Spinner />
            Загрузка страницы...
        </FallbackContainer>
    );
};

export default LoadingPages;