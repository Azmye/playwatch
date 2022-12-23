import { Link } from 'react-router-dom';
import ApiConfig from '../../Api/ApiConfig';

const SeriesItem = ({ index, id, onClick }) => {
  const image_path = ApiConfig.tmdb_w500Image;
  return (
    <>
      <Link to={`/tv/${index.id}`} onClick={onClick}>
        <div>
          <div className="overflow-hidden">
            <img src={`${image_path(index.poster_path)}`} alt={index.name} title={index.name} />
          </div>
        </div>
      </Link>
    </>
  );
};

export default SeriesItem;
