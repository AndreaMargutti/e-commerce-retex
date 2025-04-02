export const useWishlist = () => {
  let wishListNumber = useState("wishListNumber", () => [12, 4, 5]);

  return {
    wishListNumber,
  };
};
