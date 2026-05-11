export const features = [
  { icon: '🌱', color: 'rgba(74,124,89,0.22)',   name: 'Soil Intelligence',   desc: 'Live NPK, pH & moisture readings from in-field IoT sensors. Know your soil before your crop shows symptoms.', tag: 'IoT Sensors' },
  { icon: '💧', color: 'rgba(123,184,245,0.18)', name: 'Smart Irrigation',    desc: 'Auto water scheduling based on real-time soil data and 7-day weather forecasts. Never over-water again.', tag: 'Automation' },
  { icon: '📈', color: 'rgba(245,166,35,0.18)',  name: 'Yield Prediction',    desc: 'AI-powered harvest forecast with ±3% accuracy up to 30 days out. Plan your supply chain with confidence.', tag: 'AI / ML' },
  { icon: '🛰️', color: 'rgba(74,124,89,0.22)',  name: 'Weather Sync',        desc: 'Hyper-local weather forecast fused with on-ground sensor data for your exact field GPS coordinates.', tag: 'Real-time' },
  { icon: '🔔', color: 'rgba(245,166,35,0.18)',  name: 'Instant Alerts',      desc: 'SMS & app push notifications for drought risk, frost events, pest pressure and nutrient deficiency.', tag: 'Early Warning' },
  { icon: '📊', color: 'rgba(123,184,245,0.18)', name: 'Analytics & Reports', desc: 'Season-over-season performance reports with exportable CSV data for your finance and operations teams.', tag: 'Business Intel' },
]

export const testimonials = [
  {
    stars: '★★★★★',
    quote: '"We manage 340 acres across 3 districts. Before AgroSense we were guessing irrigation schedules. Now we get alerts before damage happens. Water costs dropped 38% in season one alone."',
    name: 'Ravi Patil', role: 'Operations Head · Sahyadri FPO, Pune', emoji: '👨‍🌾',
    avatarBg: 'rgba(74,124,89,0.28)',
  },
  {
    stars: '★★★★★',
    quote: '"As an agricultural consultant, I need data my clients can trust. AgroSense gives me field-level soil reports I can walk into a bank with. Three clients got crop loans approved faster because of it."',
    name: 'Meena Kulkarni', role: 'Agri Consultant · Dharwad, Karnataka', emoji: '👩‍💼',
    avatarBg: 'rgba(245,166,35,0.22)',
  },
  {
    stars: '★★★★★',
    quote: '"We supply tomatoes to three major retail chains. The yield prediction alone paid for the entire annual subscription in month one — we negotiated contracts 3 weeks early with real data."',
    name: 'Suresh Naik', role: 'Director · GreenRoute Agribusiness, Hubli', emoji: '👨‍💻',
    avatarBg: 'rgba(123,184,245,0.22)',
  },
]

export const plans = [
  {
    featured: false,
    name: 'Starter', price: '₹999', period: '/mo',
    desc: 'Perfect for small cooperatives managing up to 10 acres and 2 field blocks.',
    features: ['Up to 10 acres', '10 IoT sensors included', 'Basic soil & weather data', 'Email alerts', 'Monthly PDF reports'],
  },
  {
    featured: true,
    name: 'Pro', price: '₹2,499', period: '/mo',
    desc: 'For growing agri-businesses managing multiple farms and field blocks at scale.',
    features: ['Up to 50 acres', 'Unlimited sensors', 'AI yield prediction', 'SMS + app push alerts', 'Weekly analytics reports'],
  },
  {
    featured: false,
    name: 'Enterprise', price: 'Custom', period: '',
    desc: 'For large corporations, government bodies and FPOs managing 500+ acres.',
    features: ['Unlimited acreage', 'Dedicated account manager', 'Custom API integrations', 'On-premise deployment', 'SLA uptime guarantee'],
  },
]

export const problems = [
  { icon: '💧', title: 'Water Wastage',      desc: 'Manual irrigation wastes over 60% of available water. No alerts when soil is already saturated — farmers just keep pumping.', stat: '60% water wasted' },
  { icon: '🌾', title: 'Crop Loss',           desc: 'Farmers discover drought or pest damage only when it\'s visible — days too late to prevent the loss.', stat: '30% annual crop loss' },
  { icon: '📉', title: 'No Yield Visibility', desc: 'Supply chains can\'t plan. Buyers can\'t commit. Farmers can\'t negotiate price because nobody knows the yield until harvest day.', stat: '₹1.5Cr lost/season' },
  { icon: '🌧️', title: 'Weather Dependency', desc: 'Generic forecasts aren\'t field-accurate. One unpredicted drought or unseasonal rain can wipe an entire season\'s investment.', stat: '1 bad season = total loss' },
]

export const stats = [
  { num: '40%',    label: 'average water saved' },
  { num: '8,200+', label: 'farms connected' },
  { num: '₹2.4Cr', label: 'avg. yield gain / year' },
  { num: '99.2%',  label: 'platform uptime' },
]

export const marqueeItems = ['Fasal','CropIn','DeHaat','Krishi Labs','NABARD','Ninjacart','ITC e-Choupal','Green Yield','Sahyadri FPO']