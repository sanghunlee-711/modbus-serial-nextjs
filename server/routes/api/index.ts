import * as express from 'express';
import { SerialPort } from 'serialport';

const serialServer = new SerialPort({
  path: '/dev/tty.usbserial-14210',
  //
  baudRate: 115200,
});

export const serialServerOn = () => {
  // const res = fetch('http://localhost:3000/connect');
  // return res;
  serialServer.on('data', (what) => {
    console.log(what);
  });
};

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ ok: true });
});
router.get('/connect', (req, res) => {
  let resFromSerial = '';
  serialServer.on('data', (what) => {
    resFromSerial = what;
  });
  res.send({ resFromSerial });
});

router.get('/data', async (req, res) => {});
router.post('/write', async (req, res) => {
  const buffer = req.body.data.openBuff;
  console.log(buffer);
  serialServer.write(Buffer.from(buffer), (error: any) => {
    console.error({ WRITE_ERROR: error });
  });
});

export default router;
