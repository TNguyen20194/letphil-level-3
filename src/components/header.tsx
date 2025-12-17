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

function Header() {
  return (
    <div>
      <div></div>
      <h1>Hello, World!</h1>
    </div>
  );
}

export default Header;
