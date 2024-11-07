import styled from 'styled-components';
import { rem } from '../../../app/styles/common';
import { BUTTON_COLOR_B } from '../../../app/styles/variable/globalConstant';

export const HeaderWrapper = styled.div`
    background-color: ${BUTTON_COLOR_B};
`;


export const HeaderBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: ${rem(50)};
`;

export const HeaderLogo = styled.div`
  
`;
