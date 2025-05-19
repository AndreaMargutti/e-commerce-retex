export const useWishlist = () => {
  const wishListItems = useState("wishListNumber", () => []);
  const wishListLength = computed(() => wishListItems.value.length);

  return {
    wishListLength,
  };
};
