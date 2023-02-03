const getDate = () => {
  const date = new Date();
  return date.toLocaleDateString('default', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });
};

export default getDate;
