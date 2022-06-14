import { SerialPort } from 'serialport';

/*
inlet door open =  01 06 00 15 00 01 59 ce
inlet door close =  01 06 00 15 00 00 98 0e  
      FUNCTION 
       RD(03)  
ID + WR(06) + ADDR (0015) +DATA(0000 ~0001) + CRC16(2BYTE)

*/

const hashFunction = (s: string) => {
  var hash = 0;

  for (let i = 0; i < s.length; i++) {
    hash = (hash << 5) - hash + s.charCodeAt(i);
    hash = hash & hash; // prevent overflow from happening
  }
  return hash & 0xffff; // returns lower 16-bit of hash value
};

const serialServer = new SerialPort({
  path: '/dev/tty.usbserial-14210',
  baudRate: 115200,
});

export const serialServerOn = () => {
  serialServer.on('data', (what) => {
    console.log(what);
  });
};

export const serialOpen = () => {
  // let open = '01 06 00 15 00 01 59 ce'; //16
  let openArr = [1, 6, 0, 21, 0, 1, 89, 206];
  console.log(openArr);
  let openBuff = Buffer.from(openArr);
  // 0000 0001 / 0000 0110 / 0000 0000/ 0001 0101/ 0000 0000/ 0000 0001/ 0101 1001 / 1100 1110
  // 1                  /6           /0 /21/ 0/1/89/ 216
  serialServer.write(openBuff, (error) => {
    console.error({ writeError: error });
  });
};

export const serialClose = () => {
  let close = '01 /06/ 00/ 15/ 00/ 00/ 98 0e';
  const closeArr = [1, 6, 0, 21, 0, 0, 152, 14];
  const closeBuff = Buffer.from(closeArr);
  serialServer.write(closeBuff, (error) => {
    console.error({ writeError: error });
  });
};

export const serialServerSend = () => {
  serialServer.write('TEST', (error) => {
    console.error({ writeError: error });
  });
};
