import { SerialPort } from 'serialport';

const serialServer = new SerialPort({
  path: 'COM3',
  //
  baudRate: 38400,
});

export const serialServerOn = () => {
  // const res = fetch('http://localhost:3000/connect');
  // return res;
  serialServer.on('data', (what) => {
    console.log(what);
  });
};

export const serialOpen = () => {
  // let open = '01 06 00 15 00 01 59 ce'; //16
  let openArr = [1, 6, 0, 21, 0, 1, 89, 206];
  let openBuff = Buffer.from(openArr);
  console.log({ openBuff });
  // 0000 0001 / 0000 0110 / 0000 0000/ 0001 0101/ 0000 0000/ 0000 0001/ 0101 1001 / 1100 1110
  // 1                  /6           /0 /21/ 0/1/89/ 216
  fetch('http://localhost:3000/write', {
    method: 'POST',
    body: JSON.stringify(openBuff),
  });
};

export const serialClose = () => {
  // let close = '01 /06/ 00/ 15/ 00/ 00/ 98 0e';
  const closeArr = [1, 6, 0, 21, 0, 0, 152, 14];
  const closeBuff = Buffer.from(closeArr);
  console.log({ closeBuff });
  // serialServer.write(closeBuff, (error) => {
  //   console.error({ writeError: error });
  // });
};

export const serialServerSend = () => {
  serialServer.write('TEST', (error) => {
    console.error({ writeError: error });
  });
};
