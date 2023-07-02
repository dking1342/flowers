import { FlowerSize } from '../types/flowers';

export const findMinMax = (arr: FlowerSize[]) => {
  if (arr.length > 1) {
    let min = arr[0].price;
    let max = arr[0].price;

    for (let index = 0; index < arr.length; index++) {
      let v = arr[index].price;
      min = v < min ? v : min;
      max = v > max ? v : max;
    }

    return `$${min}-$${max}`;
  } else {
    return `$${arr[0].price}`;
  }
};

export const getDeliveryDay = (delivery: number) => {
  let day = (new Date().getDay() + delivery) % 7;

  switch (day) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';

    default:
      return '';
  }
};
