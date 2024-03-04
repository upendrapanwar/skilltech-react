import * as Yup from 'yup';

export default Yup.object().shape({
    firstname: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid First name').required("First name is required").max(80, 'First name is too long - should be 80 chars maximum.'),
    surname: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid Surname').required("Surname is required").max(80, 'Surname is too long - should be 80 chars maximum.'),
    id_number: Yup.number().typeError('Please enter valid ID Number').required("ID Number is required"),
    email: Yup.string().email().required("Email is required"),
    mobile_number: Yup.number().typeError('Please enter valid Mobile Number').required("Mobile Number is required"),
    street: Yup.string().required("House or Unit Number is required"),
    street_name: Yup.string().required("Street Number is required"),
    suburb_district: Yup.string().required("Suburb/District is required"),
    town_city: Yup.string().required("Town/City is required"),
    province: Yup.string().required("Province is required"),
    postal_code: Yup.number().typeError('Please enter valid Postal Code').required("Postal Code is required").min(4, 'Postal Code is too short').max(99999, 'Postal Code is too long'),
    method_of_communication: Yup.array().min(1,'Please choose atleast one.').of(Yup.string().required()),
    how_did_you_hear_about_us: Yup.array().min(1,'Please choose atleast one.').of(Yup.string().required()),
    race: Yup.string().required("Race is required"),
    gender: Yup.string().required("Gender is required"),
    qualification: Yup.string().required("Qualification is required"),
    opt_in_promotional: Yup.string().required("Field is required"),
    privacy: Yup.boolean().oneOf([true],"Field is required"),
    ecommercePolicy: Yup.boolean().oneOf([true],"Field is required"),
    deals_promotion: Yup.string().required("Field is required"),
    in_loop: Yup.string().required("Field is required"),

})