const isPrime = (value: number): boolean => {
  if (value < 2) {
    return false;
  }
  let i = 2;
  while (i < value) {
    if (value % i === 0) {
      return false;
    }
    i++;
  }

  return true;
};

const getPrimesLessThan = (maxValue: number): number[] => {
  const result = [];
  let i = 1;

  while (i <= maxValue) {
    if (isPrime(i)) {
      result.push(i);
    }
    i++;
  }

  return result;
};

const getSumOfArray = (array: number[]): number =>
  array.reduce((result, current) => result + current, 0);

const calculateSumOfPrimesLessThan = (maxValue: number): number =>
  getSumOfArray(getPrimesLessThan(maxValue));

const start: number = new Date().getTime();
console.log(calculateSumOfPrimesLessThan(2000000));
const end: number = new Date().getTime();
console.log(`Proccessing time ${(end - start) / 1000} s`);
