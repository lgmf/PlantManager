import styled from 'styled-components/native';

const Content = styled.View`
  width: 100%;
  flex: 0.7;
  align-items: center;
  justify-content: space-around;
`;

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  margin: 40px 20px;
`;

export default { Container, Content };
