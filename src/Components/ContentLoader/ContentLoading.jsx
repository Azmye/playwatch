const ContentLoading = ({ count }) => {
  return (
    <>
      {Array(count)
        .fill()
        .map((index, id) => (
          <div className={`animate-pulse w-[112px] h-[169px] lg:w-[284.812px] lg:h-[427.219px] bg-slate-500`} key={id}></div>
        ))}
    </>
  );
};

export default ContentLoading;
