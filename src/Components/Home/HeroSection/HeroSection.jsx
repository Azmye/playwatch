const HeroSection = () => {
  const desktopBackground = `bg-hero-pattern bg-cover bg-no-repeat bg-center lg:bg-top`;
  return (
    <section id="hero" className={`${desktopBackground}`}>
      <div className="bg-gradient-to-t from-slate-900 ">
        <div className="lg:container mx-auto lg:pb-20">
          <div className={`flex flex-col pt-20  lg:pb-0 lg:py-52 lg:px-4 `}>
            <div className="px-4 flex flex-col justify-center py-10 gap-5 lg:w-1/2 text-white/80 bg-gradient-to-t from-slate-900  md:px-0 lg:bg-none">
              <h2 className="font-bold text-3xl lg:text-6xl text-white/80">Welcome to.</h2>
              <h1 className="font-bold text-5xl lg:text-8xl text-white">PlayWatch</h1>
              {/* <div>
                <ul className="flex-row divide-x flex items-center text-xs lg:text-base">
                  <li className="px-1 lg:px-3">1 Season</li>
                  <li className="px-1 lg:px-3">TV-14</li>
                  <li className="px-1 lg:px-3">2022</li>
                  <li className="px-1 lg:px-3">Sci-Fi & Fantasy, Mystery, Comedy</li>
                </ul>
              </div>
              <p className="text-white lg:text-white/80">
                Wednesday Addams is sent to Nevermore Academy, a bizarre boarding school where she attempts to master her psychic powers, stop a monstrous killing spree of the town citizens, and solve the supernatural mystery that affected
                her family 25 years ago — all while navigating her new relationships.
              </p>
              <div className="flex gap-5 my-5">
                <Button children={`Where to watch`} variant={`primaryButton`} className={`px-3 py-2`} />
                <Button children={`Play Trailer`} variant={`secondaryButton`} className={`px-3 py-2`} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
