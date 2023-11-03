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
  height: 60px;
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(1)};
  padding-left: ${({ theme }) => theme.spacing(3)};
  display: flex;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const Container = styled.div`
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(3)};
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const LinkItem = styled.li`
  list-style: none;
  min-width: 80px;
`;

export const Header = styled.header`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 3px;
`;
