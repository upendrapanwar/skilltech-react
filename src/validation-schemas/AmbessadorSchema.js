import * as Yup from 'yup';

export default Yup.object().shape({
    //firstname: Yup.string().required("First name is required").max(80, 'First name is too long - should be 80 chars maximum.'),
    //surname: Yup.string().required("Surname is required").max(80, 'Surname is too long - should be 80 chars maximum.'),
    //id_number: Yup.string().required("ID Number is required"),
    //email: Yup.string().email().required("Email is required"),
    //mobile_number: Yup.string().required("Mobile Number is required"),
    //alternate_mobile_number: Yup.string().required("Alternate Mobile Number is required"),
    
    //account_holder_title: Yup.string().required("Account holder title is required"),
    account_holder_name: Yup.string().required("Account Holder Name is required"),
    //account_holder_surname: Yup.string().required("Account Holder Surname is required"),
    bank: Yup.string().required("Bank name is required"),
    branch: Yup.string(),
    branch_code: Yup.string().required("Branch code is required"),
    type_of_account: Yup.string().required("Type of account is required"),
    account_number: Yup.string().required("Account number is required"),
    //referredby: Yup.string().required("Field is required"),
    //referredby_firstname: Yup.string().required("Field is required"),
    //referredby_surname: Yup.string().required("Field is required"),
    // referral_code: Yup.string().required("Field is required"),
    //referredby_email: Yup.string().email().required("Field is required"),
    //referredby_mobile_number: Yup.string().required("Field is required"),
    refer_friend: Yup.array().min(1,'Please choose atleast one.').of(Yup.string().trim().required()),
    certificate: Yup.string().required("Certificate copy is required"),
    bank_proof: Yup.string().required("Bank Proof is required"),
    confirm_details: Yup.boolean().required('Confirm Details is required'),
    //terms_n_condition: Yup.boolean().required('Terms and condition is required'),
    update_information: Yup.boolean().required('Update information is required'),
    //center_to_assist: Yup.string().required("Field is required"),
    //pop: Yup.string().required("Field is required"),
    //signature: Yup.string().required("Field is required"),
    //signed_place: Yup.string().required("Field is required"),
    //signed_on: Yup.string().required("Field is required")
    
})