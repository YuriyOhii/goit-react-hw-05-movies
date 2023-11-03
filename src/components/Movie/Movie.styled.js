import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 2px;
  overflow: hidden;
  padding-top: ${({ theme }) => theme.spacing(4)};
`;

export const Title = styled.p`
  text-align: center;
  font-size: 20px;
  padding: ${({ theme }) => theme.spacing(1)};
  transition: font-size 300ms;
`;

export const Reference = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey};
  transition: color 300ms;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const Wrap = styled.div`
  text-align: center;
  transition: transform 300ms;
  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`;
