import * as Yup from 'yup';

export default Yup.object().shape({
    firstname: Yup.string().required("First name is required").max(80, 'First name is too long - should be 80 chars maximum.'),
    surname: Yup.string().required("Surname is required").max(80, 'Surname is too long - should be 80 chars maximum.'),
    id_number: Yup.string().required("ID Number is required"),
    email: Yup.string().email().required("Email is required"),
    mobile_number: Yup.string().required("Mobile Number is required"),
    street: Yup.string().required("House or Unit Number is required"),
    street_name: Yup.string().required("Street Number is required"),
    suburb_district: Yup.string().required("Suburb/District is required"),
    town_city: Yup.string().required("Town/City is required"),
    province: Yup.string().required("Province is required"),
    postal_code: Yup.string().required("Postal Code is required").min(4, 'Postal Code is too short').max(10, 'Postal Code is too long'),
    method_of_communication: Yup.array().min(1,'Please choose atleast one.').of(Yup.string().trim().required()),
    race: Yup.string().required("Race is required"),
    gender: Yup.string().required("Gender is required"),
    qualification: Yup.string().required("Qualification is required"),
    opt_in_promotional: Yup.string().required("Field is required"),
    privacy: Yup.string().required("Field is required"),
    deals_promotion: Yup.string().required("Field is required"),
    in_loop: Yup.string().required("Field is required"),
})