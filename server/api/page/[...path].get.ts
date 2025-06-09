import editorial from "~/json/editorial";

export default defineEventHandler(async (event) => {
  const pageData = editorial;
  const path: string = getRouterParam(event, "path") ?? "";

  return path && pageData[path] ? pageData[path] : [];
});
