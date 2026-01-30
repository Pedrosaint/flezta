import * as yup from "yup";

// Login validation schema (only email and password)
const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be a valid email.")
    .required("Email is required."),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required."),
});

// Create account validation schema (includes all fields)
const createAccountValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be a valid email.")
    .required("Email is required."),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required."),

  firstName: yup
    .string()
    .trim()
    .matches(/^[A-Za-z\s'-]+$/, "First name should only contain letters")
    .required("First name is required."),

  lastName: yup
    .string()
    .trim()
    .matches(/^[A-Za-z\s'-]+$/, "Last name should only contain letters")
    .required("Last name is required."),

  phoneNumber: yup
    .string()
    .matches(/^[0-9+\-\s()]+$/, "Phone number should only contain numbers")
    .optional(), 

  // userName: yup.string().trim().optional(),
});

export type LoginValidationType = yup.InferType<typeof createAccountValidationSchema>;
export { createAccountValidationSchema };
export default loginValidationSchema;