import React from 'react';
import styled, { keyframes } from 'styled-components';

// Анимация вращения
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Контейнер для fallback
export const FallbackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f8ff;
  color: #0077b6;
  font-size: 1.5rem;
  font-family: Arial, sans-serif;
  text-align: center;
`;

// Спиннер
export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid #0077b6;
  border-top: 6px solid #90e0ef;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
  margin-right: 20px;
`;
