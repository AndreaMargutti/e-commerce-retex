export default defineEventHandler(async (event) => {
  console.log("test success");

  const body = await readBody(event);
  console.log("body", body);
  return {
    data: {
      body,
    },
  };
});
