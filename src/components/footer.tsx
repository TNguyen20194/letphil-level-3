type FooterLink = {
  label: string,
  href: string,
};

type FooterGroup = {
  title: string,
  links: FooterLink[]
};

type FooterColumn = {
  groups : FooterGroup[]
};

type Term = {
 text: string,
 href?: string
}

type TermLine = Term[]

const footnotes: TermLine[] = [
  [
    {text: "1. Offer available to new subscribers who purchase an eligible device. $9.99/month after trial. Only one offer per Apple Account and only one offer per family if you’re part of a Family Sharing group, regardless of the number of devices you or your family purchase. This offer is not available if you or your family have previously subscribed to Apple Fitness+. Offer good for three months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply."}
  ],
  [
    {
      text: "Apple Fitness+ requires a subscription and compatible hardware and software. See ",
    },
    {
      text: "here", href: "#"
    },
    {
      text:" for compatibility details."
    }
  ],
  [
    { text: "To get the newest features, make sure your devices are running the latest software version.",
    }
  ],
  [
    {
      text: "2. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores and may vary between in‑store and online trade‑in. Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel, or limit quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade-in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply."
    }
  ],
  [
    {
      text: "To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch."
    }
  ],
  [
    {
      text: "Apple Payments Services LLC, a subsidiary of Apple Inc., is a service provider of Goldman Sachs Bank USA for Apple Card and Savings accounts. Neither Apple Inc. nor Apple Payments Services LLC is a bank."
    }
  ],
  [
    {
      text: "If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card."
    }
  ],
  [
    {
      text: "Learn more about how Apple Card applications are evaluated at ",
    },
    {
      text: "support.apple.com/kb/HT209218.",
      href: "#"
    }
  ],
  [
    {
      text: "A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV."
    }
  ],
  [
    {
      text: "Features are subject to change. Some features, applications, and services may not be available in all regions or all languages."
    }
  ],
];


const columns:FooterColumn[] = [
  {
    groups: [
      {
         title: "Stop and Learn",
         links: [
          {label: "Store", href: "#"},
          {label: "Mac", href: "#"},
          {label: "iPad", href: "#"},
          {label: "iPhone", href: "#"},
          {label: "Watch", href: "#"},
          {label: "Vision", href: "#"},
          {label: "AirPods", href: "#"},
          {label: "TV & Home", href: "#"},
          {label: "AirTag", href: "#"},
          {label: "Accessories", href: "#"},
          {label: "Gift Cards", href: "#"},
        ],
      },
      {
         title: "Apple Wallet",
         links: [
          {label: "Wallet", href: "#"},
          {label: "Apple Card", href: "#"},
          {label: "Apple Pay", href: "#"},
          {label: "Apple Cash", href: "#"},
        ]
      },
    ]
  },
  {
    groups: [
      {
         title: "Account",
         links: [
          {label: "Manage Your Apple Account", href: "#"},
          {label: "Apple Store Account", href: "#"},
          {label: "iCloud.com", href: "#"},
        ],
      },
      {
         title: "Entertainment",
         links: [
          {label: "Apple One", href: "#"},
          {label: "Apple tV", href: "#"},
          {label: "Apple Music", href: "#"},
          {label: "Apple Arcade", href: "#"},
          {label: "Apple Fitness+", href: "#"},
          {label: "Apple News+", href: "#"},
          {label: "Apple Podcasts", href: "#"},
          {label: "Apple Books", href: "#"},
          {label: "Apple Store", href: "#"},
        ]
      },
    ]
  },
  {
    groups: [
      {
         title: "Apple Store",
         links: [
          {label: "Find a Store", href: "#"},
          {label: "Genius Bar", href: "#"},
          {label: "Group Reservations", href: "#"},
          {label: "Apple Camp", href: "#"},
          {label: "Apple Store App", href: "#"},
          {label: "Certified Refurbished", href: "#"},
          {label: "Apple Trade In", href: "#"},
          {label: "Financing", href: "#"},
          {label: "Carrier Deals at Apple", href: "#"},
          {label: "Order Status", href: "#"},
          {label: "Shopping Help", href: "#"},
        ],
      },
    ]
  },
  {
    groups: [
      {
         title: "For Business",
         links: [
          {label: "Apple and Business", href: "#"},
          {label: "Shop for Business", href: "#"},
        ],
      },
      {
         title: "For Education",
         links: [
          {label: "Apple and Education", href: "#"},
          {label: "Shop for K-12", href: "#"},
          {label: "Shop for College", href: "#"},
        ],
      },
      {
         title: "For Healthcare",
         links: [
          {label: "Apple and Healthcare", href: "#"},
          {label: "Shop for Business", href: "#"},
        ],
      },
      {
         title: "For Government",
         links: [
          {label: "Apple and Government", href: "#"},
          {label: "Shop for Veterans and Military", href: "#"},
          {label: "Shop for State and Local Employees", href: "#"},
          {label: "Shop for Federal Employees", href: "#"},
        ],
      },
    ]
  },
  {
    groups: [
      {
         title: "Apple Values",
         links: [
          {label: "Accessibility", href: "#"},
          {label: "Education", href: "#"},
          {label: "Environment", href: "#"},
          {label: "Inclusion and Diversity", href: "#"},
          {label: "Racial Equity and Justice", href: "#"},
          {label: "Supply Chain Innovation", href: "#"},
        ],
      },
      {
         title: "About Apple",
         links: [
          {label: "Newsroom", href: "#"},
          {label: "Apple Leadership", href: "#"},
          {label: "Career Opportunities", href: "#"},
          {label: "Investors", href: "#"},
          {label: "Ethics & Compliance", href: "#"},
          {label: "Events", href: "#"},
          {label: "Contact Apple", href: "#"},
        ],
      },
    ]
  },
];

function Footer() {
  return (
     <footer className="w-full bg-[#1d1d1f] text-white/60">
      <div>
        {/* Term & Footnotes */}
        <div>
          {footnotes.map((line, i) => (
            <p key={i}>
              {line.map((part, j) => (
                part.href ? (
                  <a href={part.href}
                  key={j}
                  target="_blank"
                  className="text-white/80 underline"
                  >
                    {part.text}
                  </a>
                ) : (
                  <span key={j}>{part.text}</span>
                )
              ))}
            </p>
          ))}
        </div>
      </div>
     </footer>
  );
}

export default Footer;


