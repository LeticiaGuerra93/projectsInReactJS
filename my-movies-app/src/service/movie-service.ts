import http from "../common/http-common";
import { Movie } from "../types/movie";

class MovieService {
  get(name: string, year: string) {
    return http.get<Movie>(`?apikey=68b7a486&type=movie&s=${name}&y=${year}`);
  }

  getId(id: string) {
    return http.get<Movie>(`?apikey=68b7a486&type=movie&i=${id}`);
  }
}

export default new MovieService;
