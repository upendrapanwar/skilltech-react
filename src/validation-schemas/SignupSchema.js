import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string().required("Name is required").min(2, 'Name is too short - should be 2 chars minimum.').max(80, 'Name is too long - should be 80 chars maximum.'),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required.").min(6, 'Password is too short - should be 6 chars minimum.').max(20, 'Password is too long - should be 20 chars maximum.'),
    confirmPassword: Yup.string().required("Confirm password is required.").oneOf([Yup.ref('password'), null], 'Password must match.'),
    role: Yup.string().required("User Type is required")
})