export const useHeaderLinks = () => {
  const { data, execute } = useFetch("/api/headerlinks", {
    immediate: false,
  });

  const headerLinks = data.value?.headerLinks || [];

  const init = async () => {
    await execute();
  };

  return {
    init,
    headerLinks,
  };
};
