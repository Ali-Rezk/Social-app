import * as z from "zod";

export const RegisterSchema = z
  .object({
    name: z
      .string()
      .nonempty("this field is required")
      .min(2, "min length is 2 char")
      .max(10, "max length is 10 char"),
    email: z
      .string()
      .nonempty("this field is required")
      .email("not valid email"),
    password: z
      .string()
      .nonempty("this field is required")
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/),
    rePassword: z.string(),
    gender: z.enum(["male", "female"]),
    dateOfBirth: z.coerce.string(),
  })
  .refine((data) => data.password === data.rePassword, {
    path: ["rePassword"],
    message: "doesn't match",
  });
