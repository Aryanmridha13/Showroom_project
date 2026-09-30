/**
 * MRIDHA & SONS SHOWROOM - React EV Catalog Data
 * Featuring 4 Flagship Models: MG PRO, X3, X-ONE, and SE.
 * Strictly NO PRICES shown.
 */

export const VEHICLES_DATA = [
  {
    id: "mg-pro",
    name: "MG PRO",
    subtitle: "Heavy Metal Body + LiFePO4 Ultra-Safe Battery Flagship",
    badge: "Metal Body Flagship",
    category: "low-speed",
    categoryLabel: "Low Speed Scooter (Non-RTO)",
    image: "/assets/images/mg-pro.png",
    secondaryImage: "/assets/images/mg-pro.png",
    gallery: [
      "/assets/images/mg-pro.png",
      "/assets/images/mg-pro-white.png",
      "/assets/images/mg-pro-black.png",
      "/assets/images/mg-pro-grey.png"
    ],
    tagline: "A premium combination for the ultimate LifeProof Electric Scooter.",
    motor: "1.6 kW High Torque BLDC Motor",
    batteryType: "LiFePO4 Fire-Proof / Advanced Graphene",
    batteryCapacity: "60V 32Ah / 72V 35Ah Heavy Pack",
    range: "60 - 85 KM",
    topSpeed: "25 - 45 KM/H (No License Required)",
    chargingTime: "3.5 - 4 Hours (Fast Charge)",
    bodyType: "Heavy-Duty All-Metal Body Construction",
    brakes: "Front Disc & Rear Drum with Regenerative EBS",
    suspension: "Telescopic Front Forks & Dual Hydraulic Rear Shocks",
    warranty: "3 Years Comprehensive Battery & Motor Warranty",
    colors: [
      { id: "red", name: "Gloss Crimson Red", hex: "#C8102E", image: "/assets/images/mg-pro.png", accent: "#FF3366" },
      { id: "white", name: "Pearl White (MG-Pro V)", hex: "#F3F4F6", image: "/assets/images/mg-pro-white.png", accent: "#D1D5DB" },
      { id: "black", name: "Matte Black (MG-Pro +)", hex: "#222222", image: "/assets/images/mg-pro-black.png", accent: "#FF6700" },
      { id: "grey", name: "Slate Teal Grey (MG-Pro Li)", hex: "#4A6672", image: "/assets/images/mg-pro-grey.png", accent: "#00E5FF" }
    ],
    features: [
      "Heavy Duty All-Metal Body for unmatched rider safety & longevity",
      "LiFePO4 Ultra-Safe Fire-Proof & Thermal-Stable Battery Technology",
      "Smart High-Contrast Color Digital TFT Instrument Cluster",
      "Regenerative Electronic Braking System (EBS) with Energy Recovery",
      "USB Quick Mobile Charging Port with Front Storage Pocket",
      "Anti-Theft Remote Alarm & Keyless Push-Button Ignition",
      "Reverse Assist Mode with Audio Warning Buzzer for effortless parking",
      "Bright Full LED Projector Headlamp with Daytime Running Lights (DRL)"
    ],
    shortDesc: "The ultimate metal-body electric scooter designed for daily commuting with incredible durability, long-lasting LiFePO4 battery, and comfort."
  },
  {
    id: "x3",
    name: "X3",
    subtitle: "Aerodynamic Sport EV Scooter",
    badge: "Sport Edition",
    category: "low-speed",
    categoryLabel: "Low Speed Scooter (Non-RTO)",
    image: "/assets/images/x3-grey.png",
    secondaryImage: "/assets/images/x3-black.png",
    gallery: [
      "/assets/images/x3-grey.png",
      "/assets/images/x3-black.png",
      "/assets/images/x3-red.png",
      "/assets/images/x3-blue.png"
    ],
    tagline: "Dynamic Aerodynamics & Cutting-Edge Electric Power",
    motor: "1.2 kW High Efficiency BLDC Hub Motor",
    batteryType: "Smart Lithium-Ion / Graphene Pro",
    batteryCapacity: "60V 30Ah High Density Cell Pack",
    range: "60 - 80 KM",
    topSpeed: "25 KM/H (No License / No RTO Registration)",
    chargingTime: "3 - 3.5 Hours",
    bodyType: "Aerodynamic Lightweight High-Impact Composite Body",
    brakes: "Front Disc & Rear Drum with Regenerative Braking",
    suspension: "Front Telescopic Shocks & Dual Rear Coil Springs",
    warranty: "3 Years Official Warranty",
    colors: [
      { id: "grey", name: "Slate Grey", hex: "#7B90A7", image: "/assets/images/x3-grey.png", accent: "#E5A823" },
      { id: "black", name: "Stealth Black", hex: "#1A1A1A", image: "/assets/images/x3-black.png", accent: "#E5A823" },
      { id: "red", name: "Racing Red", hex: "#E52521", image: "/assets/images/x3-red.png", accent: "#E5A823" },
      { id: "blue", name: "Sport Electric Blue", hex: "#0070DE", image: "/assets/images/x3-blue.png", accent: "#00E5FF" }
    ],
    features: [
      "Twin Angular LED Headlamps with Integrated Sharp DRLs",
      "Aerodynamic Wind-Channeled Cowl for Smooth Handling & Stability",
      "Digital High-Contrast LCD Instrument Panel with Speed & Battery Gauge",
      "Multiple Eco / City / Sport Riding Modes",
      "Keyless Go & Anti-Theft Smart Remote Security",
      "Auto Cut-off Fast Charging for Long Battery Life"
    ],
    shortDesc: "Sharp, sporty, and aerodynamic electric scooter built for young commuters seeking style, performance, and effortless handling."
  },
  {
    id: "x-one",
    name: "X-ONE",
    subtitle: "The Best Affordable Electric Scooter with Perimeter Crash Guard",
    badge: "Bestseller",
    category: "low-speed",
    categoryLabel: "Low Speed Scooter (Non-RTO)",
    image: "/assets/images/x-one-black.png",
    secondaryImage: "/assets/images/x-one-black.png",
    gallery: [
      "/assets/images/x-one-black.png",
      "/assets/images/x-one-grey.png",
      "/assets/images/x-one-blue.png",
      "/assets/images/x-one-red.png"
    ],
    tagline: "Style & Space for the Future",
    motor: "1.4 kW BLDC High-Torque Waterproof Hub Motor",
    batteryType: "Graphene / Lithium-Ion Pro",
    batteryCapacity: "60V 32Ah / 48V 34Ah",
    range: "60 - 85 KM",
    topSpeed: "25 KM/H (No License / No Registration)",
    chargingTime: "3 - 3.5 Hours",
    bodyType: "Impact-Resistant ABS with Heavy Full-Perimeter Steel Crash Guard",
    brakes: "Front Disc & Rear Drum with CBS",
    suspension: "Telescopic Front Shock Absorber + Dual Rear Springs",
    warranty: "3 Years Comprehensive Warranty",
    colors: [
      { id: "black", name: "Gloss Phantom Black", hex: "#111111", image: "/assets/images/x-one-black.png", accent: "#FF6700" },
      { id: "grey", name: "Nardo Metallic Grey", hex: "#575B66", image: "/assets/images/x-one-grey.png", accent: "#94A3B8" },
      { id: "blue", name: "Sport Electric Blue", hex: "#0045AB", image: "/assets/images/x-one-blue.png", accent: "#0088FF" },
      { id: "red", name: "Crimson Metallic Red", hex: "#EA3137", image: "/assets/images/x-one-red.png", accent: "#FF3366" }
    ],
    features: [
      "Aerodynamic Sharp Front Cowl with Dual Headlamps",
      "Full Perimeter Safety Steel Crash Guards with Foldable Footrests",
      "Smart High-Contrast Digital TFT Speedometer",
      "Wide Ergonomic Dual-Stitched Comfort Cushion Seat",
      "Portable / Removable Battery Option for Easy Home Charging",
      "Anti-Theft Remote Alarm & Keyless Start",
      "USB Quick Mobile Charging Port with Front Glove Box",
      "Reverse Assist Parking Audio Buzzer"
    ],
    shortDesc: "The iconic X-ONE combines robust steel perimeter protection, great legroom, and dependable long battery life for family and individual daily rides."
  },
  {
    id: "se",
    name: "SE",
    subtitle: "Heavy-Duty High Speed Family Cruiser with Chrome Guardrails",
    badge: "High Speed Series",
    category: "high-speed",
    categoryLabel: "High Speed Scooter",
    image: "/assets/images/se-black.png",
    secondaryImage: "/assets/images/se-red.png",
    gallery: [
      "/assets/images/se-black.png",
      "/assets/images/se-red.png",
      "/assets/images/se-blue.png"
    ],
    tagline: "Power, Elegance & Reliable Range",
    motor: "1.8 kW High Output Brushless Performance Motor",
    batteryType: "Smart Lithium-Ion / Advanced Graphene",
    batteryCapacity: "72V 35Ah High Density Powerpack",
    range: "65 - 85 KM",
    topSpeed: "55 - 65 KM/H",
    chargingTime: "4 - 4.5 Hours",
    bodyType: "Reinforced Dual Tube Chassis with Chrome Protection Rails",
    brakes: "Dual Hydraulic Disc Brakes (Combined Braking System)",
    suspension: "Dual Hydraulic Telescopic + Gas Charged Rear Shocks",
    warranty: "3 Years Motor & Battery Warranty",
    colors: [
      { id: "black", name: "Stealth Black", hex: "#1A1A1A", image: "/assets/images/se-black.png", accent: "#E5A823" },
      { id: "red", name: "Crimson Red", hex: "#D3101E", image: "/assets/images/se-red.png", accent: "#E5A823" },
      { id: "blue", name: "Ocean Metallic Blue", hex: "#0047AB", image: "/assets/images/se-blue.png", accent: "#0088FF" }
    ],
    features: [
      "High Speed Performance with 3 Riding Modes (Eco, City, Sport)",
      "Heavy Chrome Protective Body Guardrails & Chrome Rear Carrier",
      "Dual Hydraulic Disc Brakes with Combined Braking System (CBS)",
      "Digital Instrument Cluster with Real-Time Battery & Range Monitor",
      "Tubeless High-Grip Alloy Wheels for Supreme Highway Stability",
      "Spacious Under-Seat Storage with Integrated USB Phone Charger"
    ],
    shortDesc: "Experience highway-grade performance with powerful 1.8kW motor, full chrome protective rails, dual disc brakes, and long range."
  }
];

