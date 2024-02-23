export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength) + "...";
  }
}

export const extractDate = (inputString: string) => {
  // Regular expression to match the date pattern
  const dateRegex =
    /(\d{1,2}\s(?:January|February|March|April|May|June|July|August|September|October|November|December)\s\d{4})/;

  // Extracting the date from the input string
  const extractedDate = inputString.match(dateRegex);

  // If the date is found, parse and format it, otherwise return a message
  if (extractedDate) {
    const dateObj = new Date(extractedDate[0]);
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    }).format(dateObj);
    return formattedDate;
  } else {
    return "Date not found";
  }
};

