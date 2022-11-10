import styled, { css } from 'styled-components';

import { Tooltip } from '../../tooltip/Tooltip';

export const Container = styled.div`
  padding: 6px;
  margin-bottom: 25px;
  background-color: ${({ theme }) => theme.background_light};
  border-bottom: 1px solid ${({ theme }) => theme.secondary_light};
  width: 100%;
  color: ${({ theme }) => theme.dark_gray};

  display: flex;
  align-items: center;

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

  input {
    font-size: 15px;
    background: transparent;
    flex: 1;
    border: 0;
    color: ${({ theme }) => theme.secondary};

    &::placeholder {
      color: ${({ theme }) => theme.dark_gray};
    }
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
