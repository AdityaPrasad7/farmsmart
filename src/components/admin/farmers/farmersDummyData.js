/** Dummy farmers for admin dashboard — shape matches API-ready integration. */

export const DUMMY_FARMERS = [
  {
    id: 1,
    name: 'Suresh Patil',
    location: 'Mysuru',
    totalQueries: 47,
    imagesUploaded: 12,
    lastCrop: 'Cotton',
    mostInterestedCrop: 'Cotton',
    preferredCrops: ['Cotton', 'Ragi', 'Maize'],
    engagement: 82,
    aiSummary:
      'This farmer frequently searches for high-profit crops during monsoon and asks detailed follow-ups on pest management for cotton.',
    activity: [
      { time: '10:30 AM', kind: 'asked', detail: 'Which crop for black soil after kharif paddy?' },
      { time: '10:32 AM', kind: 'suggested', detail: 'Ragi — fits moisture window and local mandi demand.' },
      { time: '10:40 AM', kind: 'uploaded', detail: 'Leaf spot image (cotton)' },
      { time: '11:05 AM', kind: 'asked', detail: 'Organic spray sequence for early bollworm signs?' },
    ],
  },
  {
    id: 2,
    name: 'Lakshmi Devi',
    location: 'Mandya',
    totalQueries: 31,
    imagesUploaded: 8,
    lastCrop: 'Rice',
    mostInterestedCrop: 'Rice',
    preferredCrops: ['Rice', 'Ragi', 'Tur Dal'],
    engagement: 71,
    aiSummary:
      'Voice queries focus on irrigation timing and nutrient splits; image uploads often relate to blast or sheath blight identification.',
    activity: [
      { time: '09:15 AM', kind: 'asked', detail: 'Standing water depth for transplanted rice this week?' },
      { time: '09:18 AM', kind: 'suggested', detail: 'Maintain 4–5 cm; shallow if roots look yellow.' },
      { time: '09:42 AM', kind: 'uploaded', detail: 'Sheath blight patch photo' },
    ],
  },
  {
    id: 3,
    name: 'Ramesh Gowda',
    location: 'Nanjangud',
    totalQueries: 18,
    imagesUploaded: 3,
    lastCrop: 'Maize',
    mostInterestedCrop: 'Maize',
    preferredCrops: ['Maize', 'Cotton', 'Sunflower'],
    engagement: 58,
    aiSummary:
      'Seasonal interest shifts toward cash crops before sowing windows; fewer images but steady query cadence.',
    activity: [
      { time: '04:20 PM', kind: 'asked', detail: 'Hybrid maize spacing on medium black soil?' },
      { time: '04:24 PM', kind: 'suggested', detail: '60×20 cm with recommended population from label.' },
    ],
  },
  {
    id: 4,
    name: 'Meena Rao',
    location: 'Mysuru',
    totalQueries: 62,
    imagesUploaded: 21,
    lastCrop: 'Chilli',
    mostInterestedCrop: 'Chilli',
    preferredCrops: ['Chilli', 'Cotton', 'Onion'],
    engagement: 91,
    aiSummary:
      'Highly engaged user: combines frequent voice queries with image-based disease checks during fruiting stage.',
    activity: [
      { time: '08:05 AM', kind: 'asked', detail: 'Mite damage vs nutrient burn on chilli — how to tell?' },
      { time: '08:08 AM', kind: 'uploaded', detail: 'Close-up of curled leaves' },
      { time: '08:12 AM', kind: 'suggested', detail: 'Prioritize mite scouting; try sulphur if confirmed.' },
      { time: '08:30 AM', kind: 'asked', detail: 'Irrigation interval in current heat?' },
    ],
  },
  {
    id: 5,
    name: 'Anil Kumar',
    location: 'Srirangapatna',
    totalQueries: 9,
    imagesUploaded: 1,
    lastCrop: 'Sugarcane',
    mostInterestedCrop: 'Sugarcane',
    preferredCrops: ['Sugarcane', 'Banana'],
    engagement: 42,
    aiSummary:
      'Early-stage adopter: questions cluster around crop switching and water planning rather than daily agronomy.',
    activity: [
      { time: '06:50 PM', kind: 'asked', detail: 'Can I switch from paddy to sugarcane this season?' },
      { time: '06:55 PM', kind: 'suggested', detail: 'Yes if water is stable; stagger planting for ratoon risk.' },
    ],
  },
  {
    id: 6,
    name: 'Kavitha N.',
    location: 'Hunsur',
    totalQueries: 24,
    imagesUploaded: 6,
    lastCrop: 'Ragi',
    mostInterestedCrop: 'Ragi',
    preferredCrops: ['Ragi', 'Horsegram', 'Maize'],
    engagement: 64,
    aiSummary:
      'Strong interest in millets and soil health; often asks about organic inputs compatible with FPO schedules.',
    activity: [
      { time: '07:10 AM', kind: 'asked', detail: 'Best ragi variety for red gravelly soil?' },
      { time: '07:14 AM', kind: 'suggested', detail: 'Local improved lines + zinc application if deficiency suspected.' },
      { time: '07:22 AM', kind: 'uploaded', detail: 'Soil clod photo' },
    ],
  },
];
