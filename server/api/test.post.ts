export default defineEventHandler(async (event) => {
  console.log("test success");

  //TODO: remove this when not needed anymore
  // throw createError({ statusCode: 500, statusMessage: "test error" });

  const body = await readBody(event);
  console.log("body", body);
  return {
    data: {
      body,
    },
  };
});
