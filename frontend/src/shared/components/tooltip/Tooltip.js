import { Container } from './styles';

export const Tooltip = ({ title, className, children }) => {
  return (
    <Container className={className}>
      <span>{title}</span>
      {children}
    </Container>
  );
};
