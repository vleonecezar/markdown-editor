const getDate = () => {
  const date = new Date();
  return date.toLocaleDateString();
};

export default getDate;
