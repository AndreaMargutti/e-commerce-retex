export const useWishlist = () => {
  let wishListItems = useState("wishListNumber", () => []);
  let wishListLength = computed(() => wishListItems.value.length);

  return {
    wishListLength,
  };
};
