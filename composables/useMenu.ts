export const useMenu = () => {
  const status = ref(false);

  const changeStatus = () => {
    status.value = !status.value;
  };

  return {
    status,
    changeStatus,
  };
};
