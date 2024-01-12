export function urlPrefixRemover(inputString) {
  if (inputString.startsWith("/r/")) {
    return inputString.slice(3);
  } else {
    return inputString;
  }
}
