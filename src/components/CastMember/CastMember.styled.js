import styled from 'styled-components';
export const Card = styled.div`
  border-radius: 2px;
  overflow: hidden;
  padding-top: ${({ theme }) => theme.spacing(4)};
`;

export const Text = styled.p`
  text-align: center;
  font-size: 18px;
  padding: ${({ theme }) => theme.spacing(1)};
  transition: font-size 300ms;
`;

export const Wrap = styled.div`
  text-align: center;
  transition: transform 300ms;
`;
