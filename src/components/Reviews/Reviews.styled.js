import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 32px;
  text-align: center;
`;

export const Li = styled.li`
  list-style: none;
`;

export const Notification = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.red};
  font-size: 20px;
`;
