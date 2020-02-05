export const getItems = () => {
  return fetch('https://rickandmortyapi.com/api/character/?page=1')
    .then(res => res.json())
    .then(results => results.results);
};
