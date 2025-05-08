import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@chakra-ui/react';

interface AnimatedButtonProps {
  label: string;
  to?: string;
  onClick?: () => void;
}

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
`;

const StyledLink = styled(RouterLink)<{ bgColor: string; shadowColor: string; textColor: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  padding: 0 18px;
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 25px;
  background-color: ${(props) => props.bgColor};
  background-image: linear-gradient(
    45deg,
    rgba(212, 228, 77, 0.2) 0%,  /* chartreuse with opacity */
    rgba(0, 0, 0, 0.2) 100%
  );
  box-shadow: 0 7px 15px 0 ${(props) => props.shadowColor};
  color: ${(props) => props.textColor};
  font-weight: 600;
  font-family: serif;
  letter-spacing: 2px;
  cursor: pointer;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  text-decoration: none;

  &:hover {
    box-shadow: 0 7px 25px 5px ${(props) => props.shadowColor};
    animation: ${bounce} 1.5s ease-in-out infinite;
    text-decoration: none;
  }

  &:active {
    transform: translateY(4px);
    box-shadow: none;
    transition: transform 0.1s ease;
    animation: none;
  }

  &::before {
    content: attr(data-label);
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-family: serif;
    font-size: 11px;
    letter-spacing: 2px;
    color: ${(props) => props.textColor};
    opacity: 1;
    transition: transform 0.3s ease, opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover::before {
    transform: translateY(100%);
    opacity: 0;
  }

  i {
    color: ${(props) => props.textColor};
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2px;
    font-style: normal;
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  &:hover i {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover i:nth-child(1) { transition-delay: 0.04s; }
  &:hover i:nth-child(2) { transition-delay: 0.08s; }
  &:hover i:nth-child(3) { transition-delay: 0.12s; }
  &:hover i:nth-child(4) { transition-delay: 0.16s; }
  &:hover i:nth-child(5) { transition-delay: 0.20s; }
  &:hover i:nth-child(6) { transition-delay: 0.24s; }
  &:hover i:nth-child(7) { transition-delay: 0.28s; }
  &:hover i:nth-child(8) { transition-delay: 0.32s; }
  &:hover i:nth-child(9) { transition-delay: 0.36s; }
  &:hover i:nth-child(10) { transition-delay: 0.40s; }
`;

export default function AnimatedButton({ label, to = '/', onClick }: AnimatedButtonProps) {
  const theme = useTheme();

  // Use your brand colors from theme
  const bgColor = theme.colors.brand?.black ?? '#000000';
  const shadowColor = 'rgba(212, 228, 77, 0.4)'; // chartreuse with opacity for shadow
  const textColor = theme.colors.brand?.chartreuse ?? '#D4E44D';

  return (
    <StyledLink to={to} data-label={label} onClick={onClick} bgColor={bgColor} shadowColor={shadowColor} textColor={textColor}>
      {label.split('').map((char, idx) => (
        <i key={idx}>{char === ' ' ? '\u00A0' : char}</i>
      ))}
    </StyledLink>
  );
}