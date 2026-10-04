import { SHOWROOM_INFO } from './vehiclesData';

export const ACCESSORIES_CATEGORIES = [
  { id: 'all', label: 'All Spare Parts' },
  { id: 'battery', label: 'Lithium & Batteries' },
  { id: 'charger', label: 'Fast Chargers' },
  { id: 'brakes', label: 'Brakes & Safety' },
  { id: 'lighting', label: 'Lighting & LEDs' },
  { id: 'controls', label: 'Accessories & Controls' }
];

export const SPARE_PARTS_DATA = [
  {
    id: 'lithium-battery-60v',
    category: 'battery',
    name: 'Lithium Battery',
    badge: 'OEM Genuine',
    price: '₹24,500 - ₹28,000',
    warranty: '3 Years Warranty',
    image: '/assets/images/parts/battery-lithium-60v.png',
    tagline: '60V 30Ah LiFePO4 Smart Pack with Active BMS',
    shortDesc: 'Engineered with high-density Lithium Iron Phosphate chemistry for high thermal safety, 2000+ deep charge cycles, and rapid acceleration current delivery without voltage sag.',
    compatibility: 'Komaki MG PRO, X-ONE, X3 Sport, SE Series & All 60V High/Low Speed EVs',
    specs: [
      { label: 'Voltage', value: '60V DC (Peak 67.2V)' },
      { label: 'Capacity', value: '30Ah (1800 Wh)' },
      { label: 'Cell Type', value: 'Grade-A LiFePO4' },
      { label: 'Cycle Life', value: '2000+ Deep Cycles' },
      { label: 'Charging', value: '3.5 - 4.5 Hours' },
      { label: 'Enclosure', value: 'Reinforced Metal Casing' }
    ],
    features: [
      'Intelligent Smart BMS with Over-Charge, Deep-Discharge & Overheat Protection',
      'Foldable heavy-duty top carrying handle for effortless home/office portable charging',
      'Industrial-grade heavy-gauge insulated wiring with grey quick-lock connector',
      'Zero maintenance required with 100% thermal runaway fire-resistant chemistry'
    ]
  },
  {
    id: 'lead-acid-12v',
    category: 'battery',
    name: 'Lead Acid Battery',
    badge: 'Heavy Duty',
    price: '₹4,200 / Unit (Sets Available)',
    warranty: '1 Year Warranty',
    image: '/assets/images/parts/battery-lead-acid-12v.png',
    tagline: '12V 32Ah Deep-Cycle High-Discharge Power Block',
    shortDesc: 'Heavy-duty valve regulated lead acid traction battery block designed to deliver sustained torque and reliable daily range for commercial and family commuting electric scooters.',
    compatibility: 'Universal for 48V (Set of 4) & 60V (Set of 5) EV Scooters & E-Loaders',
    specs: [
      { label: 'Block Voltage', value: '12V DC per Unit' },
      { label: 'Capacity', value: '32Ah @ C20 High Output' },
      { label: 'Battery Type', value: 'Sealed VRLA Deep Cycle' },
      { label: 'Terminal', value: 'Heavy Duty M6 Brass Post' },
      { label: 'Weight', value: '6.85 KG Heavy Lead' },
      { label: 'Efficiency', value: 'Up to 92% Retention' }
    ],
    features: [
      'Thickened lead-alloy grid architecture resisting internal sulfation and heat',
      '100% spill-proof sealed design requiring zero distilled water top-ups',
      'High cold-cranking and sustained hill-climbing current capability',
      'Instant exchange discount available at Electric Vehicle Showroom'
    ]
  },
  {
    id: 'charger-fast-54v',
    category: 'charger',
    name: 'Smart Fast Charger',
    badge: 'Fast Turbo Charge',
    price: '₹2,450',
    warranty: '1 Year Warranty',
    image: '/assets/images/parts/charger-fast-54v.png',
    tagline: '54.6V 6A Intelligent CC/CV Charger with Auto Cut-Off',
    shortDesc: 'Rugged aluminum body charger with dual ball-bearing cooling fan and automated full-charge voltage sensing to protect batteries against overcharging and prolong cell lifespan.',
    compatibility: '48V / 54.6V 13S NMC & Lithium Battery Packs for All EV Scooters',
    specs: [
      { label: 'Input Power', value: '200V - 240V AC 50/60Hz' },
      { label: 'Output', value: '54.6V DC / 6.0A Turbo' },
      { label: 'Housing', value: 'Heat-Sink Aluminum Body' },
      { label: 'Indicator', value: 'Dual-Color Status LED' },
      { label: 'Cooling', value: 'Active Forced-Air Fan' },
      { label: 'Protection', value: 'Over-Voltage & Reverse Polarity' }
    ],
    features: [
      'Microprocessor auto-cut technology cuts power output at 100% charge to save electricity',
      'Heavy-duty standard 3-pin Indian wall plug and 3-hole IEC EV socket connector',
      'Built-in reverse polarity, short circuit, and thermal overload protection',
      'High-grade pure copper transformer for maximum electrical efficiency'
    ]
  },
  {
    id: 'foldable-footrest',
    category: 'controls',
    name: 'Foldable Footrest',
    badge: 'Pillion Comfort',
    price: '₹450 / Piece',
    warranty: '6 Months Warranty',
    image: '/assets/images/parts/side-footrest.png',
    tagline: 'Heavy-Duty Spring-Loaded Alloy & Steel Side Footrest',
    shortDesc: 'Sturdy spring-loaded folding side step footrest featuring a heavy-duty powder-coated steel mount and ribbed anti-skid aluminum alloy footboard for comfortable and secure pillion riding.',
    compatibility: 'Universal Fit for All Electric Scooters (Komaki MG PRO, X-ONE, X3, SE & Others)',
    specs: [
      { label: 'Frame Material', value: 'Reinforced Carbon Steel Tube' },
      { label: 'Foot Platform', value: 'Cast Non-Slip Ribbed Alloy' },
      { label: 'Mechanism', value: 'Spring-Loaded 90° Fold Action' },
      { label: 'Finish', value: 'Weather-Resistant Black Powder Coat' },
      { label: 'Load Capacity', value: 'Up to 120 KG Load' },
      { label: 'Mounting', value: 'Direct Chassis Frame Bolt-On' }
    ],
    features: [
      'Spring-loaded quick fold design snaps securely into position or folds flat when not in use',
      'Wide grooved platform provides firm footing and prevents foot slippage during rides',
      'Tough corrosion-proof powder coat finish protects against rain, mud, and road debris',
      'Universal mounting bracket engineered for effortless showroom fitting on any EV model'
    ]
  },
  {
    id: 'floor-mat-scooter',
    category: 'controls',
    name: 'Rubber Floor Mat',
    badge: 'Custom Contoured',
    price: '₹280 / Piece',
    warranty: 'Showroom Grade',
    image: '/assets/images/parts/designer-floor-mat.png',
    tagline: 'All-Weather Anti-Skid Textured Rubber Footboard Mat',
    shortDesc: 'Heavy-duty molded silicone rubber footboard mat with raised dirt-trap channels and 3D textured anti-slip grip to shield your scooter chassis from scratches, mud, and monsoon water.',
    compatibility: 'Komaki MG PRO, X-ONE, SE, X3 Sport & Multi-Brand EV Scooters',
    specs: [
      { label: 'Material', value: '100% High-Grade Flexible Rubber' },
      { label: 'Thickness', value: '5mm Heavy-Duty Layer' },
      { label: 'Grip Style', value: '3D Grooved Non-Slip Pattern' },
      { label: 'Protection', value: 'Chassis Scratch & Mud Guard' },
      { label: 'Washability', value: '100% Waterproof & Detachable' },
      { label: 'Fit Type', value: 'Vehicle Footboard Contoured' }
    ],
    features: [
      'Deep groove perimeter channels capture dust, water, and debris keeping your footboard clean',
      'Anti-skid textured bottom ensures the mat stays locked firmly in place while riding',
      'High-grade UV-resistant rubber prevents fading, cracking, and curling over time',
      'Washable and easy to clean with direct water pressure in seconds'
    ]
  },
  {
    id: 'stealth-mirrors',
    category: 'controls',
    name: 'Side Mirrors',
    badge: 'Sport Styling',
    price: '₹650 / Pair',
    warranty: '6 Months Warranty',
    image: '/assets/images/parts/stealth-mirrors.png',
    tagline: 'Anti-Glare Carbon Weave Wide-Angle Convex Mirrors',
    shortDesc: 'Sharp aerodynamic stealth rearview mirrors designed to minimize wind drag while offering an ultra-wide panoramic blindspot view. Features 3D carbon textured shells and dual 360° adjustable ball joints.',
    compatibility: 'Universal 8mm / 10mm Clockwise & Anti-Clockwise Thread for All Scooters',
    specs: [
      { label: 'Housing', value: 'High-Impact ABS Carbon Weave' },
      { label: 'Mirror Glass', value: 'HD Wide-Angle Anti-Glare Convex' },
      { label: 'Stem Spec', value: 'Reinforced Alloy Steel' },
      { label: 'Thread Adapters', value: 'M8 & M10 Universal Bolts' },
      { label: 'Adjustment', value: 'Dual 360° Swivel Ball Joint' },
      { label: 'Profile', value: 'Aerodynamic Stealth Winglet' }
    ],
    features: [
      'Wide-angle convex glass significantly expands rearview vision and eliminates blindspots',
      'Stunning 3D carbon fiber backplate gives your scooter an aggressive, premium sport look',
      'Vibration-damping rubber mounting boots keep reflection crystal clear at top speeds',
      'Heavy-duty CNC threaded studs resist rust and withstand rough road bumps'
    ]
  },
  {
    id: 'drum-brake-assembly',
    category: 'brakes',
    name: 'Drum Brake Assembly',
    badge: 'OEM Braking',
    price: '₹950 / Assembly',
    warranty: '1 Year Warranty',
    image: '/assets/images/parts/brake-drum-assembly.png',
    tagline: 'High-Friction Ceramic Shoes with Dual High-Tension Springs',
    shortDesc: 'Complete factory-grade drum brake plate assembly featuring dual high-tensile return springs, precision alloy mounting bracket, and asbestos-free organic friction shoes for quiet and powerful stopping power.',
    compatibility: 'Komaki X-ONE, X2, FX2, MG PRO and all 110mm / 130mm Drum Brake Hub EV Scooters',
    specs: [
      { label: 'Brake Type', value: 'Internal Expanding Drum' },
      { label: 'Hub Diameter', value: '110mm / 130mm Standard Hub' },
      { label: 'Friction Material', value: 'Asbestos-Free Semi-Ceramic' },
      { label: 'Actuator', value: 'Chrome Plated Arm & Cam' },
      { label: 'Spring Spec', value: 'Dual Anti-Fatigue Steel' },
      { label: 'Weight', value: '820 Grams Cast Alloy' }
    ],
    features: [
      'Anti-fade friction compound provides instant high braking bite even in hot weather',
      'Water & mud expulsion channels keep the internal brake hub dry during monsoon rides',
      'Smooth progressive lever modulation prevents sudden dangerous wheel lock-ups',
      'Direct bolt-on replacement for rear motor hubs and front drum assemblies'
    ]
  },
  {
    id: 'disc-brake-pads',
    category: 'brakes',
    name: 'Disc Brake Pads',
    badge: 'High Stopping Bite',
    price: '₹320 / Pair',
    warranty: 'Showroom Tested',
    image: '/assets/images/parts/disc-brake-pads.png',
    tagline: 'Multi-Groove Thermal Dissipation with Copper-Infused Compound',
    shortDesc: 'Heavy-duty hydraulic caliper disc brake friction pads infused with copper particles and thermal dissipation expansion slots for high stopping power, zero brake squeal, and minimal rotor disc wear.',
    compatibility: 'Front & Rear Calipers on Komaki MG PRO, SE, X3, X-ONE & Multi-Brand Disc EVs',
    specs: [
      { label: 'Compound', value: 'Semi-Metallic Copper Infused' },
      { label: 'Slots', value: 'Triple Gas Venting Grooves' },
      { label: 'Backplate', value: '3mm Stamped Carbon Steel' },
      { label: 'Heat Tolerance', value: 'Up to 450°C Fade Resistance' },
      { label: 'Durability', value: '8,000 - 12,000 KM Lifespan' },
      { label: 'Contents', value: 'Complete 2-Piece Caliper Set' }
    ],
    features: [
      'Copper-infused matrix ensures strong initial friction bite in dry and wet monsoon conditions',
      'Chamfered edges and anti-noise backing plate eliminate high-frequency brake squeaks',
      'Triple gas grooves expel brake dust and maintain consistent rotor disc contact',
      'Factory precision fitment matching OEM caliper mounting pin dimensions'
    ]
  },
  {
    id: 'brake-levers-set',
    category: 'brakes',
    name: 'Brake Levers',
    badge: 'Safety Cut-Off',
    price: '₹580 / Pair',
    warranty: '6 Months Warranty',
    image: '/assets/images/parts/brake-levers-set.png',
    tagline: 'Alloy Levers with Built-In Electric Motor Power Isolator',
    shortDesc: 'High-strength black anodized aluminum brake lever set with integrated microswitch sensors that instantly disengage EV motor power the millisecond brakes are pulled, ensuring maximum stopping safety.',
    compatibility: 'Universal fit for all 22mm handlebars on Electric Scooters, E-Bikes & Loaders',
    specs: [
      { label: 'Construction', value: 'Die-Cast Aluminum Alloy' },
      { label: 'Safety Sensor', value: 'Electronic Motor Microswitch' },
      { label: 'Wiring Lead', value: '350mm Weatherproof Cable' },
      { label: 'Handlebar Fit', value: 'Standard 22.2mm (7/8")' },
      { label: 'Finish', value: 'Matte Black Powder Coat' },
      { label: 'Includes', value: 'Left (Rear) + Right (Front)' }
    ],
    features: [
      'Instantly cuts throttle current to protect motor coils and reduce stopping distance',
      'Ergonomic 3-finger curved lever profile provides effortless, fatigue-free braking',
      'Dual stainless steel clamp bolts prevent handlebar slippage during emergency stops',
      'Universal plug-and-play wiring compatible with all major Indian EV controllers'
    ]
  },
  {
    id: 'led-projector-bulb',
    category: 'lighting',
    name: 'LED Projector Light',
    badge: 'Piercing Night Vision',
    price: '₹450 / Piece',
    warranty: '1 Year Warranty',
    image: '/assets/images/parts/led-projector-bulb.png',
    tagline: 'CNC Aluminum Heatsink with Optical Convex Projector Lens',
    shortDesc: 'Next-generation automotive CSP LED bulb with aircraft aluminum finned heat dissipation and optical condensing lens. Emits high-intensity crisp white light with 300% wider beam pattern and 80% lower battery power consumption.',
    compatibility: 'B20D / H4 Universal Headlamp Socket on all 12V-80V Electric Scooters & Bikes',
    specs: [
      { label: 'Voltage Range', value: '12V - 80V DC Universal Wide' },
      { label: 'Lumens Output', value: '3,200 Lumens Focused Beam' },
      { label: 'Color Temp', value: '6000K Pure Crystal White' },
      { label: 'Power Draw', value: '18W (70% Power Saving)' },
      { label: 'Heatsink Body', value: 'Aviation Finned Aluminum' },
      { label: 'Lifespan', value: '30,000+ Operating Hours' }
    ],
    features: [
      'Optical convex lens creates razor-sharp cutoff beam without blinding oncoming drivers',
      'Built-in turbine aluminum heatsink keeps LED chips ultra-cool under continuous night use',
      'Wide 12V-80V input connects safely with or without DC converter',
      'Instant 0.01-second full-brightness response for flashing high beam'
    ]
  },
  {
    id: 'throttle-smart-grip',
    category: 'controls',
    name: 'Throttle Grip',
    badge: 'Precision Control',
    price: '₹750 / Pair',
    warranty: '6 Months Warranty',
    image: '/assets/images/parts/throttle-smart-grip.png',
    tagline: 'Linear Hall-Effect Throttle with Eco/Sport Mode Selector',
    shortDesc: 'Premium textured rubber handlebar grips featuring CNC machined aluminum bar-ends and an integrated waterproof rocker switch for instantaneous drive mode switching (Eco/Sport/Reverse).',
    compatibility: 'Universal Fit for 22mm Handlebars on All Electric Scooters & Bikes',
    specs: [
      { label: 'Sensor Type', value: 'Digital Linear Hall Sensor' },
      { label: 'Signal Range', value: '0.8V to 4.2V Smooth Output' },
      { label: 'Switch Type', value: 'Eco / Sport Mode Rocker' },
      { label: 'Grip Material', value: 'UV Grip Rubber + CNC Alloy' },
      { label: 'Handlebar Fit', value: 'Standard 22mm (7/8")' },
      { label: 'Connector', value: '6-Pin Weatherproof Harness' }
    ],
    features: [
      'Ergonomic textured pattern reduces wrist fatigue during long daily commutes',
      'Water-sealed internal Hall chip prevents throttle sticking during monsoon rains',
      'Sleek chrome/silver accented bar-ends enhance front handlebar styling',
      'Plug & play wiring harness with standardized color codes for easy installation'
    ]
  },
  {
    id: 'converter-dc-12v',
    category: 'controls',
    name: 'DC-DC Converter',
    badge: 'OEM Spares',
    price: '₹650',
    warranty: '1 Year Warranty',
    image: '/assets/images/parts/converter-dc-12v.png',
    tagline: '36V-72V Wide Input to Regulated 12V 10A Clean Power',
    shortDesc: 'Solid-state voltage converter housed in a cast aluminum finned enclosure for extreme heat dissipation. Steps down high traction battery voltage to 12V DC for LED headlights, horn, flashers, and digital meters.',
    compatibility: 'Powers Lighting, Horn, Meter & Accessories on 36V, 48V, 60V, 72V EV Scooters',
    specs: [
      { label: 'Input Range', value: '36V - 72V DC Wide Range' },
      { label: 'Output Voltage', value: '12V DC ±2% Regulated' },
      { label: 'Output Current', value: '10 Amps (120 Watts Max)' },
      { label: 'Protection', value: 'IP67 Waterproof & Dustproof' },
      { label: 'Efficiency', value: 'Over 94% Minimal Heat' },
      { label: 'Wiring Lead', value: 'Red (In+), Yellow (12V+), Black (GND)' }
    ],
    features: [
      'Fully potted internal silicone circuit completely immune to vibrations, rain, and mud',
      'Protects expensive LED projectors, digital meters, and phone chargers from high voltage spikes',
      'Reinforced side mounting bracket with pre-drilled chassis mounting slots',
      '100% genuine OEM factory replacement part for all Komaki and multi-brand EVs'
    ]
  }
];

export function generatePartWhatsAppUrl(partName, customQuestion = '') {
  const phone = SHOWROOM_INFO.whatsappNumber || '919131776524';
  let text = '';
  if (customQuestion) {
    text = customQuestion;
  } else if (partName) {
    text = `Hello Electric Vehicle Showroom! I saw the *${partName}* on your website and would like to check current stock availability, pricing, and showroom installation service.`;
  } else {
    text = `Hello Electric Vehicle Showroom! I am inquiring about Electric Scooter Spare Parts and Genuine Accessories.`;
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
