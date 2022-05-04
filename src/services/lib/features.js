/* eslint-disable no-param-reassign */
const paginating = (query, queryString) => {
  // console.log('queryString =', queryString);
  const page = queryString.page * 1 || 1;
  const limit = queryString.limit * 1 || 10;
  const skip = limit * (page - 1);
  query = query.limit(limit).skip(skip);
  // console.log('query =', query);
  return query;
};

const sorting = (query, queryString) => {
  const sort = queryString.sortBy || 'createAt';
  query = query.sort(sort);
  return query;
};

module.exports = {
  paginating,
  sorting,
};
