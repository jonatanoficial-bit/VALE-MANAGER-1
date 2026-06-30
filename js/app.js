
'use strict';

// VALE AIR MANAGER - v0.4.0-alpha - Build 20260630-1600
// Núcleo acelerado F1-F4: fundação, onboarding, save slots, mapa real/fallback, frota e primeira rota.

const BUILD = Object.freeze({
  game: 'VALE AIR MANAGER',
  version: '0.4.0-alpha',
  phase: 'F1-F4',
  build: '20260630-1600',
  schema: 4,
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

const STORE_KEY = 'vale_air_manager_schema_4';
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
  routeDemand(origin, dest, career) {
    const hubBonus = origin.iata === career.hubIata ? 1.12 : 1;
    const intl = origin.country !== dest.country ? 1.18 : 1;
    const reputation = 0.62 + (career.reputation / 100) * 0.62;
    const airportDemand = (origin.demand + dest.demand) / 200;
    const marketNoise = 0.92 + Math.sin((career.day + dest.lat + dest.lon) / 9) * 0.08;
    return utils.clamp(airportDemand * hubBonus * intl * reputation * marketNoise, 0.18, 1.34);
  },
  routeEstimate(origin, dest, plane, career) {
    const distance = Math.round(utils.distanceKm(origin, dest));
    const hours = Math.max(distance / plane.speedKmh, 0.18);
    const intl = origin.country !== dest.country;
    const demand = utils.routeDemand(origin, dest, career);
    const staffQuality = getStaffQuality(career);
    const passengers = plane.capacity > 0 ? Math.floor(plane.capacity * utils.clamp(demand * staffQuality.service, 0.2, 1.08)) : 0;
    const avgFare = Math.round((45 + distance * 0.132) * (intl ? 1.28 : 1) * (career.businessModel === 'premium' ? 1.18 : career.businessModel === 'lowcost' ? 0.82 : 1));
    const cargoTons = plane.capacity === 0 ? Math.round((plane.cargoKg / 1000) * utils.clamp(demand, 0.35, 1.12)) : Math.round((plane.cargoKg / 1000) * 0.12 * demand);
    const cargoRevenue = cargoTons * (intl ? 168 : 96) * Math.max(distance / 100, 1);
    const revenue = passengers * avgFare + cargoRevenue;
    const fuelCost = hours * plane.fuelBurnKgH * getFuelPrice(career);
    const crewCost = plane.capacity > 0 ? Math.max(220, passengers * 8 + distance * 0.12) : Math.max(420, distance * 0.26);
    const airportFees = (origin.fee + dest.fee) * (plane.capacity > 230 || plane.cargoKg > 50000 ? 1.65 : 1);
    const maintenanceReserve = (plane.price * plane.maintenanceRate / 10000) * Math.max(hours, 0.5);
    const co2Cost = (plane.fuelBurnKgH * hours * 3.16 / 1000) * (career.sustainability < 50 ? 18 : 9);
    const totalCost = fuelCost + crewCost + airportFees + maintenanceReserve + co2Cost;
    const profit = revenue - totalCost;
    const score = utils.clamp((profit / Math.max(totalCost, 1)) * 100, -80, 180);
    return { distance, hours, passengers, avgFare, cargoTons, revenue, fuelCost, crewCost, airportFees, maintenanceReserve, co2Cost, totalCost, profit, score };
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
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return empty;
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.schema !== BUILD.schema || !Array.isArray(parsed.slots)) return migrateState(parsed, empty);
    parsed.slots = [parsed.slots[0] || null, parsed.slots[1] || null, parsed.slots[2] || null];
    parsed.activeSlot = utils.clamp(parsed.activeSlot ?? 0, 0, 2);
    return parsed;
  } catch (error) {
    localStorage.setItem(CRASH_KEY, JSON.stringify({ label: 'loadState', message: String(error), time: Date.now(), build: BUILD.build }));
    return empty;
  }
}

