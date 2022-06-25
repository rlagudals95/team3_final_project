export const phoneNumberFormatter = (nationalCode, phoneNumber) => {

  if (phoneNumber.toString().substr(0, 1) === "0") {
    phoneNumber =  phoneNumber.substr(1);
  }

  return nationalCode + phoneNumber;
};


export const emailFormatter = (email, emailDomain) => {

  if (emailDomain.substr(0, 1) !== "@") {
    emailDomain = "@" + emailDomain;
  }

  return email + emailDomain;
};