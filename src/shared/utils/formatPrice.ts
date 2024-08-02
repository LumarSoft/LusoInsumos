export const formatPrice = (price: string = "") => {
  if (Number(price) === 0) {
    return "Consultar";
  } else {
    const priceStr = Math.floor(Number(price)).toString();
    return priceStr.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
};
