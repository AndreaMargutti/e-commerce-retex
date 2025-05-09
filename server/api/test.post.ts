import { validateEmail } from "~/utils";

export default defineEventHandler(async (event) => {
  console.log("test success");

  //TODO: remove this when not needed anymore
  // throw createError({ statusCode: 500, statusMessage: "test error" });
  const body = await readBody(event);

  if (validateEmail(body.email)) {
    console.log("body", body);
  } else {
    console.log("invalid email");
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid email",
    });
  }
});
