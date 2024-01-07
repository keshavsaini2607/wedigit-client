import moment from "moment";


export const validateDateOfBirth = async (_: any, value: string | undefined) => {
  if (value && moment(value).isAfter(moment().subtract(18, 'years'))) {
    throw new Error('You must be at least 18 years old.');
  }
};