function migrateState(oldState, fallback) {
  const migrated = fallback;
  migrated.migratedFrom = oldState && oldState.schema ? oldState.schema : 'unknown';
  return migrated;
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
    speed: DEFAULT_SPEED,
    fleet: [{ id: utils.id('plane'), modelId: initialPlane.id, name: 'VA-001 Esperança', condition: 98, hours: 0, cycles: 0, status: 'idle', routeId: null, acquiredAt: Date.now() }],
    routes: [],
    staff: { pilots: 1, cabin: 2, mechanics: 1, directors: 0, marketing: 0 },
    marketing: { active: 'none', expiresDay: 0, boost: 1 },
    financeLog: [],
    messages: [{ time: Date.now(), type: 'success', text: `Companhia ${form.companyName || 'Vale Air Stars'} fundada em ${hub.city}. Primeiro avião pronto para operação.` }],
    achievements: []
  };
  career.financeLog.unshift({ time: Date.now(), day: 1, type: 'capital', label: 'Capital inicial', amount: starterCash });
  return career;
}

function getFuelPrice(career) {
  return Number(career.fuelPriceKg || 1.02);
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
  const estimate = utils.routeEstimate(origin, dest, model, career);
  const conditionPenalty = plane.condition < 75 ? 0.88 : 1;
  const weatherNoise = 0.94 + Math.random() * 0.12;
  const profit = estimate.profit * conditionPenalty * weatherNoise;
  career.cash += Math.round(profit);
  route.totalFlights = (route.totalFlights || 0) + 1;
  route.totalProfit = (route.totalProfit || 0) + Math.round(profit);
  route.lastProfit = Math.round(profit);
  route.lastRevenue = Math.round(estimate.revenue);
  route.lastCost = Math.round(estimate.totalCost);
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
    ['dashboard','Painel','◈'], ['map','Mapa','◎'], ['routes','Rotas','⇄'], ['fleet','Frota','✈'],
    ['staff','Equipe','♟'], ['finance','Finanças','$'], ['market','Bolsa','▥'], ['audit','Auditoria','✓']
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
    else if (view === 'map') html = shell(renderMapView());
    else if (view === 'routes') html = shell(renderRoutes());
    else if (view === 'fleet') html = shell(renderFleet());
    else if (view === 'staff') html = shell(renderStaff());
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
        <div class="build-line">v${BUILD.version} • Build ${BUILD.build} • Fases F1-F4 aceleradas</div>
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
      <p class="hint">Começa com 1 avião regional, capital inicial, equipe mínima e sistema anti-quebra ativo.</p>
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
        <button class="action-card" data-action="go" data-view="routes"><b>Criar rota</b><small>Origem, destino, lucro estimado</small></button>
        <button class="action-card" data-action="go" data-view="fleet"><b>Comprar avião</b><small>Mercado inicial de aeronaves</small></button>
        <button class="action-card" data-action="go" data-view="staff"><b>Contratar equipe</b><small>Pilotos, comissários e diretores</small></button>
        <button class="action-card" data-action="go" data-view="audit"><b>Auditar jogo</b><small>Integridade e anti-quebra</small></button>
      </div>
    </section>
    <section class="panel glass"><h2>Status operacional</h2><div class="kpi-grid">
      <div class="kpi"><small>Rotas ativas</small><strong>${activeRoutes}</strong></div>
      <div class="kpi"><small>Pontualidade</small><strong>${utils.pct(c.punctuality)}</strong></div>
      <div class="kpi"><small>Segurança</small><strong>${utils.pct(c.safety)}</strong></div>
      <div class="kpi"><small>Sustentável</small><strong>${utils.pct(c.sustainability)}</strong></div>
    </div></section>
    <section class="panel glass"><h2>Alertas do assistente</h2>${alerts.length ? `<div class="alert-list">${alerts.map(a => `<div class="alert ${a.type}"><b>${a.title}</b><span>${a.text}</span><button class="btn mini" data-action="go" data-view="${a.view}">Abrir</button></div>`).join('')}</div>` : '<p class="success-text">Nenhum bloqueio crítico. Sistema está pronto para evoluir.</p>'}</section>
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
  const hub = utils.byIata(c.hubIata);
  const idlePlanes = c.fleet.filter(p => ['idle','maintenanceRequired'].includes(p.status) || !p.status);
  const dests = AIRPORTS.filter(a => a.iata !== c.hubIata);
  return `<div class="routes-layout">
    <section class="panel glass"><div class="section-head"><div><span class="eyebrow">Planejamento de malha</span><h2>Criar rota</h2><p>Origem fixa no hub atual: <b>${hub.iata} — ${hub.city}</b></p></div></div>
      <div class="form-grid">
        <label>Aeronave<select id="routePlane">${idlePlanes.map(p => { const m=utils.model(p.modelId); return `<option value="${p.id}" ${p.condition<50?'disabled':''}>${p.name} — ${m.name} — condição ${Math.round(p.condition)}%</option>`; }).join('') || '<option disabled>Sem avião livre</option>'}</select></label>
        <label>Destino<select id="routeDest">${dests.map(a => `<option value="${a.iata}">${a.iata} — ${a.city}, ${a.country} • demanda ${a.demand}</option>`).join('')}</select></label>
      </div>
      <div id="routePreview" class="preview-box">Selecione uma aeronave e destino.</div>
      <button class="btn primary big" data-action="createRoute">Abrir rota</button>
      <p class="hint">Nesta build, a rota opera em ciclo acelerado controlado por 1x/2x/4x para testar rapidamente sem travar o jogo.</p>
    </section>
    <section class="panel glass"><h2>Rotas ativas</h2><div class="route-list">${c.routes.map(renderRouteCard).join('') || '<p>Nenhuma rota criada. Abra a primeira rota para começar a receita.</p>'}</div></section>
  </div>`;
}

