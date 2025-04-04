export const useCart = () => {
  let cartItems = useState("cartItems", () => [1, 2]);
  let cartLength = cartItems.value.length;

  return {
    cartLength,
  };
};
