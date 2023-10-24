import api from "../api";

function getMovies() {
  return async (dispatch) => {
    const popularMovieApi = await api.get(
      `/movie/popular?<<dd50902a24371d16a1e51327d2e461a9>>&language=en-US&page=1`
    );

    // let url = `/movie/popular?<<dd50902a24371d16a1e51327d2e461a9>>&language=en-US&page=1`;
    // let response = await fetch(url);
    // let data = await response.json();

    // let url2 = `/movie/top_rated?<dd50902a24371d16a1e51327d2e461a9>>&language=en-US&page=1`;
    // let response2 = await fetch(url);

    // let url3 = `/movie/upcoming?<<dd50902a24371d16a1e51327d2e461a9>>&language=en-US&page=1`;
    // let res = await fetch(url3);
  };
}

export const movieAction = {
  getMovies,
};