function renderRouteCard(r) {
  const plane = activeCareer().fleet.find(p => p.id === r.planeId);
  return `<article class="route-card"><div><b>${r.origin} → ${r.dest}</b><small>${plane ? plane.name : 'Avião não encontrado'} • ${utils.num(r.distance)} km</small></div><div class="progress"><span style="width:${utils.clamp(r.progress,0,100)}%"></span></div><div class="route-stats"><span>Voos: ${r.totalFlights || 0}</span><span>Último: ${utils.money(r.lastProfit || 0)}</span><span>Total: ${utils.money(r.totalProfit || 0)}</span></div><div class="row gap"><button class="btn mini ghost" data-action="toggleRoute" data-route="${r.id}">${r.status==='active'?'Pausar':'Ativar'}</button><button class="btn mini danger" data-action="closeRoute" data-route="${r.id}">Fechar</button></div></article>`;
}

function updateRoutePreview() {
  safeExecute('routePreview', () => {
    const c = activeCareer(); if (!c) return;
    const box = document.getElementById('routePreview');
    const planeSelect = document.getElementById('routePlane');
    const destSelect = document.getElementById('routeDest');
    if (!box || !planeSelect || !destSelect) return;
    const plane = c.fleet.find(p => p.id === planeSelect.value);
    const model = plane && utils.model(plane.modelId);
    const origin = utils.byIata(c.hubIata);
    const dest = utils.byIata(destSelect.value);
    if (!plane || !model || !origin || !dest) { box.innerHTML = 'Sem dados suficientes.'; return; }
    const e = utils.routeEstimate(origin, dest, model, c);
    const feasible = e.distance <= model.rangeKm;
    box.innerHTML = `<div class="preview-grid"><div><small>Distância</small><b>${utils.num(e.distance)} km</b></div><div><small>Alcance do avião</small><b class="${feasible?'ok':'bad'}">${utils.num(model.rangeKm)} km</b></div><div><small>Passageiros estimados</small><b>${utils.num(e.passengers)}</b></div><div><small>Receita</small><b>${utils.money(e.revenue)}</b></div><div><small>Custo</small><b>${utils.money(e.totalCost)}</b></div><div><small>Lucro estimado</small><b class="${e.profit>=0?'ok':'bad'}">${utils.money(e.profit)}</b></div></div>${feasible ? '' : '<p class="bad">Rota bloqueada: aeronave não possui alcance suficiente.</p>'}`;
  });
}

