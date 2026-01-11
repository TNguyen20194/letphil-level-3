type FooterLink = {
  label: string,
  href: string,
}

type FooterColumn = {
  title: string,
  links: FooterLink
}

interface FooterProps {

}

function Footer() {
  return (
     <div className="card">
      </div>
  );
}

const footerLinks = [

  {title: "Stop and Learn",
  itsm: ["Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"]
  },
  {title: "Account",
  itsm: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"]
  },
  {title: "Apple Store",
  itsm: ["Find a Store", "Genius Bar", "Today at Apple", "Group Reservations", "Apple Camp", "Apple Store App", "Certified Refurbished", "Apple Trade In", "Financing", "Carrier Deals at Apple", "Order Status", "Shopping Help"]
  },

]

export default Footer;


