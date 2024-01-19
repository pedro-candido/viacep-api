interface IThrowErr {
  zipCode: string;
  addressNumber: string;
}

export const throwErr = ({ zipCode, addressNumber }: IThrowErr) => {
  if (!zipCode || !addressNumber) {
    throw 400;
  }
};
