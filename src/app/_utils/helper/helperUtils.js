export function truncateDescription(description, maxLength = 200) {
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + "...";
  }

  return description;
}
