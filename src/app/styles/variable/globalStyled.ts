import styled from 'styled-components';
import { adaptiveValue, rem } from '../common';
import {CONTAINER_PADDING, CONTAINER_WIDTH, MIN_WIDTH} from './globalConstant';

export const ContainerDiv = styled.div`
    max-width: ${rem(CONTAINER_WIDTH)};
    margin: 0 auto;
    padding: 0 ${rem(CONTAINER_PADDING / 2)};
    // ${({}) => adaptiveValue('font-padding', CONTAINER_PADDING / 2, 2, 3, CONTAINER_WIDTH, MIN_WIDTH)}
`;
