export const useWishlist = () => {
  let wishListItems = useState("wishListNumber", () => [12, 4, 5, 6, 7]);
  let wishListLength = wishListItems.value.length;

  return {
    wishListLength,
  };
};
