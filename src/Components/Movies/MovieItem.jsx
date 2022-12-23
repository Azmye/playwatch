import { Link } from 'react-router-dom';
import ApiConfig from '../../Api/ApiConfig';

const MovieItem = ({ movies, onclick }) => {
  const imagePath = ApiConfig.tmdb_w500Image;
  return (
    <>
      {movies.data.results.map((index, id) => (
        <div key={id}>
          <Link to={`/movie/${index.id}`} onClick={onclick}>
            <div className="overflow-hidden">
              <img src={imagePath(index.poster_path)} alt={index.title} title={index.title} />
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default MovieItem;
