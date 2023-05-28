import React, { createContext, useState } from "react";

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const [movie, setMovie] = useState({
    id: 0,
    original_title: "",
    overview: "",
    backdrop_path: "",
    poster_path: "",
  });

  const buyMovie=()=>{
    setIsOpen(true);
    setPrice(599)
  }
  const rentMovie=()=>{
    setIsOpen(true);
    setPrice(149)
  }


  return (
    <MovieContext.Provider value={{ movie, setMovie, isOpen,setIsOpen,price,buyMovie,rentMovie,setPrice }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
