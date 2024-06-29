interface PriceCounter {
  price : number;
  discount : number;
  isInstallment : boolean;
  months : number;
}


const totalPrice = ({ price, discount , isInstallment , months } : PriceCounter) => {
  if (isInstallment) {
    return (price - (price * discount) / 100) / months;
  } else {
    return price;
  }
};

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});

console.log(price);
