import * as yup from "yup";

const registerFormResolver = yup
    .object()
    .shape({
        email: yup
            .string()
            .email("Please enter a valid email")
            .required("Email is required"),

        nickname: yup.string().required("This field is required"),

        confirm_password: yup.string().required("This field is required"),

        password: yup.string().required("password is required"),
    })
    .required();

export default registerFormResolver;
