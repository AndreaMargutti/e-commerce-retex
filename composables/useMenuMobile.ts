export const useMenuMobile = () => {
  const isMenuMobileOpen = useState("isMenuMobileOpen", () => false);
  const toggleMenuMobile = () => {
    isMenuMobileOpen.value = !isMenuMobileOpen.value;
  };

  return {
    isMenuMobileOpen,
    toggleMenuMobile,
  };
};
