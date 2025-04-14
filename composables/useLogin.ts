export const useLogin = () => {
  const isLoggedIn = useState("isLoggedIn", () => {
    return false;
  });

  return {
    isLoggedIn,
  };
};