export const SHOWROOM_INFO = {
  name: "MRIDHA & SONS SHOWROOM",
  division: "Authorized Electric Vehicle Division",
  tagline: "Eco-Friendly Electric Mobility - Sales, Spares & Authorized Service",
  ownerName: "Mridha & Sons Family",
  phonePrimary: "+91 91317 76524",
  phoneSecondary: "+91 91317 76524",
  whatsappNumber: "919131776524",
  email: "aryanmridha1305@gmail.com",
  address: {
    line1: "62MX+3R6 MRIDHA AND SONS Electric vehicle showroom, Chopna 2",
    line2: "Chopna",
    city: "Chopna",
    state: "Madhya Pradesh",
    pincode: "460440",
    country: "India",
    fullAddress: "62MX+3R6 MRIDHA AND SONS Electric vehicle showroom, Chopna 2, Chopna, Madhya Pradesh 460440"
  },
  timing: {
    weekdays: "Monday - Sunday: 10:30 AM - 7:00 PM",
    sunday: "Sunday: 10:30 AM - 7:00 PM",
    serviceHours: "Service & Spares Desk: 10:30 AM - 7:00 PM (Monday - Sunday)"
  },
  perks: [
    {
      id: "zero-petrol",
      icon: "Zap",
      title: "Zero Petrol Expense",
      desc: "Travel 100 KM for as low as ₹10 to ₹15 electricity cost."
    },
    {
      id: "warranty",
      icon: "ShieldCheck",
      title: "3 Years Warranty",
      desc: "Authorized warranty on battery, motor, and controller."
    },
    {
      id: "no-license",
      icon: "CreditCard",
      title: "No License / No Reg. Models",
      desc: "Available Low-Speed EV range requires no RTO registration or driving license."
    },
    {
      id: "service",
      icon: "Wrench",
      title: "Authorized Service & Spares",
      desc: "100% genuine spares, certified technicians, and first 3 free services."
    },
    {
      id: "finance",
      icon: "Wallet",
      title: "Easy Spot Financing & Exchange",
      desc: "Instant spot loan approvals, low down payments, and old vehicle exchange."
    },
    {
      id: "delivery",
      icon: "Truck",
      title: "Same Day Home Delivery",
      desc: "Select your dream scooter and get same day doorstep delivery."
    }
  ]
};

