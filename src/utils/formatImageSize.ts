function formatImageSize(item?: any, slice?: any, width?: any, height?: any) {
  return `${item}?w=${width || 228}&h=${height || 138}${slice ? "&slice=true" : ""}`;
}

export default formatImageSize;
