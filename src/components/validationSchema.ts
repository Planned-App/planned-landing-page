import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    confirmEmail: Yup.string()
        .required('Confirm Email is required')
        .oneOf([Yup.ref('email')], 'Emails must match'), // Ensure it matches the email field correctly
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});
