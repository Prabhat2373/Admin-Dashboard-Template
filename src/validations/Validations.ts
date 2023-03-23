import * as Yup from 'yup';

export const ProfileFormValidationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    contact: Yup.string().required(),
    address: Yup.string().required(),
    country: Yup.string().required(),
    state: Yup.string().required(),
})