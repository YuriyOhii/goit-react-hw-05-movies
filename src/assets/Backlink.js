import styled from 'styled-components';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  margin: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.colors.grey};
  font-size: 20px;
  text-decoration: none;
  transition: color 300ms;
  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const Icon = styled(HiOutlineArrowNarrowLeft)`
  color: inherit;
`;
