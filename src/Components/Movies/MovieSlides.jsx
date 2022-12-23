import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ApiConfig from '../../Api/ApiConfig';

const MovieSlides = ({ movies, onclick }) => {
  const imagePath = ApiConfig.tmdb_w500Image;
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      modules={[Pagination]}
      className="mySwiper"
      breakpoints={{
        768: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1024: { slidesPerView: 6, spaceBetween: 20 },
      }}
    >
      {movies.data.results.map((index, id) => (
        <SwiperSlide key={id} className={'overflow-hidden'}>
          <Link to={`/movie/${index.id}`} onClick={onclick}>
            <div className="overflow-hidden">
              <img src={imagePath(index.poster_path)} alt={index.title} title={index.title} />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieSlides;
