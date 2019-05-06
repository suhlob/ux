import styled from 'react-emotion';

const Col = 'div'; // import Col from 'reactstrap/lib/Col';

export default styled(Col)`
  padding: 1rem 3rem;
  font-family: ${p => p.theme.fontFamily};
`;
