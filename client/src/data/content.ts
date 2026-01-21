export interface Book {
  id: number;
  title: string;
  coverImage: string;
  description: string;
  link: string;
}

export interface Movie {
  id: number;
  title: string;
  poster: string;
  description: string;
  trailerLink: string;
}

export interface MediaItem {
  id: number;
  source: string;
  logo: string;
  title: string;
  excerpt: string;
  link: string;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}

export interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: "Gotti's Rules",
    coverImage: "/images/GNA2Y4utstqY.jpg",
    description: "The untold story of life inside the Gambino crime family, revealing the truth about John Gotti's rise and fall.",
    link: "https://www.amazon.com/Gottis-Rules-Story-Inside-Family/dp/0062346881",
  },
  {
    id: 2,
    title: "Darkest Hour",
    coverImage: "/images/qvqTfM0eIlU9.jpg",
    description: "A raw account of survival and redemption through the darkest moments of life in and out of organized crime.",
    link: "#",
  },
  {
    id: 3,
    title: "Prison Rules",
    coverImage: "/images/pexels-photo-8108063.jpeg",
    description: "Essential survival strategies from someone who navigated the brutal reality of prison life and emerged stronger.",
    link: "#",
  },
  {
    id: 4,
    title: "Mafia International",
    coverImage: "/images/pexels-photo-3052651.jpeg",
    description: "A global exposé of organized crime syndicates and their international operations, based on firsthand experience.",
    link: "#",
  },
];

export const movies: Movie[] = [
  {
    id: 1,
    title: "Fight Valley 2: Lockdown",
    poster: "/images/pexels-photo-8108063.jpeg",
    description: "John Alite stars in this gritty action film about underground fighting rings and the path to redemption.",
    trailerLink: "#",
  },
  {
    id: 2,
    title: "Ahead",
    poster: "/images/pexels-photo-7991579.jpeg",
    description: "A powerful documentary exploring my journey from crime to counseling, featuring raw interviews and real footage.",
    trailerLink: "#",
  },
  {
    id: 3,
    title: "4 Guys and a Bag",
    poster: "/images/pexels-photo-7647400.jpeg",
    description: "Based on true events from the streets of New York in the 1990s, a gripping tale of loyalty and betrayal.",
    trailerLink: "#",
  },
];

export const mediaItems: MediaItem[] = [
  {
    id: 1,
    source: "Daily Mail",
    logo: "/images/pexels-photo-518543.jpeg",
    title: "Mob Enforcer Joins War Against Fentanyl, 2022",
    excerpt: "Former Gambino associate John Alite leads community efforts to combat the fentanyl crisis after personal tragedy.",
    link: "#",
  },
  {
    id: 2,
    source: "The Independent",
    logo: "/images/pexels-photo-4057663.jpeg",
    title: "Trump Photo with John Alite, 2023",
    excerpt: "Exclusive interview about the viral photo and Alite's perspective on politics and reform.",
    link: "#",
  },
  {
    id: 3,
    source: "Yahoo",
    logo: "/images/pexels-photo-5077047.jpeg",
    title: "Ex-Mobster Now NJ Councilman, 2025",
    excerpt: "John Alite's remarkable transformation culminates in election victory, focusing on youth programs and criminal justice reform.",
    link: "#",
  },
  {
    id: 4,
    source: "NJToday.NET",
    logo: "/images/pexels-photo-4052198.jpeg",
    title: "Redemption Tour Hits Schools, 2024",
    excerpt: "Councilman Alite's powerful anti-crime message resonates with students across New Jersey.",
    link: "#",
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "John Alite Autographed Collector's Baseball Bat",
    image: "/images/pexels-photo-1661950.jpeg",
    price: 185,
    description: "Own a piece of history with this exclusive baseball bat, hand-signed by John Alite. Limited to just 100 units, this rare collectible is a must-have for fans and memorabilia enthusiasts. Each bat is uniquely authenticated, making it a one-of-a-kind treasure.",
  },
  {
    id: 2,
    name: "Premium T-Shirt",
    image: "/images/pexels-photo-428340.jpeg",
    price: 49.99,
    description: "Wear my story. Premium black t-shirt with the 'John Alite - Reformed' logo in striking red. Available in all sizes.",
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: "1980s",
    title: "Mob Beginnings",
    description: "Entered the world of organized crime as a Gambino crime family associate.",
  },
  {
    id: 2,
    year: "2008",
    title: "Cooperation & Testimony",
    description: "Made the decision to cooperate with authorities, testifying against former associates.",
  },
  {
    id: 3,
    year: "2012",
    title: "Release & New Beginnings",
    description: "Released from prison and began the journey of transformation through speaking and mentorship.",
  },
  {
    id: 4,
    year: "2022",
    title: "Fentanyl Advocacy",
    description: "After losing my daughter to fentanyl, dedicated my life to fighting the opioid crisis.",
  },
  {
    id: 5,
    year: "2025",
    title: "Elected Councilman",
    description: "Won election as city councilman, focusing on youth programs and criminal justice reform.",
  },
];
