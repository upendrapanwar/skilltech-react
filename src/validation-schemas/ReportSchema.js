import * as yup from 'yup';

export default yup.object().shape({
  start_date: yup.date().required('Start date is required'),
  end_date: yup.date().required('End date is required'),
  report_type: yup.string().required('Report type is required'),

  // start_date: yup.date().nullable(),
  //   end_date: yup.date().nullable(), 
});