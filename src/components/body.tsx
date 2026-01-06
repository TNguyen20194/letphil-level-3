type CTA = {
  label: string,
  href: string,
  variant?: "primary" | "secondary"
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
  ctas: CTA[],
  bgClass?: string
}
interface TitleProps {
  title: string,
  subtitle: React.ReactNode,
  banner: ImagesInterface,
  ctas: CTA[],
  dark?:boolean
}

function getCtaClass(variant: CTA["variant"] = "primary") {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-2 text-base transition-colors duration-200";

  if(variant === "secondary") {
    return `${base} border border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white`
  }

  return `${base} bg-blue-600 text-white hover:bg-blue-700`
}

function Hero({ title, subtitle, banner, ctas, bgClass }: HeroProps) {
  return (
    <section className={`w-full text-black mb-6 ${bgClass || "bg-[#f5f5f7]"}`}>
      <div className="max-w-[1024px] mx-auto pt-10 text-center">

        <div className="relative z-10">
          <h2 className="text-5xl font-semibold">
            {title}
          </h2>
          <p className="mt-2 text-2xl">
            {subtitle}
          </p>
          <div className="mt-4 flex justify-center gap-3">
            {ctas.map((cta) => (
              <a key={cta.label} href={cta.href} className={getCtaClass(cta.variant)}>
                {cta.label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative z-0 mt-[-120px]">
          <img className="w-full mx-auto max-w-[900px]" src={banner.src} alt={banner.alt} />
        </div>
      </div>
    </section>
  )
};

function Title({ title, subtitle, banner, ctas, dark }: TitleProps) {
  return (
    <article  className={`w-full h-full ${
        dark ? "bg-black text-white" : "bg-[#f5f5f7] text-black"
      }`}>
      <div className="h-[560px] flex flex-col text-center px-6 pt-10">
        <div className="relative z-10">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className={`mt-2 text-xl relative z-10 ${dark ? "text-white/80" : ""}`}>{subtitle}</p>

            <div className="mt-3 flex justify-center gap-6">
              {ctas.map((cta) => (
                <a key={cta.label} href={cta.href} className={getCtaClass(cta.variant)}>{cta.label}</a>
              ))}
            </div>
        </div>

        <div className="mt-5 flex-1 flex items-end justify-center relative z-0 mt-[-120px]">
          <img src={banner.src} alt={banner.alt} className="max-h-full w-auto" />
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
        {label: "Learn more", href: "#", variant:"primary"},
        {label: "Shop Iphone", href: "#", variant:"secondary"},
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
        {label: "Learn more", href: "#", variant:"primary"},
        {label: "Buy", href: "#", variant:"secondary"}
       ]}
       />

       {/* iPad Air */}
       <Hero
       title="iPad air"
       subtitle="Now supercharged by the M3 chip"
       banner={{ src: ipadAirBanner, alt: "iPad air"}}
       ctas={[
        {label: "Learn more", href:"#", variant:"primary"},
        {label: "Buy", href:"#", variant:"secondary"}
       ]}
       bgClass="bg-[radial-gradient(circle_at_top,#cfeaf7_0%,#eaf6fc_40%,#f9fdff_75%)]"
        />

        {/* 2-column section */}
        <section className="w-full">
          <div className="mx-auto px-3 grid grid-cols-1 md:grid-cols-2 gap-3 auto-rows-fr">
            {/* MacBook Pro 14 */}
            <Title
            title="MacBook Pro 14"
            subtitle="Supercharged by M5."
            banner={{ src: macbookPro, alt: "MacBook Pro 14"}}
            dark
            ctas={[
              {label: "Learn more", href:"#", variant:"primary"},
              {label: "Buy", href:"#", variant:"secondary"}
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
              {label: "Learn more", href:"#", variant:"primary"},
              {label: "Buy", href:"#", variant:"secondary"}
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
              {label: "Learn more", href:"#", variant:"primary"},
              {label: "Apply Now", href:"#", variant:"secondary"}
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
              {label: "Learn more", href:"#", variant:"primary"},
              {label: "Try it free", href:"#", variant:"secondary"}
            ]}
            />

          </div>
        </section>

    </main>
  );
}

export default Body;