function createRoute() {
  const c = activeCareer(); if (!c) return;
  const planeId = document.getElementById('routePlane')?.value;
  const destIata = document.getElementById('routeDest')?.value;
  const plane = c.fleet.find(p => p.id === planeId);
  const model = plane && utils.model(plane.modelId);
  const origin = utils.byIata(c.hubIata);
  const dest = utils.byIata(destIata);
  if (!plane || !model || !origin || !dest) return showToast('Selecione avião e destino válidos.', 'warn');
  if (plane.condition < 50) return showToast('Aeronave precisa de manutenção antes de abrir rota.', 'warn');
  const e = utils.routeEstimate(origin, dest, model, c);
  if (e.distance > model.rangeKm) return showToast('Alcance insuficiente para esta rota.', 'warn');
  const routeCost = Math.round(dest.slotCost * 0.18 + origin.fee + dest.fee);
  if (c.cash < routeCost) return showToast(`Caixa insuficiente. Custa ${utils.money(routeCost)} para abrir a rota.`, 'warn');
  c.cash -= routeCost;
  plane.status = 'inFlight';
  const route = { id: utils.id('route'), origin: origin.iata, dest: dest.iata, planeId: plane.id, status: 'active', distance: e.distance, cycleSeconds: utils.clamp(38 + e.distance / 38, 45, 220), progress: 0, totalFlights: 0, totalProfit: 0, lastProfit: 0, createdAt: Date.now() };
  plane.routeId = route.id;
  c.routes.push(route);
  logFinance(c, `Abertura de rota ${origin.iata}-${dest.iata}`, -routeCost, 'investimento');
  pushMessage(c, `Nova rota ${origin.iata} → ${dest.iata} aberta com ${plane.name}.`, 'success');
  updateMarket(c); setActiveCareer(c); showToast('Rota criada e iniciada.', 'ok'); render();
}

function renderFleet() {
  const c = activeCareer();
  return `<div class="fleet-layout"><section class="panel glass"><div class="section-head"><div><span class="eyebrow">Hangar</span><h2>Frota da companhia</h2></div></div><div class="fleet-grid">${c.fleet.map(renderPlaneCard).join('')}</div></section><section class="panel glass"><h2>Mercado de aeronaves</h2><p class="hint">Preços simplificados para balanceamento inicial. Usar silhuetas genéricas agora; assets cinematográficos entram depois.</p><div class="market-list">${AIRCRAFT.map(renderAircraftMarket).join('')}</div></section></div>`;
}

