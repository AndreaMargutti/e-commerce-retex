import type { HeaderLink } from "~/types/headerLinks";

export const useHeaderLinks = () => {
  const { data, execute } = useFetch("/api/mock-data/headerlinks", {
    immediate: false,
    cache: "reload",
  });

  const init = async () => {
    await execute();
  };

  const headerLinks: ComputedRef<HeaderLink[]> = computed(
    () => data.value?.headerLinks || []
  );

  return {
    init,
    headerLinks,
  };
};
