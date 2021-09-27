import httpService from "./httpService";

const apiEndpoint = "/movies";

function movieUrl(movieId) {
  return `${apiEndpoint}/${movieId}`;
}

export function getMovies() {
  return httpService.get(apiEndpoint);
}

export function getMovie(movieId) {
  return httpService.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;

    return httpService.put(movieUrl(movie._id), body);
  }

  return httpService.post(apiEndpoint, movie);
}

export function deleteMovie(movieId) {
  return httpService.delete(movieUrl(movieId));
}
