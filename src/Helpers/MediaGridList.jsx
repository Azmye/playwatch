import MediaSortBy from './MediaSortBy';

const MediaGridList = ({ title, children, changeSortBy, className }) => {
  return (
    <div>
      <div className="flex justify-between text-white pb-5">
        <h2 className="font-semibold text-2xl">{title}</h2>
        <MediaSortBy changeSortBy={changeSortBy} className={className} />
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-5">{children}</div>
    </div>
  );
};

export default MediaGridList;
