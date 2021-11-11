import moment from "moment-timezone";

export const getUserTimezone = () => {
  return moment.tz.guess();
};

export const getUserDateFromUtc = (dateUtc,timezone) => {
  const userDate = moment.tz(dateUtc,timezone);
  //return moment(userDate).format("YYYY-MM-DD HH:mm");
  return moment(userDate).format("MMM Do YYYY, h:mm a");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getUserTimezone, getUserDateFromUtc };