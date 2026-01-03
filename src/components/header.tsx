interface ImagesInterface {
    src: string;
    alt: string;
}

interface HeaderProps {
    navLinks: {
        link: string;
        href: string;
    }[];
    images: {
        logo: ImagesInterface;
        search: ImagesInterface;
        bag: ImagesInterface;
    }
}

// props: {
//     navLinks:,
//     images: ,
// }

function Header({navLinks, images}: HeaderProps) {
  return (
    <header className="">
        <div className="max-w[1264px] flex items-center">
            {/* Left Logo */}
            <div className="flex justify-start">
                <img className="cursor-pointer" src={images.logo.src} alt={images.logo.alt} />
            </div>
            <div className="flex flex-1 justify-center">
                {/* Center Navigation */}
                <nav className="inline-flex justify-evenly">
                {navLinks.map((link) => (
                    <a href={link.href}>{link.link}</a>
                ))}
            </nav>
            </div>
            <div>
                {/* Right Icons */}
                <img className="cursor-pointer" src={images.search.src} alt={images.search.alt} />
                <img className="cursor-pointer" src={images.bag.src} alt={images.bag.alt} />
            </div>
        </div>
    </header>
  );
}

export default Header;