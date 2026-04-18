/** Demo metrics for KrishiVoice AI admin dashboard */

export const overviewStats = [
  { key: 'farmers', label: 'Total farmers', value: '2,840', sub: '+4.2% vs last month', emoji: '👨‍🌾', icon: 'users' },
  { key: 'queries', label: 'Total queries', value: '12,450', sub: 'Voice + text', emoji: '🎤', icon: 'mic' },
  { key: 'crops', label: 'Total crops', value: '42', sub: 'In knowledge base', emoji: '🌾', icon: 'wheat' },
  { key: 'dealers', label: 'Total dealers', value: '128', sub: 'Active partners', emoji: '🏪', icon: 'store' },
  { key: 'images', label: 'Images analyzed', value: '8,934', sub: 'Leaf & field scans', emoji: '📷', icon: 'image' },
  { key: 'disease', label: 'Disease cases', value: '156', sub: 'Flagged this season', emoji: '🚨', icon: 'alert' },
];

export const queriesOverTime = [
  { day: 'Mon', queries: 820 },
  { day: 'Tue', queries: 932 },
  { day: 'Wed', queries: 1101 },
  { day: 'Thu', queries: 1240 },
  { day: 'Fri', queries: 980 },
  { day: 'Sat', queries: 1450 },
  { day: 'Sun', queries: 1320 },
];

export const cropPopularity = [
  { crop: 'Ragi', count: 420 },
  { crop: 'Cotton', count: 380 },
  { crop: 'Rice', count: 350 },
  { crop: 'Maize', count: 290 },
  { crop: 'Chilli', count: 210 },
];

export const languageUsage = [
  { name: 'Kannada', value: 42, color: '#059669' },
  { name: 'English', value: 28, color: '#10b981' },
  { name: 'Hindi', value: 18, color: '#34d399' },
  { name: 'Tamil', value: 8, color: '#6ee7b7' },
  { name: 'Other', value: 4, color: '#a7f3d0' },
];

export const recentActivity = [
  {
    id: 1,
    text: 'Ramesh asked about best crop for red soil in Karnataka',
    time: '2 min ago',
    icon: 'message',
  },
  {
    id: 2,
    text: 'New leaf image uploaded by Suresh Patil',
    time: '18 min ago',
    icon: 'image',
  },
  {
    id: 3,
    text: 'Cotton added to crops list by admin',
    time: '1 hr ago',
    icon: 'sprout',
  },
  {
    id: 4,
    text: 'Voice session completed — Lakshmi Devi (Mandya)',
    time: '2 hr ago',
    icon: 'mic',
  },
  {
    id: 5,
    text: 'Dealer “Green Valley Traders” verified',
    time: '3 hr ago',
    icon: 'store',
  },
];

export const topCrops = [
  { name: 'Ragi', usage: 1840, badge: 'Trending' },
  { name: 'Cotton', usage: 1622, badge: 'AI Recommended' },
  { name: 'Rice', usage: 1410, badge: 'Trending' },
  { name: 'Maize', usage: 980, badge: 'AI Recommended' },
  { name: 'Tur Dal', usage: 720, badge: 'Trending' },
];

export const activeFarmers = [
  { name: 'Meena Rao', location: 'Mysuru', queries: 62, engagement: 91 },
  { name: 'Suresh Patil', location: 'Mysuru', queries: 47, engagement: 82 },
  { name: 'Lakshmi Devi', location: 'Mandya', queries: 31, engagement: 71 },
  { name: 'Kavitha N.', location: 'Hunsur', queries: 24, engagement: 64 },
];
