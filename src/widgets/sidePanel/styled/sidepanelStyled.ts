import styled, { keyframes } from 'styled-components';
import { math, rem } from '../../../app/styles/common';

const COLOR = `2px solid rgba(0, 0, 0, 0.11);`;
const PADDING_BOTTOM = 10;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50px); /* Начинаем сдвиг из правой части */
  }
  100% {
    opacity: 1;
    transform: translateX(0); /* Перемещаем в финальное положение */
  }
`;
const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);

  }
  100% {
    opacity: 0;
    transform: translateX(50px);  /* Сдвигаем в сторону */
  }
`;

interface ISideBar {
    $isVisible: boolean;
}

export const SideBarWrapper = styled.div<ISideBar>`
    position: absolute;
    top: 0;
    right: 0;
    max-width: 40%; /* Уменьшено для более компактного вида */
    width: ${rem(800)};
    height: 100vh;
    background-color: #ffffff;
    border-left: 5px solid rgba(218, 206, 206, 0.3);
    box-shadow: ${rem(-2)} ${rem(0)} ${rem(10)} ${rem(4)} rgba(0, 0, 0, 0.1); /* Более мягкая тень */
    padding-left: ${rem(15)};
    padding-right: ${rem(15)};
    padding-top: ${rem(25)};
    padding-bottom: ${rem(15)};
    overflow-y: auto;
    border-radius: ${rem(8)}; /* Добавлена скругленная форма */
    animation: ${(props) => (props.$isVisible ? fadeIn : fadeOut)} 0.3s ease-out forwards;
    transition: transform ease 0.3s 0s;
    transform: ${(props) => (props.$isVisible ? 'translateX(0)' : 'translateX(50px)')};
`;

export const SideBarControl = styled.div`
    display: flex;
    //flex-direction: column;
    gap: ${rem(12)};
    margin-bottom: ${rem(20)};
`;

export const SideBarInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rem(10)};
    margin-top: ${rem(50)};
`;

export const SideBarTitleItem = styled.h3`
    font-size: ${rem(22)};
    font-weight: 600;
    color: #333;
    line-height: ${math(22, 30)};
    text-align: center;
    border-bottom: ${COLOR};
    padding-bottom: ${rem(8)};
`;

export const SideBarTextItem = styled.div`
    font-size: ${rem(16)};
    font-weight: 400;
    color: #555;
    line-height: ${math(16, 24)};
    border-bottom: ${COLOR};
    padding-bottom: ${rem(PADDING_BOTTOM)};
`;

export const SideBarDateItemCover = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rem(5)};
    font-size: ${rem(14)};
    font-weight: 400;
    color: #777;
    line-height: ${math(14, 20)};
    border-bottom: ${COLOR};
    padding-bottom: ${rem(PADDING_BOTTOM)};
`;

export const SideBarDateCover = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CoverBtnsInTask = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: ${rem(10)};
`;

export const SideBarClose = styled.button`
    width: ${rem(40)};
    height: ${rem(40)};
    border-radius: 50%;
    background-color: #f3e6e6;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: #cc9595;
        transform: scale(1.1); /* Добавим немного увеличения для визуального эффекта */
    }

    span {
        position: relative;
        width: ${rem(18)};
        height: ${rem(18)};

        &::before,
        &::after {
            content: '';
            position: absolute;
            width: ${rem(18)};
            height: ${rem(2)};
            background-color: #292828;
            left: 0;
            top: 50%;
            transform-origin: center;
        }

        &::before {
            transform: translateY(-50%) rotate(-45deg);
        }

        &::after {
            transform: translateY(-50%) rotate(45deg);
        }
    }
`;

export const SidePanel = styled.div`
    margin-top: ${rem(20)};
    padding: ${rem(10)} ${rem(20)};
    border-radius: ${rem(8)};
    background-color: #f9f9f9;
    box-shadow: ${rem(2)} ${rem(2)} ${rem(5)} rgba(0, 0, 0, 0.1);
    font-size: ${rem(15)};
    color: #333;
    line-height: ${math(15, 22)};
`;
