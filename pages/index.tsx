import type { NextPage } from 'next';
import { client, readModbus, writeModbus } from '../lib/modbus';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const onClick = () => {
    console.log('button is clicked');
    writeModbus();
  };

  const onWrite = () => {
    console.log('write is clicked');
    writeModbus();
  };

  const onRead = () => {
    console.log('read is clicked');
    readModbus();
  };

  return (
    <div className={styles.container}>
      <button onClick={onWrite}>writeModbus Test</button>
      <button onClick={onRead}>readModbus Test</button>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await client.connectRTUBuffered(
    '/dev/ttyUSB0',
    { baudRate: 38400 },
    writeModbus
  );
  console.log('@@', res);
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Home;
