import type { NextPage } from 'next';
import { readModbus } from '../lib/modbus';
import { serialServerOn, serialServerSend } from '../lib/serial';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const onWrite = () => {
    console.log('write is clicked');
    serialServerSend();
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
  //open serail port when node server is running before showing web page
  serialServerOn();

  return {
    props: {}, // will be passed to the page componㅌㅈent as props
  };
}

export default Home;
