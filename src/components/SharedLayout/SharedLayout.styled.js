import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 21px;
  text-decoration: none;
  text-transform: uppercase;
  transition: font-size 300ms, color 300ms;
  &:hover {
    color: ${({ theme }) => theme.colors.orange};
    font-size: 22px;
  }
  &.active {
    color: ${({ theme }) => theme.colors.red};
    font-size: 21px;
  }
`;

export const LinkList = styled.ul`
  height: 40px;
  padding: ${({ theme }) => theme.spacing(1)};
  display: flex;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const LinkItem = styled.li`
  list-style: none;
  min-width: 80px;
`;
