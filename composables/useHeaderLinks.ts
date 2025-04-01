export const useHeaderLinks = () => {
  const { data, execute } = useFetch("/api/headerlinks", {
    immediate: false,
    cache: "reload",
  });

  const init = async () => {
    await execute();
  };

  const headerLinks = computed(() => data.value?.headerLinks || []);

  return {
    init,
    headerLinks,
  };
};
