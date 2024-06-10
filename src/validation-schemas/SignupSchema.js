import * as Yup from 'yup';

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{12,}$/;

export default Yup.object().shape({
    firstname: Yup.string().required("First name is required").max(80, 'First name is too long - should be 80 chars maximum.'),
    surname: Yup.string().required("Last name is required").max(80, 'Last name is too long - should be 80 chars maximum.'),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
        .required("Password is required.")
        .matches(passwordRules, {
            message: "Password must contain at least 12 characters, one uppercase, one lowercase, one number and one special character.",
        })
        .max(20, 'Password is too long - should be 20 chars maximum.'),
    confirmPassword: Yup.string()
        .required("Confirm password is required.")
        .oneOf([Yup.ref('password'), null], 'Passwords must match.'),
});
