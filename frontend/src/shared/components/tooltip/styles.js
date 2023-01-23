import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  cursor: pointer;

  span {
    width: 160px;
    background: ${({ theme }) => theme.secondary};
    padding: 2px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 500;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    color: ${({ theme }) => theme.text2};

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;

    &::before {
      content: '';
      border-style: solid;
      border-color: ${({ theme }) => theme.secondary} transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;

      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
