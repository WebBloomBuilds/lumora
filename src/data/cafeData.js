export const cafeInfo = {
  name: "LUMORA",
  tagline: "Coffee. Crafted Beautifully.",
  est: "2021",
  address: "24 Garden Avenue, Jubilee Hills, Hyderabad",
  city: "Hyderabad, India",
  phone: "+91 40 4821 9920",
  email: "hello@lumoracafe.com",
  hours: {
    weekdays: "Mon – Fri: 8:00 AM – 9:00 PM",
    weekends: "Sat – Sun: 9:00 AM – 10:00 PM",
  },
  socials: [
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Facebook", url: "https://facebook.com" },
    { name: "Contact", url: "#visit" },
    { name: "Privacy", url: "#" },
  ]
};

export const menuItems = [
  {
    id: "01",
    name: "Signature Latte",
    category: "coffee",
    price: "₹220",
    description: "Espresso, velvety milk and our house-made vanilla blend.",
    badge: "House Favorite",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=900&q=80",
    details: "Double-shot single-origin espresso extracted at 9 bars, infused with Madagascar bourbon vanilla bean syrup and micro-textured whole milk."
  },
  {
    id: "02",
    name: "Lumora Cold Brew",
    category: "coffee",
    price: "₹240",
    description: "Slow-steeped for 18 hours with a smooth chocolate finish.",
    badge: "18h Steeped",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=80",
    details: "Direct-trade beans from Chikmagalur estates cold-steeped under low temperature, poured over crystal-clear spherical ice."
  },
  {
    id: "03",
    name: "Pistachio Croissant",
    category: "bakery",
    price: "₹190",
    description: "Flaky, buttery pastry filled with pistachio cream.",
    badge: "Fresh Baked Daily",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80",
    details: "Laminated French butter pastry baked each sunrise, filled with stone-ground Sicilian pistachio diplomat cream and crushed nuts."
  },
  {
    id: "04",
    name: "Dark Chocolate Cake",
    category: "bakery",
    price: "₹260",
    description: "Rich Belgian chocolate with a soft center.",
    badge: "Chef's Selection",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
    details: "72% Valrhona single-origin dark chocolate flourless torte with a silky warm ganache center and flaky Maldon sea salt."
  }
];

export const allExtendedMenu = [
  ...menuItems,
  {
    id: "05",
    name: "Hand-Drip Pour Over V60",
    category: "coffee",
    price: "₹230",
    description: "Ethiopian Yirgacheffe with floral jasmine and bergamot notes.",
    badge: "Single Origin",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    details: "Meticulously bloomed at 92°C to highlight delicate stone fruit, bright citrus acidity, and lingering sweetness."
  },
  {
    id: "06",
    name: "Spanish Saffron Cortado",
    category: "coffee",
    price: "₹210",
    description: "Equal parts espresso and steamed milk with Kashmiri saffron threads.",
    badge: "Artisan",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    details: "Rich espresso cut smoothly with velvety textured milk, infused with steeped royal saffron."
  },
  {
    id: "07",
    name: "Almond Frangipane Tart",
    category: "bakery",
    price: "₹180",
    description: "Crisp sable pastry filled with roasted almond cream and seasonal berries.",
    badge: "Bakery",
    image: "https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?auto=format&fit=crop&w=800&q=80",
    details: "Golden pastry baked with French butter, filled with sweet almond frangipane and fresh raspberries."
  },
  {
    id: "08",
    name: "Ceremonial Iced Matcha",
    category: "tea",
    price: "₹250",
    description: "Stone-ground Uji matcha, oat milk, and a delicate touch of agave.",
    badge: "Organic",
    image: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=800&q=80",
    details: "First-harvest ceremonial grade Japanese green tea whisked traditionally and poured over silky chilled oat milk."
  }
];

export const statisticsData = [
  {
    number: "4.9",
    suffix: "★",
    label: "Average Rating",
    subtext: "Over 3,500+ verified customer reviews"
  },
  {
    number: "25",
    suffix: "+",
    label: "Signature Creations",
    subtext: "Crafted exclusively by our baristas"
  },
  {
    number: "10",
    suffix: "K+",
    label: "Happy Guests",
    subtext: "Welcomed across morning & evening hours"
  },
  {
    number: "3",
    suffix: "",
    label: "Years of Craft",
    subtext: "Dedicated to slow, conscious coffee"
  }
];

export const experienceFeatures = [
  {
    id: "feat-1",
    title: "Freshly Roasted",
    tagline: "Roasted Weekly",
    description: "We micro-roast our beans in small 5kg batches every Tuesday, ensuring optimal degassing and nuanced flavor notes in every cup."
  },
  {
    id: "feat-2",
    title: "Locally Sourced",
    tagline: "Direct Farm Estates",
    description: "Partnered directly with shade-grown heritage estates in Chikmagalur and Araku Valley, ensuring fair trade and zero intermediaries."
  },
  {
    id: "feat-3",
    title: "Handcrafted Daily",
    tagline: "Artisan Viennoiserie",
    description: "Our in-house pastry chef begins rolling dough at 4:30 AM every morning using imported French butter and stone-milled grains."
  }
];

export const galleryImages = [
  {
    id: 1,
    title: "Micro-Lot Roast",
    category: "The Coffee",
    url: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85",
    caption: "Heritage Arabica beans from shade-grown highland estates, roasted to a delicate medium profile."
  },
  {
    id: 2,
    title: "Pour-Over Ritual",
    category: "The Craft",
    url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=85",
    caption: "Precision water flow and exact temperature blooming for our single-origin V60 manual brews."
  },
  {
    id: 3,
    title: "Espresso Extraction",
    category: "The Bar",
    url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
    caption: "Golden tiger-stripe crema extracted through our custom chrome lever machine."
  },
  {
    id: 4,
    title: "Quiet Corner",
    category: "The Space",
    url: "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1200&q=85",
    caption: "Sunlit oak tables curated with literature, art monographs, and warm linen accents."
  },
  {
    id: 5,
    title: "Ceramic Vessels",
    category: "The Details",
    url: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=1200&q=85",
    caption: "Every cup is served in tactile stoneware thrown by regional potters exclusively for Lumora."
  },
  {
    id: 6,
    title: "Morning Light Atrium",
    category: "The Space",
    url: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=1200&q=85",
    caption: "High ceilings and lush indoor flora creating an oasis in the heart of Hyderabad."
  },
  {
    id: 7,
    title: "Cold Infusions",
    category: "The Drinks",
    url: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=1200&q=85",
    caption: "Chilled botanicals, house-infused tonic waters, and refreshing cold matcha teas."
  },
  {
    id: 8,
    title: "Dawn Bakery",
    category: "The Kitchen",
    url: "https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?auto=format&fit=crop&w=1200&q=85",
    caption: "Warm brioches, golden canelés, and sourdough loaves fresh from our stone hearth."
  }
];

export const testimonialsData = [
  {
    id: "test-1",
    quote: "Beautiful space, incredible coffee, and easily one of my favorite places to spend a quiet afternoon.",
    author: "Aanya",
    role: "Architect & Daily Regular",
    rating: 5,
    favorite: "Signature Latte & Croissant"
  },
  {
    id: "test-2",
    quote: "Everything feels thoughtfully designed, from the coffee to the atmosphere.",
    author: "Rohan",
    role: "Product Designer",
    rating: 5,
    favorite: "Hand-Drip V60 Pour Over"
  },
  {
    id: "test-3",
    quote: "The cold brew is exceptional. Definitely coming back.",
    author: "Meera",
    role: "Photographer",
    rating: 5,
    favorite: "Lumora 18h Cold Brew"
  }
];
