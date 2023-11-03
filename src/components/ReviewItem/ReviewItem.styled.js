import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const Card = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
  &:not(:last-of-type) {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }
`;
