import axios from 'axios';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  // const onRead = () => {
  //   console.log('read is clicked');
  //   readModbus();
  // };

  const onOpen = async () => {
    // serialOpen();
    // let open = '01 06 00 15 00 01 59 ce'; //16
    let openArr = [1, 6, 0, 21, 0, 1, 89, 206];
    let openBuff = Buffer.from(openArr);
    console.log({ openBuff });
    // 0000 0001 / 0000 0110 / 0000 0000/ 0001 0101/ 0000 0000/ 0000 0001/ 0101 1001 / 1100 1110
    // 1                  /6           /0 /21/ 0/1/89/ 216
    // const res = await fetch('/api/write', {
    //   method: 'POST',
    //   body: 'BODY IS HERE',
    // });

    const res2 = await axios.post('/api/write', {
      data: {
        openBuff,
      },
    });
  };

  const onClose = async () => {
    // serialClose();
    let closeArr = [1, 6, 0, 21, 0, 0, 152, 14];
    let closeBuff = Buffer.from(closeArr);
    const res2 = await axios.post('/api/write', {
      data: {
        closeBuff,
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
    props: {}, // will be passed to the page componㅌㅈent as props
  };
}

export default Home;
