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
