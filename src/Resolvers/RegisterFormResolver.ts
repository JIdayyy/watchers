/* eslint-disable no-useless-escape */
import * as yup from "yup";

const registerFormResolver = yup
    .object()
    .shape({
        email: yup
            .string()
            .email("Please enter a valid email")
            .required("Email is required"),

        nickname: yup.string().required("This field is required"),

        confirm_password: yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords must match"),
        password: yup
            .string()
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character",
            )
            .required(),
    })
    .required();

export default registerFormResolver;