export const GALLERY_ITEMS = [
  {
    image: "/assets/images/mg-pro.png",
    title: "All New MG PRO Flagship",
    caption: "Heavy metal body durability with ultra-safe LiFePO4 battery pack."
  },
  {
    image: "/assets/images/x3-blue.png",
    title: "Komaki X3 Sport Edition",
    caption: "Dynamic aerodynamic body with twin LED projector headlamps."
  },
  {
    image: "/assets/images/x-one-black.png",
    title: "Komaki X-ONE Armor Stealth",
    caption: "Sporty aggressive black edition with full perimeter steel crash guards."
  },
  {
    image: "/assets/images/se-blue.png",
    title: "Komaki SE High Speed Cruiser",
    caption: "Dual seat family comfort with chrome safety rails and heavy suspension."
  }
];

export function generateWhatsAppUrl(modelName = '', customMessage = '') {
  const phone = SHOWROOM_INFO.whatsappNumber;
  let text = '';
  if (customMessage) {
    text = customMessage;
  } else if (modelName) {
    text = `Hello Mridha & Sons Showroom! I visited your website and I am interested in knowing more about the *${modelName}* Electric Scooter model (Color availability, test ride, and showroom quote).`;
  } else {
    text = `Hello Mridha & Sons Showroom! I visited your website and would like to know about your Electric Scooters collection and showroom location.`;
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
