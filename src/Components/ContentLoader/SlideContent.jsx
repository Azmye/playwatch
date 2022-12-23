import ContentLoading from './ContentLoading';

const SlideContent = () => {
  return (
    <div className=" gap-3 overflow-hidden ">
      <div className="inline-flex gap-5">
        <ContentLoading count={5} />
      </div>
    </div>
  );
};

export default SlideContent;
