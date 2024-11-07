import styled, {keyframes} from 'styled-components';
import { rem } from '../../../../app/styles/common';
import SvgClose from './../.././../../assets/svg/closeCycle.svg';


interface ModalWrapper {
    $isVisible: boolean;
}



const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  0% {
    opacity: 1;

  }
  100% {
    opacity: 0;
  }
`;

export const WrapperModal = styled.div<ModalWrapper>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.42);
    animation: ${(props) => props.$isVisible ? fadeIn : fadeOut} 0.3s ease-out forwards;
    transition: transform ease 0.3s 0s;
`;

export const ContentModal = styled.div`
    position: absolute;
    width: ${rem(600)};
    height: ${rem(600)};
    background-color: #f5f7fa;
    top: 50%;
    border-radius: ${rem(15)};
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: ${rem(10)};
    padding-bottom: ${rem(10)};
    padding-left: ${rem(10)};
    padding-right: ${rem(10)};
    overflow: auto;
`;

export const StyledSvgClose = styled(SvgClose)`
    max-width: ${rem(30)};
    max-height: ${rem(30)};
    fill: #8e9395;
    cursor: pointer;
    position: absolute;
    top: ${rem(10)};
    right: ${rem(10)};
    transition: fill ease 0.3s 0s;

    &:hover {
        fill: rgba(28, 28, 28, 0.87);
        transition: fill ease 0.3s 0s;
    }
`;
