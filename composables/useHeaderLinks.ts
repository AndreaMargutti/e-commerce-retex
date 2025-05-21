export const useHeaderLinks = () => {
  const { data, execute } = useFetch("/api/mock-data/menu", {
    immediate: false,
    cache: "reload",
  });

  const init = async () => {
    await execute();
  };

  const menuItems: ComputedRef<MenuItem[]> = computed(
    () => data.value?.items || []
  );

  return {
    init,
    menuItems,
  };
};
