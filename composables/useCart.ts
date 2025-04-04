export const useCart = () => {
  let cartItems = useState("cartItems", () => []);
  let cartLength = cartItems.value.length;

  return {
    cartLength,
  };
};
