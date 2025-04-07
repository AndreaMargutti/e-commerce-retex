export const useCart = () => {
  const cartItems = useState("cartItems", () => [1, 2, 4, 5, 6]);
  const cartLength = computed(() => cartItems.value.length);

  return {
    cartLength,
  };
};
