export const usePageContent = async (slug: string) => {
  const pageContent = useState<typeof data.value | null>(
    "pageContent",
    () => null,
  );

  const { data, error } = await useFetch(`/api/pageContent/${slug}`);
  pageContent.value = data.value;

  return {
    pageContent,
    error,
  };
};
