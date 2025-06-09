import editorial from "~/json/editorial";

export default defineEventHandler(async (event) => {
  const path = getRouterParam(event, "path") as string;

  const pageData = editorial.data;

  return pageData[path as keyof typeof pageData];
});
