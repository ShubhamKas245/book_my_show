import React, { useState } from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./ArrowsComponent";

const HeroCarousel = () => {
  const [images, setImages] = useState([
    {
      adult: false,
      backdrop_path: "/nLBRD7UPR6GjmWQp6ASAfCTaWKX.jpg",
      genre_ids: [16, 10751, 12, 14, 35],
      id: 502356,
      original_language: "en",
      original_title: "The Super Mario Bros. Movie",
      overview:
        "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
      popularity: 8374.44,
      poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
      release_date: "2023-04-05",
      title: "The Super Mario Bros. Movie",
      video: false,
      vote_average: 7.7,
      vote_count: 3163,
    },
    {
      adult: false,
      backdrop_path: "/fI5RsaM0NSU6TqztRhA2pal5ezv.jpg",
      genre_ids: [28, 80, 53],
      id: 385687,
      original_language: "en",
      original_title: "Fast X",
      overview:
        "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
      popularity: 6742.222,
      poster_path: "/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
      release_date: "2023-05-17",
      title: "Fast X",
      video: false,
      vote_average: 6.9,
      vote_count: 312,
    },
    {
      adult: false,
      backdrop_path: "/fI5RsaM0NSU6TqztRhA2pal5ezv.jpg",
      genre_ids: [28, 80, 53],
      id: 385687,
      original_language: "en",
      original_title: "Fast X",
      overview:
        "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
      popularity: 6742.222,
      poster_path: "/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
      release_date: "2023-05-17",
      title: "Fast X",
      video: false,
      vote_average: 6.9,
      vote_count: 312,
    },
  ]);

  const settingsLg = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    nextArrow:<NextArrow />,
    prevArrow:<PrevArrow />,
  };

  const settings = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 2,
    nextArrow:<NextArrow />,
    prevArrow:<PrevArrow />,
  };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((images) => (
            <div className="w-full h-56 md:h-80 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-center"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLg}>
          {images.map((images) => (
            <div className="w-full h-96 px-2 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-center"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
