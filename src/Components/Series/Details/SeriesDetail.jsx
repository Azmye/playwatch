import { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Navigate, useLocation } from 'react-router-dom';
import ApiConfig from '../../../Api/ApiConfig';
import VideoItem from '../../../Helpers/VideoItem';
import useFetch from '../../../Hooks/useFetch';
import Button from '../../Buttons/Button';
import DetailContentLoading from '../../ContentLoader/DetailContentLoading';
import SeriesContentRatings from './SeriesContentRatings';
import SeriesCredits from './SeriesCredits';
import SeriesRecomm from './SeriesRecomm';

const SeriesDetail = () => {
  const imagePath = ApiConfig.tmdb_originalImage;
  const location = useLocation();
  const pathName = location.pathname;
  const { data: series, isLoading, error } = useFetch(`${pathName}`);
  const [playTrailer, setPlayTrailer] = useState(false);
  const [videoKey, setVideoKey] = useState(null);
  useEffect(() => {
    if (!isLoading) {
      const videoTrailer = series.data.videos.results.find((index) => index.type === 'Trailer');
      if (videoTrailer !== undefined || null) {
        setVideoKey(videoTrailer.key);
      } else {
        setVideoKey(null);
      }
    }
  });
  return (
    <>
      {error && <div>{error.message}</div>}
      {isLoading && <DetailContentLoading />}
      {series && (
        <section id="hero-details" className={`bg-cover bg-no-repeat bg-center lg:bg-top`} style={{ backgroundImage: `url(${imagePath(series.data.backdrop_path)})` }}>
          <div className="bg-gradient-to-t from-slate-900 via-slate-600/30 to-slate-900">
            <div className={`w-11/12 h-fit lg:w-1/2 lg:h-1/2 top-0 bottom-0 left-0 right-0 m-auto z-50 bg-black ${playTrailer ? 'fixed' : 'hidden'}`}>
              <div className="w-full flex justify-between text-white py-1 px-2">
                <h2 className="font-semibold text-lg">{videoKey === null ? 'Trailer not available' : 'Series Trailer'}</h2>
                <Button children={<AiFillCloseCircle size={28} />} className={``} onClick={() => setPlayTrailer(!playTrailer)} title={`Close`} />
              </div>
              <VideoItem videoSource={playTrailer ? `${videoKey}` : ''} />
            </div>
            <div className="container mx-auto lg:pb-20">
              <div className={`flex flex-row pt-20 lg:gap-10 lg:pb-0 lg:py-28 lg:px-4 `}>
                <div className="justify-start w-1/3 hidden lg:flex">
                  <div className="overflow-hidden ">
                    <img src={`${imagePath(series.data.poster_path)}`} alt="" className="max-w-full" />
                  </div>
                </div>
                <div className="px-4 flex flex-col justify-center py-10 gap-5 lg:w-1/2 text-white  md:px-0 lg:bg-none">
                  <h1 className="font-bold text-5xl lg:text-7xl text-white">{series.data.name}</h1>
                  <div>
                    <ul className="flex-row divide-x flex items-center text-base">
                      <li className="px-1 lg:pr-3">{series.data.number_of_seasons} Season</li>
                      <li className="px-1 lg:px-3">
                        <SeriesContentRatings url={`${pathName}/content_ratings`} />
                      </li>
                      <li className="px-1 lg:px-3">{new Date(series.data.first_air_date).getFullYear()}</li>
                    </ul>
                  </div>
                  <div className="text-base">
                    <h3 className="font-bold text-3xl">Genres</h3>
                    <ul className="flex flex-wrap">
                      {series.data.genres.map((genre, id) => (
                        <li key={id}>{(id ? ', ' : '') + genre.name}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-3xl">Starring</h3>
                    <ul className="flex flex-wrap">
                      <SeriesCredits url={`${pathName}/credits`} />
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-3xl">Creator</h3>
                    <ul className="flex flex-wrap">
                      {series.data.created_by.map((creator, id) => (
                        <li className="" key={id}>
                          {(id ? ', ' : '') + creator.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-3xl">Overview</h3>
                    <p className="text-white">{series.data.overview}</p>
                  </div>
                  <div className="flex gap-5 my-5">
                    <Button
                      children={`Where to watch`}
                      variant={`primaryButton`}
                      className={`px-3 py-2`}
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(`${series.data.homepage}`, '_blank');
                      }}
                    />
                    <Button children={`Play Trailer`} variant={`secondaryButton`} className={`px-3 py-2`} onClick={() => setPlayTrailer(!playTrailer)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <SeriesRecomm url={`${pathName}/recommendations`} />
    </>
  );
};

export default SeriesDetail;
