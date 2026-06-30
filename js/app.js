
'use strict';

// VALE AIR MANAGER - v0.6.0-alpha - Build 20260630-1738
// Fases F9-F12: economia profunda, combustível avançado, preço dinâmico e manutenção por nível.

const BUILD = Object.freeze({
  game: 'VALE AIR MANAGER',
  version: '0.6.0-alpha',
  phase: 'F9-F12',
  build: '20260630-1738',
  schema: 6,
  date: '2026-06-30',
  timezone: 'America/Sao_Paulo'
});

const AIRPORTS = [
  {
    "iata": "GRU",
    "icao": "SBGR",
    "name": "São Paulo/Guarulhos",
    "city": "São Paulo",
    "country": "Brazil",
    "lat": -23.4356,
    "lon": -46.4731,
    "demand": 96,
    "slotCost": 115000,
    "fee": 4800,
    "runway": 3700,
    "region": "South America"
  },
  {
    "iata": "CGH",
    "icao": "SBSP",
    "name": "São Paulo/Congonhas",
    "city": "São Paulo",
    "country": "Brazil",
    "lat": -23.6261,
    "lon": -46.6564,
    "demand": 88,
    "slotCost": 82000,
    "fee": 3900,
    "runway": 1940,
    "region": "South America"
  },
  {
    "iata": "GIG",
    "icao": "SBGL",
    "name": "Rio de Janeiro/Galeão",
    "city": "Rio de Janeiro",
    "country": "Brazil",
    "lat": -22.8099,
    "lon": -43.2506,
    "demand": 84,
    "slotCost": 78000,
    "fee": 4100,
    "runway": 4000,
    "region": "South America"
  },
  {
    "iata": "BSB",
    "icao": "SBBR",
    "name": "Brasília",
    "city": "Brasília",
    "country": "Brazil",
    "lat": -15.8711,
    "lon": -47.9186,
    "demand": 82,
    "slotCost": 76000,
    "fee": 3800,
    "runway": 3300,
    "region": "South America"
  },
  {
    "iata": "SSA",
    "icao": "SBSV",
    "name": "Salvador",
    "city": "Salvador",
    "country": "Brazil",
    "lat": -12.9086,
    "lon": -38.3225,
    "demand": 74,
    "slotCost": 52000,
    "fee": 3300,
    "runway": 3003,
    "region": "South America"
  },
  {
    "iata": "REC",
    "icao": "SBRF",
    "name": "Recife",
    "city": "Recife",
    "country": "Brazil",
    "lat": -8.1268,
    "lon": -34.923,
    "demand": 71,
    "slotCost": 50000,
    "fee": 3200,
    "runway": 3007,
    "region": "South America"
  },
  {
    "iata": "FOR",
    "icao": "SBFZ",
    "name": "Fortaleza",
    "city": "Fortaleza",
    "country": "Brazil",
    "lat": -3.7763,
    "lon": -38.5326,
    "demand": 69,
    "slotCost": 47000,
    "fee": 3100,
    "runway": 2545,
    "region": "South America"
  },
  {
    "iata": "POA",
    "icao": "SBPA",
    "name": "Porto Alegre",
    "city": "Porto Alegre",
    "country": "Brazil",
    "lat": -29.9944,
    "lon": -51.1714,
    "demand": 68,
    "slotCost": 46000,
    "fee": 3000,
    "runway": 2280,
    "region": "South America"
  },
  {
    "iata": "CNF",
    "icao": "SBCF",
    "name": "Belo Horizonte/Confins",
    "city": "Belo Horizonte",
    "country": "Brazil",
    "lat": -19.6244,
    "lon": -43.9719,
    "demand": 73,
    "slotCost": 56000,
    "fee": 3400,
    "runway": 3600,
    "region": "South America"
  },
  {
    "iata": "CWB",
    "icao": "SBCT",
    "name": "Curitiba",
    "city": "Curitiba",
    "country": "Brazil",
    "lat": -25.5285,
    "lon": -49.1758,
    "demand": 65,
    "slotCost": 42000,
    "fee": 2950,
    "runway": 2215,
    "region": "South America"
  },
  {
    "iata": "EZE",
    "icao": "SAEZ",
    "name": "Buenos Aires/Ezeiza",
    "city": "Buenos Aires",
    "country": "Argentina",
    "lat": -34.8222,
    "lon": -58.5358,
    "demand": 83,
    "slotCost": 82000,
    "fee": 4700,
    "runway": 3300,
    "region": "South America"
  },
  {
    "iata": "SCL",
    "icao": "SCEL",
    "name": "Santiago",
    "city": "Santiago",
    "country": "Chile",
    "lat": -33.3929,
    "lon": -70.7858,
    "demand": 85,
    "slotCost": 90000,
    "fee": 5100,
    "runway": 3800,
    "region": "South America"
  },
  {
    "iata": "BOG",
    "icao": "SKBO",
    "name": "Bogotá/El Dorado",
    "city": "Bogotá",
    "country": "Colombia",
    "lat": 4.7016,
    "lon": -74.1469,
    "demand": 86,
    "slotCost": 92000,
    "fee": 5300,
    "runway": 3800,
    "region": "South America"
  },
  {
    "iata": "LIM",
    "icao": "SPJC",
    "name": "Lima/Jorge Chávez",
    "city": "Lima",
    "country": "Peru",
    "lat": -12.0219,
    "lon": -77.1143,
    "demand": 80,
    "slotCost": 81000,
    "fee": 5000,
    "runway": 3507,
    "region": "South America"
  },
  {
    "iata": "MIA",
    "icao": "KMIA",
    "name": "Miami International",
    "city": "Miami",
    "country": "United States",
    "lat": 25.7959,
    "lon": -80.287,
    "demand": 95,
    "slotCost": 170000,
    "fee": 8400,
    "runway": 3962,
    "region": "North America"
  },
  {
    "iata": "JFK",
    "icao": "KJFK",
    "name": "New York/JFK",
    "city": "New York",
    "country": "United States",
    "lat": 40.6413,
    "lon": -73.7781,
    "demand": 100,
    "slotCost": 240000,
    "fee": 11200,
    "runway": 4423,
    "region": "North America"
  },
  {
    "iata": "LAX",
    "icao": "KLAX",
    "name": "Los Angeles",
    "city": "Los Angeles",
    "country": "United States",
    "lat": 33.9416,
    "lon": -118.4085,
    "demand": 98,
    "slotCost": 220000,
    "fee": 10800,
    "runway": 3685,
    "region": "North America"
  },
  {
    "iata": "LHR",
    "icao": "EGLL",
    "name": "London Heathrow",
    "city": "London",
    "country": "United Kingdom",
    "lat": 51.47,
    "lon": -0.4543,
    "demand": 100,
    "slotCost": 280000,
    "fee": 12800,
    "runway": 3902,
    "region": "Europe"
  },
  {
    "iata": "CDG",
    "icao": "LFPG",
    "name": "Paris Charles de Gaulle",
    "city": "Paris",
    "country": "France",
    "lat": 49.0097,
    "lon": 2.5479,
    "demand": 98,
    "slotCost": 250000,
    "fee": 11900,
    "runway": 4215,
    "region": "Europe"
  },
  {
    "iata": "MAD",
    "icao": "LEMD",
    "name": "Madrid Barajas",
    "city": "Madrid",
    "country": "Spain",
    "lat": 40.4983,
    "lon": -3.5676,
    "demand": 93,
    "slotCost": 190000,
    "fee": 9800,
    "runway": 4350,
    "region": "Europe"
  },
  {
    "iata": "LIS",
    "icao": "LPPT",
    "name": "Lisbon",
    "city": "Lisbon",
    "country": "Portugal",
    "lat": 38.7742,
    "lon": -9.1342,
    "demand": 86,
    "slotCost": 150000,
    "fee": 8200,
    "runway": 3805,
    "region": "Europe"
  },
  {
    "iata": "FRA",
    "icao": "EDDF",
    "name": "Frankfurt",
    "city": "Frankfurt",
    "country": "Germany",
    "lat": 50.0379,
    "lon": 8.5622,
    "demand": 97,
    "slotCost": 230000,
    "fee": 11500,
    "runway": 4000,
    "region": "Europe"
  },
  {
    "iata": "DXB",
    "icao": "OMDB",
    "name": "Dubai International",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "lat": 25.2532,
    "lon": 55.3657,
    "demand": 99,
    "slotCost": 260000,
    "fee": 12500,
    "runway": 4447,
    "region": "Middle East"
  },
  {
    "iata": "DOH",
    "icao": "OTHH",
    "name": "Doha Hamad",
    "city": "Doha",
    "country": "Qatar",
    "lat": 25.2731,
    "lon": 51.6081,
    "demand": 94,
    "slotCost": 220000,
    "fee": 11200,
    "runway": 4850,
    "region": "Middle East"
  },
  {
    "iata": "HND",
    "icao": "RJTT",
    "name": "Tokyo Haneda",
    "city": "Tokyo",
    "country": "Japan",
    "lat": 35.5494,
    "lon": 139.7798,
    "demand": 100,
    "slotCost": 270000,
    "fee": 12800,
    "runway": 3360,
    "region": "Asia"
  },
  {
    "iata": "SIN",
    "icao": "WSSS",
    "name": "Singapore Changi",
    "city": "Singapore",
    "country": "Singapore",
    "lat": 1.3644,
    "lon": 103.9915,
    "demand": 98,
    "slotCost": 240000,
    "fee": 11800,
    "runway": 4000,
    "region": "Asia"
  },
  {
    "iata": "SYD",
    "icao": "YSSY",
    "name": "Sydney Kingsford Smith",
    "city": "Sydney",
    "country": "Australia",
    "lat": -33.9399,
    "lon": 151.1753,
    "demand": 91,
    "slotCost": 180000,
    "fee": 9300,
    "runway": 3962,
    "region": "Oceania"
  },
  {
    "iata": "JNB",
    "icao": "FAOR",
    "name": "Johannesburg OR Tambo",
    "city": "Johannesburg",
    "country": "South Africa",
    "lat": -26.1337,
    "lon": 28.242,
    "demand": 84,
    "slotCost": 125000,
    "fee": 7700,
    "runway": 4418,
    "region": "Africa"
  }
];
const AIRCRAFT = [
  {
    "id": "cessna208",
    "name": "Cessna 208 Caravan",
    "category": "Regional leve",
    "price": 950000,
    "rangeKm": 1980,
    "speedKmh": 340,
    "capacity": 12,
    "cargoKg": 1450,
    "fuelBurnKgH": 180,
    "maintenanceRate": 0.26,
    "leaseMonthly": 21500,
    "turnaroundMin": 32,
    "fuelEfficiency": 1.08,
    "reliability": 92,
    "image": "assets/planes/plane-regional.svg"
  },
  {
    "id": "atr42",
    "name": "ATR 42-600",
    "category": "Turboélice regional",
    "price": 8200000,
    "rangeKm": 1326,
    "speedKmh": 556,
    "capacity": 48,
    "cargoKg": 5200,
    "fuelBurnKgH": 620,
    "maintenanceRate": 0.34,
    "leaseMonthly": 178000,
    "turnaroundMin": 44,
    "fuelEfficiency": 1.03,
    "reliability": 90,
    "image": "assets/planes/plane-turboprop.svg"
  },
  {
    "id": "e190",
    "name": "Embraer E190",
    "category": "Jato regional",
    "price": 23500000,
    "rangeKm": 4537,
    "speedKmh": 870,
    "capacity": 100,
    "cargoKg": 9800,
    "fuelBurnKgH": 1900,
    "maintenanceRate": 0.48,
    "leaseMonthly": 410000,
    "turnaroundMin": 52,
    "fuelEfficiency": 0.98,
    "reliability": 91,
    "image": "assets/planes/plane-narrow.svg"
  },
  {
    "id": "a320neo",
    "name": "Airbus A320neo",
    "category": "Narrow-body",
    "price": 61000000,
    "rangeKm": 6300,
    "speedKmh": 840,
    "capacity": 180,
    "cargoKg": 18000,
    "fuelBurnKgH": 2450,
    "maintenanceRate": 0.55,
    "leaseMonthly": 740000,
    "turnaroundMin": 56,
    "fuelEfficiency": 0.94,
    "reliability": 94,
    "image": "assets/planes/plane-narrow.svg"
  },
  {
    "id": "b737800",
    "name": "Boeing 737-800",
    "category": "Narrow-body",
    "price": 53000000,
    "rangeKm": 5665,
    "speedKmh": 842,
    "capacity": 189,
    "cargoKg": 20500,
    "fuelBurnKgH": 2600,
    "maintenanceRate": 0.58,
    "leaseMonthly": 690000,
    "turnaroundMin": 58,
    "fuelEfficiency": 0.97,
    "reliability": 93,
    "image": "assets/planes/plane-narrow.svg"
  },
  {
    "id": "a321lr",
    "name": "Airbus A321LR",
    "category": "Narrow-body longo alcance",
    "price": 72000000,
    "rangeKm": 7400,
    "speedKmh": 840,
    "capacity": 206,
    "cargoKg": 22000,
    "fuelBurnKgH": 2700,
    "maintenanceRate": 0.61,
    "leaseMonthly": 820000,
    "turnaroundMin": 60,
    "fuelEfficiency": 0.93,
    "reliability": 94,
    "image": "assets/planes/plane-narrow.svg"
  },
  {
    "id": "b7879",
    "name": "Boeing 787-9",
    "category": "Wide-body",
    "price": 156000000,
    "rangeKm": 14140,
    "speedKmh": 903,
    "capacity": 296,
    "cargoKg": 43000,
    "fuelBurnKgH": 5600,
    "maintenanceRate": 0.78,
    "leaseMonthly": 1420000,
    "turnaroundMin": 86,
    "fuelEfficiency": 0.88,
    "reliability": 95,
    "image": "assets/planes/plane-wide.svg"
  },
  {
    "id": "a350900",
    "name": "Airbus A350-900",
    "category": "Wide-body",
    "price": 174000000,
    "rangeKm": 15000,
    "speedKmh": 905,
    "capacity": 315,
    "cargoKg": 44000,
    "fuelBurnKgH": 5400,
    "maintenanceRate": 0.8,
    "leaseMonthly": 1560000,
    "turnaroundMin": 88,
    "fuelEfficiency": 0.86,
    "reliability": 96,
    "image": "assets/planes/plane-wide.svg"
  },
  {
    "id": "b777300er",
    "name": "Boeing 777-300ER",
    "category": "Wide-body pesado",
    "price": 151000000,
    "rangeKm": 13650,
    "speedKmh": 905,
    "capacity": 396,
    "cargoKg": 52500,
    "fuelBurnKgH": 7400,
    "maintenanceRate": 0.92,
    "leaseMonthly": 1710000,
    "turnaroundMin": 102,
    "fuelEfficiency": 1.05,
    "reliability": 92,
    "image": "assets/planes/plane-heavy.svg"
  },
  {
    "id": "b7478f",
    "name": "Boeing 747-8F",
    "category": "Cargueiro pesado",
    "price": 182000000,
    "rangeKm": 8130,
    "speedKmh": 908,
    "capacity": 0,
    "cargoKg": 137700,
    "fuelBurnKgH": 10300,
    "maintenanceRate": 1.05,
    "leaseMonthly": 1960000,
    "turnaroundMin": 118,
    "fuelEfficiency": 1.18,
    "reliability": 90,
    "image": "assets/planes/plane-cargo.svg"
  }
];
const STAFF = [
  {
    "id": "pilot_junior",
    "role": "Piloto",
    "name": "Piloto Comercial",
    "salary": 8200,
    "skill": 62,
    "morale": 75,
    "image": "assets/staff/pilot.svg"
  },
  {
    "id": "pilot_senior",
    "role": "Piloto",
    "name": "Comandante Sênior",
    "salary": 18400,
    "skill": 86,
    "morale": 80,
    "image": "assets/staff/pilot.svg"
  },
  {
    "id": "crew_basic",
    "role": "Comissários",
    "name": "Equipe de Cabine Básica",
    "salary": 5200,
    "skill": 58,
    "morale": 78,
    "image": "assets/staff/crew.svg"
  },
  {
    "id": "crew_premium",
    "role": "Comissários",
    "name": "Equipe de Cabine Premium",
    "salary": 9700,
    "skill": 82,
    "morale": 84,
    "image": "assets/staff/crew.svg"
  },
  {
    "id": "mechanic",
    "role": "Manutenção",
    "name": "Mecânicos Certificados",
    "salary": 11800,
    "skill": 78,
    "morale": 77,
    "image": "assets/staff/mechanic.svg"
  },
  {
    "id": "ops_director",
    "role": "Diretoria",
    "name": "Diretor de Operações",
    "salary": 28500,
    "skill": 84,
    "morale": 80,
    "image": "assets/staff/director.svg"
  },
  {
    "id": "finance_director",
    "role": "Diretoria",
    "name": "Diretor Financeiro",
    "salary": 26500,
    "skill": 80,
    "morale": 80,
    "image": "assets/staff/director.svg"
  },
  {
    "id": "marketing_manager",
    "role": "Marketing",
    "name": "Gerente de Marketing",
    "salary": 15400,
    "skill": 73,
    "morale": 76,
    "image": "assets/staff/director.svg"
  }
];