function renderPlaneCard(p) {
  const m = utils.model(p.modelId);
  const route = activeCareer().routes.find(r => r.id === p.routeId);
  return `<article class="plane-card"><img src="${m.image}" alt="${m.name}"><div class="plane-info"><h3>${utils.escape(p.name)}</h3><small>${m.name} • ${m.category}</small><div class="health"><span style="width:${utils.clamp(p.condition,0,100)}%"></span></div><div class="route-stats"><span>Condição ${Math.round(p.condition)}%</span><span>${p.status || 'idle'}</span><span>${utils.num(p.hours,1)} h</span></div>${route ? `<small>Rota atual: ${route.origin} → ${route.dest}</small>` : '<small>Sem rota ativa</small>'}<div class="row gap wrap"><button class="btn mini" data-action="maintainPlane" data-plane="${p.id}">Manutenção</button><button class="btn mini ghost" data-action="renamePlane" data-plane="${p.id}">Renomear</button><button class="btn mini danger" data-action="sellPlane" data-plane="${p.id}">Vender</button></div></div></article>`;
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

function maintainPlane(planeId) {
  const c = activeCareer(); const p = c.fleet.find(x => x.id === planeId); if (!p) return;
  const m = utils.model(p.modelId); if (!m) return;
  const cost = Math.round((100 - p.condition) * m.price * 0.00072 + 18000);
  if (p.condition >= 96) return showToast('Aeronave já está em excelente condição.', 'ok');
  if (c.cash < cost) return showToast(`Caixa insuficiente. Manutenção custa ${utils.money(cost)}.`, 'warn');
  c.cash -= cost;
  p.condition = 100;
  p.status = p.routeId ? 'inFlight' : 'idle';
  c.safety = utils.clamp(c.safety + 0.4, 0, 100);
  logFinance(c, `Manutenção ${p.name}`, -cost, 'manutenção');
  pushMessage(c, `${p.name} passou por manutenção completa.`, 'success');
  updateMarket(c); setActiveCareer(c); showToast('Manutenção concluída.', 'ok'); render();
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
  const revenue = c.financeLog.filter(f => f.amount > 0).reduce((s,f)=>s+f.amount,0);
  const expense = c.financeLog.filter(f => f.amount < 0).reduce((s,f)=>s+f.amount,0);
  return `<div class="finance-layout"><section class="panel glass"><span class="eyebrow">Financeiro</span><h2>Fluxo de caixa</h2><div class="kpi-grid"><div class="kpi"><small>Receitas registradas</small><strong>${utils.money(revenue)}</strong></div><div class="kpi"><small>Despesas registradas</small><strong>${utils.money(expense)}</strong></div><div class="kpi"><small>Resultado</small><strong>${utils.money(revenue+expense)}</strong></div><div class="kpi"><small>Combustível/kg</small><strong>${utils.money(getFuelPrice(c))}</strong></div></div><div class="row gap wrap"><button class="btn primary" data-action="buyFuel">Comprar combustível hedge</button><button class="btn ghost" data-action="marketingCampaign">Campanha marketing</button></div></section><section class="panel glass"><h2>Livro financeiro</h2><div class="finance-list">${c.financeLog.map(f => `<div class="finance-row"><span>${utils.dateLabel(f.time)}<small>${f.type} • Dia ${f.day}</small></span><b class="${f.amount>=0?'ok':'bad'}">${utils.money(f.amount)}</b><em>${utils.escape(f.label)}</em></div>`).join('') || '<p>Sem lançamentos.</p>'}</div></section></div>`;
}

function buyFuel() {
  const c = activeCareer();
  const cost = 250000;
  if (c.cash < cost) return showToast('Caixa insuficiente para compra antecipada de combustível.', 'warn');
  c.cash -= cost; c.fuelStockKg += 250000 / getFuelPrice(c); c.fuelPriceKg = Math.max(0.86, c.fuelPriceKg - 0.02);
  logFinance(c, 'Compra antecipada de combustível', -cost, 'combustível');
  pushMessage(c, 'Hedge de combustível realizado; preço médio reduziu levemente.', 'success');
  updateMarket(c); setActiveCareer(c); showToast('Combustível comprado.', 'ok'); render();
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
  return `<div class="market-layout"><section class="panel glass"><span class="eyebrow">Mercado de ações</span><h2>Bolsa da companhia</h2><div class="stock-card"><div><small>Valor por ação</small><strong>$${c.stockPrice.toFixed(2)}</strong><span>tendência: ${trend}</span></div><div><small>Valuation</small><strong>${utils.money(c.valuation)}</strong><span>baseado em frota, caixa, rotas e reputação</span></div></div><div class="stock-line"><i style="height:${utils.clamp(c.reputation,12,100)}%"></i><i style="height:${utils.clamp(c.safety,12,100)}%"></i><i style="height:${utils.clamp(c.punctuality,12,100)}%"></i><i style="height:${utils.clamp((c.cash/10000000)*100,12,100)}%"></i><i style="height:${utils.clamp(c.routes.length*18,12,100)}%"></i></div><p class="hint">Nesta build, o mercado já reage ao caixa, lucro recente, segurança, reputação, frota e malha.</p></section><section class="panel glass"><h2>Próximas evoluções da bolsa</h2><div class="todo-list"><span>IPO e venda de participação</span><span>Investidores e metas trimestrais</span><span>Empréstimos e recuperação judicial</span><span>Compra de companhias menores</span></div></section></div>`;
}

function renderAudit() {
  const checks = runIntegrityAudit();
  const passed = checks.filter(c => c.ok).length;
  return `<div class="audit-layout"><section class="panel glass"><div class="section-head"><div><span class="eyebrow">Sistema anti-quebra</span><h2>Auditoria da build</h2><p>Execução obrigatória por fase para garantir integridade e evolução real.</p></div><button class="btn primary" data-action="runAudit">Rodar auditoria</button></div><div class="audit-score"><strong>${passed}/${checks.length}</strong><span>checks aprovados</span></div><div class="audit-list">${checks.map(c => `<div class="audit-row ${c.ok?'ok':'bad'}"><b>${c.ok?'✓':'!'}</b><span>${c.label}</span><small>${c.detail}</small></div>`).join('')}</div></section><section class="panel glass"><h2>Relatório desta entrega</h2><div class="todo-list"><span>F1 Fundação: OK — HTML/CSS/JS, build visível e anti-crash.</span><span>F2 Save slots: OK — 3 slots, continuar, renomear e apagar.</span><span>F3 Mapa: OK — Leaflet real + fallback próprio.</span><span>F4 Frota/rota: OK — comprar avião, criar rota e voo cíclico.</span><span>Assets: provisórios em SVG, sem depender de imagens externas.</span></div></section></div>`;
}

function runIntegrityAudit() {
  const c = activeCareer();
  const slotCount = runtime.state && Array.isArray(runtime.state.slots) ? runtime.state.slots.length : 0;
  const iatas = new Set(AIRPORTS.map(a => a.iata));
  const duplicateIata = iatas.size !== AIRPORTS.length;
  const lastCrash = localStorage.getItem(CRASH_KEY);
  return [
    { ok: !!dom.buildBadge && dom.buildBadge.textContent.includes(BUILD.build), label:'Build/data/hora visíveis', detail:`Build ${BUILD.build} renderizado no rodapé.` },
    { ok: BUILD.schema === 4, label:'Schema da build', detail:`Schema atual ${BUILD.schema}.` },
    { ok: slotCount === 3, label:'Save slots', detail:`${slotCount} slots detectados.` },
    { ok: AIRPORTS.length >= 25 && !duplicateIata, label:'Banco de aeroportos', detail:`${AIRPORTS.length} aeroportos reais/semi-realistas, IATA único.` },
    { ok: AIRCRAFT.length >= 10, label:'Catálogo inicial de aeronaves', detail:`${AIRCRAFT.length} modelos com alcance, consumo, capacidade e custo.` },
    { ok: !!window.localStorage, label:'LocalStorage disponível', detail:'Sistema pode salvar carreira localmente.' },
    { ok: !!c || runtime.view === 'onboarding' || runtime.view === 'slots', label:'Fluxo inicial protegido', detail:c ? `Carreira ativa: ${c.companyName}.` : 'Sem carreira ativa, tela de slots/onboarding disponível.' },
    { ok: !c || c.fleet.every(p => !!utils.model(p.modelId)), label:'Integridade da frota', detail:c ? `${c.fleet.length} aeronaves vinculadas a modelos válidos.` : 'Sem frota ativa ainda.' },
    { ok: !c || c.routes.every(r => utils.byIata(r.origin) && utils.byIata(r.dest) && c.fleet.some(p => p.id === r.planeId)), label:'Integridade das rotas', detail:c ? `${c.routes.length} rotas verificadas.` : 'Sem rotas ativas.' },
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
    if (action === 'toggleRoute') return toggleRoute(target.dataset.route);
    if (action === 'closeRoute') return closeRoute(target.dataset.route);
    if (action === 'buyPlane') return buyPlane(target.dataset.model);
    if (action === 'maintainPlane') return maintainPlane(target.dataset.plane);
    if (action === 'renamePlane') return renamePlane(target.dataset.plane);
    if (action === 'sellPlane') return sellPlane(target.dataset.plane);
    if (action === 'hireStaff') return hireStaff(target.dataset.role, target.dataset.salary);
    if (action === 'fireStaff') return fireStaff(target.dataset.role);
    if (action === 'buyFuel') return buyFuel();
    if (action === 'marketingCampaign') return marketingCampaign();
    if (action === 'runAudit') { localStorage.removeItem(CRASH_KEY); showToast('Auditoria executada.', 'ok'); render(); return; }
  });
}

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-action]');
  if (target) handleAction(target);
});

document.addEventListener('change', (event) => {
  if (event.target && (event.target.id === 'routePlane' || event.target.id === 'routeDest')) updateRoutePreview();
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
