import ModbusRTU from 'modbus-serial';

export const client = new ModbusRTU();

export const readModbus = () => {
  // read the 2 registers starting at address 5
  // on device number 1.
  client.readHoldingRegisters(5, 2).then((res) => {
    console.log(res.data);
    console.log(res.buffer);
  });
};

export const writeModbus = () => {
  client.setID(1);

  // setInterval(function () {
  //   client.readHoldingRegisters(0, 10).then((value: ReadRegisterResult) => {
  //     console.log(value.buffer);
  //     console.log(value.data);
  //   });
  // }, 1000);
  // write the values 0, 0xffff to registers starting at address 5
  // on device number 1.
  client.writeRegisters(5, [0, 0xffff]).then((value) => {
    console.log({ value });
  });
};

// open connection to a serial port