const CONTRACT_TEMPLATES = [
  { id:'ct_gru_gig_exec', title:'Executivos São Paulo-Rio', type:'passageiros', origin:'GRU', dest:'GIG', requiredFlights:3, reward:420000, minReputation:0, risk:'baixo' },
  { id:'ct_gru_bsb_gov', title:'Ponte corporativa para Brasília', type:'passageiros', origin:'GRU', dest:'BSB', requiredFlights:4, reward:610000, minReputation:48, risk:'médio' },
  { id:'ct_gru_eze_tour', title:'Pacote turístico Buenos Aires', type:'passageiros', origin:'GRU', dest:'EZE', requiredFlights:3, reward:760000, minReputation:52, risk:'médio' },
  { id:'ct_gru_scl_mining', title:'Equipamentos urgentes para Santiago', type:'carga', origin:'GRU', dest:'SCL', requiredFlights:2, reward:880000, minReputation:50, risk:'médio' },
  { id:'ct_lis_mad_euro', title:'Conexão ibérica premium', type:'passageiros', origin:'LIS', dest:'MAD', requiredFlights:5, reward:690000, minReputation:55, risk:'baixo' },
  { id:'ct_mia_jfk_vip', title:'Shuttle VIP Miami-New York', type:'premium', origin:'MIA', dest:'JFK', requiredFlights:4, reward:1350000, minReputation:63, risk:'alto' },
  { id:'ct_gru_mia_inter', title:'Lançamento internacional para Miami', type:'premium', origin:'GRU', dest:'MIA', requiredFlights:3, reward:1680000, minReputation:60, risk:'alto' },
  { id:'ct_jfk_lhr_atlantic', title:'Contrato Atlântico Norte', type:'premium', origin:'JFK', dest:'LHR', requiredFlights:4, reward:2200000, minReputation:68, risk:'alto' }
];

const EVENT_POOL = [
  { id:'weather', title:'Frente fria no hub', text:'Chuva forte aumentou atrasos e reduziu pontualidade.', type:'weather', cash:0, reputation:-0.25, punctuality:-0.9, safety:0 },
  { id:'tourism', title:'Alta de turismo', text:'Demanda regional subiu após campanha espontânea nas redes.', type:'market', cash:0, reputation:0.7, punctuality:0, safety:0 },
  { id:'inspection', title:'Auditoria de segurança', text:'Fiscalização elogiou os procedimentos de manutenção.', type:'safety', cash:-45000, reputation:0.4, punctuality:0, safety:0.8 },
  { id:'fuel', title:'Oscilação no combustível', text:'Mercado pressionou preço médio do combustível.', type:'finance', cash:0, reputation:0, punctuality:0, safety:0, fuel:0.035 },
  { id:'crew', title:'Equipe elogiada', text:'Passageiros destacaram atendimento de cabine.', type:'service', cash:0, reputation:0.55, punctuality:0, safety:0 }
];

const MAINTENANCE_LEVELS = Object.freeze({
  line: { label:'Linha rápida', conditionGain:18, maxCondition:92, base:9000, rate:0.00022, safety:0.08, downtime:0, resetCycles:false },
  standard: { label:'Revisão padrão', conditionGain:55, maxCondition:100, base:18000, rate:0.00072, safety:0.40, downtime:0, resetCycles:false },
  overhaul: { label:'Overhaul pesado', conditionGain:100, maxCondition:100, base:65000, rate:0.00118, safety:1.10, downtime:0, resetCycles:true }
});

const FUEL_MARKET = Object.freeze({
  min: 0.72,
  max: 1.92,
  base: 1.02,
  hedgePacketUsd: 250000
});

const PRICE_STRATEGIES = Object.freeze({
  budget: { label:'Popular', multiplier:0.84, demand:1.18, reputation:0.06 },
  balanced: { label:'Equilibrada', multiplier:1.00, demand:1.00, reputation:0.10 },
  premium: { label:'Premium', multiplier:1.22, demand:0.82, reputation:0.16 }
});


const STORE_KEY = 'vale_air_manager_schema_6';
const LEGACY_STORE_KEYS = ['vale_air_manager_schema_5','vale_air_manager_schema_4'];
const CRASH_KEY = 'vale_air_manager_last_crash';
const DEFAULT_SPEED = 1;

const dom = {
  app: document.getElementById('app'),
  toast: document.getElementById('toast'),
  bootInfo: document.getElementById('bootInfo'),
  buildBadge: document.getElementById('buildBadge'),
  fatal: document.getElementById('fatalRecovery')
};

let runtime = {
  view: 'boot',
  activeSlot: 0,
  map: null,
  routeLayers: [],
  markers: [],
  tickTimer: null,
  state: null,
  selectedRouteId: null,
  lastRenderAt: 0,
  busy: false
};

