export const useWishlist = () => {
  const wishlist = useState("wishlist", () => []);

  return {
    wishlist,
  };
};
