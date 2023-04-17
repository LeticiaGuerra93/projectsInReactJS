import React, { createContext } from "react";
import { Movie } from "../../types/movie";

const Context = createContext<Movie[] | any>([]);

export default Context;
