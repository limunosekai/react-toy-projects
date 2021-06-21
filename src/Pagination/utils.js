const paginate = (users) => {
  const itemsPerPage = 8;
  const pages = Math.ceil(users.length / itemsPerPage);

  return Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return users.slice(start, start + itemsPerPage);
  });
};

export default paginate;
