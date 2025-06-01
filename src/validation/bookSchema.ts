import * as Yup from 'yup';

export const bookValidationSchema = Yup.object({
    title: Yup.string()
    .required('Enter the title')
    .min(5, 'Min 5 simbols'),

    author: Yup.string()
    .required('Enter author')
    .min(10, 'Min 10 symbols'),
  
    description: Yup.string()
    .required('Enter discription')
    .min(20, 'Min 20 simbols'),
});
