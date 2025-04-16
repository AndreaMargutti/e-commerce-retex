export const useCart = () => {
  const cartItems = useState("cartItems", () => []);
  const cartLength = computed(() => cartItems.value.length);

  return {
    cartLength,
  };
};
