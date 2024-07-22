import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import ContentLoading from "../../ContentLoader/ContentLoading";
import SlideContent from "../../ContentLoader/SlideContent";
import SeriesSlider from "../../Series/SeriesSlider";

const SeriesSection = () => {
  const { data: series, isLoading, error } = useFetch("/discover/tv");
  const scrollTo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section id="tv">
      <div className="px-4 py-20 mx-auto container">
        <div className="pb-5 flex justify-between text-white">
          <h2 className="font-semibold text-2xl">TV Shows</h2>
          <nav>
            <Link onClick={scrollTo} to={"/tv"}>
              View All
            </Link>
          </nav>
        </div>
        <div>
          {error && <div>{error}</div>}
          {isLoading && <SlideContent />}
          {series && <SeriesSlider series={series} />}
        </div>
      </div>
    </section>
  );
};

export default SeriesSection;
