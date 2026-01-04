type Cta = {
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
  subtitle: string,
  banner: ImagesInterface,
  ctas: Cta[]
}

function Hero({ title, subtitle, banner, ctas }: HeroProps) {
  return (
    <section>
      <div>
        {/* Title */}
        <h2></h2>
        {/* Subtitle */}
        <p></p>
        {/* CTAs */}
        <div></div>
        {/* Banner */}
        <div></div>
      </div>
    </section>
  )
} 

function Body() {
  return (
     <div className="card">
       
      </div>
  );
}

export default Body;