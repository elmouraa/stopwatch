type Props = {
  minutes: number;
  seconds: number;
};

export const Time = ({ minutes, seconds }: Props) => {
  const time = `${padZeroes(minutes, 2)}:${padZeroes(seconds, 2)}`;

  return <p className="text-white text-9xl">{time}</p>;
};

const padZeroes = (num: number, length: number) => {
  return num.toString().padStart(length, "0");
};
