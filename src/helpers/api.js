// const key = process.env.API_KEY;

export default class Api {
  static key = "ebea8cfca72fdff8d2624ad7bbf78e4c";

  static url = `http://api.themoviedb.org`;

  static imageUrl = `https://image.tmdb.org/t/p/original/`;

  static getMovies(page = 1) {
    return new Promise(async (res, rej) => {
      const result = await fetch(
        `${Api.url}/3/movie/now_playing?api_key=${Api.key}&language=en-US&page=${page}`
      );

      if (result.status === 200) res(await result.json());
      else {
        rej(await result.text());
      }
    });
  }

  static getDetails(id) {
    return new Promise(async (res, rej) => {
      const result = await fetch(
        `${Api.url}/3/movie/${id}?api_key=${Api.key}&language=en-US`
      );

      if (result.status === 200) res(await result.json());
      else {
        rej(await result.text());
      }
    });
  }
}
