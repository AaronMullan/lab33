export const getItems = (pageNumber) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
    .then(res => res.json())
    .then(results => results.results);
};
