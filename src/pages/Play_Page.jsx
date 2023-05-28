import React from "react";
import DefaultLayout from "../layout/Default_layout";
import Poster from "../components/Poster/PosterComponent";
import PlayFilter from "../components/PlayFilter/PlayFilter_Component";

const PlayPage = (props) => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
          <div className="lg:w-3/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">
              Plays in Chandigarh Sector 52
            </h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-karan-singh-magic-not-an-influencer-0-2023-5-24-t-12-16-23.jpg"
                  title="First Aid ft. Vinay Bhatia"
                  subtitle="Comedy Shows | Hindi | 16yrs + | 1hr 10mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2023-5-12-t-4-5-36.jpg"
                  title="First Aid ft. Vinay Bhatia"
                  subtitle="Comedy Shows | Hindi | 16yrs + | 1hr 10mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-first-aid-ft-vinay-bhatia-0-2023-3-16-t-4-56-48.jpg"
                  title="First Aid ft. Vinay Bhatia"
                  subtitle="Comedy Shows | Hindi | 16yrs + | 1hr 10mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-delhi-to-chandigarh-0-2023-5-9-t-12-20-21.jpg"
                  title="First Aid ft. Vinay Bhatia"
                  subtitle="Comedy Shows | Hindi | 16yrs + | 1hr 10mins"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">Filter</h2>
            <div>
              <PlayFilter
                title="Date"
                tags={["Today", "Tommarow", "This Weekend"]}
              />
            </div>
            <div>
              <PlayFilter
                title="Language"
                tags={["Hindi", "English", "Tamil"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout(PlayPage);
