import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

const Col = 'div'; // import Col from 'reactstrap/lib/Col';

export default styled(Col)`
  padding: 1rem 3rem;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;
