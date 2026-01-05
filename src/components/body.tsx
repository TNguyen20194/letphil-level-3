type CTA = {
  label: string,
  href: string
};

interface ImagesInterface {
    src: string;
    alt: string;
}
interface BodyProps {
  iphoneBanner: string,
  appleWatchBanner: string,
  ipadAirBanner: string,
  
  airpodPro: string,
  appleCard: string,
  fitnessCard: string,
  macbookPro: string,
};
interface HeroProps {
  title: string,
  subtitle: React.ReactNode,
  banner: ImagesInterface,
  ctas: CTA[]
}
interface TitleProps {
  title: string,
  subtitle: React.ReactNode,
  banner: ImagesInterface,
  ctas: CTA[]
}

function Hero({ title, subtitle, banner, ctas }: HeroProps) {
  return (
    <section className="w-full text-black">
      <div className="max-auto py-10 text-center">
        <h2 className="text-5xl font-semibold">
          {title}
        </h2>
        <p className="mt-2 text-2xl">
          {subtitle}
        </p>
        <div className="mt-4 flex justify-center gap-6">
          {ctas.map((cta) => (
            <a key={cta.label} href={cta.href} className="text-sm">
              {cta.label}
            </a>
          ))}
        </div>
        <div className="mt-6">
          <img className="mx-auto" src={banner.src} alt={banner.alt} />
        </div>
      </div>
    </section>
  )
};

function Title({ title, subtitle, banner, ctas }: TitleProps) {
  return (
    <article className="w-full text-black">
      <div className="text-center">

        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 text-1xl">{subtitle}</p>

        <div className="mt-3 flex justify-center gap-6">
          {ctas.map((cta) => (
            <a key={cta.label} href={cta.href} className="text-sm">{cta.label}</a>
          ))}
        </div>

        <div className="mt-5">
          <img src={banner.src} alt={banner.alt} className="max-auto" />
        </div>
      </div>
    </article>
  )
}

function Body({
  iphoneBanner,
  appleWatchBanner,
  ipadAirBanner,
  airpodPro,
  appleCard,
  fitnessCard,
  macbookPro
}:BodyProps) {
  return (
    <main className="w-full">

      {/* Iphone */}
      <Hero
      title="iPhone"
      subtitle="Say hello to the latest generation of Iphone."
      banner={{ src: iphoneBanner, alt: "Iphone"}}
      ctas={[
        {label: "Learn more", href: "#"},
        {label: "Buy", href: "#"},
      ]}
       />

       {/* Watch Series */}
       <Hero
       title="Apple Watch Series 11"
       subtitle={
        <>
        Turn resolutions into routines. <br/>Quit quitting your fitness goals.
        </>
       }
       banner={{ src: appleWatchBanner, alt: "Apple watch series"}}
       ctas={[
        {label: "Learn more", href: "#"},
        {label: "Buy", href: "#"}
       ]}
       />

       {/* iPad Air */}
       <Hero
       title="iPad air"
       subtitle="Now supercharged by the M3 chip"
       banner={{ src: ipadAirBanner, alt: "iPad air"}}
       ctas={[
        {label: "Learn more", href:"#"},
        {label: "Buy", href:"#"}
       ]}
        />

        {/* 2-column section */}
        <section className="w-full">
          <div className="max-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* MacBook Pro 14 */}
            <Title
            title="MacBook Pro 14"
            subtitle="Supercharged by M5."
            banner={{ src: macbookPro, alt: "MacBook Pro 14"}}
            ctas={[
              {label: "Learn more", href:"#"},
              {label: "Buy", href:"#"}
            ]}
            />
            {/* AirPod Pro 3 */}
             <Title
            title="AirPods Pro 3"
            subtitle={
              <>
              The world's best in-ear 
              <br/> Active Noise Cancellation.
              </>
            }
            banner={{ src: airpodPro, alt: "AirPod Pro 3"}}
            ctas={[
              {label: "Learn more", href:"#"},
              {label: "Buy", href:"#"}
            ]}
            />
            {/* Apple Card */}
            <Title
            title="Apple Card"
            subtitle={
              <>
              Get up to 3% Daily Cash back
              <br/> with every purchase.
              </>
            }
            banner={{ src: appleCard, alt: "Apple Card"}}
            ctas={[
              {label: "Learn more", href:"#"},
              {label: "Apply Now", href:"#"}
            ]}
            />
            {/* Fitness Card */}
            <Title
            title="Apple Fitness+"
            subtitle={
              <>
              Start the year strong with guided
              <br/> workouts and meditations.
              </>
            }
            banner={{ src: fitnessCard, alt: "Fitness"}}
            ctas={[
              {label: "Learn more", href:"#"},
              {label: "Try it free", href:"#"}
            ]}
            />

          </div>
        </section>

    </main>
  );
}

export default Body;