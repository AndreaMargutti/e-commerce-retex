export const useMenuMobile = () => {
  const isMenuMobileOpen = useState("isMenuMobileOpen", () => false);
  const isSecondLayerOpen = useState("isecondLayerOpen", () => false);
  const router = useRouter();

  const toggleMenuMobile = () => {
    isMenuMobileOpen.value = !isMenuMobileOpen.value;
    isSecondLayerOpen.value = false;
  };

  router.afterEach(() => {
    isMenuMobileOpen.value = false;
  });

  return {
    isMenuMobileOpen,
    toggleMenuMobile,
    isSecondLayerOpen,
  };
};
