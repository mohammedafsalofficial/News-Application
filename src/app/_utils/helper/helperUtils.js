export function truncateDescription(description, maxLength = 200) {
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + "...";
  }

  return description;
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return month + "-" + day + "-" + year;
}
