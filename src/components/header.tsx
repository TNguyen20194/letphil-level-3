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
    <header className="w-full">
        <nav className="max-w-[1024px] mx-auto h-12 px-5.5">
            <ul className="flex items-center justify-between h-full">
                {/* Apple Logo */}
                 <li className="flex items-center">
                    <img
                    className="w-5 h-5 cursor-pointer"
                    src={images.logo.src}
                    alt={images.logo.alt}
                    />
                </li>

                {/* Nav links */}
                 {navLinks.map((link) => (
                    <li key={link.link}>
                    <a
                        href={link.href}
                        className="text-[12px] font-normal px-2 py-2 text-black/80 hover:text-black"
                    >
                        {link.link}
                    </a>
                    </li>
                ))}

                 {/* Search icon */}
                <li className="flex items-center">
                    <img
                    className="w-4 h-4 cursor-pointer"
                    src={images.search.src}
                    alt={images.search.alt}
                    />
                </li>

                {/* Bag icon */}
                <li className="flex items-center">
                    <img
                    className="w-4 h-4 cursor-pointer"
                    src={images.bag.src}
                    alt={images.bag.alt}
                    />
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
