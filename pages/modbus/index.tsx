import axios from 'axios';
import type { NextPage } from 'next';

const Modbus: NextPage = () => {
  const onOpen = async () => {
    let openArr = [1, 6, 0, 21, 0, 1, 89, 206];
    let openBuff = Buffer.from(openArr);

    const res2 = await axios.post('/api/write', {
      data: {
        bufferData: openBuff,
      },
    });
  };

  const onClose = async () => {
    let closeArr = [1, 6, 0, 21, 0, 0, 152, 14];
    let closeBuff = Buffer.from(closeArr);

    const res2 = await axios.post('/api/write', {
      data: {
        bufferData: closeBuff,
      },
    });
  };

  return (
    <div>
      <button onClick={onOpen}>Open Test</button>
      <button onClick={onClose}>Close Test</button>
    </div>
  );
};

export async function getServerSideProps() {
  //open serail port when node server is running before showing web page
  const getServerSidePropsRes = await fetch(
    'http://localhost:3000/api/connect'
  );
  console.log({ getServerSidePropsRes });
  // serialServerOn();

  return {
    props: {},
  };
}

export default Modbus;
