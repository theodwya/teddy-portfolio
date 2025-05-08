import styled from 'styled-components';
import { Box, Heading, Button } from '@chakra-ui/react';

interface CardProps {
  bgColor: string;
  shadowColor: string;
  shadowOffset: string;
  shadowOffsetLight: string;
}

export const Card = styled(Box)<CardProps>`
  width: 280px;
  background-color: ${(props) => props.bgColor};
  position: relative;
  padding: 1.5rem;
  margin: 0; /* spacing handled by wrapper */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;

  /* Layered shadows for 3D stacked effect */
  box-shadow:
    0 0 0 ${(props) => props.shadowColor},
    ${(props) => props.shadowOffset} ${(props) => props.shadowOffset} 0 ${(props) => props.shadowColor},
    ${(props) => props.shadowOffsetLight} ${(props) => props.shadowOffsetLight} 0 ${(props) => props.shadowColor};

  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 1;

  &:hover {
    transform: translateY(-10px);
    box-shadow:
      0 0 0 ${(props) => props.shadowColor},
      ${(props) => props.shadowOffsetLight} ${(props) => props.shadowOffsetLight} 0 ${(props) => props.shadowColor},
      ${(props) => props.shadowOffset} ${(props) => props.shadowOffset} 0 ${(props) => props.shadowColor};
  }
`;

interface CardNameProps {
  color: string;
}

export const CardName = styled(Heading)<CardNameProps>`
  font-size: 1.3rem;
  font-weight: 900;
  color: ${(props) => props.color};
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin: 1rem 0;
  text-align: center;
  font-family: 'Merriweather', serif;
  white-space: normal;
  line-height: 1.3;
`;

interface CardButtonProps {
  textColor: string;
  bgColor: string;
  bgHover: string;
}

export const CardButton = styled(Button)<CardButtonProps>`
  width: 70%;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.bgColor};
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  text-transform: capitalize;
  border: none;
  padding: 0.5rem 0;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: ${(props) => props.bgHover};
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  }
`;