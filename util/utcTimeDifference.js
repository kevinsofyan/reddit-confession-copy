import moment from "moment";

export function formatTimeDifference(createdUtcTimestamp) {
  const createdMoment = moment.unix(createdUtcTimestamp);
  const currentMoment = moment();
  const duration = moment.duration(currentMoment.diff(createdMoment));

  const years = Math.floor(duration.asYears());
  const months = Math.floor(duration.asMonths());
  const weeks = Math.floor(duration.asWeeks());
  const days = Math.floor(duration.asDays());
  const hours = Math.floor(duration.asHours());

  if (years >= 1) {
    return `${years} ${years === 1 ? "year" : "years"}`;
  } else if (months >= 1) {
    return `${months} ${months === 1 ? "month" : "months"}`;
  } else if (weeks >= 1) {
    return `${weeks} ${weeks === 1 ? "week" : "weeks"}`;
  } else if (days >= 1) {
    return `${days} ${days === 1 ? "day" : "days"}`;
  } else if (hours >= 1) {
    return `${hours} ${hours === 1 ? "hour" : "hours"}`;
  } else {
    return "Less than an hour";
  }
}
