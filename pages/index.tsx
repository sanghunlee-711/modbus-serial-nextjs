import Button from 'components/Button';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & > button {
    width: 30vw;
    height: 20vh;
    font-size: 3vh;
    &:not(:last-child) {
      margin-bottom: 2vh;
    }
  }
`;

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <Layout>
      <Button onClick={() => router.push('/cam')} text="CAM QR Scanner" />
      <Button onClick={() => router.push('/usb')} text="USB Scanner" />
      <Button onClick={() => router.push('/modbus')} text="Modbus" />
    </Layout>
  );
};

export default Home;
