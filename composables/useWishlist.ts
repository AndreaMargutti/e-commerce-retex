export const useWishlist = () => {
  let wishListNumber = ref([12, 3, 4, 5]);

  for (let i = 0; i < 99; i++) {
    wishListNumber.value.push(i);
  }

  return {
    wishListNumber,
  };
};
