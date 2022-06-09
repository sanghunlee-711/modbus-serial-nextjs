import { SerialPort } from 'serialport';

const serialServer = new SerialPort({
  path: '/dev/tty.usbserial-14210',
  baudRate: 115200,
});

export const serialServerOn = () => {
  serialServer.on('data', (what) => {
    console.log(what);
  });
};
