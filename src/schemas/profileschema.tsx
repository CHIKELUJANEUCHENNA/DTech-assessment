import * as yup from 'yup';

export const profileSchema = yup.object().shape({
  personalInfo: yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: yup.string().required('Phone number is required'),
  }),
  experiences: yup.array().of(
    yup.object().shape({
      role: yup.string().required('Role is required'),
      company: yup.string().required('Company is required'),
      startDate: yup.string().required('Start date is required'),
      endDate: yup.string().required('End date is required'),
    })
  ).required('Experience is required'),
  skills: yup.array().of(
    yup.object().shape({
      name: yup.string().required('Skill name is required'),
    })
  ).required('Skills are required'),
  resume: yup.mixed().required('Resume is required'), // Ensure this matches the type File
});