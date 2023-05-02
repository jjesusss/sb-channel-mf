export default function validateImageUrl(item: string) {
  if (typeof item === "string" && !item.includes("https://static.s4bdigital.net/")) {
    return `https://static.s4bdigital.net/logos_empresas/${item}`;
  }
  return item;
}
