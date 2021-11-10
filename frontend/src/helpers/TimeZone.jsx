import moment from "moment-timezone";

export const shiftUserDateToTimezoneDate = (userDate, timezone) => {
  let pickerOffset = moment(userDate).utcOffset();
  let utcDate = new Date();
  utcDate.setTime(moment(userDate).valueOf() + pickerOffset * 60000);

  let tzOffset = moment.tz(userDate, timezone).utcOffset();
  let tzDate = new Date();
  tzDate.setTime(utcDate.getTime() - tzOffset * 60000);
  
  return tzDate;
};

export const shiftTimezoneDateToUserDate = (tzDate, timezone) => {
    let tzUtcOffset = moment.tz(tzDate, timezone).utcOffset();
  let utcDate = new Date();
  utcDate.setTime(moment(tzDate).valueOf() + tzUtcOffset * 60000);

  let pickerDate = new Date();
  let pickerOffset = pickerDate.getTimezoneOffset();
  pickerDate.setTime(utcDate.getTime() + pickerOffset * 60000);

  return pickerDate;
};

//export default { shiftUserDateToTimezoneDate, shiftTimezoneDateToUserDate };