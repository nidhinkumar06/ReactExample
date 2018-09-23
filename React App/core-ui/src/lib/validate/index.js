export const required = (value) => (value == null ? 'Required' : undefined);

export const name = (value) =>
  value && (value.length < 3 || value.length > 50)
    ? 'Name length should be 3...50'
    : undefined;

export const year = (value) =>
  value && !/^\d{4}$/i.test(value) ? 'Invalid Year' : undefined;

export const alphaNumberic = (value) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export const passwordLength = min => value =>
  value && value.length < min ? `password must be ${min} characters or more` : undefined