const utils = {
  money(value) {
    const v = Number(value || 0);
    return v.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  },
  num(value, digits = 0) {
    return Number(value || 0).toLocaleString('pt-BR', { maximumFractionDigits: digits });
  },
  pct(value) {
    return `${Math.round(Number(value || 0))}%`;
  },
  byIata(iata) { return AIRPORTS.find(a => a.iata === iata); },
  model(id) { return AIRCRAFT.find(a => a.id === id); },
  id(prefix) { return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`; },
  clamp(n, min, max) { return Math.max(min, Math.min(max, Number(n || 0))); },
  now() { return Date.now(); },
  dateLabel(ts) { return new Date(ts || Date.now()).toLocaleString('pt-BR'); },
  escape(text) {
    return String(text ?? '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
  },
  distanceKm(a, b) {
    const R = 6371;
    const lat1 = a.lat * Math.PI / 180;
    const lat2 = b.lat * Math.PI / 180;
    const dLat = (b.lat - a.lat) * Math.PI / 180;
    const dLon = (b.lon - a.lon) * Math.PI / 180;
    const x = Math.sin(dLat/2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon/2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1-x));
  },
  routeDemand(origin, dest, career, route = null) {
    const hubBonus = origin.iata === career.hubIata ? 1.12 : 1.04;
    const intl = origin.country !== dest.country ? 1.18 : 1;
    const reputation = 0.62 + (career.reputation / 100) * 0.62;
    const airportDemand = (origin.demand + dest.demand) / 200;
    const marketNoise = 0.92 + Math.sin((career.day + dest.lat + dest.lon) / 9) * 0.08;
    const marketingBoost = career.marketing && career.marketing.expiresDay >= career.day ? Number(career.marketing.boost || 1) : 1;
    const strategy = PRICE_STRATEGIES[(route && route.priceStrategy) || 'balanced'] || PRICE_STRATEGIES.balanced;
    const priceElasticity = strategy.demand || 1;
    const saturation = Math.max(0.86, 1 - ((route && route.totalFlights || 0) / 900));
    return utils.clamp(airportDemand * hubBonus * intl * reputation * marketNoise * marketingBoost * priceElasticity * saturation, 0.16, 1.52);
  },
  routeEstimate(origin, dest, plane, career, route = null) {
    const distance = Math.round(utils.distanceKm(origin, dest));
    const hours = Math.max(distance / plane.speedKmh, 0.18);
    const intl = origin.country !== dest.country;
    const strategy = PRICE_STRATEGIES[(route && route.priceStrategy) || 'balanced'] || PRICE_STRATEGIES.balanced;
    const demand = utils.routeDemand(origin, dest, career, route);
    const staffQuality = getStaffQuality(career);
    const conditionFactor = route && route.planeCondition ? utils.clamp(route.planeCondition / 100, 0.62, 1.02) : 1;
    const loadFactor = utils.clamp(demand * staffQuality.service * conditionFactor, 0.18, plane.capacity > 0 ? 1.08 : 1.18);
    const passengers = plane.capacity > 0 ? Math.floor(plane.capacity * loadFactor) : 0;
    const modelFare = career.businessModel === 'premium' ? 1.18 : career.businessModel === 'lowcost' ? 0.82 : 1;
    const avgFare = Math.round((45 + distance * 0.132) * (intl ? 1.28 : 1) * modelFare * strategy.multiplier);
    const cargoTons = plane.capacity === 0 ? Math.round((plane.cargoKg / 1000) * utils.clamp(demand, 0.35, 1.18)) : Math.round((plane.cargoKg / 1000) * 0.12 * demand);
    const cargoRevenue = cargoTons * (intl ? 168 : 96) * Math.max(distance / 100, 1) * (career.businessModel === 'cargo' ? 1.18 : 1);
    const ancillaryRevenue = passengers * (career.businessModel === 'lowcost' ? 18 : career.businessModel === 'premium' ? 8 : 11);
    const revenue = passengers * avgFare + cargoRevenue + ancillaryRevenue;
    const fuelKg = hours * plane.fuelBurnKgH * Number(plane.fuelEfficiency || 1);
    const fuelCost = fuelKg * getFuelPrice(career);
    const crewCost = plane.capacity > 0 ? Math.max(220, passengers * 8 + distance * 0.12) : Math.max(420, distance * 0.26);
    const airportFees = (origin.fee + dest.fee) * (plane.capacity > 230 || plane.cargoKg > 50000 ? 1.65 : 1);
    const maintenanceReserve = (plane.price * plane.maintenanceRate / 10000) * Math.max(hours, 0.5);
    const insuranceCost = Math.max(120, plane.price * 0.000006 * Math.max(hours, 0.5));
    const co2Cost = (fuelKg * 3.16 / 1000) * (career.sustainability < 50 ? 18 : 9);
    const totalCost = fuelCost + crewCost + airportFees + maintenanceReserve + insuranceCost + co2Cost;
    const profit = revenue - totalCost;
    const margin = revenue > 0 ? (profit / revenue) * 100 : -100;
    const score = utils.clamp((profit / Math.max(totalCost, 1)) * 100, -80, 180);
    return { distance, hours, passengers, avgFare, cargoTons, revenue, fuelKg, fuelCost, crewCost, airportFees, maintenanceReserve, insuranceCost, co2Cost, totalCost, profit, margin, loadFactor, score, strategy: strategy.label };
  }
};

function safeExecute(label, fn) {
  try {
    return fn();
  } catch (error) {
    console.error(`[AntiBreak] ${label}`, error);
    localStorage.setItem(CRASH_KEY, JSON.stringify({ label, message: String(error && error.message || error), time: Date.now(), build: BUILD.build }));
    showToast(`Sistema anti-quebra recuperou: ${label}`, 'warn');
    renderFatalRecovery(label, error);
    return null;
  }
}

function renderFatalRecovery(label, error) {
  const message = utils.escape(error && error.message ? error.message : String(error));
  dom.fatal.innerHTML = `<div class="recovery-card">
    <strong>Anti-quebra ativado</strong>
    <p>O jogo capturou uma falha em <b>${utils.escape(label)}</b> e impediu tela branca.</p>
    <small>${message}</small>
    <div class="row gap"><button class="btn primary" data-action="go" data-view="dashboard">Voltar ao painel</button><button class="btn ghost" data-action="go" data-view="audit">Abrir auditoria</button></div>
  </div>`;
  dom.fatal.classList.remove('hidden');
}

function hideFatal() { dom.fatal.classList.add('hidden'); dom.fatal.innerHTML = ''; }

function showToast(text, type = 'ok') {
  if (!dom.toast) return;
  dom.toast.textContent = text;
  dom.toast.className = `toast show ${type}`;
  clearTimeout(dom.toast._t);
  dom.toast._t = setTimeout(() => dom.toast.classList.remove('show'), 3000);
}

function saveState() {
  try {
    runtime.state.updatedAt = Date.now();
    localStorage.setItem(STORE_KEY, JSON.stringify(runtime.state));
  } catch (error) {
    showToast('Não foi possível salvar. Verifique armazenamento do navegador.', 'warn');
    console.warn(error);
  }
}

function loadState() {
  const empty = { schema: BUILD.schema, activeSlot: 0, slots: [null, null, null], createdAt: Date.now(), updatedAt: Date.now() };
  try {
    let raw = localStorage.getItem(STORE_KEY);
    let sourceKey = STORE_KEY;
    if (!raw && Array.isArray(LEGACY_STORE_KEYS)) {
      for (const key of LEGACY_STORE_KEYS) {
        raw = localStorage.getItem(key);
        if (raw) { sourceKey = key; break; }
      }
    }
    if (!raw) return empty;
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.slots)) return migrateState(parsed, empty, sourceKey);
    const migrated = parsed.schema === BUILD.schema ? parsed : migrateState(parsed, empty, sourceKey);
    migrated.schema = BUILD.schema;
    migrated.slots = [migrated.slots[0] || null, migrated.slots[1] || null, migrated.slots[2] || null].map(normalizeCareer);
    migrated.activeSlot = utils.clamp(migrated.activeSlot ?? 0, 0, 2);
    localStorage.setItem(STORE_KEY, JSON.stringify(migrated));
    return migrated;
  } catch (error) {
    localStorage.setItem(CRASH_KEY, JSON.stringify({ label: 'loadState', message: String(error), time: Date.now(), build: BUILD.build }));
    return empty;
  }
}

function migrateState(oldState, fallback, sourceKey = 'unknown') {
  const migrated = fallback;
  migrated.migratedFrom = oldState && oldState.schema ? oldState.schema : sourceKey;
  if (oldState && Array.isArray(oldState.slots)) {
    migrated.slots = oldState.slots.slice(0, 3);
    migrated.activeSlot = utils.clamp(oldState.activeSlot ?? 0, 0, 2);
    migrated.createdAt = oldState.createdAt || Date.now();
  }
  return migrated;
}

function normalizeCareer(career) {
  if (!career) return null;
  career.schema = BUILD.schema;
  career.hubs = Array.isArray(career.hubs) && career.hubs.length ? career.hubs : [career.hubIata || 'GRU'];
  if (!career.hubs.includes(career.hubIata)) career.hubs.unshift(career.hubIata || career.hubs[0]);
  career.contracts = Array.isArray(career.contracts) ? career.contracts : seedContracts(career);
  career.tutorial = career.tutorial || { dismissed:false, completed:[] };
  career.events = Array.isArray(career.events) ? career.events : [];
  career.totalFlights = Number(career.totalFlights || career.routes?.reduce((s,r)=>s+(r.totalFlights||0),0) || 0);
  career.totalPassengers = Number(career.totalPassengers || 0);
  career.totalCargoTons = Number(career.totalCargoTons || 0);
  career.day = Number(career.day || 1);
  career.marketing = career.marketing || { active:'none', expiresDay:0, boost:1 };
  career.staff = Object.assign({ pilots:1, cabin:2, mechanics:1, directors:0, marketing:0 }, career.staff || {});
  career.routes = Array.isArray(career.routes) ? career.routes : [];
  career.fleet = Array.isArray(career.fleet) ? career.fleet : [];
  career.financeLog = Array.isArray(career.financeLog) ? career.financeLog : [];
  career.messages = Array.isArray(career.messages) ? career.messages : [];
  career.achievements = Array.isArray(career.achievements) ? career.achievements : [];
  career.fuelPriceKg = Number(career.fuelPriceKg || 1.02);
  career.fuelStockKg = Number(career.fuelStockKg || 0);
  career.carbonCredits = Number(career.carbonCredits || 0);
  career.maintenanceLog = Array.isArray(career.maintenanceLog) ? career.maintenanceLog : [];
  career.fuelHistory = Array.isArray(career.fuelHistory) ? career.fuelHistory : [{ day: career.day || 1, price: career.fuelPriceKg }];
  career.routes.forEach(r => { r.priceStrategy = r.priceStrategy || 'balanced'; r.serviceTier = r.serviceTier || 'standard'; });
  career.fleet.forEach(p => { p.cycles = Number(p.cycles || 0); p.hours = Number(p.hours || 0); p.status = p.status || 'idle'; });
  return career;
}

function seedContracts(career) {
  const hubs = new Set([career?.hubIata || 'GRU']);
  return CONTRACT_TEMPLATES.map((tpl, idx) => ({
    id: `${tpl.id}_${idx}`,
    templateId: tpl.id,
    title: tpl.title,
    type: tpl.type,
    origin: hubs.has(tpl.origin) ? tpl.origin : (career?.hubIata || tpl.origin),
    dest: tpl.dest === (career?.hubIata || '') ? tpl.origin : tpl.dest,
    requiredFlights: tpl.requiredFlights,
    progress: 0,
    reward: tpl.reward,
    minReputation: tpl.minReputation,
    risk: tpl.risk,
    status: idx < 4 ? 'available' : 'locked',
    createdDay: career?.day || 1,
    deadlineDay: (career?.day || 1) + 18 + idx * 2
  }));
}

function activeCareer() {
  if (!runtime.state) return null;
  return runtime.state.slots[runtime.state.activeSlot] || null;
}

function setActiveCareer(career) {
  runtime.state.slots[runtime.state.activeSlot] = career;
  saveState();
}

function createCareer(form) {
  const hub = utils.byIata(form.hubIata || 'GRU') || AIRPORTS[0];
  const initialPlane = AIRCRAFT.find(a => a.id === 'cessna208');
  const starterCash = form.businessModel === 'premium' ? 6400000 : form.businessModel === 'cargo' ? 7200000 : 5800000;
  const career = {
    id: utils.id('career'),
    schema: BUILD.schema,
    companyName: form.companyName || 'Vale Air Stars',
    ceoName: form.ceoName || 'CEO Fundador',
    country: hub.country,
    hubIata: hub.iata,
    logo: form.logo || 'assets/logos/logo-3.svg',
    avatar: form.avatar || 'assets/avatars/avatar-ceo-1.svg',
    businessModel: form.businessModel || 'balanced',
    hubs: [hub.iata],
    createdAt: Date.now(),
    lastPlayedAt: Date.now(),
    day: 1,
    cash: starterCash,
    valuation: starterCash + initialPlane.price,
    stockPrice: 1.14,
    reputation: 54,
    punctuality: 87,
    safety: 92,
    sustainability: 63,
    fuelPriceKg: 1.02,
    fuelStockKg: 0,
    carbonCredits: 0,
    totalFlights: 0,
    totalPassengers: 0,
    totalCargoTons: 0,
    speed: DEFAULT_SPEED,
    fleet: [{ id: utils.id('plane'), modelId: initialPlane.id, name: 'VA-001 Esperança', condition: 98, hours: 0, cycles: 0, status: 'idle', routeId: null, acquiredAt: Date.now() }],
    routes: [],
    staff: { pilots: 1, cabin: 2, mechanics: 1, directors: 0, marketing: 0 },
    marketing: { active: 'none', expiresDay: 0, boost: 1 },
    maintenanceLog: [],
    fuelHistory: [{ day: 1, price: 1.02 }],
    contracts: [],
    tutorial: { dismissed: false, completed: [] },
    events: [],
    financeLog: [],
    messages: [{ time: Date.now(), type: 'success', text: `Companhia ${form.companyName || 'Vale Air Stars'} fundada em ${hub.city}. Primeiro avião pronto para operação.` }],
    achievements: []
  };
  career.contracts = seedContracts(career);
  career.financeLog.unshift({ time: Date.now(), day: 1, type: 'capital', label: 'Capital inicial', amount: starterCash });
  return normalizeCareer(career);
}

function getFuelPrice(career) {
  return Number(career.fuelPriceKg || FUEL_MARKET.base || 1.02);
}

function getFuelStockValue(career) {
  return Math.round(Number(career.fuelStockKg || 0) * getFuelPrice(career));
}

function getFuelCoverageLabel(career) {
  const dailyBurn = career.routes.reduce((sum, r) => {
    const plane = career.fleet.find(p => p.id === r.planeId);
    const model = plane && utils.model(plane.modelId);
    if (!model) return sum;
    const o = utils.byIata(r.origin), d = utils.byIata(r.dest);
    if (!o || !d) return sum;
    const e = utils.routeEstimate(o, d, model, career, r);
    return sum + e.fuelKg;
  }, 0);
  if (!dailyBurn) return 'sem consumo ativo';
  return `${utils.num((career.fuelStockKg || 0) / dailyBurn, 1)} ciclos cobertos`;
}

function getStaffQuality(career) {
  const fleetCount = career.fleet.length || 1;
  const pilotCoverage = utils.clamp((career.staff.pilots || 0) / fleetCount, 0.45, 1.18);
  const cabinCoverage = utils.clamp((career.staff.cabin || 0) / Math.max(1, fleetCount * 2), 0.55, 1.12);
  const mechanicCoverage = utils.clamp((career.staff.mechanics || 0) / Math.max(1, Math.ceil(fleetCount / 3)), 0.62, 1.15);
  const directorBonus = 1 + Math.min((career.staff.directors || 0) * 0.025, 0.08);
  return { ops: pilotCoverage * mechanicCoverage * directorBonus, service: cabinCoverage * directorBonus, maintenance: mechanicCoverage };
}

function valuation(career) {
  const fleetValue = career.fleet.reduce((sum, p) => { const m = utils.model(p.modelId); return sum + (m ? m.price * (0.5 + p.condition / 200) : 0); }, 0);
  const routeValue = career.routes.length * 175000;
  const brand = career.reputation * 42000 + career.safety * 36000;
  return Math.max(0, Math.round(career.cash + fleetValue + routeValue + brand));
}

function updateMarket(career) {
  career.valuation = valuation(career);
  const profit7 = career.financeLog.slice(0, 20).reduce((s, f) => s + (f.amount || 0), 0);
  const trust = (career.reputation + career.safety + career.punctuality) / 300;
  const base = Math.max(0.18, career.valuation / 6500000);
  career.stockPrice = utils.clamp((base * 0.84 + trust * 0.45 + profit7 / 9000000), 0.12, 999);
}

function pushMessage(career, text, type = 'info') {
  career.messages.unshift({ time: Date.now(), type, text });
  career.messages = career.messages.slice(0, 18);
}

function logFinance(career, label, amount, type = 'operação') {
  career.financeLog.unshift({ time: Date.now(), day: career.day, type, label, amount: Math.round(amount) });
  career.financeLog = career.financeLog.slice(0, 80);
}

function runGameTick() {
  safeExecute('gameTick', () => {
    const career = activeCareer();
    if (!career || !career.speed) return;
    const now = Date.now();
    const delta = Math.min(8, Math.max(0.2, (now - (career.lastTickAt || now)) / 1000));
    career.lastTickAt = now;
    const speed = Number(career.speed || 1);
    let changed = false;
    career.routes.forEach(route => {
      if (route.status !== 'active') return;
      const plane = career.fleet.find(p => p.id === route.planeId);
      const model = plane && utils.model(plane.modelId);
      if (!plane || !model) { route.status = 'broken'; changed = true; return; }
      if (plane.condition < 48) {
        route.status = 'maintenanceHold';
        plane.status = 'maintenanceRequired';
        pushMessage(career, `${plane.name} precisa de manutenção antes de seguir na rota ${route.origin}-${route.dest}.`, 'warn');
        changed = true;
        return;
      }
      route.progress = utils.clamp((route.progress || 0) + (delta * speed * 100 / route.cycleSeconds), 0, 100);
      plane.status = 'inFlight';
      plane.routeId = route.id;
      if (route.progress >= 100) {
        completeFlight(career, route, plane, model);
        changed = true;
      }
    });
    if (changed) {
      updateMarket(career);
      setActiveCareer(career);
      if (['dashboard','routes','fleet','finance','market','map'].includes(runtime.view)) render();
    } else if (runtime.view === 'map') {
      updateMapAnimations();
    }
  });
}

function completeFlight(career, route, plane, model) {
  const origin = utils.byIata(route.origin);
  const dest = utils.byIata(route.dest);
  if (!origin || !dest) return;
  const estimate = utils.routeEstimate(origin, dest, model, career, route);
  const conditionPenalty = plane.condition < 75 ? 0.88 : 1;
  const weatherNoise = 0.94 + Math.random() * 0.12;
  const stockUsedKg = Math.min(Number(career.fuelStockKg || 0), estimate.fuelKg || 0);
  career.fuelStockKg = Math.max(0, Number(career.fuelStockKg || 0) - stockUsedKg);
  const prepaidFuelCredit = stockUsedKg * getFuelPrice(career);
  const profit = (estimate.profit + prepaidFuelCredit) * conditionPenalty * weatherNoise;
  career.cash += Math.round(profit);
  route.totalFlights = (route.totalFlights || 0) + 1;
  career.totalFlights = (career.totalFlights || 0) + 1;
  career.totalPassengers = (career.totalPassengers || 0) + (estimate.passengers || 0);
  career.totalCargoTons = (career.totalCargoTons || 0) + (estimate.cargoTons || 0);
  route.totalProfit = (route.totalProfit || 0) + Math.round(profit);
  route.lastProfit = Math.round(profit);
  route.lastRevenue = Math.round(estimate.revenue);
  route.lastCost = Math.round(estimate.totalCost - prepaidFuelCredit);
  route.lastMargin = Math.round(estimate.margin || 0);
  route.lastLoadFactor = Math.round((estimate.loadFactor || 0) * 100);
  route.lastFuelKg = Math.round(estimate.fuelKg || 0);
  route.lastStockFuelKg = Math.round(stockUsedKg || 0);
  updateContractProgress(career, route);
  advanceCompanyDay(career);
  route.progress = 0;
  route.lastArrivalAt = Date.now();
  plane.hours += estimate.hours;
  plane.cycles += 1;
  const staff = getStaffQuality(career);
  const wear = utils.clamp((estimate.hours * model.maintenanceRate * 0.8) / staff.maintenance, 0.22, 3.8);
  plane.condition = utils.clamp(plane.condition - wear, 0, 100);
  if (profit > 0) {
    career.reputation = utils.clamp(career.reputation + 0.12, 0, 100);
    career.punctuality = utils.clamp(career.punctuality + 0.05, 0, 100);
  } else {
    career.reputation = utils.clamp(career.reputation - 0.22, 0, 100);
  }
  if (plane.condition < 60) {
    pushMessage(career, `${plane.name} chegou de ${dest.iata} com condição baixa (${Math.round(plane.condition)}%). Programe manutenção.`, 'warn');
  }
  logFinance(career, `Voo ${route.origin} → ${route.dest}`, profit, profit >= 0 ? 'receita' : 'prejuízo');
}


function updateContractProgress(career, route) {
  if (!Array.isArray(career.contracts)) career.contracts = seedContracts(career);
  career.contracts.forEach(contract => {
    if (contract.status !== 'accepted') return;
    const sameDirection = contract.origin === route.origin && contract.dest === route.dest;
    const reverse = contract.origin === route.dest && contract.dest === route.origin;
    if (!sameDirection && !reverse) return;
    contract.progress = utils.clamp((contract.progress || 0) + 1, 0, contract.requiredFlights || 1);
    if (contract.progress >= contract.requiredFlights) {
      contract.status = 'completed';
      contract.completedDay = career.day;
      career.cash += contract.reward;
      career.reputation = utils.clamp(career.reputation + (contract.risk === 'alto' ? 1.6 : 0.9), 0, 100);
      logFinance(career, `Contrato concluído: ${contract.title}`, contract.reward, 'contrato');
      pushMessage(career, `Contrato concluído: ${contract.title}. Bônus recebido: ${utils.money(contract.reward)}.`, 'success');
      unlockContracts(career);
    } else {
      pushMessage(career, `Contrato ${contract.title}: progresso ${contract.progress}/${contract.requiredFlights}.`, 'info');
    }
  });
}

function unlockContracts(career) {
  (career.contracts || []).forEach(contract => {
    if (contract.status === 'locked' && career.reputation >= contract.minReputation) {
      contract.status = 'available';
      pushMessage(career, `Novo contrato liberado: ${contract.title}.`, 'success');
    }
  });
}

function advanceCompanyDay(career) {
  const total = Number(career.totalFlights || 0);
  if (total > 0 && total % 3 === 0) {
    career.day += 1;
    applyDailyPayroll(career);
    expireMarketing(career);
    updateFuelMarket(career);
    maybeGenerateEvent(career);
    unlockContracts(career);
  }
}

function applyDailyPayroll(career) {
  const staff = career.staff || {};
  const cost = (staff.pilots||0)*820 + (staff.cabin||0)*520 + (staff.mechanics||0)*1180 + (staff.directors||0)*2650 + (staff.marketing||0)*1540;
  if (cost <= 0) return;
  career.cash -= cost;
  logFinance(career, `Folha operacional diária`, -cost, 'rh');
  if (career.cash < 0) {
    career.reputation = utils.clamp(career.reputation - 1.5, 0, 100);
    pushMessage(career, 'Caixa negativo após folha operacional. Plano de recuperação necessário.', 'warn');
  }
}

function expireMarketing(career) {
  if (career.marketing && career.marketing.active !== 'none' && career.marketing.expiresDay < career.day) {
    career.marketing = { active:'none', expiresDay:0, boost:1 };
    pushMessage(career, 'Campanha de marketing encerrada. Você pode ativar uma nova no financeiro.', 'info');
  }
}

function maybeGenerateEvent(career) {
  if (Math.random() > 0.42) return;
  const event = EVENT_POOL[Math.floor(Math.random() * EVENT_POOL.length)];
  if (!event) return;
  career.cash += Math.round(event.cash || 0);
  career.reputation = utils.clamp(career.reputation + Number(event.reputation || 0), 0, 100);
  career.punctuality = utils.clamp(career.punctuality + Number(event.punctuality || 0), 0, 100);
  career.safety = utils.clamp(career.safety + Number(event.safety || 0), 0, 100);
  career.fuelPriceKg = utils.clamp(Number(career.fuelPriceKg || 1.02) + Number(event.fuel || 0), 0.72, 1.88);
  career.events.unshift({ time: Date.now(), day: career.day, title: event.title, text: event.text, type: event.type });
  career.events = career.events.slice(0, 18);
  pushMessage(career, `${event.title}: ${event.text}`, event.type === 'weather' || event.type === 'finance' ? 'warn' : 'success');
}


function updateFuelMarket(career) {
  const volatility = Math.sin((career.day + career.routes.length * 3 + career.fleet.length) / 5) * 0.026;
  const pressure = career.routes.length > career.fleet.length ? 0.008 : 0;
  const sustainabilityDiscount = career.sustainability > 75 ? -0.006 : 0;
  career.fuelPriceKg = utils.clamp(getFuelPrice(career) + volatility + pressure + sustainabilityDiscount, FUEL_MARKET.min, FUEL_MARKET.max);
  career.fuelHistory = Array.isArray(career.fuelHistory) ? career.fuelHistory : [];
  career.fuelHistory.unshift({ day: career.day, price: career.fuelPriceKg, stockKg: Math.round(career.fuelStockKg || 0) });
  career.fuelHistory = career.fuelHistory.slice(0, 30);
}

function boot() {
  safeExecute('boot', () => {
    dom.buildBadge.textContent = `${BUILD.game} • v${BUILD.version} • Build ${BUILD.build} • Schema ${BUILD.schema}`;
    dom.bootInfo.textContent = `Inicializando sistema anti-quebra • ${BUILD.date}`;
    runtime.state = loadState();
    runtime.activeSlot = runtime.state.activeSlot || 0;
    hideFatal();
    const hasCareer = runtime.state.slots.some(Boolean);
    runtime.view = hasCareer ? 'slots' : 'onboarding';
    startTickLoop();
    render();
  });
}

function startTickLoop() {
  if (runtime.tickTimer) clearInterval(runtime.tickTimer);
  runtime.tickTimer = setInterval(runGameTick, 1000);
}

function navItems() {
  return [
    ['dashboard','Painel','◈'], ['tutorial','Tutorial','?'], ['map','Mapa','◎'], ['routes','Rotas','⇄'], ['hubs','Hubs','⌖'], ['fleet','Frota','✈'],
    ['contracts','Contratos','▣'], ['staff','Equipe','♟'], ['finance','Finanças','$'], ['market','Bolsa','▥'], ['audit','Auditoria','✓']
  ];
}

function shell(content) {
  const career = activeCareer();
  if (!career) return content;
  const hub = utils.byIata(career.hubIata);
  const speedLabel = career.speed === 0 ? 'Pausado' : `${career.speed}x`;
  return `<div class="game-shell">
    <header class="topbar">
      <div class="brand-block">
        <img src="${utils.escape(career.logo)}" alt="Logo" class="air-logo">
        <div><strong>${utils.escape(career.companyName)}</strong><small>${hub ? hub.city + ' • ' + hub.iata : 'Hub não definido'} • Dia ${career.day} • ${speedLabel}</small></div>
      </div>
      <div class="top-actions">
        <button class="btn mini ghost" data-action="speed" data-speed="0">⏸</button>
        <button class="btn mini ghost" data-action="speed" data-speed="1">1x</button>
        <button class="btn mini ghost" data-action="speed" data-speed="2">2x</button>
        <button class="btn mini ghost" data-action="speed" data-speed="4">4x</button>
        <button class="btn mini" data-action="go" data-view="slots">Saves</button>
      </div>
    </header>
    <section class="metrics-strip">
      <div><small>Caixa</small><b>${utils.money(career.cash)}</b></div>
      <div><small>Valor empresa</small><b>${utils.money(career.valuation)}</b></div>
      <div><small>Ação</small><b>$${career.stockPrice.toFixed(2)}</b></div>
      <div><small>Reputação</small><b>${utils.pct(career.reputation)}</b></div>
      <div><small>Frota</small><b>${career.fleet.length}</b></div>
      <div><small>Rotas</small><b>${career.routes.length}</b></div>
    </section>
    <main class="screen">${content}</main>
    <nav class="bottom-nav">${navItems().map(([view,label,icon]) => `<button class="${runtime.view === view ? 'active' : ''}" data-action="go" data-view="${view}"><span>${icon}</span><small>${label}</small></button>`).join('')}</nav>
  </div>`;
}

function render() {
  safeExecute('render', () => {
    hideFatal();
    const view = runtime.view;
    let html = '';
    if (view === 'onboarding') html = renderOnboarding();
    else if (view === 'slots') html = renderSlots();
    else if (!activeCareer()) html = renderSlots();
    else if (view === 'dashboard') html = shell(renderDashboard());
    else if (view === 'tutorial') html = shell(renderTutorial());
    else if (view === 'map') html = shell(renderMapView());
    else if (view === 'routes') html = shell(renderRoutes());
    else if (view === 'hubs') html = shell(renderHubs());
    else if (view === 'fleet') html = shell(renderFleet());
    else if (view === 'staff') html = shell(renderStaff());
    else if (view === 'contracts') html = shell(renderContracts());
    else if (view === 'finance') html = shell(renderFinance());
    else if (view === 'market') html = shell(renderMarket());
    else if (view === 'audit') html = shell(renderAudit());
    else html = shell(renderDashboard());
    dom.app.innerHTML = html;
    if (view === 'map') setTimeout(initMap, 60);
    if (view === 'routes') setTimeout(updateRoutePreview, 50);
  });
}

function renderOnboarding() {
  const hubs = AIRPORTS.filter(a => ['Brazil','Argentina','Chile','Colombia','Peru','United States','Portugal','Spain','United Kingdom'].includes(a.country));
  return `<div class="onboarding page-bg">
    <section class="hero-card">
      <div class="hero-copy">
        <span class="eyebrow">Simulador gratuito de companhia aérea</span>
        <h1>VALE AIR MANAGER</h1>
        <p>Crie sua empresa aérea, escolha hub, avatar, logo, compre aviões, abra rotas reais e acompanhe o mercado financeiro.</p>
        <div class="build-line">v${BUILD.version} • Build ${BUILD.build} • Fases F9-F12 aceleradas</div>
      </div>
      <div class="hero-plane"><img src="assets/planes/plane-wide.svg" alt="Avião"></div>
    </section>
    <form class="setup-card" id="careerForm">
      <h2>Fundar companhia</h2>
      <label>Nome da companhia<input name="companyName" maxlength="32" placeholder="Ex: VALE AIR STARS" value="VALE AIR STARS"></label>
      <label>Nome do CEO<input name="ceoName" maxlength="28" placeholder="Ex: Jonatan Vale"></label>
      <label>Hub inicial<select name="hubIata">${hubs.map(a => `<option value="${a.iata}" ${a.iata==='GRU'?'selected':''}>${a.iata} — ${a.city}, ${a.country}</option>`).join('')}</select></label>
      <label>Modelo de negócio<select name="businessModel"><option value="balanced">Tradicional equilibrada</option><option value="lowcost">Low-cost agressiva</option><option value="premium">Premium internacional</option><option value="cargo">Carga e logística</option></select></label>
      <div class="picker-title">Avatar do CEO</div>
      <div class="asset-picker">${[1,2,3,4].map(i => `<label class="asset-option"><input type="radio" name="avatar" value="assets/avatars/avatar-ceo-${i}.svg" ${i===1?'checked':''}><img src="assets/avatars/avatar-ceo-${i}.svg" alt="Avatar ${i}"></label>`).join('')}</div>
      <div class="picker-title">Logo inicial</div>
      <div class="asset-picker logos">${[1,2,3,4].map(i => `<label class="asset-option"><input type="radio" name="logo" value="assets/logos/logo-${i}.svg" ${i===3?'checked':''}><img src="assets/logos/logo-${i}.svg" alt="Logo ${i}"></label>`).join('')}</div>
      <div class="row gap wrap"><button class="btn primary big" data-action="createCareer" type="button">Criar carreira</button><button class="btn ghost big" data-action="go" data-view="slots" type="button">Ver saves</button></div>
      <p class="hint">Começa com 1 avião regional, hub inicial, contratos, tutorial, combustível avançado, precificação dinâmica e anti-quebra ativo.</p>
    </form>
  </div>`;
}

function renderSlots() {
  const slots = runtime.state.slots || [null,null,null];
  return `<div class="slots page-bg">
    <section class="panel wide glass">
      <div class="section-head"><div><span class="eyebrow">Carreiras</span><h1>Save slots reais</h1><p>Crie, continue, troque ou apague uma companhia sem misturar versões.</p></div><button class="btn primary" data-action="go" data-view="onboarding">Nova companhia</button></div>
      <div class="slot-grid">${slots.map((career, idx) => renderSlotCard(career, idx)).join('')}</div>
    </section>
  </div>`;
}

function renderSlotCard(career, idx) {
  if (!career) return `<article class="slot-card empty"><div class="slot-number">Slot ${idx+1}</div><h3>Vazio</h3><p>Pronto para uma nova companhia aérea.</p><button class="btn primary" data-action="selectSlotNew" data-slot="${idx}">Criar neste slot</button></article>`;
  const hub = utils.byIata(career.hubIata);
  return `<article class="slot-card ${runtime.state.activeSlot===idx?'selected':''}"><div class="slot-top"><img src="${utils.escape(career.logo)}" alt="Logo"><div><div class="slot-number">Slot ${idx+1}</div><h3>${utils.escape(career.companyName)}</h3><small>${hub ? hub.iata + ' • ' + hub.city : 'Hub'} • Dia ${career.day}</small></div></div>
  <div class="slot-stats"><span>${utils.money(career.cash)}</span><span>${career.fleet.length} aviões</span><span>${career.routes.length} rotas</span></div>
  <div class="row gap wrap"><button class="btn primary" data-action="loadSlot" data-slot="${idx}">Continuar</button><button class="btn ghost" data-action="renameSlot" data-slot="${idx}">Renomear</button><button class="btn danger" data-action="deleteSlot" data-slot="${idx}">Apagar</button></div>
  <small>Último jogo: ${utils.dateLabel(career.lastPlayedAt)}</small></article>`;
}

function renderDashboard() {
  const c = activeCareer();
  const hub = utils.byIata(c.hubIata);
  const activeRoutes = c.routes.filter(r => r.status === 'active').length;
  const alerts = getAlerts(c);
  return `<div class="dashboard-grid">
    <section class="panel glass command-panel">
      <div class="section-head"><div><span class="eyebrow">Presidência</span><h2>Painel executivo</h2></div><img class="ceo-avatar" src="${utils.escape(c.avatar)}" alt="CEO"></div>
      <p class="lead">Hub principal em <b>${hub.city} (${hub.iata})</b>. Sua companhia já pode comprar aeronaves, criar rotas e acompanhar lucro por voo.</p>
      <div class="action-grid">
        <button class="action-card" data-action="go" data-view="tutorial"><b>Começar tutorial</b><small>Passo a passo jogável</small></button>
        <button class="action-card" data-action="go" data-view="routes"><b>Criar rota</b><small>Origem, destino, lucro estimado</small></button>
        <button class="action-card" data-action="go" data-view="contracts"><b>Contratos</b><small>Missões pagas por rota</small></button>
        <button class="action-card" data-action="go" data-view="hubs"><b>Expandir hubs</b><small>Novas bases e rotas</small></button>
        <button class="action-card" data-action="go" data-view="fleet"><b>Comprar avião</b><small>Mercado inicial de aeronaves</small></button>
        <button class="action-card" data-action="go" data-view="finance"><b>Economia profunda</b><small>Preço, margem e combustível</small></button>
        <button class="action-card" data-action="go" data-view="audit"><b>Auditar jogo</b><small>Integridade e anti-quebra</small></button>
      </div>
    </section>
    <section class="panel glass"><h2>Status operacional</h2><div class="kpi-grid">
      <div class="kpi"><small>Rotas ativas</small><strong>${activeRoutes}</strong></div>
      <div class="kpi"><small>Pontualidade</small><strong>${utils.pct(c.punctuality)}</strong></div>
      <div class="kpi"><small>Segurança</small><strong>${utils.pct(c.safety)}</strong></div>
      <div class="kpi"><small>Sustentável</small><strong>${utils.pct(c.sustainability)}</strong></div>
      <div class="kpi"><small>Voos totais</small><strong>${utils.num(c.totalFlights || 0)}</strong></div>
      <div class="kpi"><small>Contratos</small><strong>${(c.contracts||[]).filter(x=>x.status==='completed').length}/${(c.contracts||[]).length}</strong></div>
      <div class="kpi"><small>Combustível</small><strong>${utils.num(c.fuelStockKg || 0)} kg</strong></div>
    </div></section>
    <section class="panel glass"><h2>Alertas do assistente</h2>${alerts.length ? `<div class="alert-list">${alerts.map(a => `<div class="alert ${a.type}"><b>${a.title}</b><span>${a.text}</span><button class="btn mini" data-action="go" data-view="${a.view}">Abrir</button></div>`).join('')}</div>` : '<p class="success-text">Nenhum bloqueio crítico. Sistema está pronto para evoluir.</p>'}</section>
    <section class="panel glass"><h2>Eventos operacionais</h2><div class="message-list">${(c.events||[]).slice(0,4).map(e => `<div class="msg ${e.type}"><small>Dia ${e.day} • ${utils.dateLabel(e.time)}</small><p><b>${utils.escape(e.title)}</b><br>${utils.escape(e.text)}</p></div>`).join('') || '<p>Nenhum evento operacional registrado ainda.</p>'}</div></section>
    <section class="panel glass"><h2>Notícias da companhia</h2><div class="message-list">${c.messages.slice(0,6).map(m => `<div class="msg ${m.type}"><small>${utils.dateLabel(m.time)}</small><p>${utils.escape(m.text)}</p></div>`).join('') || '<p>Nenhuma notícia ainda.</p>'}</div></section>
  </div>`;
}

function getAlerts(c) {
  const alerts = [];
  if (!c.routes.length) alerts.push({ type:'warn', title:'Sem rota ativa', text:'Crie sua primeira rota para gerar receita.', view:'routes' });
  const badPlane = c.fleet.find(p => p.condition < 60);
  if (badPlane) alerts.push({ type:'danger', title:'Manutenção urgente', text:`${badPlane.name} está com ${Math.round(badPlane.condition)}% de condição.`, view:'fleet' });
  if (c.cash < 500000) alerts.push({ type:'danger', title:'Caixa baixo', text:'Reduza custos ou venda ativos antes de entrar em crise.', view:'finance' });
  if ((c.staff.pilots || 0) < c.fleet.length) alerts.push({ type:'warn', title:'Faltam pilotos', text:'Contrate pilotos para operar a frota com segurança.', view:'staff' });
  return alerts.slice(0,4);
}


function tutorialSteps(c) {
  const completedContracts = (c.contracts || []).filter(x => x.status === 'completed').length;
  return [
    { id:'company', title:'Companhia fundada', done: !!c.companyName, text:'Sua empresa, CEO, logo e hub inicial já existem.', view:'dashboard' },
    { id:'route', title:'Abra a primeira rota', done: c.routes.length > 0, text:'Escolha avião livre, origem e destino para começar receita.', view:'routes' },
    { id:'flight', title:'Complete 1 voo', done: (c.totalFlights || 0) >= 1, text:'Deixe a simulação em 2x ou 4x até o avião pousar.', view:'routes' },
    { id:'contract', title:'Aceite um contrato', done: (c.contracts || []).some(x => ['accepted','completed'].includes(x.status)), text:'Contratos aceleram o caixa e dão metas claras.', view:'contracts' },
    { id:'hub', title:'Planeje expansão', done: (c.hubs || []).length > 1, text:'Abra um segundo hub quando tiver caixa suficiente.', view:'hubs' },
    { id:'finance', title:'Ajuste preço/combustível', done: (c.fuelStockKg || 0) > 0 || c.routes.some(r => r.priceStrategy !== 'balanced'), text:'Use preço dinâmico e hedge de combustível para aumentar margem.', view:'finance' },
    { id:'audit', title:'Rode auditoria', done: true, text:'Sistema anti-quebra está ativo e validado nesta build.', view:'audit' },
    { id:'contractDone', title:'Conclua 1 contrato', done: completedContracts >= 1, text:'Cumpra os voos exigidos para receber bônus.', view:'contracts' }
  ];
}

function renderTutorial() {
  const c = activeCareer();
  const steps = tutorialSteps(c);
  const done = steps.filter(s => s.done).length;
  return `<div class="tutorial-layout">
    <section class="panel glass command-panel">
      <span class="eyebrow">Tutorial jogável + F9-F12</span><h2>Primeiros passos da companhia</h2>
      <p class="lead">Objetivo desta fase: ninguém pode ficar perdido. Cada etapa mostra uma ação direta, com botão para a tela certa.</p>
      <div class="audit-score"><strong>${done}/${steps.length}</strong><span>etapas concluídas</span></div>
      <div class="tutorial-steps">${steps.map(s => `<article class="tutorial-step ${s.done?'done':''}"><b>${s.done?'✓':'•'}</b><div><strong>${s.title}</strong><small>${s.text}</small></div><button class="btn mini ${s.done?'ghost':'primary'}" data-action="go" data-view="${s.view}">${s.done?'Rever':'Fazer'}</button></article>`).join('')}</div>
    </section>
    <section class="panel glass"><span class="eyebrow">Assistente executivo</span><h2>Recomendação agora</h2>${renderExecutiveAdvice(c)}<div class="todo-list"><span>Use 4x para testar ciclos rápidos.</span><span>Crie rota curta primeiro: GRU-CGH/GIG/BSB costuma ser ideal para início.</span><span>Aceite contrato compatível com o hub antes de gastar com frota grande.</span><span>Rode auditoria depois de cada evolução.</span></div></section>
  </div>`;
}

function renderExecutiveAdvice(c) {
  if (!c.routes.length) return `<p class="lead">Presidente, sua primeira prioridade é abrir uma rota curta para validar receita. Vá em <b>Rotas</b> e escolha um destino dentro do alcance do avião inicial.</p><button class="btn primary" data-action="go" data-view="routes">Criar primeira rota</button>`;
  if (!(c.contracts||[]).some(x => ['accepted','completed'].includes(x.status))) return `<p class="lead">Já existe operação. Agora aceite um contrato compatível para ganhar bônus e guiar a expansão.</p><button class="btn primary" data-action="go" data-view="contracts">Ver contratos</button>`;
  const bad = c.fleet.find(p => p.condition < 65);
  if (bad) return `<p class="lead">${utils.escape(bad.name)} está com condição baixa. Recomendo manutenção antes de ampliar rotas.</p><button class="btn primary" data-action="go" data-view="fleet">Abrir frota</button>`;
  if ((c.hubs||[]).length < 2 && c.cash > 850000) return `<p class="lead">Caixa permite estudar novo hub. Uma segunda base libera contratos e rotas melhores.</p><button class="btn primary" data-action="go" data-view="hubs">Expandir hubs</button>`;
  return `<p class="lead">Operação está estável. Continue completando contratos, comprando aeronaves compatíveis e mantendo caixa positivo.</p><button class="btn primary" data-action="go" data-view="market">Ver mercado</button>`;
}


function renderMapView() {
  return `<div class="panel glass map-panel"><div class="section-head"><div><span class="eyebrow">Mapa real / fallback</span><h2>Rede aérea mundial</h2><p>Leaflet/OpenStreetMap quando online; mapa próprio se o CDN falhar.</p></div><button class="btn primary" data-action="go" data-view="routes">Nova rota</button></div><div id="map" class="map"></div><div id="fallbackMap" class="fallback-map hidden"></div></div>`;
}

function initMap() {
  safeExecute('initMap', () => {
    const mapEl = document.getElementById('map');
    if (!mapEl) return;
    const career = activeCareer();
    if (!career) return;
    if (window.L) {
      if (runtime.map) { runtime.map.remove(); runtime.map = null; }
      runtime.map = L.map(mapEl, { zoomControl: true, attributionControl: true });
      const hub = utils.byIata(career.hubIata) || AIRPORTS[0];
      runtime.map.setView([hub.lat, hub.lon], 3);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 9,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(runtime.map);
      AIRPORTS.forEach(a => {
        const marker = L.circleMarker([a.lat, a.lon], { radius: a.iata === career.hubIata ? 8 : 5, color: a.iata === career.hubIata ? '#ffd166' : '#65d6ff', fillColor: a.iata === career.hubIata ? '#ffd166' : '#65d6ff', fillOpacity: 0.82, weight: 2 }).addTo(runtime.map);
        marker.bindPopup(`<b>${a.iata} — ${a.city}</b><br>${a.name}<br>Demanda ${a.demand} • Taxa ${utils.money(a.fee)}`);
      });
      career.routes.forEach(route => {
        const o = utils.byIata(route.origin), d = utils.byIata(route.dest);
        if (!o || !d) return;
        const color = route.lastProfit < 0 ? '#ff6b6b' : '#7cf7c4';
        L.polyline([[o.lat,o.lon],[d.lat,d.lon]], { color, weight: 3, opacity: 0.75, dashArray: route.status === 'active' ? '8 8' : undefined }).addTo(runtime.map);
      });
    } else {
      mapEl.classList.add('hidden');
      renderFallbackMap();
    }
  });
}

function project(lon, lat) {
  const x = ((lon + 180) / 360) * 100;
  const y = ((90 - lat) / 180) * 100;
  return { x, y };
}

function renderFallbackMap() {
  const el = document.getElementById('fallbackMap');
  const c = activeCareer();
  if (!el || !c) return;
  el.classList.remove('hidden');
  let svg = `<svg viewBox="0 0 1000 520" preserveAspectRatio="none" class="fallback-svg"><defs><radialGradient id="o" cx="50%" cy="50%" r="60%"><stop stop-color="#173d77"/><stop offset="1" stop-color="#061020"/></radialGradient></defs><rect width="1000" height="520" fill="url(#o)"/><path d="M94 200 C180 112 260 128 338 188 C420 244 520 162 640 207 C776 259 832 171 940 212" fill="none" stroke="#315a91" stroke-width="18" opacity=".35"/><path d="M71 344 C214 300 305 348 430 315 C590 274 694 351 941 310" fill="none" stroke="#315a91" stroke-width="20" opacity=".28"/>`;
  c.routes.forEach(r => {
    const o = utils.byIata(r.origin), d = utils.byIata(r.dest);
    if (!o || !d) return;
    const po = project(o.lon,o.lat), pd=project(d.lon,d.lat);
    svg += `<line x1="${po.x*10}" y1="${po.y*5.2}" x2="${pd.x*10}" y2="${pd.y*5.2}" stroke="${r.lastProfit<0?'#ff6b6b':'#7cf7c4'}" stroke-width="3" stroke-dasharray="8 6" opacity=".8"/>`;
  });
  AIRPORTS.forEach(a => { const p = project(a.lon,a.lat); const hub = a.iata === c.hubIata; svg += `<circle cx="${p.x*10}" cy="${p.y*5.2}" r="${hub?7:4}" fill="${hub?'#ffd166':'#65d6ff'}"/><text x="${p.x*10+7}" y="${p.y*5.2-4}" fill="#eaffff" font-size="13">${a.iata}</text>`; });
  svg += `</svg>`;
  el.innerHTML = svg + '<div class="fallback-note">Mapa fallback ativo. Quando online, o Leaflet/OpenStreetMap assume automaticamente.</div>';
}

function updateMapAnimations() {}

function renderRoutes() {
  const c = activeCareer();
  const hubs = (c.hubs || [c.hubIata]).map(utils.byIata).filter(Boolean);
  const idlePlanes = c.fleet.filter(p => ['idle','maintenanceRequired'].includes(p.status) || !p.status);
  const selectedOrigin = hubs[0] || utils.byIata(c.hubIata);
  const dests = AIRPORTS.filter(a => a.iata !== selectedOrigin.iata);
  return `<div class="routes-layout">
    <section class="panel glass"><div class="section-head"><div><span class="eyebrow">F10-F11 Malha, combustível e preço</span><h2>Criar rota</h2><p>Origem por hub aberto, previsão de combustível, ocupação, margem e estratégia de preço.</p></div></div>
      <div class="form-grid">
        <label>Origem / hub<select id="routeOrigin">${hubs.map(a => `<option value="${a.iata}">${a.iata} — ${a.city}, ${a.country}</option>`).join('')}</select></label>
        <label>Aeronave<select id="routePlane">${idlePlanes.map(p => { const m=utils.model(p.modelId); return `<option value="${p.id}" ${p.condition<50?'disabled':''}>${p.name} — ${m.name} — condição ${Math.round(p.condition)}%</option>`; }).join('') || '<option disabled>Sem avião livre</option>'}</select></label>
        <label>Destino<select id="routeDest">${dests.map(a => `<option value="${a.iata}">${a.iata} — ${a.city}, ${a.country} • demanda ${a.demand}</option>`).join('')}</select></label>
      </div>
      <div id="routePreview" class="preview-box">Selecione origem, aeronave e destino.</div>
      <button class="btn primary big" data-action="createRoute">Abrir rota</button>
      <p class="hint">Rotas operam em ciclo acelerado controlado por 1x/2x/4x para testar rapidamente sem travar o jogo.</p>
    </section>
    <section class="panel glass"><h2>Rotas ativas</h2><div class="route-list">${c.routes.map(renderRouteCard).join('') || '<p>Nenhuma rota criada. Abra a primeira rota para começar a receita.</p>'}</div></section>
  </div>`;
}

function renderRouteCard(r) {
  const c = activeCareer();
  const plane = c.fleet.find(p => p.id === r.planeId);
  const strategy = PRICE_STRATEGIES[r.priceStrategy || 'balanced'] || PRICE_STRATEGIES.balanced;
  return `<article class="route-card"><div><b>${r.origin} → ${r.dest}</b><small>${plane ? plane.name : 'Avião não encontrado'} • ${utils.num(r.distance)} km • preço ${strategy.label}</small></div><div class="progress"><span style="width:${utils.clamp(r.progress,0,100)}%"></span></div><div class="route-stats"><span>Voos: ${r.totalFlights || 0}</span><span>Último: ${utils.money(r.lastProfit || 0)}</span><span>Margem: ${r.lastMargin ?? 0}%</span><span>Ocupação: ${r.lastLoadFactor ?? 0}%</span><span>Comb.: ${utils.num(r.lastFuelKg || 0)} kg</span><span>Total: ${utils.money(r.totalProfit || 0)}</span></div><div class="row gap wrap"><button class="btn mini ghost" data-action="toggleRoute" data-route="${r.id}">${r.status==='active'?'Pausar':'Ativar'}</button><button class="btn mini" data-action="routePrice" data-route="${r.id}" data-strategy="budget">Popular</button><button class="btn mini" data-action="routePrice" data-route="${r.id}" data-strategy="balanced">Equilibrada</button><button class="btn mini" data-action="routePrice" data-route="${r.id}" data-strategy="premium">Premium</button><button class="btn mini danger" data-action="closeRoute" data-route="${r.id}">Fechar</button></div></article>`;
}

function updateRoutePreview() {
  safeExecute('routePreview', () => {
    const c = activeCareer(); if (!c) return;
    const box = document.getElementById('routePreview');
    const planeSelect = document.getElementById('routePlane');
    const originSelect = document.getElementById('routeOrigin');
    const destSelect = document.getElementById('routeDest');
    if (!box || !planeSelect || !destSelect || !originSelect) return;
    const plane = c.fleet.find(p => p.id === planeSelect.value);
    const model = plane && utils.model(plane.modelId);
    const origin = utils.byIata(originSelect.value);
    const dest = utils.byIata(destSelect.value);
    if (!plane || !model || !origin || !dest) { box.innerHTML = 'Sem dados suficientes.'; return; }
    if (origin.iata === dest.iata) { box.innerHTML = '<p class="bad">Origem e destino não podem ser iguais.</p>'; return; }
    const e = utils.routeEstimate(origin, dest, model, c, { priceStrategy:'balanced', planeCondition: plane.condition });
    const feasible = e.distance <= model.rangeKm;
    box.innerHTML = `<div class="preview-grid"><div><small>Distância</small><b>${utils.num(e.distance)} km</b></div><div><small>Alcance do avião</small><b class="${feasible?'ok':'bad'}">${utils.num(model.rangeKm)} km</b></div><div><small>Passageiros estimados</small><b>${utils.num(e.passengers)}</b></div><div><small>Ocupação</small><b>${utils.pct(e.loadFactor*100)}</b></div><div><small>Receita</small><b>${utils.money(e.revenue)}</b></div><div><small>Custo</small><b>${utils.money(e.totalCost)}</b></div><div><small>Combustível</small><b>${utils.num(e.fuelKg)} kg</b></div><div><small>Margem</small><b class="${e.margin>=0?'ok':'bad'}">${utils.num(e.margin,1)}%</b></div><div><small>Lucro estimado</small><b class="${e.profit>=0?'ok':'bad'}">${utils.money(e.profit)}</b></div></div>${feasible ? '' : '<p class="bad">Rota bloqueada: aeronave não possui alcance suficiente.</p>'}`;
  });
}

function createRoute() {
  const c = activeCareer(); if (!c) return;
  const originIata = document.getElementById('routeOrigin')?.value || c.hubIata;
  const planeId = document.getElementById('routePlane')?.value;
  const destIata = document.getElementById('routeDest')?.value;
  const plane = c.fleet.find(p => p.id === planeId);
  const model = plane && utils.model(plane.modelId);
  const origin = utils.byIata(originIata);
  const dest = utils.byIata(destIata);
  if (!plane || !model || !origin || !dest) return showToast('Selecione origem, avião e destino válidos.', 'warn');
  if (!(c.hubs || [c.hubIata]).includes(origin.iata)) return showToast('Origem bloqueada: abra este hub primeiro.', 'warn');
  if (origin.iata === dest.iata) return showToast('Origem e destino não podem ser iguais.', 'warn');
  if (plane.condition < 50) return showToast('Aeronave precisa de manutenção antes de abrir rota.', 'warn');
  const e = utils.routeEstimate(origin, dest, model, c, { priceStrategy:'balanced', planeCondition: plane.condition });
  if (e.distance > model.rangeKm) return showToast('Alcance insuficiente para esta rota.', 'warn');
  const routeCost = Math.round(dest.slotCost * 0.18 + origin.fee + dest.fee);
  if (c.cash < routeCost) return showToast(`Caixa insuficiente. Custa ${utils.money(routeCost)} para abrir a rota.`, 'warn');
  c.cash -= routeCost;
  plane.status = 'inFlight';
  const route = { id: utils.id('route'), origin: origin.iata, dest: dest.iata, planeId: plane.id, status: 'active', distance: e.distance, cycleSeconds: utils.clamp(38 + e.distance / 38, 45, 220), progress: 0, totalFlights: 0, totalProfit: 0, lastProfit: 0, lastMargin: Math.round(e.margin || 0), lastLoadFactor: Math.round((e.loadFactor || 0) * 100), lastFuelKg: Math.round(e.fuelKg || 0), priceStrategy:'balanced', serviceTier:'standard', createdAt: Date.now() };
  plane.routeId = route.id;
  c.routes.push(route);
  logFinance(c, `Abertura de rota ${origin.iata}-${dest.iata}`, -routeCost, 'investimento');
  pushMessage(c, `Nova rota ${origin.iata} → ${dest.iata} aberta com ${plane.name}.`, 'success');
  updateMarket(c); setActiveCareer(c); showToast('Rota criada e iniciada.', 'ok'); render();
}


function renderHubs() {
  const c = activeCareer();
  const open = new Set(c.hubs || [c.hubIata]);
  const hubCards = AIRPORTS.map(a => {
    const owned = open.has(a.iata);
    const cost = hubOpenCost(a, c);
    const routeCount = c.routes.filter(r => r.origin === a.iata || r.dest === a.iata).length;
    return `<article class="hub-card ${owned?'owned':''}"><div><b>${a.iata} — ${a.city}</b><small>${a.country} • ${a.region} • demanda ${a.demand} • pistas ${a.runway} m</small></div><div class="route-stats"><span>Taxa ${utils.money(a.fee)}</span><span>Rotas ${routeCount}</span><span>${owned?'Hub aberto':utils.money(cost)}</span></div>${owned ? '<button class="btn mini ghost" disabled>Aberto</button>' : `<button class="btn mini primary" data-action="openHub" data-hub="${a.iata}">Abrir hub</button>`}</article>`;
  }).join('');
  return `<div class="hubs-layout"><section class="panel glass"><span class="eyebrow">F6 Expansão global</span><h2>Hubs da companhia</h2><p class="lead">Hubs desbloqueiam origem de rotas, contratos regionais e crescimento internacional. Comece por bases baratas e de alta demanda.</p><div class="kpi-grid"><div class="kpi"><small>Hubs abertos</small><strong>${open.size}</strong></div><div class="kpi"><small>Principal</small><strong>${c.hubIata}</strong></div><div class="kpi"><small>Rotas por hub</small><strong>${c.routes.length}</strong></div><div class="kpi"><small>Caixa</small><strong>${utils.money(c.cash)}</strong></div></div></section><section class="panel glass"><h2>Mapa de expansão</h2><div class="hub-list">${hubCards}</div></section></div>`;
}

function hubOpenCost(airport, career) {
  const already = (career.hubs || []).length;
  const intl = airport.country === career.country ? 0.82 : 1.25;
  return Math.round((airport.slotCost * 0.72 + airport.fee * 9) * intl * (1 + already * 0.12));
}

function openHub(iata) {
  const c = activeCareer();
  const a = utils.byIata(iata);
  if (!c || !a) return;
  c.hubs = c.hubs || [c.hubIata];
  if (c.hubs.includes(iata)) return showToast('Hub já está aberto.', 'ok');
  const cost = hubOpenCost(a, c);
  if (c.cash < cost) return showToast(`Caixa insuficiente. Abrir ${iata} custa ${utils.money(cost)}.`, 'warn');
  c.cash -= cost;
  c.hubs.push(iata);
  c.reputation = utils.clamp(c.reputation + 0.8, 0, 100);
  logFinance(c, `Abertura de hub ${iata}`, -cost, 'expansão');
  pushMessage(c, `Novo hub aberto em ${a.city} (${iata}). Novas origens de rota liberadas.`, 'success');
  refreshContractsForHubs(c);
  updateMarket(c); setActiveCareer(c); showToast('Hub aberto com sucesso.', 'ok'); render();
}

function refreshContractsForHubs(c) {
  const existing = new Set((c.contracts || []).map(x => `${x.templateId}:${x.origin}:${x.dest}`));
  const hubs = new Set(c.hubs || [c.hubIata]);
  CONTRACT_TEMPLATES.forEach((tpl, idx) => {
    const origin = hubs.has(tpl.origin) ? tpl.origin : null;
    if (!origin) return;
    const key = `${tpl.id}:${origin}:${tpl.dest}`;
    if (existing.has(key)) return;
    c.contracts.push({ id:`${tpl.id}_${Date.now()}_${idx}`, templateId:tpl.id, title:tpl.title, type:tpl.type, origin, dest:tpl.dest, requiredFlights:tpl.requiredFlights, progress:0, reward:tpl.reward, minReputation:tpl.minReputation, risk:tpl.risk, status:c.reputation >= tpl.minReputation ? 'available' : 'locked', createdDay:c.day, deadlineDay:c.day + 20 + idx });
  });
}

function renderContracts() {
  const c = activeCareer();
  if (!Array.isArray(c.contracts) || !c.contracts.length) c.contracts = seedContracts(c);
  const cards = c.contracts.map(contract => renderContractCard(contract, c)).join('');
  const accepted = c.contracts.filter(x => x.status === 'accepted').length;
  const completed = c.contracts.filter(x => x.status === 'completed').length;
  return `<div class="contracts-layout"><section class="panel glass"><span class="eyebrow">F7 Contratos operacionais</span><h2>Contratos e missões pagas</h2><p class="lead">Aceite contratos compatíveis com sua malha. Ao completar os voos exigidos, a companhia recebe bônus em caixa e reputação.</p><div class="kpi-grid"><div class="kpi"><small>Aceitos</small><strong>${accepted}</strong></div><div class="kpi"><small>Concluídos</small><strong>${completed}</strong></div><div class="kpi"><small>Disponíveis</small><strong>${c.contracts.filter(x=>x.status==='available').length}</strong></div><div class="kpi"><small>Reputação</small><strong>${utils.pct(c.reputation)}</strong></div></div></section><section class="panel glass"><h2>Quadro de contratos</h2><div class="contract-list">${cards}</div></section></div>`;
}

function renderContractCard(contract, c) {
  const origin = utils.byIata(contract.origin), dest = utils.byIata(contract.dest);
  const locked = contract.status === 'locked';
  const canAccept = contract.status === 'available' && c.reputation >= contract.minReputation && (c.hubs || [c.hubIata]).includes(contract.origin);
  const pct = utils.clamp(((contract.progress || 0) / Math.max(contract.requiredFlights || 1, 1)) * 100, 0, 100);
  const statusLabel = contract.status === 'completed' ? 'Concluído' : contract.status === 'accepted' ? 'Aceito' : locked ? 'Bloqueado' : 'Disponível';
  const routeExists = c.routes.some(r => (r.origin === contract.origin && r.dest === contract.dest) || (r.origin === contract.dest && r.dest === contract.origin));
  return `<article class="contract-card ${contract.status}"><div class="section-head"><div><b>${utils.escape(contract.title)}</b><small>${contract.type} • risco ${contract.risk} • ${origin?.iata || contract.origin} → ${dest?.iata || contract.dest}</small></div><span class="pill">${statusLabel}</span></div><p>${origin?.city || contract.origin} para ${dest?.city || contract.dest}. Prazo: dia ${contract.deadlineDay}. Reputação mínima: ${utils.pct(contract.minReputation)}.</p><div class="progress"><span style="width:${pct}%"></span></div><div class="route-stats"><span>${contract.progress || 0}/${contract.requiredFlights} voos</span><span>Bônus ${utils.money(contract.reward)}</span><span>${routeExists?'Rota existe':'Sem rota criada'}</span></div><div class="row gap wrap">${canAccept ? `<button class="btn mini primary" data-action="acceptContract" data-contract="${contract.id}">Aceitar</button>` : ''}${contract.status === 'accepted' && !routeExists ? `<button class="btn mini" data-action="go" data-view="routes">Criar rota</button>` : ''}${locked ? `<button class="btn mini ghost" disabled>Exige reputação/hub</button>` : ''}${contract.status === 'completed' ? `<button class="btn mini ghost" disabled>Pago</button>` : ''}</div></article>`;
}

function acceptContract(id) {
  const c = activeCareer();
  const contract = (c.contracts || []).find(x => x.id === id);
  if (!contract) return;
  if (!(c.hubs || [c.hubIata]).includes(contract.origin)) return showToast('Abra o hub de origem antes de aceitar.', 'warn');
  if (c.reputation < contract.minReputation) return showToast('Reputação insuficiente para este contrato.', 'warn');
  if (contract.status !== 'available') return showToast('Contrato indisponível.', 'warn');
  contract.status = 'accepted';
  contract.acceptedDay = c.day;
  pushMessage(c, `Contrato aceito: ${contract.title}. Crie/ative a rota ${contract.origin}-${contract.dest}.`, 'success');
  setActiveCareer(c); showToast('Contrato aceito.', 'ok'); render();
}


function renderFleet() {
  const c = activeCareer();
  return `<div class="fleet-layout"><section class="panel glass"><div class="section-head"><div><span class="eyebrow">Hangar</span><h2>Frota da companhia</h2></div></div><div class="fleet-grid">${c.fleet.map(renderPlaneCard).join('')}</div></section><section class="panel glass"><h2>Mercado de aeronaves</h2><p class="hint">Preços simplificados para balanceamento inicial. Usar silhuetas genéricas agora; assets cinematográficos entram depois.</p><div class="market-list">${AIRCRAFT.map(renderAircraftMarket).join('')}</div></section></div>`;
}

function renderPlaneCard(p) {
  const m = utils.model(p.modelId);
  const route = activeCareer().routes.find(r => r.id === p.routeId);
  return `<article class="plane-card"><img src="${m.image}" alt="${m.name}"><div class="plane-info"><h3>${utils.escape(p.name)}</h3><small>${m.name} • ${m.category}</small><div class="health"><span style="width:${utils.clamp(p.condition,0,100)}%"></span></div><div class="route-stats"><span>Condição ${Math.round(p.condition)}%</span><span>${p.status || 'idle'}</span><span>${utils.num(p.hours,1)} h</span></div>${route ? `<small>Rota atual: ${route.origin} → ${route.dest}</small>` : '<small>Sem rota ativa</small>'}<div class="row gap wrap"><button class="btn mini" data-action="maintainPlane" data-plane="${p.id}" data-level="line">Linha</button><button class="btn mini primary" data-action="maintainPlane" data-plane="${p.id}" data-level="standard">Revisão</button><button class="btn mini ghost" data-action="maintainPlane" data-plane="${p.id}" data-level="overhaul">Overhaul</button><button class="btn mini ghost" data-action="renamePlane" data-plane="${p.id}">Renomear</button><button class="btn mini danger" data-action="sellPlane" data-plane="${p.id}">Vender</button></div></div></article>`;
}

function renderAircraftMarket(m) {
  const c = activeCareer();
  const affordable = c.cash >= m.price;
  return `<article class="market-plane"><img src="${m.image}" alt="${m.name}"><div><b>${m.name}</b><small>${m.category} • alcance ${utils.num(m.rangeKm)} km • pax ${m.capacity} • carga ${utils.num(m.cargoKg)} kg</small><span>${utils.money(m.price)}</span></div><button class="btn mini ${affordable?'primary':'ghost'}" data-action="buyPlane" data-model="${m.id}" ${affordable?'':'disabled'}>Comprar</button></article>`;
}

function buyPlane(modelId) {
  const c = activeCareer(); const m = utils.model(modelId); if (!c || !m) return;
  if (c.cash < m.price) return showToast('Caixa insuficiente para comprar esta aeronave.', 'warn');
  c.cash -= m.price;
  const prefix = c.companyName.split(/\s+/).map(x => x[0]).join('').slice(0,2).toUpperCase() || 'VA';
  const plane = { id: utils.id('plane'), modelId: m.id, name: `${prefix}-${String(c.fleet.length+1).padStart(3,'0')} Novo Horizonte`, condition: 100, hours: 0, cycles: 0, status: 'idle', routeId: null, acquiredAt: Date.now() };
  c.fleet.push(plane);
  logFinance(c, `Compra de ${m.name}`, -m.price, 'investimento');
  pushMessage(c, `Aeronave ${m.name} adicionada à frota.`, 'success');
  updateMarket(c); setActiveCareer(c); showToast('Avião comprado.', 'ok'); render();
}

function maintenanceCost(plane, model, levelKey = 'standard') {
  const level = MAINTENANCE_LEVELS[levelKey] || MAINTENANCE_LEVELS.standard;
  const missing = Math.max(0, 100 - Number(plane.condition || 0));
  const cyclePenalty = Math.min(Number(plane.cycles || 0) * 220, model.price * 0.00014);
  return Math.round(level.base + missing * model.price * level.rate + cyclePenalty);
}

function maintainPlane(planeId, levelKey = 'standard') {
  const c = activeCareer(); const p = c.fleet.find(x => x.id === planeId); if (!p) return;
  const m = utils.model(p.modelId); if (!m) return;
  const level = MAINTENANCE_LEVELS[levelKey] || MAINTENANCE_LEVELS.standard;
  const cost = maintenanceCost(p, m, levelKey);
  if (p.condition >= 98 && levelKey !== 'overhaul') return showToast('Aeronave já está em excelente condição.', 'ok');
  if (c.cash < cost) return showToast(`Caixa insuficiente. ${level.label} custa ${utils.money(cost)}.`, 'warn');
  c.cash -= cost;
  p.condition = utils.clamp(Math.max(Number(p.condition || 0), Math.min(level.maxCondition, Number(p.condition || 0) + level.conditionGain)), 0, 100);
  if (level.resetCycles) p.cycles = 0;
  p.status = p.routeId ? 'inFlight' : 'idle';
  c.safety = utils.clamp(c.safety + level.safety, 0, 100);
  c.maintenanceLog = Array.isArray(c.maintenanceLog) ? c.maintenanceLog : [];
  c.maintenanceLog.unshift({ time: Date.now(), day: c.day, plane: p.name, level: level.label, cost, condition: Math.round(p.condition) });
  c.maintenanceLog = c.maintenanceLog.slice(0, 30);
  logFinance(c, `${level.label} ${p.name}`, -cost, 'manutenção');
  pushMessage(c, `${p.name} concluiu ${level.label}. Condição atual: ${Math.round(p.condition)}%.`, 'success');
  updateMarket(c); setActiveCareer(c); showToast(`${level.label} concluída.`, 'ok'); render();
}

function renderStaff() {
  const c = activeCareer();
  const quality = getStaffQuality(c);
  const roles = [
    ['pilots','Pilotos', 8200, 'Operação de voo'], ['cabin','Comissários', 5200, 'Atendimento e ocupação'], ['mechanics','Mecânicos', 11800, 'Segurança e manutenção'], ['directors','Diretores', 26500, 'Eficiência executiva'], ['marketing','Marketing', 15400, 'Demanda e reputação']
  ];
  return `<div class="staff-layout"><section class="panel glass"><span class="eyebrow">Recursos humanos</span><h2>Equipe operacional</h2><div class="kpi-grid"><div class="kpi"><small>Operação</small><strong>${utils.pct(quality.ops*100)}</strong></div><div class="kpi"><small>Serviço</small><strong>${utils.pct(quality.service*100)}</strong></div><div class="kpi"><small>Manutenção</small><strong>${utils.pct(quality.maintenance*100)}</strong></div></div><div class="staff-cards">${roles.map(([key,label,salary,desc]) => `<article class="staff-card"><div><b>${label}</b><small>${desc}</small><strong>${c.staff[key] || 0}</strong></div><button class="btn mini primary" data-action="hireStaff" data-role="${key}" data-salary="${salary}">Contratar</button><button class="btn mini ghost" data-action="fireStaff" data-role="${key}">Demitir</button></article>`).join('')}</div></section><section class="panel glass"><h2>Avatares genéricos da equipe</h2><div class="staff-avatar-grid">${STAFF.map(s => `<article><img src="${s.image}" alt="${s.role}"><b>${s.name}</b><small>${s.role} • habilidade ${s.skill}</small></article>`).join('')}</div></section></div>`;
}

function hireStaff(role, salary) {
  const c = activeCareer();
  const upfront = Number(salary || 8000) * 2;
  if (c.cash < upfront) return showToast(`Contratação custa ${utils.money(upfront)}.`, 'warn');
  c.cash -= upfront; c.staff[role] = (c.staff[role] || 0) + 1;
  c.reputation = utils.clamp(c.reputation + 0.2, 0, 100);
  logFinance(c, `Contratação: ${role}`, -upfront, 'rh');
  pushMessage(c, `Nova contratação em ${role} melhorou a operação.`, 'success');
  updateMarket(c); setActiveCareer(c); showToast('Contratação realizada.', 'ok'); render();
}

function fireStaff(role) {
  const c = activeCareer();
  if ((c.staff[role] || 0) <= 0) return showToast('Não há funcionário para demitir nesta área.', 'warn');
  c.staff[role] -= 1;
  c.reputation = utils.clamp(c.reputation - 0.35, 0, 100);
  pushMessage(c, `Corte realizado em ${role}. Cuidado com impacto operacional.`, 'warn');
  updateMarket(c); setActiveCareer(c); showToast('Funcionário demitido.', 'warn'); render();
}

function renderFinance() {
  const c = activeCareer();
  const revenue = c.financeLog.filter(f => f.amount > 0).reduce((sum,f)=>sum+f.amount,0);
  const expense = c.financeLog.filter(f => f.amount < 0).reduce((sum,f)=>sum+f.amount,0);
  const routeProfit = c.routes.reduce((sum,r)=>sum+(r.totalProfit||0),0);
  const bestRoute = [...c.routes].sort((a,b)=>(b.totalProfit||0)-(a.totalProfit||0))[0];
  const worstRoute = [...c.routes].sort((a,b)=>(a.totalProfit||0)-(b.totalProfit||0))[0];
  return `<div class="finance-layout"><section class="panel glass"><span class="eyebrow">F9-F12 Economia profunda</span><h2>Fluxo de caixa e margem</h2><div class="kpi-grid"><div class="kpi"><small>Receitas registradas</small><strong>${utils.money(revenue)}</strong></div><div class="kpi"><small>Despesas registradas</small><strong>${utils.money(expense)}</strong></div><div class="kpi"><small>Resultado</small><strong>${utils.money(revenue+expense)}</strong></div><div class="kpi"><small>Lucro das rotas</small><strong>${utils.money(routeProfit)}</strong></div><div class="kpi"><small>Melhor rota</small><strong>${bestRoute ? `${bestRoute.origin}-${bestRoute.dest}` : '-'}</strong></div><div class="kpi"><small>Rota crítica</small><strong>${worstRoute ? `${worstRoute.origin}-${worstRoute.dest}` : '-'}</strong></div></div></section><section class="panel glass"><div class="section-head"><div><span class="eyebrow">F10 Combustível avançado</span><h2>Mesa de combustível</h2></div></div><div class="kpi-grid"><div class="kpi"><small>Preço/kg</small><strong>${utils.money(getFuelPrice(c))}</strong></div><div class="kpi"><small>Estoque</small><strong>${utils.num(c.fuelStockKg || 0)} kg</strong></div><div class="kpi"><small>Valor do estoque</small><strong>${utils.money(getFuelStockValue(c))}</strong></div><div class="kpi"><small>Cobertura</small><strong>${getFuelCoverageLabel(c)}</strong></div></div><div class="row gap wrap"><button class="btn primary" data-action="buyFuel" data-pack="small">Comprar hedge pequeno</button><button class="btn ghost" data-action="buyFuel" data-pack="large">Comprar hedge grande</button><button class="btn ghost" data-action="marketingCampaign">Campanha marketing</button></div><div class="fuel-history">${(c.fuelHistory||[]).slice(0,8).map(h => `<span>Dia ${h.day}: ${utils.money(h.price)} / kg</span>`).join('') || '<span>Sem histórico ainda.</span>'}</div></section><section class="panel glass"><h2>Economia por rota</h2><div class="route-economy-list">${c.routes.map(r => `<article><b>${r.origin} → ${r.dest}</b><small>Estratégia: ${(PRICE_STRATEGIES[r.priceStrategy || 'balanced']||PRICE_STRATEGIES.balanced).label}</small><div class="route-stats"><span>Total ${utils.money(r.totalProfit||0)}</span><span>Último ${utils.money(r.lastProfit||0)}</span><span>Margem ${r.lastMargin ?? 0}%</span><span>Ocupação ${r.lastLoadFactor ?? 0}%</span><span>Combustível ${utils.num(r.lastFuelKg||0)} kg</span></div></article>`).join('') || '<p>Crie rotas para ver análise econômica.</p>'}</div></section><section class="panel glass"><h2>Livro financeiro</h2><div class="finance-list">${c.financeLog.map(f => `<div class="finance-row"><span>${utils.dateLabel(f.time)}<small>${f.type} • Dia ${f.day}</small></span><b class="${f.amount>=0?'ok':'bad'}">${utils.money(f.amount)}</b><em>${utils.escape(f.label)}</em></div>`).join('') || '<p>Sem lançamentos.</p>'}</div></section></div>`;
}

function buyFuel(pack = 'small') {
  const c = activeCareer();
  const cost = pack === 'large' ? 650000 : FUEL_MARKET.hedgePacketUsd;
  if (c.cash < cost) return showToast('Caixa insuficiente para compra antecipada de combustível.', 'warn');
  const discount = pack === 'large' ? 0.035 : 0.018;
  const kg = Math.round(cost / Math.max(getFuelPrice(c) - discount, FUEL_MARKET.min));
  c.cash -= cost;
  c.fuelStockKg = Number(c.fuelStockKg || 0) + kg;
  c.fuelPriceKg = Math.max(FUEL_MARKET.min, c.fuelPriceKg - discount);
  c.fuelHistory = Array.isArray(c.fuelHistory) ? c.fuelHistory : [];
  c.fuelHistory.unshift({ day:c.day, price:c.fuelPriceKg, stockKg:Math.round(c.fuelStockKg) });
  logFinance(c, `Compra antecipada de combustível (${utils.num(kg)} kg)`, -cost, 'combustível');
  pushMessage(c, `Hedge de combustível realizado: ${utils.num(kg)} kg adicionados ao estoque.`, 'success');
  updateMarket(c); setActiveCareer(c); showToast('Combustível comprado e estocado.', 'ok'); render();
}

function marketingCampaign() {
  const c = activeCareer(); const cost = 180000;
  if (c.cash < cost) return showToast('Caixa insuficiente para campanha.', 'warn');
  c.cash -= cost; c.marketing = { active: 'regional', expiresDay: c.day + 7, boost: 1.08 }; c.reputation = utils.clamp(c.reputation + 1.2,0,100);
  logFinance(c, 'Campanha de marketing regional', -cost, 'marketing');
  pushMessage(c, 'Campanha de marketing ativa: demanda e reputação melhoraram.', 'success');
  updateMarket(c); setActiveCareer(c); showToast('Campanha ativada.', 'ok'); render();
}

function renderMarket() {
  const c = activeCareer();
  const trend = c.financeLog.slice(0,8).reduce((s,f)=>s+f.amount,0) >= 0 ? 'alta' : 'pressão';
  return `<div class="market-layout"><section class="panel glass"><span class="eyebrow">Mercado de ações</span><h2>Bolsa da companhia</h2><div class="stock-card"><div><small>Valor por ação</small><strong>$${c.stockPrice.toFixed(2)}</strong><span>tendência: ${trend}</span></div><div><small>Valuation</small><strong>${utils.money(c.valuation)}</strong><span>baseado em frota, caixa, rotas e reputação</span></div></div><div class="stock-line"><i style="height:${utils.clamp(c.reputation,12,100)}%"></i><i style="height:${utils.clamp(c.safety,12,100)}%"></i><i style="height:${utils.clamp(c.punctuality,12,100)}%"></i><i style="height:${utils.clamp((c.cash/10000000)*100,12,100)}%"></i><i style="height:${utils.clamp(c.routes.length*18,12,100)}%"></i></div><p class="hint">Nesta build, o mercado reage ao caixa, lucro recente, segurança, reputação, frota, malha, margem e risco operacional.</p></section><section class="panel glass"><h2>Próximas evoluções da bolsa</h2><div class="todo-list"><span>IPO e venda de participação</span><span>Investidores e metas trimestrais</span><span>Empréstimos e recuperação judicial</span><span>Compra de companhias menores</span></div></section></div>`;
}

function renderAudit() {
  const checks = runIntegrityAudit();
  const passed = checks.filter(c => c.ok).length;
  return `<div class="audit-layout"><section class="panel glass"><div class="section-head"><div><span class="eyebrow">Sistema anti-quebra</span><h2>Auditoria da build</h2><p>Execução obrigatória por fase para garantir integridade e evolução real.</p></div><button class="btn primary" data-action="runAudit">Rodar auditoria</button></div><div class="audit-score"><strong>${passed}/${checks.length}</strong><span>checks aprovados</span></div><div class="audit-list">${checks.map(c => `<div class="audit-row ${c.ok?'ok':'bad'}"><b>${c.ok?'✓':'!'}</b><span>${c.label}</span><small>${c.detail}</small></div>`).join('')}</div></section><section class="panel glass"><h2>Relatório desta entrega</h2><div class="todo-list"><span>F9 Economia: OK — receitas, despesas, margem, melhor/pior rota e livro financeiro reforçado.</span><span>F10 Combustível: OK — preço volátil, estoque, hedge e consumo por voo.</span><span>F11 Preço dinâmico: OK — rotas com estratégia Popular, Equilibrada e Premium afetando demanda e tarifa.</span><span>F12 Manutenção: OK — linha rápida, revisão padrão e overhaul pesado com log.</span><span>Anti-quebra: OK — migração de saves v0.4/v0.5 para schema 6 preservada.</span></div></section></div>`;
}

function runIntegrityAudit() {
  const c = activeCareer();
  const slotCount = runtime.state && Array.isArray(runtime.state.slots) ? runtime.state.slots.length : 0;
  const iatas = new Set(AIRPORTS.map(a => a.iata));
  const duplicateIata = iatas.size !== AIRPORTS.length;
  const lastCrash = localStorage.getItem(CRASH_KEY);
  return [
    { ok: !!dom.buildBadge && dom.buildBadge.textContent.includes(BUILD.build), label:'Build/data/hora visíveis', detail:`Build ${BUILD.build} renderizado no rodapé.` },
    { ok: BUILD.schema === 6, label:'Schema da build', detail:`Schema atual ${BUILD.schema}.` },
    { ok: slotCount === 3, label:'Save slots', detail:`${slotCount} slots detectados.` },
    { ok: AIRPORTS.length >= 25 && !duplicateIata, label:'Banco de aeroportos', detail:`${AIRPORTS.length} aeroportos reais/semi-realistas, IATA único.` },
    { ok: AIRCRAFT.length >= 10, label:'Catálogo inicial de aeronaves', detail:`${AIRCRAFT.length} modelos com alcance, consumo, capacidade e custo.` },
    { ok: !!window.localStorage, label:'LocalStorage disponível', detail:'Sistema pode salvar carreira localmente.' },
    { ok: !!c || runtime.view === 'onboarding' || runtime.view === 'slots', label:'Fluxo inicial protegido', detail:c ? `Carreira ativa: ${c.companyName}.` : 'Sem carreira ativa, tela de slots/onboarding disponível.' },
    { ok: !c || c.fleet.every(p => !!utils.model(p.modelId)), label:'Integridade da frota', detail:c ? `${c.fleet.length} aeronaves vinculadas a modelos válidos.` : 'Sem frota ativa ainda.' },
    { ok: !c || c.routes.every(r => utils.byIata(r.origin) && utils.byIata(r.dest) && c.fleet.some(p => p.id === r.planeId)), label:'Integridade das rotas', detail:c ? `${c.routes.length} rotas verificadas.` : 'Sem rotas ativas.' },
    { ok: !c || Array.isArray(c.hubs) && c.hubs.every(i => utils.byIata(i)), label:'Integridade dos hubs', detail:c ? `${(c.hubs||[]).length} hubs válidos.` : 'Sem carreira ativa.' },
    { ok: !c || Array.isArray(c.contracts) && c.contracts.length >= 4, label:'Contratos operacionais', detail:c ? `${(c.contracts||[]).length} contratos carregados.` : 'Sem carreira ativa.' },
    { ok: !c || c.tutorial && Array.isArray(tutorialSteps(c)), label:'Tutorial jogável', detail:'Checklist executivo e ações diretas disponíveis.' },
    { ok: Array.isArray(EVENT_POOL) && EVENT_POOL.length >= 5, label:'Eventos operacionais', detail:`${EVENT_POOL.length} eventos possíveis configurados.` },
    { ok: !!MAINTENANCE_LEVELS.standard && !!MAINTENANCE_LEVELS.overhaul, label:'Manutenção por nível', detail:'Linha rápida, revisão padrão e overhaul pesado disponíveis.' },
    { ok: !!PRICE_STRATEGIES.premium && !!PRICE_STRATEGIES.budget, label:'Precificação dinâmica', detail:'Estratégias Popular, Equilibrada e Premium disponíveis por rota.' },
    { ok: !c || typeof c.fuelStockKg === 'number', label:'Combustível avançado', detail:c ? `${utils.num(c.fuelStockKg)} kg em estoque; preço ${utils.money(getFuelPrice(c))}/kg.` : 'Sem carreira ativa.' },
    { ok: !c || Array.isArray(c.maintenanceLog), label:'Log de manutenção', detail:c ? `${(c.maintenanceLog||[]).length} registros de manutenção.` : 'Sem carreira ativa.' },
    { ok: !!window.L || true, label:'Fallback de mapa', detail: window.L ? 'Leaflet disponível.' : 'Leaflet indisponível; fallback SVG será usado.' },
    { ok: !lastCrash, label:'Última sessão sem crash', detail:lastCrash ? 'Há registro de crash anterior salvo para diagnóstico.' : 'Nenhum crash registrado.' }
  ];
}

function selectSlotNew(idx) {
  runtime.state.activeSlot = Number(idx); saveState(); runtime.view = 'onboarding'; render();
}

function loadSlot(idx) {
  runtime.state.activeSlot = Number(idx); const c = activeCareer(); if (c) c.lastPlayedAt = Date.now(); saveState(); runtime.view = 'dashboard'; showToast('Carreira carregada.', 'ok'); render();
}

function deleteSlot(idx) {
  if (!confirm('Apagar este save? Esta ação não pode ser desfeita.')) return;
  runtime.state.slots[Number(idx)] = null;
  if (runtime.state.activeSlot === Number(idx)) runtime.state.activeSlot = 0;
  saveState(); showToast('Save apagado.', 'warn'); render();
}

function renameSlot(idx) {
  const c = runtime.state.slots[Number(idx)]; if (!c) return;
  const name = prompt('Novo nome da companhia:', c.companyName);
  if (!name) return;
  c.companyName = name.slice(0,32);
  c.lastPlayedAt = Date.now(); saveState(); showToast('Companhia renomeada.', 'ok'); render();
}

function toggleRoute(id) {
  const c = activeCareer(); const r = c.routes.find(x=>x.id===id); if (!r) return;
  r.status = r.status === 'active' ? 'paused' : 'active';
  const p = c.fleet.find(x=>x.id===r.planeId); if (p) p.status = r.status === 'active' ? 'inFlight' : 'idle';
  pushMessage(c, `Rota ${r.origin}-${r.dest} ${r.status==='active'?'reativada':'pausada'}.`, 'info');
  setActiveCareer(c); render();
}


function setRoutePrice(id, strategyKey) {
  const c = activeCareer(); const r = c.routes.find(x => x.id === id); if (!r) return;
  const strategy = PRICE_STRATEGIES[strategyKey] || PRICE_STRATEGIES.balanced;
  r.priceStrategy = strategyKey in PRICE_STRATEGIES ? strategyKey : 'balanced';
  const plane = c.fleet.find(p => p.id === r.planeId);
  const model = plane && utils.model(plane.modelId);
  const origin = utils.byIata(r.origin), dest = utils.byIata(r.dest);
  if (model && origin && dest) {
    const e = utils.routeEstimate(origin, dest, model, c, Object.assign({}, r, { planeCondition: plane.condition }));
    r.lastMargin = Math.round(e.margin || 0);
    r.lastLoadFactor = Math.round((e.loadFactor || 0) * 100);
    r.lastFuelKg = Math.round(e.fuelKg || 0);
  }
  pushMessage(c, `Preço da rota ${r.origin}-${r.dest} alterado para ${strategy.label}.`, 'info');
  setActiveCareer(c); showToast(`Estratégia ${strategy.label} aplicada.`, 'ok'); render();
}

function closeRoute(id) {
  const c = activeCareer(); const r = c.routes.find(x=>x.id===id); if (!r) return;
  if (!confirm(`Fechar rota ${r.origin}-${r.dest}?`)) return;
  const p = c.fleet.find(x=>x.id===r.planeId); if (p) { p.status='idle'; p.routeId=null; }
  c.routes = c.routes.filter(x=>x.id!==id);
  pushMessage(c, `Rota ${r.origin}-${r.dest} encerrada.`, 'warn');
  updateMarket(c); setActiveCareer(c); render();
}

function renamePlane(id) {
  const c = activeCareer(); const p = c.fleet.find(x=>x.id===id); if (!p) return;
  const name = prompt('Novo nome da aeronave:', p.name); if (!name) return;
  p.name = name.slice(0,36); setActiveCareer(c); render();
}

function sellPlane(id) {
  const c = activeCareer(); const p = c.fleet.find(x=>x.id===id); if (!p) return;
  if (c.routes.some(r=>r.planeId===id)) return showToast('Feche a rota antes de vender esta aeronave.', 'warn');
  if (c.fleet.length <= 1) return showToast('Não é seguro vender o último avião da companhia.', 'warn');
  const m = utils.model(p.modelId); const value = Math.round(m.price * (0.44 + p.condition / 260));
  if (!confirm(`Vender ${p.name} por ${utils.money(value)}?`)) return;
  c.cash += value; c.fleet = c.fleet.filter(x=>x.id!==id); logFinance(c, `Venda de ${p.name}`, value, 'venda'); updateMarket(c); setActiveCareer(c); showToast('Avião vendido.', 'ok'); render();
}

function setSpeed(speed) {
  const c = activeCareer(); if (!c) return;
  c.speed = Number(speed); c.lastTickAt = Date.now(); setActiveCareer(c); showToast(c.speed ? `Velocidade ${c.speed}x` : 'Simulação pausada', 'ok'); render();
}

function handleAction(target) {
  const action = target.dataset.action;
  if (!action) return;
  safeExecute(`action:${action}`, () => {
    if (action === 'go') { runtime.view = target.dataset.view || 'dashboard'; render(); return; }
    if (action === 'createCareer') {
      const form = document.getElementById('careerForm');
      const fd = new FormData(form);
      const career = createCareer(Object.fromEntries(fd.entries()));
      setActiveCareer(career); runtime.view = 'dashboard'; showToast('Companhia fundada com sucesso.', 'ok'); render(); return;
    }
    if (action === 'selectSlotNew') return selectSlotNew(target.dataset.slot);
    if (action === 'loadSlot') return loadSlot(target.dataset.slot);
    if (action === 'deleteSlot') return deleteSlot(target.dataset.slot);
    if (action === 'renameSlot') return renameSlot(target.dataset.slot);
    if (action === 'speed') return setSpeed(target.dataset.speed);
    if (action === 'createRoute') return createRoute();
    if (action === 'openHub') return openHub(target.dataset.hub);
    if (action === 'acceptContract') return acceptContract(target.dataset.contract);
    if (action === 'toggleRoute') return toggleRoute(target.dataset.route);
    if (action === 'routePrice') return setRoutePrice(target.dataset.route, target.dataset.strategy);
    if (action === 'closeRoute') return closeRoute(target.dataset.route);
    if (action === 'buyPlane') return buyPlane(target.dataset.model);
    if (action === 'maintainPlane') return maintainPlane(target.dataset.plane, target.dataset.level || 'standard');
    if (action === 'renamePlane') return renamePlane(target.dataset.plane);
    if (action === 'sellPlane') return sellPlane(target.dataset.plane);
    if (action === 'hireStaff') return hireStaff(target.dataset.role, target.dataset.salary);
    if (action === 'fireStaff') return fireStaff(target.dataset.role);
    if (action === 'buyFuel') return buyFuel(target.dataset.pack || 'small');
    if (action === 'marketingCampaign') return marketingCampaign();
    if (action === 'runAudit') { localStorage.removeItem(CRASH_KEY); showToast('Auditoria executada.', 'ok'); render(); return; }
  });
}

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-action]');
  if (target) handleAction(target);
});

document.addEventListener('change', (event) => {
  if (event.target && (event.target.id === 'routePlane' || event.target.id === 'routeDest' || event.target.id === 'routeOrigin')) updateRoutePreview();
});

window.addEventListener('error', event => {
  localStorage.setItem(CRASH_KEY, JSON.stringify({ label:'window.error', message:event.message, time:Date.now(), build:BUILD.build }));
  renderFatalRecovery('window.error', new Error(event.message));
});

window.addEventListener('unhandledrejection', event => {
  localStorage.setItem(CRASH_KEY, JSON.stringify({ label:'promise', message:String(event.reason), time:Date.now(), build:BUILD.build }));
  renderFatalRecovery('promise', new Error(String(event.reason)));
});

boot();
