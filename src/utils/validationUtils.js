export const isValidHex = (value) => {
  let error;
  if (!value) {
    error = 'Required.';
  } else if (!/^#[0-9A-F]{6}$/i.test(value)) {
    error = 'Invalid hex format.';
  }
  return error;
}

export const isValidLink = value => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/i.test(value)) {
    error = 'Invalid link.';
  }
  return error;
}

export const isValidLength = value => {
  let error
  if (!value) {
    error = 'Required.'
  } else if (value.length < 5 || value.length > 80) {
    error = 'Lenght must be between 5 and 80 characters.'
  }
  return error
}