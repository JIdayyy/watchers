import * as yup from "yup";

const loginFormResolver = yup
    .object()
    .shape({
        email: yup
            .string()
            .email("Please enter a valid email")
            .required("Email is required"),
        password: yup.string().required("password is required"),
    })
    .required();

export default loginFormResolver;
