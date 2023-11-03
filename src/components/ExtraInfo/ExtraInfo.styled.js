import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(10)};
  justify-content: center;
  margin: ${({ theme }) => theme.spacing(5)} 0;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.grey};
  }
  > li {
    list-style: none;
    font-size: 24px;
  }
`;
