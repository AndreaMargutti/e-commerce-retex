export const useMenuMobile = () => {
  const isMenuMobileOpen = useState("isMenuMobileOpen", () => false);
  const isSecondLayerOpen = useState("isecondLayerOpen", () => false);

  const toggleMenuMobile = () => {
    isMenuMobileOpen.value = !isMenuMobileOpen.value;
    isSecondLayerOpen.value = false;
  };

  return {
    isMenuMobileOpen,
    toggleMenuMobile,
    isSecondLayerOpen,
  };
};
