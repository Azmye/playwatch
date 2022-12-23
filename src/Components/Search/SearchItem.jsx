import { Link } from 'react-router-dom';
import ApiConfig from '../../Api/ApiConfig';

const SearchItem = ({ media, onclick }) => {
  const imagePath = ApiConfig.tmdb_w500Image;
  return (
    <>
      {media.data.results
        .filter((media) => media.media_type != 'person')
        .map((index, id) => (
          <div key={id}>
            <Link to={index.media_type === 'tv' ? `/tv/${index.id}` : `/movie/${index.id}`} onClick={onclick}>
              <div className="flex flex-col lg:flex-row lg:gap-5 bg-gradient-to-b lg:bg-gradient-to-r from-slate-700 via-slate-700 to-slate-900/0">
                <div className="overflow-hidden lg:w-1/4">
                  <img src={imagePath(index.poster_path)} alt="" className="max-w-full" />
                </div>
                <div className="px-4 flex flex-col justify-start py-10 gap-5 lg:w-1/2 text-white/80 bg-gradient-to-t from-slate-900  md:px-0  lg:bg-none">
                  <h1 className="font-bold text-4xl lg:text-7xl text-white">{index.title || index.name}</h1>
                  <p>{new Date(index.first_air_date || index.release_date).getFullYear() || '-'}</p>
                  <p className="text-white lg:text-white/80">{index.overview}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
};

export default SearchItem;
