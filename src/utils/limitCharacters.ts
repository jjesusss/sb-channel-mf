function limitCharacters(text: string, num: number) {
  if (num === 0) {
    return text;
  }

  if (text && num) {
    return text?.length > num ? `${text.substring(0, num - 1)}...` : text;
  }

  return "";
}
export default limitCharacters;
