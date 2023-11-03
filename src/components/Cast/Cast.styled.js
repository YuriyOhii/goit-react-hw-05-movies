import styled from 'styled-components';

export const CastCard = styled.li`
  list-style: none;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: ${({ theme }) => theme.spacing(2)};
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 32px;
`;
