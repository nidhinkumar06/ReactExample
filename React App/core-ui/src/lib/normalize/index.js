export const mobile = (value) =>
   value.replace(/[^\d]/g, '').slice(0, 10)

export const captialize = (value) =>
   value && value.charAt(0).toUpperCase() + value.slice(1)

export const upper = (value) =>
   value && value.toUpperCase();

export const year = (value) =>
   value.replace(/[^\d]/g, '').slice(0, 4)

export const aadhaar = (value) =>
   value.replace(/[^\d]/g, '').slice(0, 12)

export const pan = (value) =>
   value.replace(/[^\w]/g, '').slice(0, 10).toUpperCase()

export const salary = (value) =>
  value.replace(/[^\d]/g, '').slice(0, 7)
