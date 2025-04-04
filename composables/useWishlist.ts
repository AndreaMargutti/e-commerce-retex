export const useWishlist = () => {
  let wishListItems = useState("wishListNumber", () => []);
  let wishListLength = wishListItems.value.length;

  return {
    wishListLength,
  };
};
