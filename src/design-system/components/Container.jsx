import styled from 'styled-components/native';

const Content = styled.View`
  width: 100%;
  align-items: center;
`;

const Container = styled.SafeAreaView`
  flex: 1;
  margin: 40px 32px;
  align-items: ${(props) => (props.centered ? 'center' : 'flex-start')}
`;

export default { Container, Content };
