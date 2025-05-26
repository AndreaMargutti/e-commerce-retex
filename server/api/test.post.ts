import validateEmail from "~/utils/validateEmail";

export default defineEventHandler(async (event) => {
  // throw createError({ statusCode: 501, statusMessage: "Test error" });

  const body = await readBody(event);

  if (validateEmail(body.email)) {
    return {
      statusCode: 200,
      statusMessage: "success",
      body: body,
    };
  } else {
    console.log("invalid email");
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid email",
    });
  }
});
