import styled, { css } from 'styled-components';

import { Tooltip } from '../../tooltip/Tooltip';

export const Container = styled.div`
  background: ${({ theme }) => theme.background_light};
  border-radius: 8px;
  padding: 6px;
  width: 100%;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  margin-right: 10px;

  svg {
    margin-right: 16px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: ${propsTheme => propsTheme.theme.error_title};
    `}

  ${props =>
    props.isFocused &&
    css`
      color: ${propsTheme => propsTheme.theme.secondary};
      border-color: ${propsTheme => propsTheme.theme.secondary};
    `}
    
  ${props =>
    props.isFilled &&
    css`
      color: ${propsTheme => propsTheme.theme.secondary};
    `}

    .react-select__control {
    background: transparent !important;
  }

  .css-b62m3t-container {
    width: 100% !important;
  }

  .react-select__single-value {
    color: ${({ theme }) => theme.secondary};
  }
`;

export const Error = styled(Tooltip)`
  margin-left: 16px;
  height: 20px;

  svg {
    margin: 0;
  }

  span {
    background: ${({ theme }) => theme.error_title};
    &::before {
      border-color: ${({ theme }) => theme.error_title} transparent;
    }
  }
`;
