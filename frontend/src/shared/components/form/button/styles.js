import styled from 'styled-components';

export const Container = styled.button`
  width: 50%;
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.background_light};

  padding: 10px 25px;
  margin-left: 10px;
  border-radius: 30px;

  transition: transform 100ms linear;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    display: flex;
    text-align: center;
    margin-right: 8px;
  }
`;
