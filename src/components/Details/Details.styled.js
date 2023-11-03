import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
`;

export const Title = styled.h1`
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  margin: ${({ theme }) => theme.spacing(5)};
`;

export const Genre = styled.li`
  list-style: none;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.orange};
`;

export const Rating = styled.p`
  margin-top: ${({ theme }) => theme.spacing(10)};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.red};
  > b {
    color: black;
    margin-right: ${({ theme }) => theme.spacing(5)};
  }
`;
