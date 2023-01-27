import { GET } from "./api.js";
import { qS, tvCardGen } from "./utils.js";

const topRatedEl = qS(".top-rated");
const mostPopularEl = qS(".most-popular");
const airingEl = qS(".airing_today");

Promise.all([
  GET("tv", "top_rated"),
  GET("tv", "popular"),
  GET("tv", "airing_today"),
]).then((data) => {
  data[0].results.map((tvserie) => topRatedEl.append(tvCardGen(tvserie)));
  data[1].results.map((tvserie) => mostPopularEl.append(tvCardGen(tvserie)));
  data[2].results.map((tvserie) => airingEl.append(tvCardGen(tvserie)));
});
