import type { NextPage } from 'next';
import { readModbus, writeModbus } from '../lib/modbus';
import { serialServerOn } from '../lib/serial';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
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
  serialServerOn();
  // open connection to a serial port
  // client.connectRTU(
  //   '/dev/tty.usbserial-14210',
  //   { baudRate: 115200, parity: 'none', stopBits: 1, dataBits: 8 },
  //   run
  // );

  // function run() {
  //   client.setID(1);

  //   client.readHoldingRegisters(136, 2).then((res) => {
  //     console.log({ res });
  //   });
  // }

  // const res = await client.connectRTUBuffered(
  //   //should find usb address after connect usb in mac in terminal for finding usb address
  //   //cd /dev
  //   //tty for calling, cu for calling out
  //   // '/dev/ttyUSB0',
  //   '/dev/ttyUSB14210',
  //   { baudRate: 115200, parity: 'none', stopBits: 1, dataBits: 8 },
  //   writeModbus
  // );
  // console.log({ clientOpen: client.isOpen });
  // console.log('@@', res);

  return {
    props: {}, // will be passed to the page componㅌㅈent as props
  };
}

export default Home;
