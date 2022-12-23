import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import SeriesItem from './SeriesItem';

const SeriesSlider = ({ series, onclick }) => {
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
      {series.data.results.map((index, id) => (
        <SwiperSlide key={id} className={'overflow-hidden'}>
          <SeriesItem index={index} onClick={onclick} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SeriesSlider;
