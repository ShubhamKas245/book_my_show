import React, { useEffect, useState } from "react";
import DefaultLayout from "../layout/Default_layout";
import HeroCarousel from "../components/HeroCarousel/HeroCarouselCard";
import EntertainmentCardSlider from "../Entertainment/EntertainmentCard";
import PosterSlider from "../components/PosterSlider/PosterSliderComponent";
import axios from "axios";

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamingEvents, setOnlineStreamingEvents] = useState([]);

  useEffect(() => {
    const requestpopularMovies = async () => {
      const getpopularMovies = await axios.get(
        "movie/popular"
      );
      setPremierMovies(getpopularMovies.data.results);
    };
    requestpopularMovies();
  }, []);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get(
        "movie/top_rated"
      );
      setRecommendedMovies(getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingdMovies = async () => {
      const getUpcomingMovies = await axios.get(
        "movie/upcoming"
      );
      setOnlineStreamingEvents(getUpcomingMovies.data.results);
    };
    requestUpcomingdMovies();
  }, []);

  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of Recommended Movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>
      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="rupay"
              className="w-full h-full"
            />
          </div>
          <PosterSlider
            title="Premiers"
            subtitle="Brand new releases every friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
        <PosterSlider
          title="Online Streaming Events"
          subtitle=""
          posters={onlineStreamingEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayout(HomePage);
