export interface Tour {
  id: string;
  title: string;
  shortDescription: string;
  duration: string;
  priceStarting: number;
  seatsLeft: number;
  image: string;
  gallery: string[];
  category: string;
  highlights: string[];
  itinerary: {
    time: string;
    activity: string;
    description: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  pickupPoints: {
    name: string;
    time: string;
    location: string;
  }[];
  perPersonPrice: number;
  maxCapacity: number;
  cancellationPolicy: string;
  reviews: {
    name: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  totalBookings: number;
  safetyMeasures: string[];
  availability: {
    date: string;
    available: boolean;
    seatsLeft: number;
  }[];
}

export const tours: Tour[] = [
  {
    id: "meghalaya-living-roots",
    title: "Meghalaya Living Root Bridges Trek",
    shortDescription: "Trek through mystical forests to witness the iconic living root bridges of Meghalaya, stay in local villages",
    duration: "3 days",
    priceStarting: 8999,
    seatsLeft: 6,
    image: "https://images.unsplash.com/photo-1639601772397-6f4f58e5ac98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWdoYWxheWElMjBsaXZpbmclMjByb290JTIwYnJpZGdlfGVufDF8fHx8MTc2MTY2ODAwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gallery: [
      "https://images.unsplash.com/photo-1639601772397-6f4f58e5ac98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWdoYWxheWElMjBsaXZpbmclMjByb290JTIwYnJpZGdlfGVufDF8fHx8MTc2MTY2ODAwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1742569382820-67e2ae625691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVycmFwdW5qaSUyMHdhdGVyZmFsbHxlbnwxfHx8fDE3NjE2NjgwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1694438183697-1b662ea822ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J0aGVhc3QlMjBpbmRpYSUyMHZpbGxhZ2V8ZW58MXx8fHwxNzYxNjY4MDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    category: "Adventure",
    highlights: ["Double Decker Bridge", "Village homestay", "Waterfalls", "Local cuisine"],
    itinerary: [
      {
        time: "Day 1 - 8:00 AM",
        activity: "Journey to Tyrna Village",
        description: "Depart from Shillong, scenic drive through hills, reach Tyrna village base camp."
      },
      {
        time: "Day 1 - 2:00 PM",
        activity: "Trek to Double Decker Bridge",
        description: "3-hour trek through rainforest, witness the famous double-decker living root bridge."
      },
      {
        time: "Day 1 - 7:00 PM",
        activity: "Village Homestay",
        description: "Stay with local Khasi family, traditional dinner and cultural exchange."
      },
      {
        time: "Day 2 - 6:00 AM",
        activity: "Explore Waterfalls",
        description: "Visit nearby waterfalls, natural pools for swimming."
      },
      {
        time: "Day 2 - 4:00 PM",
        activity: "Trek Back",
        description: "Return trek to base camp, overnight in Cherrapunji."
      },
      {
        time: "Day 3 - 10:00 AM",
        activity: "Cherrapunji Sightseeing",
        description: "Visit Nohkalikai Falls, Seven Sisters Falls, return to Shillong."
      }
    ],
    inclusions: [
      "2 nights accommodation (1 homestay + 1 hotel)",
      "All meals during trek",
      "Professional trek guide",
      "Transportation from Shillong",
      "Entry fees",
      "Trekking permits",
      "First aid kit"
    ],
    exclusions: [
      "Travel to/from Shillong",
      "Personal expenses",
      "Travel insurance",
      "Additional activities"
    ],
    pickupPoints: [
      {
        name: "Shillong Police Bazaar",
        time: "8:00 AM",
        location: "Main Square, Police Bazaar"
      }
    ],
    perPersonPrice: 8999,
    maxCapacity: 12,
    cancellationPolicy: "Free cancellation up to 7 days before trek. 50% refund for 3-7 days notice. ₹49 reservation fee is fully refundable if cancelled within 2 hours of booking.",
    reviews: [
      {
        name: "Ananya Das",
        rating: 5,
        comment: "Absolutely magical experience! The living root bridges are engineering marvels. Homestay was warm and welcoming.",
        date: "2024-10-10"
      },
      {
        name: "Rohan Kapoor",
        rating: 5,
        comment: "Best trek I've ever done! The scenery, the culture, everything was perfect. Highly recommend!",
        date: "2024-10-15"
      }
    ],
    totalBookings: 234,
    safetyMeasures: [
      "Experienced local guides",
      "First aid trained staff",
      "Emergency evacuation plan",
      "Weather monitoring",
      "Safety briefing before trek"
    ],
    availability: [
      { date: "2025-11-05", available: true, seatsLeft: 6 },
      { date: "2025-11-12", available: true, seatsLeft: 8 },
      { date: "2025-11-19", available: true, seatsLeft: 4 },
      { date: "2025-11-26", available: false, seatsLeft: 0 }
    ]
  },
  {
    id: "sikkim-mountain-paradise",
    title: "Sikkim Himalayan Paradise Tour",
    shortDescription: "Explore the stunning landscapes of Sikkim - monasteries, lakes, and mountain vistas",
    duration: "5 days",
    priceStarting: 14999,
    seatsLeft: 4,
    image: "https://images.unsplash.com/photo-1624725412168-a8e69d4f7b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWtraW0lMjBtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjE2NjgwMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gallery: [
      "https://images.unsplash.com/photo-1624725412168-a8e69d4f7b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWtraW0lMjBtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjE2NjgwMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1628443266300-e8490ee38875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXdhbmclMjBtb25hc3Rlcnl8ZW58MXx8fHwxNzYxNjY4MDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    category: "Cultural",
    highlights: ["Tsomgo Lake", "Nathula Pass", "Buddhist Monasteries", "Mountain views"],
    itinerary: [
      {
        time: "Day 1 - 10:00 AM",
        activity: "Arrival in Gangtok",
        description: "Pick up from Bagdogra airport/NJP station, transfer to Gangtok, evening local market visit."
      },
      {
        time: "Day 2 - 7:00 AM",
        activity: "Tsomgo Lake & Baba Mandir",
        description: "Visit the pristine Tsomgo Lake, Baba Harbhajan Singh Mandir, optional visit to Nathula Pass."
      },
      {
        time: "Day 3 - 9:00 AM",
        activity: "North Sikkim Excursion",
        description: "Day trip to Lachung, visit Seven Sisters Waterfalls, hot springs."
      },
      {
        time: "Day 4 - 8:00 AM",
        activity: "Monastery Tour",
        description: "Visit Rumtek Monastery, Tashi Viewpoint, Hanuman Tok, Ganesh Tok."
      },
      {
        time: "Day 5 - 10:00 AM",
        activity: "Departure",
        description: "Transfer to Bagdogra airport/NJP station for onward journey."
      }
    ],
    inclusions: [
      "4 nights hotel accommodation",
      "Daily breakfast and dinner",
      "All transfers and sightseeing by SUV",
      "Experienced driver cum guide",
      "All permits and entry fees",
      "Parking and toll charges"
    ],
    exclusions: [
      "Flights/train tickets",
      "Lunch",
      "Nathula Pass permit (subject to availability)",
      "Personal expenses",
      "Adventure activities"
    ],
    pickupPoints: [
      {
        name: "Bagdogra Airport",
        time: "10:00 AM",
        location: "Arrival Terminal"
      },
      {
        name: "NJP Railway Station",
        time: "10:00 AM",
        location: "Main Exit"
      }
    ],
    perPersonPrice: 14999,
    maxCapacity: 6,
    cancellationPolicy: "Free cancellation up to 10 days before tour. 50% refund for 5-10 days notice. ₹49 reservation fee is fully refundable if cancelled within 2 hours of booking.",
    reviews: [
      {
        name: "Priya Sharma",
        rating: 5,
        comment: "Breathtaking views! The monasteries were so peaceful. Our guide was excellent and very knowledgeable.",
        date: "2024-10-08"
      }
    ],
    totalBookings: 456,
    safetyMeasures: [
      "Oxygen cylinders in vehicle for high altitude",
      "Experienced mountain drivers",
      "First aid kit",
      "24/7 support helpline",
      "Travel insurance recommended"
    ],
    availability: [
      { date: "2025-11-01", available: true, seatsLeft: 4 },
      { date: "2025-11-08", available: true, seatsLeft: 6 },
      { date: "2025-11-15", available: true, seatsLeft: 2 },
      { date: "2025-11-22", available: true, seatsLeft: 6 }
    ]
  },
  {
    id: "kaziranga-wildlife-safari",
    title: "Kaziranga Wildlife Safari Experience",
    shortDescription: "Spot the majestic one-horned rhinoceros and diverse wildlife in UNESCO World Heritage Kaziranga",
    duration: "2 days",
    priceStarting: 6999,
    seatsLeft: 8,
    image: "https://images.unsplash.com/photo-1675296098616-53e3d4a1dd57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXppcmFuZ2ElMjBuYXRpb25hbCUyMHBhcmt8ZW58MXx8fHwxNzYxNjY4MDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gallery: [
      "https://images.unsplash.com/photo-1675296098616-53e3d4a1dd57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXppcmFuZ2ElMjBuYXRpb25hbCUyMHBhcmt8ZW58MXx8fHwxNzYxNjY4MDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    category: "Wildlife",
    highlights: ["Elephant safari", "Jeep safari", "Rhino spotting", "Bird watching"],
    itinerary: [
      {
        time: "Day 1 - 5:30 AM",
        activity: "Early Morning Elephant Safari",
        description: "Experience the park from elephant back, best time to spot wildlife including rhinos, elephants, and birds."
      },
      {
        time: "Day 1 - 2:00 PM",
        activity: "Afternoon Jeep Safari",
        description: "Explore different zones of the park in 4x4 jeeps, visit observation towers."
      },
      {
        time: "Day 1 - 7:00 PM",
        activity: "Evening at Leisure",
        description: "Relax at resort, enjoy Assamese dinner, cultural program."
      },
      {
        time: "Day 2 - 5:00 AM",
        activity: "Morning Jeep Safari",
        description: "Final safari to explore Western Range, chance to spot tigers and wild buffaloes."
      },
      {
        time: "Day 2 - 12:00 PM",
        activity: "Departure",
        description: "Check out and transfer to Guwahati."
      }
    ],
    inclusions: [
      "1 night resort accommodation",
      "All meals (breakfast, lunch, dinner)",
      "2 elephant safaris + 2 jeep safaris",
      "Park entry fees",
      "Naturalist guide",
      "Transfers from/to Guwahati"
    ],
    exclusions: [
      "Camera fees at park",
      "Personal expenses",
      "Travel insurance",
      "Tips to guides and drivers"
    ],
    pickupPoints: [
      {
        name: "Guwahati Railway Station",
        time: "12:00 PM (Day before)",
        location: "Main Exit"
      },
      {
        name: "Guwahati Airport",
        time: "12:00 PM (Day before)",
        location: "Arrival Terminal"
      }
    ],
    perPersonPrice: 6999,
    maxCapacity: 12,
    cancellationPolicy: "Free cancellation up to 5 days before tour. 30% refund for 2-5 days notice. ₹49 reservation fee is fully refundable if cancelled within 2 hours of booking.",
    reviews: [
      {
        name: "Vikram Singh",
        rating: 5,
        comment: "Saw 15+ rhinos! The elephant safari was surreal. Resort was comfortable and food was delicious.",
        date: "2024-10-20"
      },
      {
        name: "Meera Patel",
        rating: 5,
        comment: "A must-visit for wildlife lovers! Our guide was knowledgeable and spotted so many birds.",
        date: "2024-10-18"
      }
    ],
    totalBookings: 678,
    safetyMeasures: [
      "Trained safari guides",
      "Strict wildlife safety protocols",
      "First aid available",
      "Emergency evacuation plan",
      "Regular vehicle maintenance"
    ],
    availability: [
      { date: "2025-11-02", available: true, seatsLeft: 8 },
      { date: "2025-11-09", available: true, seatsLeft: 10 },
      { date: "2025-11-16", available: true, seatsLeft: 6 },
      { date: "2025-11-23", available: true, seatsLeft: 12 }
    ]
  },
  {
    id: "assam-tea-culture",
    title: "Assam Tea Garden & Culture Tour",
    shortDescription: "Immerse yourself in Assam's tea heritage, visit gardens, learn tea making, and explore local culture",
    duration: "3 days",
    priceStarting: 7999,
    seatsLeft: 10,
    image: "https://images.unsplash.com/photo-1615472910606-9d4f7291944f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3NhbSUyMHRlYSUyMGdhcmRlbnxlbnwxfHx8fDE3NjE2MzgwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gallery: [
      "https://images.unsplash.com/photo-1615472910606-9d4f7291944f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3NhbSUyMHRlYSUyMGdhcmRlbnxlbnwxfHx8fDE3NjE2MzgwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    category: "Cultural",
    highlights: ["Tea garden stay", "Tea tasting", "Cultural shows", "Local cuisine"],
    itinerary: [
      {
        time: "Day 1 - 2:00 PM",
        activity: "Arrival & Tea Garden Tour",
        description: "Check into heritage tea bungalow, evening walk through tea gardens."
      },
      {
        time: "Day 2 - 6:00 AM",
        activity: "Tea Plucking Experience",
        description: "Join workers in tea plucking, learn about tea processing, tea tasting session."
      },
      {
        time: "Day 2 - 4:00 PM",
        activity: "Cultural Exploration",
        description: "Visit local villages, watch traditional Bihu dance, Assamese cooking class."
      },
      {
        time: "Day 3 - 9:00 AM",
        activity: "River Cruise & Departure",
        description: "Brahmaputra river cruise, visit Kamakhya Temple, transfer to airport."
      }
    ],
    inclusions: [
      "2 nights tea bungalow stay",
      "All meals with authentic Assamese cuisine",
      "Tea garden tours and tastings",
      "Cultural programs",
      "All transfers",
      "Expert guides"
    ],
    exclusions: [
      "Flights",
      "Personal shopping",
      "Travel insurance",
      "Tips"
    ],
    pickupPoints: [
      {
        name: "Guwahati Airport",
        time: "2:00 PM",
        location: "Arrival Hall"
      }
    ],
    perPersonPrice: 7999,
    maxCapacity: 8,
    cancellationPolicy: "Free cancellation up to 7 days before tour. 50% refund for 3-7 days notice. ₹49 reservation fee is fully refundable if cancelled within 2 hours of booking.",
    reviews: [
      {
        name: "Anjali Reddy",
        rating: 5,
        comment: "Unique experience! The tea bungalow was charming and the tea tasting was educational. Loved the cultural evening!",
        date: "2024-10-12"
      }
    ],
    totalBookings: 345,
    safetyMeasures: [
      "Safe tea estate environment",
      "First aid available",
      "Trained guides",
      "Clean and sanitized accommodation"
    ],
    availability: [
      { date: "2025-11-04", available: true, seatsLeft: 10 },
      { date: "2025-11-11", available: true, seatsLeft: 6 },
      { date: "2025-11-18", available: true, seatsLeft: 8 },
      { date: "2025-11-25", available: true, seatsLeft: 4 }
    ]
  },
  {
    id: "goa-beach-sunset",
    title: "Goa Beach Sunset & Dinner Cruise",
    shortDescription: "Experience the magical Goan sunset with a luxury cruise, live music, and authentic coastal dinner",
    duration: "4 hours",
    priceStarting: 1499,
    seatsLeft: 8,
    image: "https://images.unsplash.com/photo-1605979491367-701301816425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2ElMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3NjE1NjY4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gallery: [
      "https://images.unsplash.com/photo-1605979491367-701301816425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2ElMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3NjE1NjY4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1759751588414-ed8e8607304f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMGZvb2QlMjB0b3VyfGVufDF8fHx8MTc2MTY2NzE3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1757858566815-4fc2ecb8657d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyJTIwZ3VpZGUlMjBncm91cHxlbnwxfHx8fDE3NjE1ODgwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    category: "Cruise",
    highlights: ["Sunset views", "Live music", "Authentic dinner", "Photography"],
    itinerary: [
      {
        time: "5:00 PM",
        activity: "Pickup & Assembly",
        description: "Pickup from your hotel or designated meeting point. Welcome drinks served."
      },
      {
        time: "5:30 PM",
        activity: "Cruise Departure",
        description: "Board the luxury cruise. Safety briefing and tour introduction."
      },
      {
        time: "6:00 PM",
        activity: "Sunset Experience",
        description: "Watch the spectacular Goan sunset over the Arabian Sea with live acoustic music."
      },
      {
        time: "7:00 PM",
        activity: "Dinner Service",
        description: "Enjoy a buffet dinner featuring authentic Goan cuisine and continental options."
      },
      {
        time: "8:30 PM",
        activity: "Return & Drop",
        description: "Cruise returns to shore. Drop back to your hotel or meeting point."
      }
    ],
    inclusions: [
      "Hotel pickup and drop-off",
      "Welcome drinks",
      "Buffet dinner (Veg & Non-Veg options)",
      "Live music entertainment",
      "Professional tour guide",
      "Life jackets and safety equipment",
      "All taxes and fees"
    ],
    exclusions: [
      "Personal expenses",
      "Additional beverages and alcoholic drinks",
      "Tips and gratuities",
      "Travel insurance"
    ],
    pickupPoints: [
      {
        name: "Panaji Bus Stand",
        time: "5:00 PM",
        location: "Near Kala Academy, Panaji"
      },
      {
        name: "Calangute Beach Circle",
        time: "4:45 PM",
        location: "Main Circle, Calangute"
      },
      {
        name: "Baga Beach Road",
        time: "4:50 PM",
        location: "Opposite Tito's Lane"
      }
    ],
    perPersonPrice: 1499,
    maxCapacity: 50,
    cancellationPolicy: "Free cancellation up to 24 hours before the tour. ₹49 reservation fee is fully refundable if cancelled within 2 hours of booking.",
    reviews: [
      {
        name: "Priya Sharma",
        rating: 5,
        comment: "Amazing experience! The sunset was breathtaking and the food was delicious. Highly recommended!",
        date: "2024-10-15"
      },
      {
        name: "Rahul Verma",
        rating: 5,
        comment: "Perfect evening with family. The live music added a great touch. Will book again!",
        date: "2024-10-20"
      },
      {
        name: "Sneha Patel",
        rating: 4,
        comment: "Great tour overall. The cruise was comfortable and the staff was very friendly.",
        date: "2024-10-22"
      }
    ],
    totalBookings: 847,
    safetyMeasures: [
      "Life jackets provided for all passengers",
      "Trained lifeguards on board",
      "First aid kit available",
      "Regular safety drills",
      "COVID-19 sanitization protocols"
    ],
    availability: [
      { date: "2025-10-29", available: true, seatsLeft: 8 },
      { date: "2025-10-30", available: true, seatsLeft: 12 },
      { date: "2025-10-31", available: true, seatsLeft: 5 },
      { date: "2025-11-01", available: true, seatsLeft: 15 },
      { date: "2025-11-02", available: false, seatsLeft: 0 },
      { date: "2025-11-03", available: true, seatsLeft: 20 }
    ]
  },
  {
    id: "heritage-temple-tour",
    title: "Ancient Temples & Heritage Walk",
    shortDescription: "Discover the rich cultural heritage and architectural marvels of ancient temples with expert guides",
    duration: "6 hours",
    priceStarting: 999,
    seatsLeft: 12,
    image: "https://images.unsplash.com/photo-1685944775296-78ca263e51a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMHRlbXBsZSUyMGhlcml0YWdlfGVufDF8fHx8MTc2MTY2NzE3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gallery: [
      "https://images.unsplash.com/photo-1685944775296-78ca263e51a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMHRlbXBsZSUyMGhlcml0YWdlfGVufDF8fHx8MTc2MTY2NzE3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    category: "Cultural",
    highlights: ["5 ancient temples", "Expert historian guide", "Traditional lunch", "Photo opportunities"],
    itinerary: [
      {
        time: "8:00 AM",
        activity: "Morning Pickup",
        description: "Pickup from your location in AC vehicle."
      },
      {
        time: "9:00 AM",
        activity: "First Temple Visit",
        description: "Visit the famous 12th-century temple with detailed historical context."
      },
      {
        time: "11:00 AM",
        activity: "Heritage Walk",
        description: "Walk through the old town market and heritage streets."
      },
      {
        time: "1:00 PM",
        activity: "Traditional Lunch",
        description: "Authentic local cuisine at a heritage restaurant."
      },
      {
        time: "2:30 PM",
        activity: "More Temple Visits",
        description: "Continue exploring remaining temples and monuments."
      },
      {
        time: "4:00 PM",
        activity: "Return Journey",
        description: "Drop back to your hotel."
      }
    ],
    inclusions: [
      "AC vehicle transportation",
      "Expert historian guide",
      "Traditional vegetarian lunch",
      "Temple entry fees",
      "Bottled water",
      "All taxes"
    ],
    exclusions: [
      "Camera fees at monuments",
      "Personal purchases",
      "Tips"
    ],
    pickupPoints: [
      {
        name: "City Center",
        time: "8:00 AM",
        location: "Main Square"
      },
      {
        name: "Railway Station",
        time: "8:15 AM",
        location: "Station Road Exit"
      }
    ],
    perPersonPrice: 999,
    maxCapacity: 25,
    cancellationPolicy: "Free cancellation up to 48 hours before the tour. ₹49 reservation fee is fully refundable if cancelled within 2 hours of booking.",
    reviews: [
      {
        name: "Amit Kumar",
        rating: 5,
        comment: "Learned so much about our heritage. The guide was extremely knowledgeable!",
        date: "2024-10-18"
      }
    ],
    totalBookings: 523,
    safetyMeasures: [
      "Sanitized vehicles",
      "Small group sizes",
      "First aid available",
      "Emergency contacts provided"
    ],
    availability: [
      { date: "2025-10-29", available: true, seatsLeft: 12 },
      { date: "2025-10-30", available: true, seatsLeft: 8 },
      { date: "2025-10-31", available: true, seatsLeft: 10 },
      { date: "2025-11-01", available: true, seatsLeft: 15 },
      { date: "2025-11-02", available: true, seatsLeft: 6 },
      { date: "2025-11-03", available: false, seatsLeft: 0 }
    ]
  },
  {
    id: "adventure-water-sports",
    title: "Thrilling Water Sports Adventure",
    shortDescription: "Get your adrenaline pumping with jet skiing, parasailing, and banana boat rides",
    duration: "3 hours",
    priceStarting: 1999,
    seatsLeft: 6,
    image: "https://images.unsplash.com/photo-1598281636955-8c2b4651c883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjB3YXRlciUyMHNwb3J0c3xlbnwxfHx8fDE3NjE2NjcxNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gallery: [
      "https://images.unsplash.com/photo-1598281636955-8c2b4651c883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjB3YXRlciUyMHNwb3J0c3xlbnwxfHx8fDE3NjE2NjcxNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    category: "Adventure",
    highlights: ["Jet skiing", "Parasailing", "Banana boat", "Safety equipment included"],
    itinerary: [
      {
        time: "10:00 AM",
        activity: "Beach Assembly",
        description: "Meet at the water sports center. Safety briefing and equipment fitting."
      },
      {
        time: "10:30 AM",
        activity: "Jet Skiing",
        description: "15-minute jet ski ride along the coast."
      },
      {
        time: "11:00 AM",
        activity: "Parasailing",
        description: "Soar above the ocean with parasailing experience."
      },
      {
        time: "11:45 AM",
        activity: "Banana Boat Ride",
        description: "Fun group activity on the banana boat."
      },
      {
        time: "12:30 PM",
        activity: "End of Activities",
        description: "Return equipment and freshen up."
      }
    ],
    inclusions: [
      "All water sports activities",
      "Safety equipment (life jackets, helmets)",
      "Professional instructors",
      "Insurance coverage",
      "Changing room facilities"
    ],
    exclusions: [
      "Transportation to beach",
      "Food and beverages",
      "Photos and videos",
      "Locker facilities"
    ],
    pickupPoints: [
      {
        name: "Beach Water Sports Center",
        time: "10:00 AM",
        location: "North Beach Main Gate"
      }
    ],
    perPersonPrice: 1999,
    maxCapacity: 20,
    cancellationPolicy: "Free cancellation up to 12 hours before. Weather cancellations get full refund. ₹49 reservation fee is fully refundable if cancelled within 2 hours of booking.",
    reviews: [
      {
        name: "Karan Singh",
        rating: 5,
        comment: "Absolutely thrilling! The instructors were professional and made sure we were safe.",
        date: "2024-10-25"
      },
      {
        name: "Neha Desai",
        rating: 5,
        comment: "Best adventure experience! Parasailing was amazing!",
        date: "2024-10-23"
      }
    ],
    totalBookings: 1243,
    safetyMeasures: [
      "Certified life jackets for all participants",
      "Trained safety instructors",
      "Weather monitoring",
      "Emergency rescue boat on standby",
      "Medical kit available"
    ],
    availability: [
      { date: "2025-10-29", available: true, seatsLeft: 6 },
      { date: "2025-10-30", available: true, seatsLeft: 10 },
      { date: "2025-10-31", available: true, seatsLeft: 4 },
      { date: "2025-11-01", available: false, seatsLeft: 0 },
      { date: "2025-11-02", available: true, seatsLeft: 12 },
      { date: "2025-11-03", available: true, seatsLeft: 8 }
    ]
  },
  {
    id: "backwater-cruise",
    title: "Serene Backwater Houseboat Experience",
    shortDescription: "Relax on a traditional houseboat cruise through palm-fringed backwaters with Kerala cuisine",
    duration: "8 hours",
    priceStarting: 2499,
    seatsLeft: 4,
    image: "https://images.unsplash.com/photo-1704365159814-9d124e3cf952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrd2F0ZXIlMjBjcnVpc2UlMjBrZXJhbGF8ZW58MXx8fHwxNzYxNjY3MTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gallery: [
      "https://images.unsplash.com/photo-1704365159814-9d124e3cf952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrd2F0ZXIlMjBjcnVpc2UlMjBrZXJhbGF8ZW58MXx8fHwxNzYxNjY3MTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    category: "Leisure",
    highlights: ["Traditional houseboat", "Kerala cuisine", "Village sightseeing", "Sunset views"],
    itinerary: [
      {
        time: "9:00 AM",
        activity: "Pickup & Boarding",
        description: "Pickup and transfer to the houseboat jetty. Welcome drinks on board."
      },
      {
        time: "10:00 AM",
        activity: "Cruise Begins",
        description: "Start the backwater journey through scenic canals and lakes."
      },
      {
        time: "1:00 PM",
        activity: "Traditional Kerala Lunch",
        description: "Freshly prepared Kerala meals served on board."
      },
      {
        time: "3:00 PM",
        activity: "Village Visit",
        description: "Short stop at a local village to experience rural life."
      },
      {
        time: "5:00 PM",
        activity: "Sunset Cruise",
        description: "Enjoy the sunset over the backwaters with evening snacks."
      },
      {
        time: "6:00 PM",
        activity: "Return & Drop",
        description: "Return to jetty and drop back to your hotel."
      }
    ],
    inclusions: [
      "AC houseboat for the day",
      "Welcome drinks and refreshments",
      "Traditional Kerala lunch and evening snacks",
      "Professional crew",
      "Village tour guide",
      "Pickup and drop",
      "All taxes"
    ],
    exclusions: [
      "Alcoholic beverages",
      "Additional meals",
      "Personal expenses"
    ],
    pickupPoints: [
      {
        name: "Alleppey Boat Jetty",
        time: "9:00 AM",
        location: "Main Jetty, Alleppey"
      }
    ],
    perPersonPrice: 2499,
    maxCapacity: 12,
    cancellationPolicy: "Free cancellation up to 48 hours before. 50% refund for 24-48 hours notice. ₹49 reservation fee is fully refundable if cancelled within 2 hours of booking.",
    reviews: [
      {
        name: "Rajesh Menon",
        rating: 5,
        comment: "Peaceful and rejuvenating experience. The food was exceptional!",
        date: "2024-10-19"
      },
      {
        name: "Divya Nair",
        rating: 5,
        comment: "A must-do in Kerala! The backwaters are stunning and the houseboat was comfortable.",
        date: "2024-10-21"
      }
    ],
    totalBookings: 692,
    safetyMeasures: [
      "Life jackets available",
      "Experienced crew",
      "First aid kit",
      "Emergency communication devices",
      "Regular boat maintenance"
    ],
    availability: [
      { date: "2025-10-29", available: true, seatsLeft: 4 },
      { date: "2025-10-30", available: true, seatsLeft: 8 },
      { date: "2025-10-31", available: false, seatsLeft: 0 },
      { date: "2025-11-01", available: true, seatsLeft: 6 },
      { date: "2025-11-02", available: true, seatsLeft: 10 },
      { date: "2025-11-03", available: true, seatsLeft: 12 }
    ]
  }
];

export const categories = ["All", "Adventure", "Cultural", "Wildlife", "Cruise", "Leisure"];

// Featured/Top Choice Tours
export const featuredTourIds = [
  "meghalaya-living-roots",
  "sikkim-mountain-paradise",
  "kaziranga-wildlife-safari",
  "assam-tea-culture"
];
