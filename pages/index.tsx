import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/cam">
        <a>CAM QR Scanner</a>
      </Link>
      <Link href="/usb">
        <a>USB Scanner</a>
      </Link>
      <Link href="/modbus">
        <a>Modbus</a>
      </Link>
    </div>
  );
};

export default Home;
