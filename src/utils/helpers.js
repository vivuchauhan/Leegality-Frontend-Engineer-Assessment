export const getPaginationSkip = (page, limit) => {
  return (page - 1) * limit;
};

export const formatPrice = (price) => {
  return `$${price}`;
};

export const capitalize = (text) => {
  if (!text) return "";

  return text.charAt(0).toUpperCase() + text.slice(1);
};