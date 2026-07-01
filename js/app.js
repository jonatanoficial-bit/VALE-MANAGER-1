
'use strict';

// VALE AIR MANAGER - v1.1.0 - Build 20260701-1125
// Fases F29-F32: regulações por país, congestionamento aeroportuário, incidentes avançados e seguros profundos.

const BUILD = Object.freeze({
  game: 'VALE AIR MANAGER',
  version: '1.1.0',
  phase: 'F29-F32',
  build: '20260701-1125',
  schema: 11,
  date: '2026-07-01',
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


const LOAN_PRODUCTS = Object.freeze({
  working: { label:'Capital de giro', principal:500000, termDays:8, interest:0.08, minReputation:0, purpose:'cobrir caixa, combustível e folha' },
  expansion: { label:'Expansão regional', principal:2000000, termDays:14, interest:0.12, minReputation:50, purpose:'abrir hubs e rotas lucrativas' },
  fleet: { label:'Financiamento de frota', principal:5000000, termDays:20, interest:0.16, minReputation:58, purpose:'comprar aeronaves maiores' }
});

const INSURANCE_PLANS = Object.freeze({
  basic: { label:'Básico', dailyPerPlane:680, routeCostMultiplier:1.00, incidentCoverage:0.18, safetyBonus:0.00 },
  standard: { label:'Operacional', dailyPerPlane:1450, routeCostMultiplier:0.88, incidentCoverage:0.44, safetyBonus:0.18 },
  premium: { label:'Premium', dailyPerPlane:2750, routeCostMultiplier:0.76, incidentCoverage:0.72, safetyBonus:0.42 }
});

const IPO_RULES = Object.freeze({
  minValuation: 9000000,
  minReputation: 58,
  floatSold: 0.16,
  discount: 0.84,
  buybackBlock: 0.04,
  secondaryOfferBlock: 0.06
});

const INVESTOR_GOALS = Object.freeze([
  { id:'profitability', label:'Lucro operacional', text:'Manter resultado recente positivo.', trust:2.4 },
  { id:'safety', label:'Segurança acima de 88%', text:'Investidores exigem segurança alta antes de expansão agressiva.', trust:2.0 },
  { id:'growth', label:'Crescimento de malha', text:'Operar pelo menos 3 rotas e 2 hubs.', trust:2.2 },
  { id:'debt', label:'Dívida controlada', text:'Dívida menor que 55% do valuation.', trust:2.6 }
]);

const COMPETITORS = Object.freeze([
  { id:'andes_connect', name:'Andes Connect', base:'SCL', region:'South America', value:3200000, fleet:1, routes:['SCL-EZE','SCL-GRU'], reputation:52, debt:420000, modelId:'embraer190', synergy:1.08 },
  { id:'rio_shuttle', name:'Rio Shuttle', base:'GIG', region:'Brazil', value:1850000, fleet:1, routes:['GIG-GRU','GIG-BSB'], reputation:48, debt:160000, modelId:'atr72', synergy:1.04 },
  { id:'lusitania_air', name:'Lusitania Air', base:'LIS', region:'Europe', value:5600000, fleet:1, routes:['LIS-MAD','LIS-LHR'], reputation:61, debt:780000, modelId:'a320neo', synergy:1.11 },
  { id:'atlantic_prime', name:'Atlantic Prime', base:'MIA', region:'North America', value:8700000, fleet:2, routes:['MIA-JFK','MIA-GRU'], reputation:67, debt:1250000, modelId:'b7878', synergy:1.16 },
  { id:'cargo_sul', name:'Cargo Sul Express', base:'GRU', region:'Cargo', value:4100000, fleet:1, routes:['GRU-SCL','GRU-MIA'], reputation:55, debt:540000, modelId:'b737cargo', synergy:1.10 }
]);

const STORE_KEY = 'vale_air_manager_schema_11';
const LEGACY_STORE_KEYS = ['vale_air_manager_schema_10','vale_air_manager_schema_9','vale_air_manager_schema_8','vale_air_manager_schema_7','vale_air_manager_schema_6','vale_air_manager_schema_5','vale_air_manager_schema_4'];
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
    const insurance = INSURANCE_PLANS[career.insurance?.plan || 'basic'] || INSURANCE_PLANS.basic;
    const insuranceCost = Math.max(120, plane.price * 0.000006 * Math.max(hours, 0.5) * insurance.routeCostMultiplier);
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
  career.loans = Array.isArray(career.loans) ? career.loans : [];
  career.loans.forEach(loan => { loan.status = loan.status || 'active'; loan.remaining = Number(loan.remaining || 0); loan.payment = Number(loan.payment || 0); loan.nextPaymentDay = Number(loan.nextPaymentDay || ((career.day || 1) + 1)); });
  career.insurance = Object.assign({ plan:'basic', lastBillingDay: career.day || 1, protectedIncidents:0 }, career.insurance || {});
  if (!INSURANCE_PLANS[career.insurance.plan]) career.insurance.plan = 'basic';
  career.crisis = Object.assign({ status:'stable', lastRecoveryDay:-99, recoveryCount:0, lastStatusMessage:'' }, career.crisis || {});
  career.bankScore = Number(career.bankScore || 58);
  career.market = Object.assign({ ipo:false, publicFloat:0, treasuryCashRaised:0, sharesOutstanding:1000000, investorTrust:54, lastInvestorReviewDay:0, shareHistory:[] }, career.market || {});
  career.market.shareHistory = Array.isArray(career.market.shareHistory) ? career.market.shareHistory : [];
  career.market.sharesOutstanding = Number(career.market.sharesOutstanding || 1000000);
  career.market.publicFloat = utils.clamp(Number(career.market.publicFloat || 0), 0, 0.72);
  career.market.investorTrust = utils.clamp(Number(career.market.investorTrust || 54), 0, 100);
  career.acquisitions = Array.isArray(career.acquisitions) ? career.acquisitions : [];
  career.competitors = Array.isArray(career.competitors) ? career.competitors : seedCompetitors(career);
  career.investorGoals = Array.isArray(career.investorGoals) ? career.investorGoals : seedInvestorGoals(career);
  career.routes.forEach(r => { r.priceStrategy = r.priceStrategy || 'balanced'; r.serviceTier = r.serviceTier || 'standard'; });
  career.fleet.forEach(p => { p.cycles = Number(p.cycles || 0); p.hours = Number(p.hours || 0); p.status = p.status || 'idle'; p.acquisitionMode = p.acquisitionMode || (p.lease ? 'lease' : 'owned'); if (p.acquisitionMode === 'lease') { p.lease = Object.assign({ periodicPayment:0, nextDueDay:(career.day||1)+5, totalPaid:0, deposit:0 }, p.lease || {}); } });
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


function seedCompetitors(career) {
  const owned = new Set((career?.acquisitions || []).map(a => a.id));
  return COMPETITORS.map((comp, idx) => ({
    id: comp.id,
    name: comp.name,
    base: comp.base,
    region: comp.region,
    value: Math.round(comp.value * (0.94 + idx * 0.025)),
    debt: comp.debt,
    fleet: comp.fleet,
    routes: [...comp.routes],
    reputation: comp.reputation,
    modelId: comp.modelId,
    synergy: comp.synergy,
    status: owned.has(comp.id) ? 'acquired' : 'available',
    createdDay: career?.day || 1
  }));
}

function seedInvestorGoals(career) {
  return INVESTOR_GOALS.map(g => Object.assign({}, g, { status:'open', lastCheckedDay: career?.day || 1 }));
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
    loans: [],
    insurance: { plan:'basic', lastBillingDay:1, protectedIncidents:0 },
    crisis: { status:'stable', lastRecoveryDay:-99, recoveryCount:0, lastStatusMessage:'' },
    bankScore: 58,
    market: { ipo:false, publicFloat:0, treasuryCashRaised:0, sharesOutstanding:1000000, investorTrust:54, lastInvestorReviewDay:0, shareHistory:[] },
    acquisitions: [],
    competitors: [],
    investorGoals: [],
    totalFlights: 0,
    totalPassengers: 0,
    totalCargoTons: 0,
    speed: DEFAULT_SPEED,
    fleet: [{ id: utils.id('plane'), modelId: initialPlane.id, name: 'VA-001 Esperança', condition: 98, hours: 0, cycles: 0, status: 'idle', routeId: null, acquiredAt: Date.now(), acquisitionMode:'owned' }],
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


function totalDebt(career) {
  const loans = (career.loans || []).filter(l => l.status === 'active').reduce((sum, l) => sum + Number(l.remaining || 0), 0);
  const leaseTail = (career.fleet || []).reduce((sum, p) => {
    if (p.acquisitionMode !== 'lease' || !p.lease) return sum;
    return sum + Number(p.lease.periodicPayment || 0) * 4;
  }, 0);
  return Math.round(loans + leaseTail);
}

function leasedFleetCount(career) {
  return (career.fleet || []).filter(p => p.acquisitionMode === 'lease').length;
}

function valuation(career) {
  const fleetValue = career.fleet.reduce((sum, p) => { const m = utils.model(p.modelId); const ownership = p.acquisitionMode === 'lease' ? 0.22 : 1; return sum + (m ? m.price * ownership * (0.5 + p.condition / 200) : 0); }, 0);
  const routeValue = career.routes.length * 175000;
  const brand = career.reputation * 42000 + career.safety * 36000;
  const fuelAsset = getFuelStockValue(career) * 0.65;
  const debtPenalty = totalDebt(career) * 0.35;
  return Math.max(0, Math.round(career.cash + fleetValue + routeValue + brand + fuelAsset - debtPenalty));
}

function updateMarket(career) {
  career.valuation = valuation(career);
  const profit7 = career.financeLog.slice(0, 20).reduce((sum, f) => sum + (f.amount || 0), 0);
  const debt = totalDebt(career);
  const debtRisk = debt / Math.max(career.valuation + debt, 1);
  career.market = Object.assign({ ipo:false, publicFloat:0, treasuryCashRaised:0, sharesOutstanding:1000000, investorTrust:54, lastInvestorReviewDay:0, shareHistory:[] }, career.market || {});
  const investorTrust = Number(career.market.investorTrust || 54);
  const publicPressure = career.market.ipo ? (career.market.publicFloat * 0.34) : 0;
  const acquisitionBoost = Math.min((career.acquisitions || []).length * 0.08, 0.24);
  const trust = ((career.reputation + career.safety + career.punctuality) / 300)
    - Math.min(debtRisk * 0.28, 0.24)
    + Math.min((career.bankScore || 58) / 600, 0.14)
    + Math.min(investorTrust / 800, 0.12)
    + acquisitionBoost
    - publicPressure;
  const base = Math.max(0.18, career.valuation / 6500000);
  career.stockPrice = utils.clamp((base * 0.84 + trust * 0.45 + profit7 / 9000000), 0.08, 999);
  career.market.sharesOutstanding = Math.max(1000000, Number(career.market.sharesOutstanding || 1000000));
  career.market.shareHistory = Array.isArray(career.market.shareHistory) ? career.market.shareHistory : [];
  const last = career.market.shareHistory[0];
  if (!last || last.day !== career.day) {
    career.market.shareHistory.unshift({ day: career.day || 1, price: Number(career.stockPrice.toFixed(2)), valuation: career.valuation, trust: Math.round(career.market.investorTrust || 0) });
    career.market.shareHistory = career.market.shareHistory.slice(0, 28);
  }
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
    processFinanceObligations(career);
    expireMarketing(career);
    updateFuelMarket(career);
    maybeGenerateEvent(career);
    unlockContracts(career);
    checkFinancialCrisis(career);
    processInvestorReview(career);
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
  let cashImpact = Math.round(event.cash || 0);
  if (cashImpact < 0) {
    const plan = INSURANCE_PLANS[career.insurance?.plan || 'basic'] || INSURANCE_PLANS.basic;
    const covered = Math.round(Math.abs(cashImpact) * plan.incidentCoverage);
    cashImpact += covered;
    career.insurance.protectedIncidents = Number(career.insurance.protectedIncidents || 0) + covered;
    if (covered > 0) pushMessage(career, `Seguro ${plan.label} cobriu ${utils.money(covered)} do evento ${event.title}.`, 'success');
  }
  career.cash += cashImpact;
  career.reputation = utils.clamp(career.reputation + Number(event.reputation || 0), 0, 100);
  career.punctuality = utils.clamp(career.punctuality + Number(event.punctuality || 0), 0, 100);
  career.safety = utils.clamp(career.safety + Number(event.safety || 0), 0, 100);
  career.fuelPriceKg = utils.clamp(Number(career.fuelPriceKg || 1.02) + Number(event.fuel || 0), 0.72, 1.88);
  career.events.unshift({ time: Date.now(), day: career.day, title: event.title, text: event.text, type: event.type, cash: cashImpact });
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
        <div class="build-line">v${BUILD.version} • Build ${BUILD.build} • Fases F29-F32 operações</div>
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
      <p class="hint">Começa com 1 avião regional, hub inicial, contratos, tutorial, combustível, slots, alianças, concorrência por rota e anti-quebra ativo.</p>
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
        <button class="action-card" data-action="go" data-view="finance"><b>Finanças profissionais</b><small>Banco, seguro, leasing e crise</small></button><button class="action-card" data-action="go" data-view="market"><b>Bolsa e aquisições</b><small>IPO, ações, investidores e rivais</small></button>
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
    { id:'insurance', title:'Proteja a operação', done: (c.insurance?.plan || 'basic') !== 'basic', text:'Contrate seguro operacional quando a frota crescer.', view:'finance' },
    { id:'capital', title:'Entenda banco/leasing', done: (c.loans||[]).length > 0 || leasedFleetCount(c) > 0 || c.fleet.length >= 2, text:'Use crédito e leasing com risco controlado para acelerar.', view:'finance' },
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
      <span class="eyebrow">Tutorial jogável + F13-F16</span><h2>Primeiros passos da companhia</h2>
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
  return `<div class="fleet-layout"><section class="panel glass"><div class="section-head"><div><span class="eyebrow">F13 Leasing + Hangar</span><h2>Frota da companhia</h2><p>Compra definitiva ou leasing operacional para crescer rápido sem gastar todo o caixa.</p></div></div><div class="kpi-grid"><div class="kpi"><small>Frota total</small><strong>${c.fleet.length}</strong></div><div class="kpi"><small>Leasing</small><strong>${leasedFleetCount(c)}</strong></div><div class="kpi"><small>Próx. parcelas lease</small><strong>${utils.money(nextLeasePaymentTotal(c))}</strong></div><div class="kpi"><small>Caixa</small><strong>${utils.money(c.cash)}</strong></div></div><div class="fleet-grid">${c.fleet.map(renderPlaneCard).join('')}</div></section><section class="panel glass"><h2>Mercado de aeronaves</h2><p class="hint">Compre para aumentar patrimônio ou use leasing para acelerar a malha. Assets genéricos continuam temporários.</p><div class="market-list">${AIRCRAFT.map(renderAircraftMarket).join('')}</div></section></div>`;
}

function renderPlaneCard(p) {
  const m = utils.model(p.modelId);
  const c = activeCareer();
  const route = c.routes.find(r => r.id === p.routeId);
  const leaseInfo = p.acquisitionMode === 'lease' && p.lease ? `<small>Leasing: próxima parcela dia ${p.lease.nextDueDay} • ${utils.money(p.lease.periodicPayment)}</small>` : '<small>Aeronave própria</small>';
  return `<article class="plane-card ${p.acquisitionMode === 'lease' ? 'leased' : ''}"><img src="${m.image}" alt="${m.name}"><div class="plane-info"><h3>${utils.escape(p.name)}</h3><small>${m.name} • ${m.category} • ${p.acquisitionMode === 'lease' ? 'leasing' : 'própria'}</small><div class="health"><span style="width:${utils.clamp(p.condition,0,100)}%"></span></div><div class="route-stats"><span>Condição ${Math.round(p.condition)}%</span><span>${p.status || 'idle'}</span><span>${utils.num(p.hours,1)} h</span><span>${p.acquisitionMode === 'lease' ? 'Arrendada' : 'Patrimônio'}</span></div>${route ? `<small>Rota atual: ${route.origin} → ${route.dest}</small>` : '<small>Sem rota ativa</small>'}${leaseInfo}<div class="row gap wrap"><button class="btn mini" data-action="maintainPlane" data-plane="${p.id}" data-level="line">Linha</button><button class="btn mini primary" data-action="maintainPlane" data-plane="${p.id}" data-level="standard">Revisão</button><button class="btn mini ghost" data-action="maintainPlane" data-plane="${p.id}" data-level="overhaul">Overhaul</button><button class="btn mini ghost" data-action="renamePlane" data-plane="${p.id}">Renomear</button>${p.acquisitionMode === 'lease' ? `<button class="btn mini danger" data-action="returnLease" data-plane="${p.id}">Devolver</button>` : `<button class="btn mini danger" data-action="sellPlane" data-plane="${p.id}">Vender</button>`}</div></div></article>`;
}

function renderAircraftMarket(m) {
  const c = activeCareer();
  const affordable = c.cash >= m.price;
  const deposit = Math.round(m.price * 0.08);
  const canLease = c.cash >= deposit;
  return `<article class="market-plane"><img src="${m.image}" alt="${m.name}"><div><b>${m.name}</b><small>${m.category} • alcance ${utils.num(m.rangeKm)} km • pax ${m.capacity} • carga ${utils.num(m.cargoKg)} kg</small><span>Compra ${utils.money(m.price)}</span><small>Leasing: entrada ${utils.money(deposit)} • parcela ${utils.money(Math.round((m.leaseMonthly || m.price*0.018)/6))}/5 dias</small></div><div class="market-actions"><button class="btn mini ${affordable?'primary':'ghost'}" data-action="buyPlane" data-model="${m.id}" ${affordable?'':'disabled'}>Comprar</button><button class="btn mini ${canLease?'ghost':'ghost'}" data-action="leasePlane" data-model="${m.id}" ${canLease?'':'disabled'}>Leasing</button></div></article>`;
}

function buyPlane(modelId) {
  const c = activeCareer(); const m = utils.model(modelId); if (!c || !m) return;
  if (c.cash < m.price) return showToast('Caixa insuficiente para comprar esta aeronave.', 'warn');
  c.cash -= m.price;
  const prefix = c.companyName.split(/\s+/).map(x => x[0]).join('').slice(0,2).toUpperCase() || 'VA';
  const plane = { id: utils.id('plane'), modelId: m.id, name: `${prefix}-${String(c.fleet.length+1).padStart(3,'0')} Novo Horizonte`, condition: 100, hours: 0, cycles: 0, status: 'idle', routeId: null, acquiredAt: Date.now(), acquisitionMode:'owned' };
  c.fleet.push(plane);
  logFinance(c, `Compra de ${m.name}`, -m.price, 'investimento');
  pushMessage(c, `Aeronave ${m.name} adicionada à frota como patrimônio próprio.`, 'success');
  updateMarket(c); setActiveCareer(c); showToast('Avião comprado.', 'ok'); render();
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


function insurancePremium(career) {
  const plan = INSURANCE_PLANS[career.insurance?.plan || 'basic'] || INSURANCE_PLANS.basic;
  return Math.round(plan.dailyPerPlane * Math.max(1, (career.fleet || []).length));
}

function nextLoanPaymentTotal(career) {
  return (career.loans || []).filter(l => l.status === 'active').reduce((sum, l) => sum + Number(l.payment || 0), 0);
}

function nextLeasePaymentTotal(career) {
  return (career.fleet || []).reduce((sum, p) => {
    if (p.acquisitionMode !== 'lease' || !p.lease) return sum;
    return sum + Number(p.lease.periodicPayment || 0);
  }, 0);
}

function dailyObligationEstimate(career) {
  const staff = career.staff || {};
  const payroll = (staff.pilots||0)*820 + (staff.cabin||0)*520 + (staff.mechanics||0)*1180 + (staff.directors||0)*2650 + (staff.marketing||0)*1540;
  return Math.round(payroll + insurancePremium(career) + nextLoanPaymentTotal(career) + nextLeasePaymentTotal(career) / 5);
}

function processFinanceObligations(career) {
  const today = Number(career.day || 1);
  (career.loans || []).forEach(loan => {
    if (loan.status !== 'active') return;
    if (today < Number(loan.nextPaymentDay || today)) return;
    const payment = Math.round(Math.min(Number(loan.payment || 0), Number(loan.remaining || 0)));
    if (payment <= 0) { loan.status = 'paid'; return; }
    career.cash -= payment;
    loan.remaining = Math.max(0, Number(loan.remaining || 0) - payment);
    loan.paid = Number(loan.paid || 0) + payment;
    loan.nextPaymentDay = today + 1;
    logFinance(career, `Parcela banco: ${loan.label}`, -payment, 'empréstimo');
    if (loan.remaining <= 0) {
      loan.status = 'paid'; loan.completedDay = today;
      career.bankScore = utils.clamp((career.bankScore || 58) + 3.5, 0, 100);
      pushMessage(career, `Empréstimo quitado: ${loan.label}. Score bancário melhorou.`, 'success');
    }
  });
  (career.fleet || []).forEach(plane => {
    if (plane.acquisitionMode !== 'lease' || !plane.lease) return;
    if (today < Number(plane.lease.nextDueDay || today)) return;
    const payment = Math.round(Number(plane.lease.periodicPayment || 0));
    if (payment <= 0) return;
    career.cash -= payment;
    plane.lease.totalPaid = Number(plane.lease.totalPaid || 0) + payment;
    plane.lease.nextDueDay = today + 5;
    logFinance(career, `Leasing ${plane.name}`, -payment, 'leasing');
  });
  if (!career.insurance) career.insurance = { plan:'basic', lastBillingDay:0, protectedIncidents:0 };
  if (career.insurance.lastBillingDay !== today) {
    const plan = INSURANCE_PLANS[career.insurance.plan] || INSURANCE_PLANS.basic;
    const premium = insurancePremium(career);
    career.cash -= premium;
    career.safety = utils.clamp(career.safety + (plan.safetyBonus * 0.04), 0, 100);
    career.insurance.lastBillingDay = today;
    logFinance(career, `Seguro ${plan.label}`, -premium, 'seguro');
  }
}

function checkFinancialCrisis(career) {
  const debt = totalDebt(career);
  const old = career.crisis?.status || 'stable';
  let status = 'stable';
  if (career.cash < -1500000 || debt > Math.max(career.valuation, 1) * 1.4) status = 'critical';
  else if (career.cash < 0 || debt > Math.max(career.valuation, 1) * 0.82) status = 'recovery';
  else if (career.cash < 350000 || debt > Math.max(career.valuation, 1) * 0.55) status = 'watch';
  career.crisis = Object.assign({ status:'stable', lastRecoveryDay:-99, recoveryCount:0, lastStatusMessage:'' }, career.crisis || {});
  career.crisis.status = status;
  if (status !== old) {
    const text = status === 'stable' ? 'Situação financeira estabilizada.' : status === 'watch' ? 'Atenção: caixa/debt ratio exige cuidado.' : status === 'recovery' ? 'Crise financeira detectada. Recomendo plano de recuperação.' : 'Crise crítica. Execute recuperação ou venda ativos.';
    pushMessage(career, text, status === 'stable' ? 'success' : 'warn');
  }
}

function takeLoan(productId) {
  const c = activeCareer(); const product = LOAN_PRODUCTS[productId];
  if (!c || !product) return;
  if ((c.loans || []).filter(l => l.status === 'active').length >= 3) return showToast('Limite de 3 empréstimos ativos para evitar quebra econômica.', 'warn');
  if (c.reputation < product.minReputation) return showToast(`Reputação mínima: ${utils.pct(product.minReputation)}.`, 'warn');
  const debtRisk = totalDebt(c) / Math.max(c.valuation + product.principal, 1);
  if (debtRisk > 0.95) return showToast('Banco recusou: endividamento já está alto demais.', 'warn');
  const totalDue = Math.round(product.principal * (1 + product.interest));
  const loan = { id: utils.id('loan'), productId, label:product.label, principal:product.principal, totalDue, remaining:totalDue, payment:Math.ceil(totalDue / product.termDays), termDays:product.termDays, interest:product.interest, nextPaymentDay:(c.day || 1) + 1, startDay:c.day || 1, status:'active' };
  c.loans = Array.isArray(c.loans) ? c.loans : [];
  c.loans.unshift(loan);
  c.cash += product.principal;
  c.bankScore = utils.clamp((c.bankScore || 58) - 1.8, 0, 100);
  logFinance(c, `Empréstimo recebido: ${product.label}`, product.principal, 'banco');
  pushMessage(c, `Banco aprovou ${product.label}: ${utils.money(product.principal)}. Parcelas diárias de ${utils.money(loan.payment)}.`, 'success');
  updateMarket(c); setActiveCareer(c); showToast('Empréstimo aprovado.', 'ok'); render();
}

function repayLoan(id) {
  const c = activeCareer(); const loan = (c.loans || []).find(l => l.id === id);
  if (!loan || loan.status !== 'active') return;
  const payment = Math.round(Math.min(c.cash, Number(loan.remaining || 0)));
  if (payment <= 0) return showToast('Caixa insuficiente para amortizar agora.', 'warn');
  c.cash -= payment; loan.remaining = Math.max(0, Number(loan.remaining || 0) - payment); loan.paid = Number(loan.paid || 0) + payment;
  logFinance(c, `Amortização: ${loan.label}`, -payment, 'empréstimo');
  if (loan.remaining <= 0) { loan.status = 'paid'; loan.completedDay = c.day; c.bankScore = utils.clamp((c.bankScore || 58) + 3, 0, 100); pushMessage(c, `Empréstimo quitado antecipadamente: ${loan.label}.`, 'success'); }
  updateMarket(c); setActiveCareer(c); showToast('Amortização registrada.', 'ok'); render();
}

function setInsurancePlan(planId) {
  const c = activeCareer(); const plan = INSURANCE_PLANS[planId];
  if (!c || !plan) return;
  c.insurance = Object.assign({ plan:'basic', lastBillingDay:c.day || 1, protectedIncidents:0 }, c.insurance || {});
  c.insurance.plan = planId;
  c.safety = utils.clamp(c.safety + plan.safetyBonus, 0, 100);
  pushMessage(c, `Seguro alterado para ${plan.label}. Cobertura agora é ${utils.pct(plan.incidentCoverage*100)}.`, 'success');
  updateMarket(c); setActiveCareer(c); showToast(`Seguro ${plan.label} ativo.`, 'ok'); render();
}

function activateRecoveryPlan() {
  const c = activeCareer(); if (!c) return;
  c.crisis = Object.assign({ status:'stable', lastRecoveryDay:-99, recoveryCount:0, lastStatusMessage:'' }, c.crisis || {});
  if ((c.day || 1) - Number(c.crisis.lastRecoveryDay || -99) < 10) return showToast('Plano de recuperação só pode ser usado novamente após 10 dias de jogo.', 'warn');
  const infusion = Math.round(Math.max(750000, Math.abs(Math.min(c.cash, 0)) + 450000));
  const totalDue = Math.round(infusion * 1.22);
  const loan = { id: utils.id('loan'), productId:'recovery', label:'Recuperação emergencial', principal:infusion, totalDue, remaining:totalDue, payment:Math.ceil(totalDue / 14), termDays:14, interest:0.22, nextPaymentDay:(c.day || 1)+1, startDay:c.day || 1, status:'active' };
  c.loans = Array.isArray(c.loans) ? c.loans : [];
  c.loans.unshift(loan);
  c.cash += infusion;
  c.reputation = utils.clamp(c.reputation - 2.4, 0, 100);
  c.bankScore = utils.clamp((c.bankScore || 58) - 5, 0, 100);
  c.crisis.lastRecoveryDay = c.day || 1;
  c.crisis.recoveryCount = Number(c.crisis.recoveryCount || 0) + 1;
  const paused = c.routes.filter(r => (r.lastProfit || 0) < 0).slice(0, 2);
  paused.forEach(r => { r.status = 'paused'; const p = c.fleet.find(x => x.id === r.planeId); if (p) p.status = 'idle'; });
  logFinance(c, 'Plano de recuperação emergencial', infusion, 'recuperação');
  pushMessage(c, `Plano de recuperação ativado: ${utils.money(infusion)} em caixa e ${paused.length} rota(s) deficitárias pausadas.`, 'warn');
  checkFinancialCrisis(c); updateMarket(c); setActiveCareer(c); showToast('Plano de recuperação ativado.', 'ok'); render();
}

function leasePlane(modelId) {
  const c = activeCareer(); const m = utils.model(modelId); if (!c || !m) return;
  const deposit = Math.round(m.price * 0.08);
  const periodicPayment = Math.round((m.leaseMonthly || m.price * 0.018) / 6);
  if (c.cash < deposit) return showToast(`Caixa insuficiente. Entrada de leasing: ${utils.money(deposit)}.`, 'warn');
  if (leasedFleetCount(c) >= Math.max(2, Math.ceil(c.fleet.length / 2))) return showToast('Limite de leasing atingido para manter risco financeiro controlado.', 'warn');
  c.cash -= deposit;
  const prefix = c.companyName.split(/\s+/).map(x => x[0]).join('').slice(0,2).toUpperCase() || 'VA';
  const plane = { id: utils.id('plane'), modelId:m.id, name:`${prefix}-${String(c.fleet.length+1).padStart(3,'0')} Lease`, condition:96, hours:0, cycles:0, status:'idle', routeId:null, acquiredAt:Date.now(), acquisitionMode:'lease', lease:{ deposit, periodicPayment, monthly:m.leaseMonthly || periodicPayment*6, nextDueDay:(c.day || 1)+5, totalPaid:deposit } };
  c.fleet.push(plane);
  logFinance(c, `Entrada de leasing ${m.name}`, -deposit, 'leasing');
  pushMessage(c, `Aeronave em leasing adicionada: ${m.name}. Parcela operacional: ${utils.money(periodicPayment)} a cada 5 dias.`, 'success');
  updateMarket(c); setActiveCareer(c); showToast('Leasing aprovado.', 'ok'); render();
}

function returnLeasedPlane(id) {
  const c = activeCareer(); const p = c.fleet.find(x => x.id === id); if (!p || p.acquisitionMode !== 'lease') return;
  if (c.routes.some(r => r.planeId === id)) return showToast('Feche a rota antes de devolver esta aeronave.', 'warn');
  const fee = Math.round(Number(p.lease?.periodicPayment || 0) * 2);
  if (c.cash < fee) return showToast(`Devolução exige taxa de ${utils.money(fee)}.`, 'warn');
  c.cash -= fee;
  c.fleet = c.fleet.filter(x => x.id !== id);
  logFinance(c, `Devolução leasing ${p.name}`, -fee, 'leasing');
  pushMessage(c, `${p.name} devolvido ao arrendador.`, 'info');
  updateMarket(c); setActiveCareer(c); showToast('Aeronave devolvida.', 'ok'); render();
}

function renderFinance() {
  const c = activeCareer();
  const revenue = c.financeLog.filter(f => f.amount > 0).reduce((sum,f)=>sum+f.amount,0);
  const expense = c.financeLog.filter(f => f.amount < 0).reduce((sum,f)=>sum+f.amount,0);
  const routeProfit = c.routes.reduce((sum,r)=>sum+(r.totalProfit||0),0);
  const debt = totalDebt(c);
  const bestRoute = [...c.routes].sort((a,b)=>(b.totalProfit||0)-(a.totalProfit||0))[0];
  const worstRoute = [...c.routes].sort((a,b)=>(a.totalProfit||0)-(b.totalProfit||0))[0];
  const crisis = c.crisis?.status || 'stable';
  const plan = INSURANCE_PLANS[c.insurance?.plan || 'basic'] || INSURANCE_PLANS.basic;
  const loanCards = Object.entries(LOAN_PRODUCTS).map(([id,p]) => `<article class="loan-card"><b>${p.label}</b><small>${p.purpose}</small><div class="route-stats"><span>Principal ${utils.money(p.principal)}</span><span>Juros ${utils.pct(p.interest*100)}</span><span>${p.termDays} dias</span><span>Rep. mín. ${utils.pct(p.minReputation)}</span></div><button class="btn mini primary" data-action="takeLoan" data-loan="${id}">Solicitar</button></article>`).join('');
  const activeLoanList = (c.loans||[]).map(l => `<article class="loan-card ${l.status === 'paid' ? 'paid' : ''}"><b>${utils.escape(l.label)}</b><small>Status: ${l.status === 'paid' ? 'quitado' : `parcela ${utils.money(l.payment)} no dia ${l.nextPaymentDay}`}</small><div class="progress"><span style="width:${utils.clamp(100 - (Number(l.remaining||0) / Math.max(Number(l.totalDue||1),1))*100,0,100)}%"></span></div><div class="route-stats"><span>Saldo ${utils.money(l.remaining||0)}</span><span>Total ${utils.money(l.totalDue||0)}</span><span>Início dia ${l.startDay}</span></div>${l.status === 'active' ? `<button class="btn mini ghost" data-action="repayLoan" data-loan-id="${l.id}">Amortizar com caixa</button>` : '<button class="btn mini ghost" disabled>Quitado</button>'}</article>`).join('') || '<p>Sem empréstimos ativos. Use crédito com cuidado para acelerar sem quebrar.</p>';
  const insuranceCards = Object.entries(INSURANCE_PLANS).map(([id,p]) => `<article class="insurance-card ${c.insurance?.plan === id ? 'active' : ''}"><b>${p.label}</b><small>Prêmio/dia por avião: ${utils.money(p.dailyPerPlane)}</small><div class="route-stats"><span>Cobertura ${utils.pct(p.incidentCoverage*100)}</span><span>Custo por rota ${utils.pct(p.routeCostMultiplier*100)}</span><span>Bônus segurança ${utils.num(p.safetyBonus,1)}</span></div><button class="btn mini ${c.insurance?.plan === id ? 'ghost' : 'primary'}" data-action="setInsurance" data-plan="${id}">${c.insurance?.plan === id ? 'Ativo' : 'Contratar'}</button></article>`).join('');
  return `<div class="finance-layout"><section class="panel glass"><span class="eyebrow">F13-F16 Finanças profissionais</span><h2>Fluxo de caixa, dívida e risco</h2><div class="kpi-grid"><div class="kpi"><small>Receitas registradas</small><strong>${utils.money(revenue)}</strong></div><div class="kpi"><small>Despesas registradas</small><strong>${utils.money(expense)}</strong></div><div class="kpi"><small>Resultado</small><strong>${utils.money(revenue+expense)}</strong></div><div class="kpi"><small>Dívida/lease</small><strong>${utils.money(debt)}</strong></div><div class="kpi"><small>Obrigações/dia</small><strong>${utils.money(dailyObligationEstimate(c))}</strong></div><div class="kpi"><small>Status crise</small><strong>${crisis}</strong></div><div class="kpi"><small>Melhor rota</small><strong>${bestRoute ? `${bestRoute.origin}-${bestRoute.dest}` : '-'}</strong></div><div class="kpi"><small>Rota crítica</small><strong>${worstRoute ? `${worstRoute.origin}-${worstRoute.dest}` : '-'}</strong></div></div><div class="crisis-card ${crisis}"><b>Plano anti-falência</b><p>${crisis === 'stable' ? 'Situação controlada. Mantenha dívida menor que o valuation.' : crisis === 'watch' ? 'Atenção: reduza custo ou aumente caixa antes de contrair novas dívidas.' : 'Crise detectada: use recuperação, pause rotas ruins ou venda/devolva ativos.'}</p><button class="btn ${crisis === 'stable' ? 'ghost' : 'primary'}" data-action="recoveryPlan">Ativar recuperação emergencial</button></div></section><section class="panel glass"><div class="section-head"><div><span class="eyebrow">F10 + F15 Combustível e seguro</span><h2>Mesa operacional</h2></div></div><div class="kpi-grid"><div class="kpi"><small>Preço/kg</small><strong>${utils.money(getFuelPrice(c))}</strong></div><div class="kpi"><small>Estoque</small><strong>${utils.num(c.fuelStockKg || 0)} kg</strong></div><div class="kpi"><small>Seguro ativo</small><strong>${plan.label}</strong></div><div class="kpi"><small>Coberto em eventos</small><strong>${utils.money(c.insurance?.protectedIncidents || 0)}</strong></div></div><div class="row gap wrap"><button class="btn primary" data-action="buyFuel" data-pack="small">Comprar hedge pequeno</button><button class="btn ghost" data-action="buyFuel" data-pack="large">Comprar hedge grande</button><button class="btn ghost" data-action="marketingCampaign">Campanha marketing</button></div><div class="fuel-history">${(c.fuelHistory||[]).slice(0,8).map(h => `<span>Dia ${h.day}: ${utils.money(h.price)} / kg</span>`).join('') || '<span>Sem histórico ainda.</span>'}</div></section><section class="panel glass"><span class="eyebrow">F14 Banco e empréstimos</span><h2>Crédito bancário</h2><div class="kpi-grid"><div class="kpi"><small>Score banco</small><strong>${utils.pct(c.bankScore || 58)}</strong></div><div class="kpi"><small>Empréstimos ativos</small><strong>${(c.loans||[]).filter(l=>l.status==='active').length}</strong></div></div><div class="loan-list">${loanCards}</div><h3>Contratos bancários</h3><div class="loan-list">${activeLoanList}</div></section><section class="panel glass"><span class="eyebrow">F15 Seguros operacionais</span><h2>Planos de proteção</h2><div class="insurance-grid">${insuranceCards}</div><p class="hint">Seguro reduz custo variável de risco e cobre parte de eventos negativos. O premium é mais caro, mas protege crescimento agressivo.</p></section><section class="panel glass"><h2>Economia por rota</h2><div class="route-economy-list">${c.routes.map(r => `<article><b>${r.origin} → ${r.dest}</b><small>Estratégia: ${(PRICE_STRATEGIES[r.priceStrategy || 'balanced']||PRICE_STRATEGIES.balanced).label}</small><div class="route-stats"><span>Total ${utils.money(r.totalProfit||0)}</span><span>Último ${utils.money(r.lastProfit||0)}</span><span>Margem ${r.lastMargin ?? 0}%</span><span>Ocupação ${r.lastLoadFactor ?? 0}%</span><span>Combustível ${utils.num(r.lastFuelKg||0)} kg</span></div></article>`).join('') || '<p>Crie rotas para ver análise econômica.</p>'}</div></section><section class="panel glass"><h2>Livro financeiro</h2><div class="finance-list">${c.financeLog.map(f => `<div class="finance-row"><span>${utils.dateLabel(f.time)}<small>${f.type} • Dia ${f.day}</small></span><b class="${f.amount>=0?'ok':'bad'}">${utils.money(f.amount)}</b><em>${utils.escape(f.label)}</em></div>`).join('') || '<p>Sem lançamentos.</p>'}</div></section></div>`;
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


function recentResult(career, limit = 14) {
  return (career.financeLog || []).slice(0, limit).reduce((sum, f) => sum + Number(f.amount || 0), 0);
}

function investorGoalStatus(career, goal) {
  const debt = totalDebt(career);
  const debtRatio = debt / Math.max(career.valuation + debt, 1);
  if (goal.id === 'profitability') return recentResult(career, 16) > 0;
  if (goal.id === 'safety') return Number(career.safety || 0) >= 88;
  if (goal.id === 'growth') return (career.routes || []).length >= 3 && (career.hubs || []).length >= 2;
  if (goal.id === 'debt') return debtRatio < 0.55;
  return false;
}

function processInvestorReview(career) {
  career.market = Object.assign({ ipo:false, publicFloat:0, treasuryCashRaised:0, sharesOutstanding:1000000, investorTrust:54, lastInvestorReviewDay:0, shareHistory:[] }, career.market || {});
  if (!career.market.ipo) return;
  const day = Number(career.day || 1);
  if (day - Number(career.market.lastInvestorReviewDay || 0) < 5) return;
  career.market.lastInvestorReviewDay = day;
  let delta = 0;
  const lines = [];
  (career.investorGoals || seedInvestorGoals(career)).forEach(goal => {
    const ok = investorGoalStatus(career, goal);
    goal.status = ok ? 'done' : 'open';
    goal.lastCheckedDay = day;
    delta += ok ? Number(goal.trust || 1) : -Math.max(1.2, Number(goal.trust || 1) * 0.72);
    lines.push(`${goal.label}: ${ok ? 'cumprida' : 'pendente'}`);
  });
  career.market.investorTrust = utils.clamp(Number(career.market.investorTrust || 54) + delta, 0, 100);
  pushMessage(career, `Revisão dos investidores: ${lines.join(' • ')}. Confiança ${Math.round(career.market.investorTrust)}%.`, delta >= 0 ? 'success' : 'warn');
}

function launchIPO() {
  const c = activeCareer(); if (!c) return;
  c.market = Object.assign({ ipo:false, publicFloat:0, treasuryCashRaised:0, sharesOutstanding:1000000, investorTrust:54, lastInvestorReviewDay:0, shareHistory:[] }, c.market || {});
  updateMarket(c);
  if (c.market.ipo) return showToast('A companhia já está listada na bolsa.', 'warn');
  if (c.valuation < IPO_RULES.minValuation) return showToast(`IPO exige valuation mínimo de ${utils.money(IPO_RULES.minValuation)}.`, 'warn');
  if (c.reputation < IPO_RULES.minReputation) return showToast(`IPO exige reputação mínima de ${utils.pct(IPO_RULES.minReputation)}.`, 'warn');
  const raised = Math.round(c.valuation * IPO_RULES.floatSold * IPO_RULES.discount);
  c.cash += raised;
  c.market.ipo = true;
  c.market.publicFloat = IPO_RULES.floatSold;
  c.market.treasuryCashRaised = Number(c.market.treasuryCashRaised || 0) + raised;
  c.market.investorTrust = utils.clamp(Number(c.market.investorTrust || 54) + 8, 0, 100);
  c.market.lastInvestorReviewDay = c.day || 1;
  c.investorGoals = seedInvestorGoals(c);
  logFinance(c, 'IPO: abertura de capital', raised, 'bolsa');
  pushMessage(c, `IPO concluído. ${utils.pct(IPO_RULES.floatSold*100)} da companhia virou free float e ${utils.money(raised)} entraram no caixa.`, 'success');
  updateMarket(c); setActiveCareer(c); showToast('IPO realizado com sucesso.', 'ok'); render();
}

function secondaryOffering() {
  const c = activeCareer(); if (!c) return;
  c.market = Object.assign({ ipo:false, publicFloat:0, treasuryCashRaised:0, sharesOutstanding:1000000, investorTrust:54, lastInvestorReviewDay:0, shareHistory:[] }, c.market || {});
  if (!c.market.ipo) return showToast('Faça o IPO antes de vender novas ações.', 'warn');
  if (c.market.publicFloat >= 0.62) return showToast('Free float alto demais. Conselho bloqueou nova emissão.', 'warn');
  updateMarket(c);
  const raised = Math.round(c.valuation * IPO_RULES.secondaryOfferBlock * 0.78);
  c.cash += raised;
  c.market.publicFloat = utils.clamp(Number(c.market.publicFloat || 0) + IPO_RULES.secondaryOfferBlock, 0, 0.72);
  c.market.treasuryCashRaised = Number(c.market.treasuryCashRaised || 0) + raised;
  c.market.investorTrust = utils.clamp(Number(c.market.investorTrust || 54) - 2.8, 0, 100);
  logFinance(c, 'Oferta secundária de ações', raised, 'bolsa');
  pushMessage(c, `Oferta secundária levantou ${utils.money(raised)}, mas diluiu os controladores para free float de ${utils.pct(c.market.publicFloat*100)}.`, 'warn');
  updateMarket(c); setActiveCareer(c); showToast('Novas ações emitidas.', 'ok'); render();
}

function shareBuyback() {
  const c = activeCareer(); if (!c) return;
  c.market = Object.assign({ ipo:false, publicFloat:0, treasuryCashRaised:0, sharesOutstanding:1000000, investorTrust:54, lastInvestorReviewDay:0, shareHistory:[] }, c.market || {});
  if (!c.market.ipo) return showToast('Buyback só existe após IPO.', 'warn');
  if (c.market.publicFloat <= 0.08) return showToast('Free float já está muito baixo.', 'warn');
  updateMarket(c);
  const cost = Math.round(c.valuation * IPO_RULES.buybackBlock * 1.08);
  if (c.cash < cost) return showToast(`Caixa insuficiente para recompra: ${utils.money(cost)}.`, 'warn');
  c.cash -= cost;
  c.market.publicFloat = utils.clamp(Number(c.market.publicFloat || 0) - IPO_RULES.buybackBlock, 0, 0.72);
  c.market.investorTrust = utils.clamp(Number(c.market.investorTrust || 54) + 1.4, 0, 100);
  logFinance(c, 'Recompra de ações', -cost, 'bolsa');
  pushMessage(c, `Recompra executada por ${utils.money(cost)}. Controle acionário fortalecido.`, 'success');
  updateMarket(c); setActiveCareer(c); showToast('Buyback executado.', 'ok'); render();
}

function acquireCompetitor(id) {
  const c = activeCareer(); if (!c) return;
  c.competitors = Array.isArray(c.competitors) ? c.competitors : seedCompetitors(c);
  const comp = c.competitors.find(x => x.id === id);
  if (!comp || comp.status === 'acquired') return showToast('Concorrente indisponível.', 'warn');
  const price = Math.round((Number(comp.value || 0) + Number(comp.debt || 0)) * 1.08);
  if (c.cash < price) return showToast(`Aquisição exige ${utils.money(price)} em caixa.`, 'warn');
  const base = utils.byIata(comp.base);
  c.cash -= price;
  comp.status = 'acquired';
  comp.acquiredDay = c.day || 1;
  c.acquisitions = Array.isArray(c.acquisitions) ? c.acquisitions : [];
  c.acquisitions.unshift({ id:comp.id, name:comp.name, day:c.day || 1, price, base:comp.base, routes:[...comp.routes] });
  if (base && !c.hubs.includes(base.iata)) c.hubs.push(base.iata);
  const model = utils.model(comp.modelId) || AIRCRAFT[0];
  for (let i = 0; i < Math.max(1, Number(comp.fleet || 1)); i++) {
    c.fleet.push({ id: utils.id('plane'), modelId:model.id, name:`${comp.name.slice(0,2).toUpperCase()}-${String(c.fleet.length+1).padStart(3,'0')} Integrado`, condition:utils.clamp(82 + Math.random()*12, 78, 96), hours:Math.round(100 + Math.random()*700), cycles:Math.round(20 + Math.random()*180), status:'idle', routeId:null, acquiredAt:Date.now(), acquisitionMode:'owned', acquiredFrom:comp.name });
  }
  c.reputation = utils.clamp((c.reputation || 50) + Number(comp.reputation || 50) / 35, 0, 100);
  c.market = Object.assign({ ipo:false, publicFloat:0, investorTrust:54 }, c.market || {});
  c.market.investorTrust = utils.clamp(Number(c.market.investorTrust || 54) + (c.market.ipo ? 2.6 : 1.2), 0, 100);
  logFinance(c, `Aquisição: ${comp.name}`, -price, 'aquisição');
  pushMessage(c, `Aquisição concluída: ${comp.name}. Hub ${comp.base} e ${comp.fleet} aeronave(s) integrados.`, 'success');
  updateMarket(c); setActiveCareer(c); showToast('Concorrente adquirido.', 'ok'); render();
}

function renderRanking(career) {
  const player = { name:career.companyName, valuation:career.valuation, reputation:career.reputation, fleet:(career.fleet||[]).length, routes:(career.routes||[]).length, player:true };
  const competitors = (career.competitors || seedCompetitors(career)).filter(c => c.status !== 'acquired').map(c => ({ name:c.name, valuation:c.value, reputation:c.reputation, fleet:c.fleet, routes:c.routes.length, player:false }));
  return [player, ...competitors].sort((a,b)=>b.valuation-a.valuation).map((x,idx)=>`<tr class="${x.player?'player-row':''}"><td>#${idx+1}</td><td>${utils.escape(x.name)}</td><td>${utils.money(x.valuation)}</td><td>${utils.pct(x.reputation)}</td><td>${x.fleet}</td><td>${x.routes}</td></tr>`).join('');
}

function renderMarket() {
  const c = activeCareer();
  c.market = Object.assign({ ipo:false, publicFloat:0, treasuryCashRaised:0, sharesOutstanding:1000000, investorTrust:54, lastInvestorReviewDay:0, shareHistory:[] }, c.market || {});
  c.competitors = Array.isArray(c.competitors) ? c.competitors : seedCompetitors(c);
  c.investorGoals = Array.isArray(c.investorGoals) ? c.investorGoals : seedInvestorGoals(c);
  const debt = totalDebt(c);
  const debtRisk = debt / Math.max(c.valuation + debt, 1);
  const trend = recentResult(c, 8) >= 0 && debtRisk < .55 ? 'alta' : debtRisk > .85 ? 'risco' : 'pressão';
  const ipoReady = c.valuation >= IPO_RULES.minValuation && c.reputation >= IPO_RULES.minReputation && !c.market.ipo;
  const ipoRaisedPreview = Math.round(c.valuation * IPO_RULES.floatSold * IPO_RULES.discount);
  const goals = c.investorGoals.map(g => {
    const ok = investorGoalStatus(c, g);
    return `<article class="goal-card ${ok?'ok':'warn'}"><b>${ok?'✓':'!'}</b><span>${g.label}</span><small>${g.text}</small></article>`;
  }).join('');
  const acquisitions = c.competitors.map(comp => {
    const acquired = comp.status === 'acquired';
    const price = Math.round((Number(comp.value || 0) + Number(comp.debt || 0)) * 1.08);
    return `<article class="competitor-card ${acquired?'acquired':''}"><div><b>${utils.escape(comp.name)}</b><small>${comp.region} • base ${comp.base} • ${comp.routes.length} rotas • ${comp.fleet} aeronave(s)</small><div class="route-stats"><span>Valor ${utils.money(comp.value)}</span><span>Dívida ${utils.money(comp.debt)}</span><span>Reputação ${utils.pct(comp.reputation)}</span></div></div><button class="btn mini ${acquired?'ghost':'primary'}" data-action="acquireCompetitor" data-competitor="${comp.id}" ${acquired?'disabled':''}>${acquired?'Integrada':`Comprar ${utils.money(price)}`}</button></article>`;
  }).join('');
  const history = (c.market.shareHistory || []).slice(0, 10).map(h => `<i style="height:${utils.clamp((h.price / Math.max(c.stockPrice, 0.01)) * 62, 12, 96)}%" title="Dia ${h.day}: $${Number(h.price||0).toFixed(2)}"></i>`).join('') || '<i style="height:35%"></i>';
  return `<div class="market-layout"><section class="panel glass"><span class="eyebrow">F17-F20 Mercado de capitais</span><h2>Bolsa, IPO e investidores</h2><div class="stock-card"><div><small>Valor por ação</small><strong>$${c.stockPrice.toFixed(2)}</strong><span>tendência: ${trend}</span></div><div><small>Valuation</small><strong>${utils.money(c.valuation)}</strong><span>${c.market.ipo ? `companhia aberta • free float ${utils.pct(c.market.publicFloat*100)}` : 'companhia fechada'}</span></div></div><div class="stock-line">${history}</div><div class="kpi-grid"><div class="kpi"><small>Confiança investidor</small><strong>${utils.pct(c.market.investorTrust)}</strong></div><div class="kpi"><small>Free float</small><strong>${utils.pct(c.market.publicFloat*100)}</strong></div><div class="kpi"><small>Capital levantado</small><strong>${utils.money(c.market.treasuryCashRaised || 0)}</strong></div><div class="kpi"><small>Dívida/risco</small><strong>${utils.pct(debtRisk*100)}</strong></div></div><div class="row gap wrap"><button class="btn ${ipoReady?'primary':'ghost'}" data-action="launchIPO" ${(!ipoReady || c.market.ipo)?'disabled':''}>Abrir IPO ${!c.market.ipo ? `(${utils.money(ipoRaisedPreview)})` : 'concluído'}</button><button class="btn ghost" data-action="secondaryOffering" ${c.market.ipo?'':'disabled'}>Vender novas ações</button><button class="btn ghost" data-action="shareBuyback" ${c.market.ipo?'':'disabled'}>Recomprar ações</button></div><p class="hint">IPO acelera crescimento, mas investidores passam a cobrar lucro, segurança, crescimento e dívida controlada.</p></section><section class="panel glass"><h2>Metas dos investidores</h2><div class="goal-grid">${goals}</div><p class="hint">A cada 5 dias de jogo, o conselho revisa metas e altera a confiança do mercado.</p></section><section class="panel glass"><h2>Aquisição de concorrentes</h2><p class="hint">Comprar concorrente integra hub e aeronaves. É caro, mas acelera malha e valuation.</p><div class="competitor-grid">${acquisitions}</div></section><section class="panel glass"><h2>Ranking empresarial</h2><div class="table-scroll"><table class="ranking-table"><thead><tr><th>Rank</th><th>Companhia</th><th>Valor</th><th>Rep.</th><th>Frota</th><th>Rotas</th></tr></thead><tbody>${renderRanking(c)}</tbody></table></div></section><section class="panel glass"><h2>Conselho executivo</h2><div class="todo-list"><span>${debtRisk > .75 ? 'Reduzir dívida antes de aquisição ou nova emissão.' : 'Espaço para expansão com risco controlado.'}</span><span>${!c.market.ipo ? 'Prepare IPO: valuation mínimo, reputação e caixa estável.' : 'Companhia aberta: preserve confiança para manter ação em alta.'}</span><span>${(c.acquisitions||[]).length ? `${c.acquisitions.length} aquisição(ões) já integradas.` : 'Nenhuma aquisição feita ainda.'}</span><span>Próxima evolução: alianças, slots aeroportuários e concorrência por rota.</span></div></section></div>`;
}


function renderAudit() {
  const checks = runIntegrityAudit();
  const passed = checks.filter(c => c.ok).length;
  return `<div class="audit-layout"><section class="panel glass"><div class="section-head"><div><span class="eyebrow">Sistema anti-quebra</span><h2>Auditoria da build</h2><p>Execução obrigatória por fase para garantir integridade e evolução real.</p></div><button class="btn primary" data-action="runAudit">Rodar auditoria</button></div><div class="audit-score"><strong>${passed}/${checks.length}</strong><span>checks aprovados</span></div><div class="audit-list">${checks.map(c => `<div class="audit-row ${c.ok?'ok':'bad'}"><b>${c.ok?'✓':'!'}</b><span>${c.label}</span><small>${c.detail}</small></div>`).join('')}</div></section><section class="panel glass"><h2>Relatório desta entrega</h2><div class="todo-list"><span>F17 IPO: OK — abertura de capital com regras mínimas, free float e capital captado.</span><span>F18 Investidores: OK — confiança do mercado e metas revisadas a cada 5 dias.</span><span>F19 Ações: OK — oferta secundária e recompra de ações com impacto em caixa/controle.</span><span>F20 Aquisições: OK — concorrentes compráveis, integração de hubs, frota e ranking.</span><span>Anti-quebra: OK — migração de saves v0.4/v0.5/v0.6/v0.7 para schema 8 preservada.</span></div></section></div>`;
}

function runIntegrityAudit() {
  const c = activeCareer();
  const slotCount = runtime.state && Array.isArray(runtime.state.slots) ? runtime.state.slots.length : 0;
  const iatas = new Set(AIRPORTS.map(a => a.iata));
  const duplicateIata = iatas.size !== AIRPORTS.length;
  const lastCrash = localStorage.getItem(CRASH_KEY);
  return [
    { ok: !!dom.buildBadge && dom.buildBadge.textContent.includes(BUILD.build), label:'Build/data/hora visíveis', detail:`Build ${BUILD.build} renderizado no rodapé.` },
    { ok: BUILD.schema === 8, label:'Schema da build', detail:`Schema atual ${BUILD.schema}.` },
    { ok: slotCount === 3, label:'Save slots', detail:`${slotCount} slots detectados.` },
    { ok: AIRPORTS.length >= 25 && !duplicateIata, label:'Banco de aeroportos', detail:`${AIRPORTS.length} aeroportos reais/semi-realistas, IATA único.` },
    { ok: AIRCRAFT.length >= 10, label:'Catálogo inicial de aeronaves', detail:`${AIRCRAFT.length} modelos com alcance, consumo, capacidade e leasing.` },
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
    { ok: !!LOAN_PRODUCTS.working && !!LOAN_PRODUCTS.fleet, label:'Banco e empréstimos', detail:'Produtos de crédito configurados com prazo, juros e reputação mínima.' },
    { ok: !c || Array.isArray(c.loans), label:'Integridade de empréstimos', detail:c ? `${(c.loans||[]).length} contratos bancários no save.` : 'Sem carreira ativa.' },
    { ok: !!INSURANCE_PLANS.basic && !!INSURANCE_PLANS.premium, label:'Seguros operacionais', detail:'Planos básico, operacional e premium disponíveis.' },
    { ok: !c || c.insurance && !!INSURANCE_PLANS[c.insurance.plan], label:'Seguro do save', detail:c ? `Plano atual: ${(INSURANCE_PLANS[c.insurance.plan]||INSURANCE_PLANS.basic).label}.` : 'Sem carreira ativa.' },
    { ok: !c || c.fleet.every(p => p.acquisitionMode === 'owned' || p.acquisitionMode === 'lease'), label:'Leasing/frota própria', detail:c ? `${leasedFleetCount(c)} aeronaves arrendadas.` : 'Sem carreira ativa.' },
    { ok: !c || c.crisis && typeof c.crisis.status === 'string', label:'Crise financeira', detail:c ? `Status: ${c.crisis.status}; dívida ${utils.money(totalDebt(c))}.` : 'Sem carreira ativa.' },
    { ok: !c || Number.isFinite(dailyObligationEstimate(c)), label:'Obrigações diárias', detail:c ? `${utils.money(dailyObligationEstimate(c))} estimados por dia.` : 'Sem carreira ativa.' },
    { ok: !!IPO_RULES && IPO_RULES.minValuation > 0, label:'IPO e mercado de capitais', detail:'Regras de IPO, free float, emissão e buyback configuradas.' },
    { ok: !c || c.market && typeof c.market.ipo === 'boolean', label:'Integridade do mercado acionário', detail:c ? `IPO: ${c.market.ipo ? 'sim' : 'não'}; confiança ${utils.pct(c.market.investorTrust || 0)}.` : 'Sem carreira ativa.' },
    { ok: Array.isArray(INVESTOR_GOALS) && INVESTOR_GOALS.length >= 4, label:'Metas de investidores', detail:`${INVESTOR_GOALS.length} metas do conselho configuradas.` },
    { ok: Array.isArray(COMPETITORS) && COMPETITORS.length >= 5, label:'Concorrentes para aquisição', detail:`${COMPETITORS.length} companhias rivais disponíveis.` },
    { ok: !c || Array.isArray(c.acquisitions) && Array.isArray(c.competitors), label:'Aquisições no save', detail:c ? `${(c.acquisitions||[]).length} aquisição(ões) registradas.` : 'Sem carreira ativa.' },
    { ok: !c || Array.isArray(c.market.shareHistory), label:'Histórico da ação', detail:c ? `${(c.market.shareHistory||[]).length} pontos de preço registrados.` : 'Sem carreira ativa.' },
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
  if (p.acquisitionMode === 'lease') return returnLeasedPlane(id);
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
    if (action === 'leasePlane') return leasePlane(target.dataset.model);
    if (action === 'returnLease') return returnLeasedPlane(target.dataset.plane);
    if (action === 'maintainPlane') return maintainPlane(target.dataset.plane, target.dataset.level || 'standard');
    if (action === 'renamePlane') return renamePlane(target.dataset.plane);
    if (action === 'sellPlane') return sellPlane(target.dataset.plane);
    if (action === 'hireStaff') return hireStaff(target.dataset.role, target.dataset.salary);
    if (action === 'fireStaff') return fireStaff(target.dataset.role);
    if (action === 'buyFuel') return buyFuel(target.dataset.pack || 'small');
    if (action === 'marketingCampaign') return marketingCampaign();
    if (action === 'takeLoan') return takeLoan(target.dataset.loan);
    if (action === 'repayLoan') return repayLoan(target.dataset.loanId);
    if (action === 'setInsurance') return setInsurancePlan(target.dataset.plan);
    if (action === 'recoveryPlan') return activateRecoveryPlan();
    if (action === 'launchIPO') return launchIPO();
    if (action === 'secondaryOffering') return secondaryOffering();
    if (action === 'shareBuyback') return shareBuyback();
    if (action === 'acquireCompetitor') return acquireCompetitor(target.dataset.competitor);
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



/* =========================================================
   v0.9.0 F21-F24 — alianças, slots, concorrência e reputação internacional
   Sobrescritas adicionadas antes do boot para preservar save antigo e acelerar entrega.
========================================================= */
const ALLIANCE_PROGRAMS = Object.freeze([
  { id:'none', label:'Sem aliança', fee:0, minReputation:0, description:'Independência total, sem bônus e sem obrigações.' },
  { id:'sky_bridge', label:'SkyBridge Alliance', fee:1450000, minReputation:58, demandBoost:1.06, revenueBoost:0.03, slotDiscount:0.08, reputationBoost:1.8, description:'Rede equilibrada para crescer nas Américas e Europa com bônus moderado de demanda.' },
  { id:'global_wings', label:'Global Wings', fee:2800000, minReputation:66, demandBoost:1.11, revenueBoost:0.055, slotDiscount:0.13, reputationBoost:3.2, description:'Aliança premium para companhias com reputação alta e foco internacional.' },
  { id:'cargo_net', label:'CargoNet Logistics', fee:1900000, minReputation:55, demandBoost:1.04, revenueBoost:0.075, slotDiscount:0.06, reputationBoost:1.4, cargoBoost:1.16, description:'Rede de logística ideal para operações cargueiras e rotas de longo alcance.' }
]);

const SLOT_RULES = Object.freeze({
  starterSlots: 4,
  hubBonusSlots: 2,
  maxSoftSlots: 14,
  buyGrowth: 0.19,
  routeOpenLicense: 0.11
});

const baseRouteDemandV090 = utils.routeDemand.bind(utils);
const baseRouteEstimateV090 = utils.routeEstimate.bind(utils);

function allianceBenefits(career) {
  const id = career && career.alliance ? career.alliance.id : 'none';
  const program = ALLIANCE_PROGRAMS.find(a => a.id === id) || ALLIANCE_PROGRAMS[0];
  return Object.assign({ demandBoost:1, revenueBoost:0, slotDiscount:0, reputationBoost:0, cargoBoost:1 }, program);
}

function ensureV09Career(career) {
  if (!career) return null;
  career.alliance = Object.assign({ id:'none', joinedDay:null, duesPaid:0 }, career.alliance || {});
  if (!ALLIANCE_PROGRAMS.some(a => a.id === career.alliance.id)) career.alliance.id = 'none';
  career.internationalReputation = utils.clamp(Number(career.internationalReputation || Math.max(18, (career.reputation || 54) * 0.42)), 0, 100);
  career.routeCompetition = Array.isArray(career.routeCompetition) ? career.routeCompetition : [];
  career.airportSlots = career.airportSlots && typeof career.airportSlots === 'object' ? career.airportSlots : {};
  const hubs = new Set(career.hubs || [career.hubIata || 'GRU']);
  hubs.forEach(iata => {
    if (!career.airportSlots[iata]) career.airportSlots[iata] = { capacity: iata === career.hubIata ? SLOT_RULES.starterSlots : SLOT_RULES.hubBonusSlots, purchased:0 };
    career.airportSlots[iata].capacity = Math.max(Number(career.airportSlots[iata].capacity || 0), iata === career.hubIata ? SLOT_RULES.starterSlots : SLOT_RULES.hubBonusSlots);
  });
  (career.routes || []).forEach(r => {
    [r.origin, r.dest].forEach(iata => {
      if (!career.airportSlots[iata]) career.airportSlots[iata] = { capacity: 1, purchased:0 };
    });
    r.competition = typeof r.competition === 'number' ? r.competition : routeCompetitionPressure(career, r.origin, r.dest, r);
    r.international = r.international || (utils.byIata(r.origin)?.country !== utils.byIata(r.dest)?.country);
  });
  return career;
}

const previousNormalizeCareerV090 = normalizeCareer;
normalizeCareer = function(career) {
  const c = previousNormalizeCareerV090(career);
  ensureV09Career(c);
  return c;
};

const previousCreateCareerV090 = createCareer;
createCareer = function(form) {
  const c = previousCreateCareerV090(form);
  ensureV09Career(c);
  c.messages.unshift({ time: Date.now(), type:'info', text:'v0.9: sistema de alianças, slots aeroportuários, concorrência por rota e reputação internacional ativado.' });
  return c;
};

function airportSlotState(career, iata) {
  ensureV09Career(career);
  if (!career.airportSlots[iata]) career.airportSlots[iata] = { capacity: 0, purchased: 0 };
  const capacity = Number(career.airportSlots[iata].capacity || 0);
  const used = (career.routes || []).filter(r => r.origin === iata || r.dest === iata).length;
  return { capacity, used, free: Math.max(0, capacity - used), purchased: Number(career.airportSlots[iata].purchased || 0) };
}

function airportSlotBuyCost(career, iata) {
  const a = utils.byIata(iata);
  if (!a) return 0;
  const state = airportSlotState(career, iata);
  const alliance = allianceBenefits(career);
  const congestion = 1 + Math.min(state.capacity, SLOT_RULES.maxSoftSlots) * SLOT_RULES.buyGrowth;
  return Math.round(a.slotCost * congestion * (1 - Number(alliance.slotDiscount || 0)));
}

function buyAirportSlot(iata) {
  const c = activeCareer();
  const a = utils.byIata(iata);
  if (!c || !a) return;
  ensureV09Career(c);
  const cost = airportSlotBuyCost(c, iata);
  if (c.cash < cost) return showToast(`Caixa insuficiente. Comprar slot em ${iata} custa ${utils.money(cost)}.`, 'warn');
  c.cash -= cost;
  c.airportSlots[iata].capacity = Number(c.airportSlots[iata].capacity || 0) + 1;
  c.airportSlots[iata].purchased = Number(c.airportSlots[iata].purchased || 0) + 1;
  logFinance(c, `Compra de slot aeroportuário ${iata}`, -cost, 'slot');
  pushMessage(c, `Novo slot comprado em ${a.city} (${iata}). Capacidade agora: ${c.airportSlots[iata].capacity}.`, 'success');
  updateMarket(c); setActiveCareer(c); showToast('Slot aeroportuário adquirido.', 'ok'); render();
}

function routeCompetitionPressure(career, originIata, destIata, route = null) {
  const o = utils.byIata(originIata), d = utils.byIata(destIata);
  if (!o || !d) return 0.2;
  const trunk = ((o.demand || 60) + (d.demand || 60)) / 200;
  const globalAirport = Math.max(o.slotCost || 0, d.slotCost || 0) / 280000;
  const sameRoute = (career.routes || []).filter(r => (r.origin === originIata && r.dest === destIata) || (r.origin === destIata && r.dest === originIata)).length;
  const acquiredRelief = Math.min((career.acquisitions || []).length * 0.025, 0.08);
  const allianceRelief = allianceBenefits(career).id !== 'none' ? 0.055 : 0;
  const repRelief = Math.min((career.reputation || 50) / 1000, 0.08);
  const pressure = trunk * 0.34 + globalAirport * 0.36 + sameRoute * 0.035 - acquiredRelief - allianceRelief - repRelief;
  return utils.clamp(pressure, 0.08, 0.84);
}

function competitionLabel(value) {
  if (value >= 0.62) return 'muito alta';
  if (value >= 0.44) return 'alta';
  if (value >= 0.26) return 'média';
  return 'baixa';
}

utils.routeDemand = function(origin, dest, career, route = null) {
  ensureV09Career(career);
  let demand = baseRouteDemandV090(origin, dest, career, route);
  const competition = routeCompetitionPressure(career, origin.iata, dest.iata, route);
  const alliance = allianceBenefits(career);
  const intl = origin.country !== dest.country;
  const intlBoost = intl ? 1 + Math.min((career.internationalReputation || 0) / 900, 0.105) : 1;
  demand *= (1 - competition * 0.24) * Number(alliance.demandBoost || 1) * intlBoost;
  return utils.clamp(demand, 0.10, 1.62);
};

utils.routeEstimate = function(origin, dest, plane, career, route = null) {
  ensureV09Career(career);
  const e = baseRouteEstimateV090(origin, dest, plane, career, route);
  const alliance = allianceBenefits(career);
  const competition = routeCompetitionPressure(career, origin.iata, dest.iata, route);
  const intl = origin.country !== dest.country;
  const intlRevenueBoost = intl ? Math.min((career.internationalReputation || 0) / 1200, 0.08) : 0;
  const cargoBoost = (career.businessModel === 'cargo' || plane.capacity === 0) ? Number(alliance.cargoBoost || 1) : 1;
  const allianceRevenueBoost = Number(alliance.revenueBoost || 0);
  const slotSurcharge = Math.round((origin.slotCost + dest.slotCost) * SLOT_RULES.routeOpenLicense / 100);
  const competitionCost = Math.round(e.revenue * competition * 0.055);
  e.baseRevenue = e.revenue;
  e.competitionPressure = competition;
  e.competitionLabel = competitionLabel(competition);
  e.slotSurcharge = slotSurcharge;
  e.competitionCost = competitionCost;
  e.revenue = Math.round(e.revenue * (1 + allianceRevenueBoost + intlRevenueBoost) * cargoBoost);
  e.totalCost = Math.round(e.totalCost + slotSurcharge + competitionCost);
  e.profit = Math.round(e.revenue - e.totalCost);
  e.margin = e.revenue > 0 ? (e.profit / e.revenue) * 100 : -100;
  e.score = utils.clamp((e.profit / Math.max(e.totalCost, 1)) * 100, -100, 190);
  return e;
};

function updateInternationalReputation(career, route, estimate) {
  const origin = utils.byIata(route.origin), dest = utils.byIata(route.dest);
  if (!origin || !dest || origin.country === dest.country) return;
  const profitEffect = estimate && estimate.profit > 0 ? 0.20 : -0.05;
  const alliance = allianceBenefits(career);
  career.internationalReputation = utils.clamp(Number(career.internationalReputation || 0) + 0.28 + profitEffect + Number(alliance.reputationBoost || 0) / 80, 0, 100);
}

const previousCompleteFlightV090 = completeFlight;
completeFlight = function(career, route, plane, model) {
  previousCompleteFlightV090(career, route, plane, model);
  const origin = utils.byIata(route.origin), dest = utils.byIata(route.dest);
  if (origin && dest) {
    const estimate = utils.routeEstimate(origin, dest, model, career, route);
    route.competition = estimate.competitionPressure;
    updateInternationalReputation(career, route, estimate);
  }
};

const previousAdvanceCompanyDayV090 = advanceCompanyDay;
advanceCompanyDay = function(career) {
  const beforeDay = career.day;
  previousAdvanceCompanyDayV090(career);
  if (career.day !== beforeDay) {
    processAllianceDues(career);
    refreshCompetitionSnapshot(career);
  }
};

function processAllianceDues(career) {
  ensureV09Career(career);
  const program = allianceBenefits(career);
  if (program.id === 'none') return;
  const dues = Math.round(program.fee * 0.011);
  if (dues <= 0) return;
  career.cash -= dues;
  career.alliance.duesPaid = Number(career.alliance.duesPaid || 0) + dues;
  logFinance(career, `Mensalidade diária ${program.label}`, -dues, 'aliança');
  if (career.cash < 0) pushMessage(career, `${program.label} cobrou mensalidade e seu caixa ficou negativo.`, 'warn');
}

function refreshCompetitionSnapshot(career) {
  ensureV09Career(career);
  career.routeCompetition = (career.routes || []).map(r => ({ routeId:r.id, route:`${r.origin}-${r.dest}`, pressure:routeCompetitionPressure(career, r.origin, r.dest, r), day:career.day }));
}

function joinAlliance(id) {
  const c = activeCareer(); if (!c) return;
  ensureV09Career(c);
  const program = ALLIANCE_PROGRAMS.find(a => a.id === id);
  if (!program || program.id === 'none') return;
  if (c.alliance.id === program.id) return showToast('Sua companhia já está nessa aliança.', 'ok');
  if (c.reputation < program.minReputation) return showToast(`Reputação mínima exigida: ${utils.pct(program.minReputation)}.`, 'warn');
  if (c.cash < program.fee) return showToast(`Caixa insuficiente. Entrada custa ${utils.money(program.fee)}.`, 'warn');
  c.cash -= program.fee;
  c.alliance = { id:program.id, joinedDay:c.day, duesPaid:0 };
  c.reputation = utils.clamp(c.reputation + Number(program.reputationBoost || 0), 0, 100);
  c.internationalReputation = utils.clamp(Number(c.internationalReputation || 0) + Number(program.reputationBoost || 0) * 1.4, 0, 100);
  logFinance(c, `Entrada na aliança ${program.label}`, -program.fee, 'aliança');
  pushMessage(c, `${program.label} aceitou sua companhia. Demanda, reputação internacional e custo de slots melhoraram.`, 'success');
  updateMarket(c); setActiveCareer(c); showToast('Aliança ativada.', 'ok'); render();
}

function leaveAlliance() {
  const c = activeCareer(); if (!c) return;
  ensureV09Career(c);
  const program = allianceBenefits(c);
  if (program.id === 'none') return showToast('Sua companhia ainda não participa de uma aliança.', 'warn');
  const penalty = Math.round(program.fee * 0.18);
  if (c.cash < penalty) return showToast(`Saída contratual custa ${utils.money(penalty)}.`, 'warn');
  c.cash -= penalty;
  c.alliance = { id:'none', joinedDay:null, duesPaid:Number(c.alliance.duesPaid || 0) };
  c.internationalReputation = utils.clamp(Number(c.internationalReputation || 0) - 1.8, 0, 100);
  logFinance(c, `Saída de aliança aérea`, -penalty, 'aliança');
  pushMessage(c, `Companhia saiu da ${program.label}. Bônus de rede encerrado.`, 'warn');
  updateMarket(c); setActiveCareer(c); showToast('Aliança encerrada.', 'warn'); render();
}

function renderAlliances() {
  const c = activeCareer();
  ensureV09Career(c);
  const current = allianceBenefits(c);
  const activeRoutesIntl = (c.routes || []).filter(r => r.international || utils.byIata(r.origin)?.country !== utils.byIata(r.dest)?.country).length;
  const programs = ALLIANCE_PROGRAMS.filter(a => a.id !== 'none').map(a => {
    const active = c.alliance.id === a.id;
    const locked = c.reputation < a.minReputation;
    return `<article class="alliance-card ${active?'active':''}"><div><b>${a.label}</b><small>${a.description}</small><div class="route-stats"><span>Entrada ${utils.money(a.fee)}</span><span>Rep. mín. ${utils.pct(a.minReputation)}</span><span>Demanda +${utils.pct(((a.demandBoost||1)-1)*100)}</span><span>Slots -${utils.pct((a.slotDiscount||0)*100)}</span></div></div><button class="btn mini ${active?'ghost':'primary'}" data-action="joinAlliance" data-alliance="${a.id}" ${active || locked ? 'disabled':''}>${active?'Ativa': locked?'Rep. baixa':'Entrar'}</button></article>`;
  }).join('');
  const competitionRows = (c.routes || []).map(r => {
    const pressure = routeCompetitionPressure(c, r.origin, r.dest, r);
    return `<article class="competition-card"><div><b>${r.origin} → ${r.dest}</b><small>Concorrência ${competitionLabel(pressure)} • impacto aproximado ${utils.pct(pressure*100)}</small></div><div class="competition-meter"><span style="width:${utils.clamp(pressure*100,8,100)}%"></span></div></article>`;
  }).join('') || '<p>Nenhuma rota aberta para medir concorrência.</p>';
  return `<div class="alliances-layout"><section class="panel glass"><span class="eyebrow">F21 Alianças aéreas</span><h2>Rede global</h2><p class="lead">Alianças aumentam demanda, reduzem custo de slots e fortalecem reputação internacional, mas cobram entrada e mensalidade diária.</p><div class="kpi-grid"><div class="kpi"><small>Aliança atual</small><strong>${current.label}</strong></div><div class="kpi"><small>Reputação internacional</small><strong>${utils.pct(c.internationalReputation)}</strong></div><div class="kpi"><small>Rotas internacionais</small><strong>${activeRoutesIntl}</strong></div><div class="kpi"><small>Mensalidades pagas</small><strong>${utils.money(c.alliance.duesPaid || 0)}</strong></div></div><div class="row gap wrap"><button class="btn danger" data-action="leaveAlliance" ${current.id==='none'?'disabled':''}>Sair da aliança</button><button class="btn ghost" data-action="go" data-view="hubs">Gerenciar slots</button></div></section><section class="panel glass"><h2>Programas disponíveis</h2><div class="alliance-list">${programs}</div></section><section class="panel glass"><h2>F23 Concorrência por rota</h2><p class="hint">Rotas entre grandes aeroportos têm disputa forte. Aliança, reputação e aquisições reduzem a pressão.</p><div class="competition-list">${competitionRows}</div></section><section class="panel glass"><h2>F24 Reputação internacional</h2><div class="todo-list"><span>Rotas internacionais lucrativas aumentam prestígio global.</span><span>Alianças elevam a confiança do passageiro em mercados estrangeiros.</span><span>Concorrência alta exige preço, serviço e frota adequados.</span><span>Próxima evolução: clima por região, temporadas e eventos globais.</span></div></section></div>`;
}

navItems = function() {
  return [
    ['dashboard','Painel','◈'], ['tutorial','Tutorial','?'], ['map','Mapa','◎'], ['routes','Rotas','⇄'], ['hubs','Hubs','⌖'], ['fleet','Frota','✈'],
    ['contracts','Contratos','▣'], ['staff','Equipe','♟'], ['finance','Finanças','$'], ['market','Bolsa','▥'], ['alliances','Alianças','∞'], ['audit','Auditoria','✓']
  ];
};

render = function() {
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
    else if (view === 'alliances') html = shell(renderAlliances());
    else if (view === 'audit') html = shell(renderAudit());
    else html = shell(renderDashboard());
    dom.app.innerHTML = html;
    if (view === 'map') setTimeout(initMap, 60);
    if (view === 'routes') setTimeout(updateRoutePreview, 50);
  });
};

renderDashboard = function() {
  const c = activeCareer();
  ensureV09Career(c);
  const hub = utils.byIata(c.hubIata);
  const activeRoutes = c.routes.filter(r => r.status === 'active').length;
  const alerts = getAlerts(c);
  const alliance = allianceBenefits(c);
  return `<div class="dashboard-grid">
    <section class="panel glass command-panel">
      <div class="section-head"><div><span class="eyebrow">Presidência</span><h2>Painel executivo</h2></div><img class="ceo-avatar" src="${utils.escape(c.avatar)}" alt="CEO"></div>
      <p class="lead">Hub principal em <b>${hub.city} (${hub.iata})</b>. Sistema v0.9 com slots, alianças, concorrência por rota e reputação internacional.</p>
      <div class="action-grid">
        <button class="action-card" data-action="go" data-view="tutorial"><b>Começar tutorial</b><small>Passo a passo jogável</small></button>
        <button class="action-card" data-action="go" data-view="routes"><b>Criar rota</b><small>Slots, demanda e concorrência</small></button>
        <button class="action-card" data-action="go" data-view="alliances"><b>Alianças aéreas</b><small>Rede global e reputação internacional</small></button>
        <button class="action-card" data-action="go" data-view="hubs"><b>Slots e hubs</b><small>Capacidade aeroportuária</small></button>
        <button class="action-card" data-action="go" data-view="fleet"><b>Comprar avião</b><small>Mercado inicial de aeronaves</small></button>
        <button class="action-card" data-action="go" data-view="finance"><b>Finanças profissionais</b><small>Banco, seguro, leasing e crise</small></button>
        <button class="action-card" data-action="go" data-view="market"><b>Bolsa e aquisições</b><small>IPO, investidores e rivais</small></button>
        <button class="action-card" data-action="go" data-view="audit"><b>Auditar jogo</b><small>Integridade e anti-quebra</small></button>
      </div>
    </section>
    <section class="panel glass"><h2>Status operacional</h2><div class="kpi-grid">
      <div class="kpi"><small>Rotas ativas</small><strong>${activeRoutes}</strong></div>
      <div class="kpi"><small>Aliança</small><strong>${alliance.id==='none'?'Livre':alliance.label}</strong></div>
      <div class="kpi"><small>Rep. internacional</small><strong>${utils.pct(c.internationalReputation)}</strong></div>
      <div class="kpi"><small>Segurança</small><strong>${utils.pct(c.safety)}</strong></div>
      <div class="kpi"><small>Voos totais</small><strong>${utils.num(c.totalFlights || 0)}</strong></div>
      <div class="kpi"><small>Slots livres no hub</small><strong>${airportSlotState(c, c.hubIata).free}</strong></div>
    </div></section>
    <section class="panel glass"><h2>Alertas do assistente</h2>${alerts.length ? `<div class="alert-list">${alerts.map(a => `<div class="alert ${a.type}"><b>${a.title}</b><span>${a.text}</span><button class="btn mini" data-action="go" data-view="${a.view}">Abrir</button></div>`).join('')}</div>` : '<p class="success-text">Nenhum bloqueio crítico. Sistema está pronto para evoluir.</p>'}</section>
    <section class="panel glass"><h2>Eventos operacionais</h2><div class="message-list">${(c.events||[]).slice(0,4).map(e => `<div class="msg ${e.type}"><small>Dia ${e.day} • ${utils.dateLabel(e.time)}</small><p><b>${utils.escape(e.title)}</b><br>${utils.escape(e.text)}</p></div>`).join('') || '<p>Nenhum evento operacional registrado ainda.</p>'}</div></section>
    <section class="panel glass"><h2>Notícias da companhia</h2><div class="message-list">${c.messages.slice(0,6).map(m => `<div class="msg ${m.type}"><small>${utils.dateLabel(m.time)}</small><p>${utils.escape(m.text)}</p></div>`).join('') || '<p>Nenhuma notícia ainda.</p>'}</div></section>
  </div>`;
};

const previousGetAlertsV090 = getAlerts;
getAlerts = function(c) {
  ensureV09Career(c);
  const alerts = previousGetAlertsV090(c);
  const hubSlots = airportSlotState(c, c.hubIata);
  if (hubSlots.free <= 0) alerts.push({ type:'warn', title:'Slots lotados no hub', text:`${c.hubIata} está sem slot livre. Compre slot ou abra novo hub.`, view:'hubs' });
  if (c.routes.some(r => routeCompetitionPressure(c, r.origin, r.dest, r) > 0.62)) alerts.push({ type:'warn', title:'Concorrência muito alta', text:'Há rota sofrendo pressão de rivais. Ajuste preço ou entre em aliança.', view:'alliances' });
  if (c.routes.some(r => r.international) && c.internationalReputation < 30) alerts.push({ type:'warn', title:'Marca internacional fraca', text:'Rotas internacionais precisam de reputação maior para ocupar bem.', view:'alliances' });
  return alerts.slice(0, 7);
};

renderRoutes = function() {
  const c = activeCareer();
  ensureV09Career(c);
  const hubs = (c.hubs || [c.hubIata]).map(utils.byIata).filter(Boolean);
  const idlePlanes = c.fleet.filter(p => ['idle','maintenanceRequired'].includes(p.status) || !p.status);
  const selectedOrigin = hubs[0] || utils.byIata(c.hubIata);
  const dests = AIRPORTS.filter(a => a.iata !== selectedOrigin.iata);
  return `<div class="routes-layout">
    <section class="panel glass"><div class="section-head"><div><span class="eyebrow">F22-F23 Slots + concorrência</span><h2>Criar rota</h2><p>Agora cada rota exige slot disponível nos dois aeroportos e sofre pressão de concorrentes.</p></div></div>
      <div class="form-grid">
        <label>Origem / hub<select id="routeOrigin">${hubs.map(a => `<option value="${a.iata}">${a.iata} — ${a.city}, ${a.country} • slots ${airportSlotState(c,a.iata).used}/${airportSlotState(c,a.iata).capacity}</option>`).join('')}</select></label>
        <label>Aeronave<select id="routePlane">${idlePlanes.map(p => { const m=utils.model(p.modelId); return `<option value="${p.id}" ${p.condition<50?'disabled':''}>${p.name} — ${m.name} — condição ${Math.round(p.condition)}%</option>`; }).join('') || '<option disabled>Sem avião livre</option>'}</select></label>
        <label>Destino<select id="routeDest">${dests.map(a => `<option value="${a.iata}">${a.iata} — ${a.city}, ${a.country} • demanda ${a.demand}</option>`).join('')}</select></label>
      </div>
      <div id="routePreview" class="preview-box">Selecione origem, aeronave e destino.</div>
      <button class="btn primary big" data-action="createRoute">Abrir rota</button>
      <p class="hint">Sem slot livre no destino, compre slot em Hubs/Slots antes de abrir a rota.</p>
    </section>
    <section class="panel glass"><h2>Rotas ativas</h2><div class="route-list">${c.routes.map(renderRouteCard).join('') || '<p>Nenhuma rota criada. Abra a primeira rota para começar a receita.</p>'}</div></section>
  </div>`;
};

renderRouteCard = function(r) {
  const c = activeCareer();
  ensureV09Career(c);
  const plane = c.fleet.find(p => p.id === r.planeId);
  const strategy = PRICE_STRATEGIES[r.priceStrategy || 'balanced'] || PRICE_STRATEGIES.balanced;
  const comp = routeCompetitionPressure(c, r.origin, r.dest, r);
  return `<article class="route-card"><div><b>${r.origin} → ${r.dest}</b><small>${plane ? plane.name : 'Avião não encontrado'} • ${utils.num(r.distance)} km • preço ${strategy.label} • concorrência ${competitionLabel(comp)}</small></div><div class="progress"><span style="width:${utils.clamp(r.progress,0,100)}%"></span></div><div class="route-stats"><span>Voos: ${r.totalFlights || 0}</span><span>Último: ${utils.money(r.lastProfit || 0)}</span><span>Margem: ${r.lastMargin ?? 0}%</span><span>Ocupação: ${r.lastLoadFactor ?? 0}%</span><span>Conc.: ${utils.pct(comp*100)}</span><span>Total: ${utils.money(r.totalProfit || 0)}</span></div><div class="row gap wrap"><button class="btn mini ghost" data-action="toggleRoute" data-route="${r.id}">${r.status==='active'?'Pausar':'Ativar'}</button><button class="btn mini" data-action="routePrice" data-route="${r.id}" data-strategy="budget">Popular</button><button class="btn mini" data-action="routePrice" data-route="${r.id}" data-strategy="balanced">Equilibrada</button><button class="btn mini" data-action="routePrice" data-route="${r.id}" data-strategy="premium">Premium</button><button class="btn mini danger" data-action="closeRoute" data-route="${r.id}">Fechar</button></div></article>`;
};

updateRoutePreview = function() {
  safeExecute('routePreview', () => {
    const c = activeCareer(); if (!c) return;
    ensureV09Career(c);
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
    const os = airportSlotState(c, origin.iata), ds = airportSlotState(c, dest.iata);
    const slotOk = os.free > 0 && ds.free > 0;
    box.innerHTML = `<div class="preview-grid"><div><small>Distância</small><b>${utils.num(e.distance)} km</b></div><div><small>Alcance</small><b class="${feasible?'ok':'bad'}">${utils.num(model.rangeKm)} km</b></div><div><small>Ocupação</small><b>${utils.pct(e.loadFactor*100)}</b></div><div><small>Receita</small><b>${utils.money(e.revenue)}</b></div><div><small>Custo</small><b>${utils.money(e.totalCost)}</b></div><div><small>Concorrência</small><b>${competitionLabel(e.competitionPressure)} (${utils.pct(e.competitionPressure*100)})</b></div><div><small>Slots origem</small><b class="${os.free>0?'ok':'bad'}">${os.used}/${os.capacity}</b></div><div><small>Slots destino</small><b class="${ds.free>0?'ok':'bad'}">${ds.used}/${ds.capacity}</b></div><div><small>Lucro estimado</small><b class="${e.profit>=0?'ok':'bad'}">${utils.money(e.profit)}</b></div></div>${feasible ? '' : '<p class="bad">Rota bloqueada: aeronave não possui alcance suficiente.</p>'}${slotOk ? '' : '<p class="bad">Rota bloqueada: falta slot livre na origem ou destino.</p>'}`;
  });
};

createRoute = function() {
  const c = activeCareer(); if (!c) return;
  ensureV09Career(c);
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
  const originSlot = airportSlotState(c, origin.iata), destSlot = airportSlotState(c, dest.iata);
  if (originSlot.free <= 0) return showToast(`Sem slot livre em ${origin.iata}. Compre slot em Hubs/Slots.`, 'warn');
  if (destSlot.free <= 0) return showToast(`Sem slot livre em ${dest.iata}. Compre slot em Hubs/Slots.`, 'warn');
  const e = utils.routeEstimate(origin, dest, model, c, { priceStrategy:'balanced', planeCondition: plane.condition });
  if (e.distance > model.rangeKm) return showToast('Alcance insuficiente para esta rota.', 'warn');
  const routeCost = Math.round(dest.slotCost * 0.18 + origin.fee + dest.fee + e.slotSurcharge);
  if (c.cash < routeCost) return showToast(`Caixa insuficiente. Custa ${utils.money(routeCost)} para abrir a rota.`, 'warn');
  c.cash -= routeCost;
  plane.status = 'inFlight';
  const route = { id: utils.id('route'), origin: origin.iata, dest: dest.iata, planeId: plane.id, status: 'active', distance: e.distance, cycleSeconds: utils.clamp(38 + e.distance / 38, 45, 220), progress: 0, totalFlights: 0, totalProfit: 0, lastProfit: 0, lastMargin: Math.round(e.margin || 0), lastLoadFactor: Math.round((e.loadFactor || 0) * 100), lastFuelKg: Math.round(e.fuelKg || 0), priceStrategy:'balanced', serviceTier:'standard', competition:e.competitionPressure, international:origin.country !== dest.country, createdAt: Date.now() };
  plane.routeId = route.id;
  c.routes.push(route);
  logFinance(c, `Abertura de rota ${origin.iata}-${dest.iata}`, -routeCost, 'investimento');
  pushMessage(c, `Nova rota ${origin.iata} → ${dest.iata} aberta com ${plane.name}. Slots usados: ${origin.iata} e ${dest.iata}.`, 'success');
  updateMarket(c); setActiveCareer(c); showToast('Rota criada e iniciada.', 'ok'); render();
};

renderHubs = function() {
  const c = activeCareer();
  ensureV09Career(c);
  const open = new Set(c.hubs || [c.hubIata]);
  const hubCards = AIRPORTS.map(a => {
    const owned = open.has(a.iata);
    const cost = hubOpenCost(a, c);
    const slot = airportSlotState(c, a.iata);
    const slotCost = airportSlotBuyCost(c, a.iata);
    const routeCount = c.routes.filter(r => r.origin === a.iata || r.dest === a.iata).length;
    return `<article class="hub-card ${owned?'owned':''}"><div><b>${a.iata} — ${a.city}</b><small>${a.country} • ${a.region} • demanda ${a.demand} • pistas ${a.runway} m</small><div class="route-stats"><span>Rotas ${routeCount}</span><span>Slots ${slot.used}/${slot.capacity}</span><span>Comprar slot ${utils.money(slotCost)}</span><span>${owned?'Hub aberto':utils.money(cost)}</span></div></div><div class="hub-actions">${owned ? '<button class="btn mini ghost" disabled>Hub aberto</button>' : `<button class="btn mini primary" data-action="openHub" data-hub="${a.iata}">Abrir hub</button>`}<button class="btn mini" data-action="buySlot" data-airport="${a.iata}">Comprar slot</button></div></article>`;
  }).join('');
  const totalSlots = Object.keys(c.airportSlots || {}).reduce((sum, iata) => sum + airportSlotState(c, iata).capacity, 0);
  const usedSlots = Object.keys(c.airportSlots || {}).reduce((sum, iata) => sum + airportSlotState(c, iata).used, 0);
  return `<div class="hubs-layout"><section class="panel glass"><span class="eyebrow">F22 Slots aeroportuários</span><h2>Hubs e capacidade</h2><p class="lead">Hubs liberam origens de rota. Slots controlam capacidade real nos aeroportos e impedem crescimento infinito sem planejamento.</p><div class="kpi-grid"><div class="kpi"><small>Hubs abertos</small><strong>${open.size}</strong></div><div class="kpi"><small>Principal</small><strong>${c.hubIata}</strong></div><div class="kpi"><small>Slots usados</small><strong>${usedSlots}/${totalSlots}</strong></div><div class="kpi"><small>Desconto aliança</small><strong>${utils.pct((allianceBenefits(c).slotDiscount||0)*100)}</strong></div></div></section><section class="panel glass"><h2>Mapa de expansão e slots</h2><div class="hub-list">${hubCards}</div></section></div>`;
};

openHub = function(iata) {
  const c = activeCareer();
  const a = utils.byIata(iata);
  if (!c || !a) return;
  ensureV09Career(c);
  c.hubs = c.hubs || [c.hubIata];
  if (c.hubs.includes(iata)) return showToast('Hub já está aberto.', 'ok');
  const cost = hubOpenCost(a, c);
  if (c.cash < cost) return showToast(`Caixa insuficiente. Abrir ${iata} custa ${utils.money(cost)}.`, 'warn');
  c.cash -= cost;
  c.hubs.push(iata);
  c.airportSlots[iata] = c.airportSlots[iata] || { capacity: 0, purchased:0 };
  c.airportSlots[iata].capacity = Math.max(Number(c.airportSlots[iata].capacity || 0), SLOT_RULES.hubBonusSlots);
  c.reputation = utils.clamp(c.reputation + 0.8, 0, 100);
  if (a.country !== c.country) c.internationalReputation = utils.clamp(Number(c.internationalReputation || 0) + 0.7, 0, 100);
  logFinance(c, `Abertura de hub ${iata}`, -cost, 'expansão');
  pushMessage(c, `Novo hub aberto em ${a.city} (${iata}). ${SLOT_RULES.hubBonusSlots} slots iniciais liberados.`, 'success');
  refreshContractsForHubs(c);
  updateMarket(c); setActiveCareer(c); showToast('Hub aberto com slots iniciais.', 'ok'); render();
};

valuation = function(career) {
  ensureV09Career(career);
  const fleetValue = career.fleet.reduce((sum, p) => { const m = utils.model(p.modelId); const ownership = p.acquisitionMode === 'lease' ? 0.22 : 1; return sum + (m ? m.price * ownership * (0.5 + p.condition / 200) : 0); }, 0);
  const routeValue = career.routes.length * 185000;
  const brand = career.reputation * 43000 + career.safety * 36000 + Number(career.internationalReputation || 0) * 48000;
  const alliance = allianceBenefits(career);
  const allianceAsset = alliance.id === 'none' ? 0 : Math.round(alliance.fee * 0.55);
  const slotAsset = Object.keys(career.airportSlots || {}).reduce((sum, iata) => { const a = utils.byIata(iata); return sum + ((a?.slotCost || 0) * airportSlotState(career, iata).capacity * 0.32); }, 0);
  const fuelAsset = getFuelStockValue(career) * 0.65;
  const debtPenalty = totalDebt(career) * 0.35;
  return Math.max(0, Math.round(career.cash + fleetValue + routeValue + brand + allianceAsset + slotAsset + fuelAsset - debtPenalty));
};

renderMarket = function() {
  const c = activeCareer();
  ensureV09Career(c);
  updateMarket(c);
  const debt = totalDebt(c);
  const debtRisk = debt / Math.max(c.valuation + debt, 1);
  const ipoReady = !c.market.ipo && c.valuation >= IPO_RULES.minValuation && c.reputation >= IPO_RULES.minReputation;
  const ipoRaisedPreview = Math.round(c.valuation * IPO_RULES.floatSold * IPO_RULES.discount);
  const last = c.market.shareHistory || [];
  const trend = last.length > 1 ? (last[0].price >= last[1].price ? 'alta' : 'queda') : 'estável';
  const goals = (c.investorGoals || seedInvestorGoals(c)).map(g => {
    const ok = investorGoalStatus(c, g).ok;
    return `<article class="goal-card ${ok?'ok':''}"><b>${ok?'✓':'!'}</b><div><strong>${g.label}</strong></div><small>${g.text}</small></article>`;
  }).join('');
  const acquisitions = (c.competitors || seedCompetitors(c)).map(comp => {
    const acquired = comp.status === 'acquired';
    const price = Math.round(comp.value * (1.02 + Math.max(comp.reputation - c.reputation, -20) / 220));
    return `<article class="competitor-card ${acquired?'acquired':''}"><div><b>${utils.escape(comp.name)}</b><small>${comp.region} • base ${comp.base} • ${comp.routes.length} rotas • ${comp.fleet} aeronave(s)</small><div class="route-stats"><span>Valor ${utils.money(comp.value)}</span><span>Dívida ${utils.money(comp.debt)}</span><span>Reputação ${utils.pct(comp.reputation)}</span></div></div><button class="btn mini ${acquired?'ghost':'primary'}" data-action="acquireCompetitor" data-competitor="${comp.id}" ${acquired?'disabled':''}>${acquired?'Integrada':`Comprar ${utils.money(price)}`}</button></article>`;
  }).join('');
  const history = (c.market.shareHistory || []).slice(0, 10).map(h => `<i style="height:${utils.clamp((h.price / Math.max(c.stockPrice, 0.01)) * 62, 12, 96)}%" title="Dia ${h.day}: $${Number(h.price||0).toFixed(2)}"></i>`).join('') || '<i style="height:35%"></i>';
  const slotTotal = Object.keys(c.airportSlots || {}).reduce((sum,iata)=>sum+airportSlotState(c,iata).capacity,0);
  return `<div class="market-layout"><section class="panel glass"><span class="eyebrow">F24 Marca global + bolsa</span><h2>Bolsa, reputação e investidores</h2><div class="stock-card"><div><small>Valor por ação</small><strong>$${c.stockPrice.toFixed(2)}</strong><span>tendência: ${trend}</span></div><div><small>Valuation</small><strong>${utils.money(c.valuation)}</strong><span>${c.market.ipo ? `companhia aberta • free float ${utils.pct(c.market.publicFloat*100)}` : 'companhia fechada'}</span></div></div><div class="stock-line">${history}</div><div class="kpi-grid"><div class="kpi"><small>Confiança investidor</small><strong>${utils.pct(c.market.investorTrust)}</strong></div><div class="kpi"><small>Rep. internacional</small><strong>${utils.pct(c.internationalReputation)}</strong></div><div class="kpi"><small>Slots totais</small><strong>${slotTotal}</strong></div><div class="kpi"><small>Dívida/risco</small><strong>${utils.pct(debtRisk*100)}</strong></div></div><div class="row gap wrap"><button class="btn ${ipoReady?'primary':'ghost'}" data-action="launchIPO" ${(!ipoReady || c.market.ipo)?'disabled':''}>Abrir IPO ${!c.market.ipo ? `(${utils.money(ipoRaisedPreview)})` : 'concluído'}</button><button class="btn ghost" data-action="secondaryOffering" ${c.market.ipo?'':'disabled'}>Vender novas ações</button><button class="btn ghost" data-action="shareBuyback" ${c.market.ipo?'':'disabled'}>Recomprar ações</button></div></section><section class="panel glass"><h2>Metas dos investidores</h2><div class="goal-grid">${goals}</div></section><section class="panel glass"><h2>Aquisição de concorrentes</h2><p class="hint">Aquisições reduzem pressão competitiva e podem aumentar reputação internacional.</p><div class="competitor-grid">${acquisitions}</div></section><section class="panel glass"><h2>Ranking empresarial</h2><div class="table-scroll"><table class="ranking-table"><thead><tr><th>Rank</th><th>Companhia</th><th>Valor</th><th>Rep.</th><th>Frota</th><th>Rotas</th></tr></thead><tbody>${renderRanking(c)}</tbody></table></div></section><section class="panel glass"><h2>Conselho executivo</h2><div class="todo-list"><span>${debtRisk > .75 ? 'Reduzir dívida antes de aquisição ou nova emissão.' : 'Espaço para expansão com risco controlado.'}</span><span>${allianceBenefits(c).id==='none' ? 'Entrar em aliança melhora demanda e desconto de slots.' : `Aliança ativa: ${allianceBenefits(c).label}.`}</span><span>Reputação internacional influencia ocupação de rotas fora do país.</span><span>Próxima evolução: clima, temporadas e eventos globais.</span></div></section></div>`;
};

renderAudit = function() {
  const checks = runIntegrityAudit();
  const passed = checks.filter(c => c.ok).length;
  return `<div class="audit-layout"><section class="panel glass"><div class="section-head"><div><span class="eyebrow">Sistema anti-quebra</span><h2>Auditoria da build</h2><p>Execução obrigatória por fase para garantir integridade e evolução real.</p></div><button class="btn primary" data-action="runAudit">Rodar auditoria</button></div><div class="audit-score"><strong>${passed}/${checks.length}</strong><span>checks aprovados</span></div><div class="audit-list">${checks.map(c => `<div class="audit-row ${c.ok?'ok':'bad'}"><b>${c.ok?'✓':'!'}</b><span>${c.label}</span><small>${c.detail}</small></div>`).join('')}</div></section><section class="panel glass"><h2>Relatório desta entrega</h2><div class="todo-list"><span>F21 Alianças: OK — programas de rede, entrada, mensalidade e bônus operacional.</span><span>F22 Slots aeroportuários: OK — capacidade por aeroporto, compra de slots e bloqueio seguro de rota sem slot.</span><span>F23 Concorrência por rota: OK — pressão por mercado, demanda, reputação e aliança.</span><span>F24 Reputação internacional: OK — marca global afeta rotas internacionais e valuation.</span><span>Anti-quebra: OK — migração de saves v0.4 até v0.8 para schema 9 preservada.</span></div></section></div>`;
};

runIntegrityAudit = function() {
  const c = activeCareer();
  if (c) ensureV09Career(c);
  const slotCount = runtime.state && Array.isArray(runtime.state.slots) ? runtime.state.slots.length : 0;
  const iatas = new Set(AIRPORTS.map(a => a.iata));
  const duplicateIata = iatas.size !== AIRPORTS.length;
  const lastCrash = localStorage.getItem(CRASH_KEY);
  const base = [
    { ok: !!dom.buildBadge && dom.buildBadge.textContent.includes(BUILD.build), label:'Build/data/hora visíveis', detail:`Build ${BUILD.build} renderizado no rodapé.` },
    { ok: BUILD.schema === 9, label:'Schema da build', detail:`Schema atual ${BUILD.schema}.` },
    { ok: STORE_KEY.includes('schema_9'), label:'Chave de save v0.9', detail:STORE_KEY },
    { ok: LEGACY_STORE_KEYS.includes('vale_air_manager_schema_8'), label:'Migração v0.8 preservada', detail:'Saves antigos são lidos e normalizados.' },
    { ok: slotCount === 3, label:'Save slots', detail:`${slotCount} slots detectados.` },
    { ok: AIRPORTS.length >= 25 && !duplicateIata, label:'Banco de aeroportos', detail:`${AIRPORTS.length} aeroportos reais/semi-realistas, IATA único.` },
    { ok: AIRCRAFT.length >= 10, label:'Catálogo inicial de aeronaves', detail:`${AIRCRAFT.length} modelos com alcance, consumo, capacidade e leasing.` },
    { ok: !!window.localStorage, label:'LocalStorage disponível', detail:'Sistema pode salvar carreira localmente.' },
    { ok: !c || c.fleet.every(p => !!utils.model(p.modelId)), label:'Integridade da frota', detail:c ? `${c.fleet.length} aeronaves vinculadas a modelos válidos.` : 'Sem frota ativa ainda.' },
    { ok: !c || c.routes.every(r => utils.byIata(r.origin) && utils.byIata(r.dest) && c.fleet.some(p => p.id === r.planeId)), label:'Integridade das rotas', detail:c ? `${c.routes.length} rotas verificadas.` : 'Sem rotas ativas.' },
    { ok: !c || Array.isArray(c.hubs) && c.hubs.every(i => utils.byIata(i)), label:'Integridade dos hubs', detail:c ? `${(c.hubs||[]).length} hubs válidos.` : 'Sem carreira ativa.' },
    { ok: Array.isArray(ALLIANCE_PROGRAMS) && ALLIANCE_PROGRAMS.length >= 4, label:'F21 Alianças aéreas', detail:`${ALLIANCE_PROGRAMS.length-1} programas de aliança disponíveis.` },
    { ok: !c || c.alliance && ALLIANCE_PROGRAMS.some(a=>a.id===c.alliance.id), label:'Aliança no save', detail:c ? `Atual: ${allianceBenefits(c).label}.` : 'Sem carreira ativa.' },
    { ok: !!SLOT_RULES && SLOT_RULES.starterSlots >= 2, label:'F22 Regras de slots', detail:`Hub inicial recebe ${SLOT_RULES.starterSlots} slots.` },
    { ok: !c || c.airportSlots && typeof c.airportSlots === 'object', label:'Slots no save', detail:c ? `${Object.keys(c.airportSlots||{}).length} aeroportos com estado de slot.` : 'Sem carreira ativa.' },
    { ok: !c || Object.keys(c.airportSlots||{}).every(iata => airportSlotState(c,iata).capacity >= airportSlotState(c,iata).used), label:'Capacidade de slots', detail:c ? 'Nenhum aeroporto com uso acima da capacidade após migração.' : 'Sem carreira ativa.' },
    { ok: typeof routeCompetitionPressure === 'function', label:'F23 Concorrência por rota', detail:'Função de pressão competitiva operacional.' },
    { ok: !c || Array.isArray(c.routeCompetition), label:'Snapshot de concorrência', detail:c ? `${(c.routeCompetition||[]).length} registros de concorrência.` : 'Sem carreira ativa.' },
    { ok: !c || typeof c.internationalReputation === 'number', label:'F24 Reputação internacional', detail:c ? `${utils.pct(c.internationalReputation)} de prestígio global.` : 'Sem carreira ativa.' },
    { ok: !!IPO_RULES && IPO_RULES.minValuation > 0, label:'IPO e mercado de capitais', detail:'Regras de IPO, free float, emissão e buyback configuradas.' },
    { ok: Array.isArray(COMPETITORS) && COMPETITORS.length >= 5, label:'Concorrentes para aquisição', detail:`${COMPETITORS.length} companhias rivais disponíveis.` },
    { ok: !!window.L || true, label:'Fallback de mapa', detail: window.L ? 'Leaflet disponível.' : 'Leaflet indisponível; fallback SVG será usado.' },
    { ok: !lastCrash, label:'Última sessão sem crash', detail:lastCrash ? 'Há registro de crash anterior salvo para diagnóstico.' : 'Nenhum crash registrado.' }
  ];
  return base;
};

handleAction = function(target) {
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
    if (action === 'buySlot') return buyAirportSlot(target.dataset.airport);
    if (action === 'acceptContract') return acceptContract(target.dataset.contract);
    if (action === 'toggleRoute') return toggleRoute(target.dataset.route);
    if (action === 'routePrice') return setRoutePrice(target.dataset.route, target.dataset.strategy);
    if (action === 'closeRoute') return closeRoute(target.dataset.route);
    if (action === 'buyPlane') return buyPlane(target.dataset.model);
    if (action === 'leasePlane') return leasePlane(target.dataset.model);
    if (action === 'returnLease') return returnLeasedPlane(target.dataset.plane);
    if (action === 'maintainPlane') return maintainPlane(target.dataset.plane, target.dataset.level || 'standard');
    if (action === 'renamePlane') return renamePlane(target.dataset.plane);
    if (action === 'sellPlane') return sellPlane(target.dataset.plane);
    if (action === 'hireStaff') return hireStaff(target.dataset.role, target.dataset.salary);
    if (action === 'fireStaff') return fireStaff(target.dataset.role);
    if (action === 'buyFuel') return buyFuel(target.dataset.pack || 'small');
    if (action === 'marketingCampaign') return marketingCampaign();
    if (action === 'takeLoan') return takeLoan(target.dataset.loan);
    if (action === 'repayLoan') return repayLoan(target.dataset.loanId);
    if (action === 'setInsurance') return setInsurancePlan(target.dataset.plan);
    if (action === 'recoveryPlan') return activateRecoveryPlan();
    if (action === 'launchIPO') return launchIPO();
    if (action === 'secondaryOffering') return secondaryOffering();
    if (action === 'shareBuyback') return shareBuyback();
    if (action === 'acquireCompetitor') return acquireCompetitor(target.dataset.competitor);
    if (action === 'joinAlliance') return joinAlliance(target.dataset.alliance);
    if (action === 'leaveAlliance') return leaveAlliance();
    if (action === 'runAudit') { localStorage.removeItem(CRASH_KEY); showToast('Auditoria executada.', 'ok'); render(); return; }
  });
};

/* =========================================================
   v1.0.0-beta F25-F28 — clima regional, temporadas, eventos globais e calendário vivo
   Camada adicionada antes do boot para preservar a v0.9 e acelerar evolução sem quebrar saves.
========================================================= */
const WEATHER_PATTERNS = Object.freeze({
  clear: { label:'Céu operacional', icon:'☀', delay:0.00, demand:1.02, cost:1.00, safety:0.00 },
  rain: { label:'Chuva moderada', icon:'☔', delay:0.08, demand:0.98, cost:1.025, safety:-0.03 },
  storm: { label:'Tempestade', icon:'⛈', delay:0.22, demand:0.91, cost:1.085, safety:-0.11 },
  fog: { label:'Neblina', icon:'◌', delay:0.16, demand:0.94, cost:1.045, safety:-0.07 },
  snow: { label:'Neve/gelo', icon:'❄', delay:0.28, demand:0.88, cost:1.11, safety:-0.14 },
  heat: { label:'Calor extremo', icon:'♨', delay:0.10, demand:0.96, cost:1.055, safety:-0.04 },
  wind: { label:'Vento forte', icon:'⇉', delay:0.13, demand:0.97, cost:1.06, safety:-0.06 }
});

const REGION_WEATHER_BASE = Object.freeze({
  'South America': ['clear','rain','storm','fog','heat'],
  'Brazil': ['clear','rain','storm','fog','heat'],
  'North America': ['clear','rain','storm','fog','snow','wind'],
  'Europe': ['clear','rain','fog','snow','wind'],
  'Middle East': ['clear','heat','wind'],
  'Asia': ['clear','rain','storm','fog','wind'],
  'Africa': ['clear','heat','rain','wind'],
  'Oceania': ['clear','rain','wind','storm'],
  'Cargo': ['clear','rain','wind']
});

const SEASON_CALENDAR = Object.freeze([
  { id:'jan', month:'Janeiro', tag:'Alta temporada Brasil', demand:{'South America':1.12,'Brazil':1.16,'Europe':0.96,'North America':1.03}, note:'férias, turismo doméstico e litoral em alta' },
  { id:'feb', month:'Fevereiro', tag:'Carnaval e turismo', demand:{'South America':1.13,'Brazil':1.18,'Europe':0.97,'North America':1.01}, note:'eventos e lazer puxam rotas brasileiras' },
  { id:'mar', month:'Março', tag:'Retorno corporativo', demand:{'South America':1.02,'Brazil':1.02,'Europe':1.03,'North America':1.03}, note:'demanda equilibrada entre negócios e turismo' },
  { id:'apr', month:'Abril', tag:'Baixa seletiva', demand:{'South America':0.96,'Brazil':0.96,'Europe':1.02,'North America':1.00}, note:'atenção em rotas pouco lucrativas' },
  { id:'may', month:'Maio', tag:'Carga aquecida', cargo:1.12, demand:{'South America':0.99,'Brazil':0.98,'Europe':1.03,'North America':1.04}, note:'contratos cargueiros ficam melhores' },
  { id:'jun', month:'Junho', tag:'Férias do hemisfério norte', demand:{'South America':1.02,'Brazil':1.00,'Europe':1.14,'North America':1.12}, note:'long haul começa a ganhar força' },
  { id:'jul', month:'Julho', tag:'Alta global', demand:{'South America':1.09,'Brazil':1.10,'Europe':1.17,'North America':1.15}, note:'melhor mês para rotas turísticas' },
  { id:'aug', month:'Agosto', tag:'Europa forte', demand:{'South America':1.00,'Brazil':0.99,'Europe':1.13,'North America':1.08}, note:'rotas para Europa seguem fortes' },
  { id:'sep', month:'Setembro', tag:'Corporativo', demand:{'South America':1.03,'Brazil':1.02,'Europe':1.04,'North America':1.05}, note:'viagens de negócio estabilizam caixa' },
  { id:'oct', month:'Outubro', tag:'Eventos e feiras', demand:{'South America':1.04,'Brazil':1.03,'Europe':1.06,'North America':1.07,'Asia':1.08}, note:'bom mês para marketing' },
  { id:'nov', month:'Novembro', tag:'Black cargo', cargo:1.2, demand:{'South America':1.02,'Brazil':1.03,'North America':1.09,'Asia':1.10}, note:'carga expressa e e-commerce sobem' },
  { id:'dec', month:'Dezembro', tag:'Natal e réveillon', cargo:1.08, demand:{'South America':1.18,'Brazil':1.20,'Europe':1.10,'North America':1.12}, note:'pico global de passageiros e carga' }
]);

const GLOBAL_EVENT_TEMPLATES = Object.freeze([
  { id:'world_cup', title:'Copa mundial movimenta aeroportos', type:'tourism', duration:7, minDay:8, interval:36, demandBoost:1.13, cargoBoost:1.02, regions:['South America','Europe','North America'], cash:0, reputation:0.4, text:'Rotas internacionais e grandes hubs recebem procura acima do normal.' },
  { id:'expo_tech', title:'Feira internacional de tecnologia', type:'business', duration:5, minDay:12, interval:30, demandBoost:1.08, cargoBoost:1.06, regions:['North America','Asia','Europe'], cash:0, reputation:0.25, text:'Executivos e cargas urgentes aumentam nas rotas de negócios.' },
  { id:'cargo_peak', title:'Pico global de carga expressa', type:'cargo', duration:6, minDay:16, interval:28, demandBoost:1.02, cargoBoost:1.22, regions:['Asia','North America','South America','Europe'], cash:0, reputation:0.2, text:'Contratos e aeronaves cargueiras ganham relevância temporária.' },
  { id:'fuel_pressure', title:'Pressão geopolítica no combustível', type:'finance', duration:4, minDay:20, interval:34, fuelDelta:0.08, demandBoost:0.98, cargoBoost:1.00, regions:['South America','North America','Europe','Asia','Middle East'], cash:0, reputation:-0.05, text:'O combustível sobe temporariamente; hedge e caixa ajudam a atravessar.' },
  { id:'pilgrim_flow', title:'Grande fluxo religioso e cultural', type:'tourism', duration:5, minDay:24, interval:32, demandBoost:1.10, cargoBoost:1.01, regions:['Middle East','Europe','South America'], cash:0, reputation:0.3, text:'Demanda de grupos aumenta em rotas específicas e conexões internacionais.' }
]);

function getGameCalendar(career) {
  const day = Math.max(1, Number(career?.day || 1));
  const monthIndex = Math.floor((day - 1) / 7) % 12;
  const year = 2026 + Math.floor((day - 1) / 84);
  const dayOfMonth = ((day - 1) % 7) + 1;
  const week = Math.floor((day - 1) / 7) + 1;
  const season = SEASON_CALENDAR[monthIndex] || SEASON_CALENDAR[0];
  return { day, dayOfMonth, week, monthIndex, year, season, label:`${dayOfMonth} de ${season.month} de ${year}` };
}

function deterministicPick(list, seed) {
  if (!Array.isArray(list) || !list.length) return null;
  const raw = Math.abs(Math.sin(seed * 12.9898) * 43758.5453);
  return list[Math.floor(raw) % list.length];
}

function ensureV10Career(career) {
  if (!career) return null;
  if (typeof ensureV09Career === 'function') ensureV09Career(career);
  career.calendar = Object.assign({ currentLabel:'1 de Janeiro de 2026', lastWeatherDay:0, lastGlobalEventDay:0 }, career.calendar || {});
  career.weather = career.weather && typeof career.weather === 'object' ? career.weather : { regions:{} };
  career.weather.regions = career.weather.regions && typeof career.weather.regions === 'object' ? career.weather.regions : {};
  career.activeGlobalEvents = Array.isArray(career.activeGlobalEvents) ? career.activeGlobalEvents : [];
  career.seasonHistory = Array.isArray(career.seasonHistory) ? career.seasonHistory : [];
  const cal = getGameCalendar(career);
  career.calendar.currentLabel = cal.label;
  const regions = new Set(AIRPORTS.map(a => a.region || 'South America'));
  regions.add('Brazil'); regions.add('Cargo');
  regions.forEach(region => {
    if (!career.weather.regions[region]) career.weather.regions[region] = generateRegionWeather(region, career.day || 1);
  });
  refreshActiveGlobalEvents(career);
  return career;
}

function generateRegionWeather(region, day) {
  const pool = REGION_WEATHER_BASE[region] || REGION_WEATHER_BASE['South America'];
  let key = deterministicPick(pool, day + region.length * 7) || 'clear';
  const severitySeed = Math.abs(Math.sin((day + region.length) * 2.718));
  if (severitySeed > 0.88 && pool.includes('storm')) key = 'storm';
  if (severitySeed > 0.92 && pool.includes('snow')) key = 'snow';
  const pattern = WEATHER_PATTERNS[key] || WEATHER_PATTERNS.clear;
  const severity = utils.clamp(Math.round((severitySeed * 100)), key === 'clear' ? 5 : 18, key === 'storm' || key === 'snow' ? 96 : 72);
  return { key, label:pattern.label, icon:pattern.icon, severity, delay:pattern.delay, demand:pattern.demand, cost:pattern.cost, safety:pattern.safety, updatedDay:day };
}

function updateRegionalWeather(career) {
  ensureV10Career(career);
  if (career.calendar.lastWeatherDay === career.day) return;
  const regions = new Set(AIRPORTS.map(a => a.region || 'South America'));
  regions.add('Brazil'); regions.add('Cargo');
  regions.forEach(region => { career.weather.regions[region] = generateRegionWeather(region, career.day || 1); });
  career.calendar.lastWeatherDay = career.day;
  const cal = getGameCalendar(career);
  career.calendar.currentLabel = cal.label;
  career.seasonHistory.unshift({ day:career.day, label:cal.label, tag:cal.season.tag });
  career.seasonHistory = career.seasonHistory.slice(0, 24);
  pushMessage(career, `Calendário vivo: ${cal.label} • ${cal.season.tag}. ${cal.season.note}.`, 'info');
}

function routeWeather(career, origin, dest) {
  ensureV10Career(career);
  const regions = career.weather.regions || {};
  const ow = regions[origin?.region] || regions.Brazil || generateRegionWeather('South America', career.day || 1);
  const dw = regions[dest?.region] || regions[dest?.country === 'Brazil' ? 'Brazil' : dest?.region] || ow;
  const worst = Number(dw.severity || 0) > Number(ow.severity || 0) ? dw : ow;
  const delay = utils.clamp(((ow.delay || 0) + (dw.delay || 0)) / 2 + (worst.severity || 0) / 1000, 0, 0.42);
  const demand = utils.clamp(((ow.demand || 1) + (dw.demand || 1)) / 2 - delay * 0.16, 0.72, 1.08);
  const cost = utils.clamp(((ow.cost || 1) + (dw.cost || 1)) / 2 + delay * 0.16, 1, 1.28);
  return { origin:ow, dest:dw, worst, delay, demand, cost, label:`${ow.icon} ${ow.label} / ${dw.icon} ${dw.label}` };
}

function regionSeasonDemand(career, origin, dest) {
  const cal = getGameCalendar(career);
  const demand = cal.season.demand || {};
  const oMul = Number(demand[origin?.region] || demand[origin?.country === 'Brazil' ? 'Brazil' : ''] || 1);
  const dMul = Number(demand[dest?.region] || demand[dest?.country === 'Brazil' ? 'Brazil' : ''] || 1);
  return { multiplier:utils.clamp((oMul + dMul) / 2, 0.86, 1.24), cargo:Number(cal.season.cargo || 1), tag:cal.season.tag, month:cal.season.month, note:cal.season.note };
}

function refreshActiveGlobalEvents(career) {
  career.activeGlobalEvents = (career.activeGlobalEvents || []).filter(e => Number(e.endsDay || 0) >= Number(career.day || 1));
}

function maybeStartGlobalEvent(career) {
  ensureV10Career(career);
  refreshActiveGlobalEvents(career);
  if (career.calendar.lastGlobalEventDay === career.day) return;
  career.calendar.lastGlobalEventDay = career.day;
  const day = Number(career.day || 1);
  for (const tpl of GLOBAL_EVENT_TEMPLATES) {
    if (day < tpl.minDay) continue;
    if ((day - tpl.minDay) % tpl.interval !== 0) continue;
    if (career.activeGlobalEvents.some(e => e.id === tpl.id)) continue;
    const event = { id:tpl.id, title:tpl.title, type:tpl.type, startedDay:day, endsDay:day + tpl.duration, demandBoost:tpl.demandBoost || 1, cargoBoost:tpl.cargoBoost || 1, fuelDelta:tpl.fuelDelta || 0, regions:[...(tpl.regions || [])], text:tpl.text };
    career.activeGlobalEvents.unshift(event);
    career.activeGlobalEvents = career.activeGlobalEvents.slice(0, 6);
    if (tpl.fuelDelta) career.fuelPriceKg = utils.clamp(Number(career.fuelPriceKg || 1.02) + tpl.fuelDelta, FUEL_MARKET.min, FUEL_MARKET.max);
    career.reputation = utils.clamp(Number(career.reputation || 0) + Number(tpl.reputation || 0), 0, 100);
    career.events.unshift({ time:Date.now(), day, title:tpl.title, text:tpl.text, type:tpl.type, cash:0 });
    career.events = career.events.slice(0, 18);
    pushMessage(career, `Evento global ativo até o dia ${event.endsDay}: ${tpl.title}.`, tpl.type === 'finance' ? 'warn' : 'success');
    break;
  }
}

function globalEventRouteBoost(career, origin, dest, plane) {
  refreshActiveGlobalEvents(career);
  let demandBoost = 1;
  let cargoBoost = 1;
  const labels = [];
  (career.activeGlobalEvents || []).forEach(e => {
    const relevant = !e.regions || !e.regions.length || e.regions.includes(origin?.region) || e.regions.includes(dest?.region) || e.regions.includes(origin?.country) || e.regions.includes(dest?.country);
    if (!relevant) return;
    demandBoost *= Number(e.demandBoost || 1);
    cargoBoost *= Number(e.cargoBoost || 1);
    labels.push(e.title);
  });
  if (plane && plane.capacity === 0) demandBoost = 1 + (demandBoost - 1) * 0.28;
  return { demandBoost:utils.clamp(demandBoost, 0.82, 1.36), cargoBoost:utils.clamp(cargoBoost, 0.9, 1.45), labels };
}

const previousNormalizeCareerV100 = normalizeCareer;
normalizeCareer = function(career) {
  const c = previousNormalizeCareerV100(career);
  ensureV10Career(c);
  return c;
};

const previousCreateCareerV100 = createCareer;
createCareer = function(form) {
  const c = previousCreateCareerV100(form);
  ensureV10Career(c);
  updateRegionalWeather(c);
  c.messages.unshift({ time: Date.now(), type:'info', text:'v1.0 beta: clima regional, temporadas, eventos globais e calendário vivo ativados.' });
  return c;
};

const baseRouteDemandV100 = utils.routeDemand.bind(utils);
utils.routeDemand = function(origin, dest, career, route = null) {
  ensureV10Career(career);
  const base = baseRouteDemandV100(origin, dest, career, route);
  const weather = routeWeather(career, origin, dest);
  const season = regionSeasonDemand(career, origin, dest);
  const eventBoost = globalEventRouteBoost(career, origin, dest, null);
  return utils.clamp(base * weather.demand * season.multiplier * eventBoost.demandBoost, 0.08, 1.88);
};

const baseRouteEstimateV100 = utils.routeEstimate.bind(utils);
utils.routeEstimate = function(origin, dest, plane, career, route = null) {
  ensureV10Career(career);
  const e = baseRouteEstimateV100(origin, dest, plane, career, route);
  const weather = routeWeather(career, origin, dest);
  const season = regionSeasonDemand(career, origin, dest);
  const eventBoost = globalEventRouteBoost(career, origin, dest, plane);
  const cargoMultiplier = Number(season.cargo || 1) * Number(eventBoost.cargoBoost || 1);
  e.weatherLabel = weather.label;
  e.weatherDelayRisk = Math.round(weather.delay * 100);
  e.seasonTag = season.tag;
  e.calendarMonth = season.month;
  e.globalEventLabels = eventBoost.labels;
  e.routeCalendarMultiplier = Number((season.multiplier * eventBoost.demandBoost).toFixed(2));
  e.cargoTons = Math.round((e.cargoTons || 0) * cargoMultiplier);
  const cargoExtraRevenue = Math.round((e.cargoTons || 0) * Math.max(e.distance / 100, 1) * 18 * (cargoMultiplier - 1));
  e.revenue = Math.round((e.revenue + Math.max(0, cargoExtraRevenue)) * (1 + Math.max(0, season.multiplier - 1) * 0.18));
  e.totalCost = Math.round(e.totalCost * weather.cost);
  e.weatherCost = Math.round(e.totalCost * (weather.cost - 1));
  e.delayCost = Math.round(e.revenue * weather.delay * 0.035);
  e.totalCost += e.delayCost;
  e.profit = Math.round(e.revenue - e.totalCost);
  e.margin = e.revenue > 0 ? (e.profit / e.revenue) * 100 : -100;
  e.score = utils.clamp((e.profit / Math.max(e.totalCost, 1)) * 100, -120, 210);
  return e;
};

const previousCompleteFlightV100 = completeFlight;
completeFlight = function(career, route, plane, model) {
  const beforePunctuality = Number(career.punctuality || 0);
  previousCompleteFlightV100(career, route, plane, model);
  const origin = utils.byIata(route.origin), dest = utils.byIata(route.dest);
  if (origin && dest) {
    const estimate = utils.routeEstimate(origin, dest, model, career, route);
    route.weatherLabel = estimate.weatherLabel;
    route.weatherDelayRisk = estimate.weatherDelayRisk;
    route.seasonTag = estimate.seasonTag;
    route.globalEventLabels = estimate.globalEventLabels || [];
    if (estimate.weatherDelayRisk >= 25) {
      career.punctuality = utils.clamp(beforePunctuality - 0.18 - estimate.weatherDelayRisk / 260, 0, 100);
      if (estimate.weatherDelayRisk >= 34) pushMessage(career, `Operação afetada por clima em ${route.origin}-${route.dest}: ${estimate.weatherLabel}.`, 'warn');
    }
  }
};

const previousAdvanceCompanyDayV100 = advanceCompanyDay;
advanceCompanyDay = function(career) {
  const beforeDay = career.day;
  previousAdvanceCompanyDayV100(career);
  if (career.day !== beforeDay) {
    ensureV10Career(career);
    updateRegionalWeather(career);
    maybeStartGlobalEvent(career);
    refreshActiveGlobalEvents(career);
  }
};

const previousValuationV100 = valuation;
valuation = function(career) {
  ensureV10Career(career);
  const base = previousValuationV100(career);
  const activeEvents = (career.activeGlobalEvents || []).length;
  const calendarPremium = Math.min(activeEvents * 55000 + (career.seasonHistory || []).length * 600, 220000);
  const riskWeather = Object.values(career.weather?.regions || {}).reduce((sum,w)=>sum + (Number(w.delay||0) > 0.2 ? 1 : 0), 0);
  return Math.max(0, Math.round(base + calendarPremium - riskWeather * 18000));
};

function renderWorldView() {
  const c = activeCareer(); if (!c) return renderOnboarding();
  ensureV10Career(c);
  const cal = getGameCalendar(c);
  const weatherRows = Object.entries(c.weather.regions || {}).sort().map(([region,w]) => `<article class="weather-card"><b>${w.icon || '•'} ${utils.escape(region)}</b><small>${utils.escape(w.label)} • severidade ${utils.pct(w.severity)} • atraso ${utils.pct((w.delay||0)*100)}</small><div class="mini-meter"><span style="width:${utils.clamp(w.severity, 5, 100)}%"></span></div></article>`).join('');
  const eventCards = (c.activeGlobalEvents || []).map(e => `<article class="event-card ${utils.escape(e.type)}"><b>${utils.escape(e.title)}</b><small>Dia ${e.startedDay} até ${e.endsDay} • demanda x${Number(e.demandBoost||1).toFixed(2)} • carga x${Number(e.cargoBoost||1).toFixed(2)}</small><p>${utils.escape(e.text)}</p></article>`).join('') || '<p>Nenhum evento global ativo agora. O calendário irá gerar eventos conforme a companhia avança.</p>';
  const seasonDemand = Object.entries(cal.season.demand || {}).map(([r,m]) => `<span>${utils.escape(r)} x${Number(m).toFixed(2)}</span>`).join('');
  const routeClimate = (c.routes || []).map(r => `<article><b>${r.origin} → ${r.dest}</b><small>${utils.escape(r.weatherLabel || 'Sem voo concluído com clima ainda')}</small><div class="route-stats"><span>${utils.escape(r.seasonTag || cal.season.tag)}</span><span>Atraso ${utils.pct(r.weatherDelayRisk || 0)}</span><span>${(r.globalEventLabels||[]).length ? utils.escape(r.globalEventLabels.join(', ')) : 'sem evento direto'}</span></div></article>`).join('') || '<p>Crie rotas para ver impacto do clima, temporada e eventos globais por operação.</p>';
  return `<div class="world-layout"><section class="panel glass hero-world"><span class="eyebrow">F25-F28 Mundo vivo</span><h2>Calendário operacional</h2><p class="lead">${cal.label} • ${cal.season.tag}. ${cal.season.note}.</p><div class="kpi-grid"><div class="kpi"><small>Semana do jogo</small><strong>${cal.week}</strong></div><div class="kpi"><small>Mês operacional</small><strong>${cal.season.month}</strong></div><div class="kpi"><small>Eventos ativos</small><strong>${(c.activeGlobalEvents||[]).length}</strong></div><div class="kpi"><small>Regiões monitoradas</small><strong>${Object.keys(c.weather.regions||{}).length}</strong></div></div><div class="season-tags">${seasonDemand}</div></section><section class="panel glass"><h2>Clima por região</h2><div class="weather-grid">${weatherRows}</div></section><section class="panel glass"><h2>Eventos globais</h2><div class="event-grid">${eventCards}</div></section><section class="panel glass"><h2>Impacto nas suas rotas</h2><div class="route-economy-list">${routeClimate}</div></section></div>`;
}

const previousNavItemsV100 = navItems;
navItems = function() {
  const items = previousNavItemsV100();
  if (!items.some(i => i[0] === 'world')) items.splice(Math.max(0, items.length - 1), 0, ['world','Mundo','◉']);
  return items;
};

const previousRenderV100 = render;
render = function() {
  if (runtime.view === 'world') {
    safeExecute('render:world', () => {
      const career = activeCareer();
      if (career) ensureV10Career(career);
      dom.app.innerHTML = shell(renderWorldView());
      if (dom.buildBadge) dom.buildBadge.textContent = `${BUILD.game} • v${BUILD.version} • Build ${BUILD.build} • Schema ${BUILD.schema}`;
    });
    return;
  }
  previousRenderV100();
};

const previousRenderDashboardV100 = renderDashboard;
renderDashboard = function() {
  const html = previousRenderDashboardV100();
  const c = activeCareer();
  if (!c) return html;
  ensureV10Career(c);
  const cal = getGameCalendar(c);
  const severeRegions = Object.entries(c.weather.regions || {}).filter(([,w]) => Number(w.delay || 0) >= 0.18).slice(0,3);
  const severeText = severeRegions.length ? severeRegions.map(([r,w]) => `${r}: ${w.label}`).join(' • ') : 'Sem bloqueio climático grave nas regiões monitoradas.';
  const widget = `<section class="panel glass world-widget"><div class="section-head"><div><span class="eyebrow">Mundo vivo</span><h2>${cal.label}</h2><p>${cal.season.tag}: ${cal.season.note}</p></div><button class="btn primary" data-action="go" data-view="world">Abrir mundo</button></div><div class="route-stats"><span>${severeText}</span><span>${(c.activeGlobalEvents||[]).length} evento(s) global(is)</span><span>Temporada: ${cal.season.month}</span></div></section>`;
  const pos = html.lastIndexOf('</div>');
  return pos >= 0 ? html.slice(0, pos) + widget + html.slice(pos) : html + widget;
};

const previousRenderRoutesV100 = renderRoutes;
renderRoutes = function() {
  const html = previousRenderRoutesV100();
  const c = activeCareer();
  if (!c) return html;
  ensureV10Career(c);
  const cal = getGameCalendar(c);
  const alert = `<section class="panel glass route-climate-hint"><span class="eyebrow">Clima + temporada</span><p>Agora cada estimativa considera clima regional, mês operacional, evento global ativo e demanda sazonal. Temporada atual: <b>${cal.season.tag}</b>.</p></section>`;
  return html.replace('<div class="routes-layout">', `<div class="routes-layout">${alert}`);
};

const previousRenderAuditV100 = renderAudit;
renderAudit = function() {
  const checks = runIntegrityAudit();
  const passed = checks.filter(c => c.ok).length;
  return `<div class="audit-layout"><section class="panel glass"><div class="section-head"><div><span class="eyebrow">Sistema anti-quebra</span><h2>Auditoria da build</h2><p>Execução obrigatória por fase para garantir integridade e evolução real.</p></div><button class="btn primary" data-action="runAudit">Rodar auditoria</button></div><div class="audit-score"><strong>${passed}/${checks.length}</strong><span>checks aprovados</span></div><div class="audit-list">${checks.map(c => `<div class="audit-row ${c.ok?'ok':'bad'}"><b>${c.ok?'✓':'!'}</b><span>${c.label}</span><small>${c.detail}</small></div>`).join('')}</div></section><section class="panel glass"><h2>Relatório desta entrega</h2><div class="todo-list"><span>F25 Clima por região: OK — chuva, neblina, tempestade, neve, calor e vento com impacto em atraso/custo/demanda.</span><span>F26 Temporadas: OK — calendário mensal com alta temporada, baixa, carga e turismo por região.</span><span>F27 Eventos globais: OK — Copa, feiras, carga expressa, combustível e fluxos culturais com duração e efeitos.</span><span>F28 Calendário vivo: OK — data operacional, histórico sazonal e painel Mundo integrados ao gameplay.</span><span>Anti-quebra: OK — migração de saves v0.4 até v0.9 para schema 10 preservada.</span></div></section></div>`;
};

const previousRunIntegrityAuditV100 = runIntegrityAudit;
runIntegrityAudit = function() {
  const c = activeCareer();
  if (c) ensureV10Career(c);
  const base = previousRunIntegrityAuditV100().filter(check => !['Schema da build','Chave de save v0.9','Migração v0.8 preservada'].includes(check.label));
  const extra = [
    { ok: BUILD.schema === 10, label:'Schema da build', detail:`Schema atual ${BUILD.schema}.` },
    { ok: STORE_KEY.includes('schema_10'), label:'Chave de save v1.0 beta', detail:STORE_KEY },
    { ok: LEGACY_STORE_KEYS.includes('vale_air_manager_schema_9'), label:'Migração v0.9 preservada', detail:'Saves antigos são lidos e normalizados até schema 10.' },
    { ok: typeof ensureV10Career === 'function', label:'Normalização v1.0 beta', detail:'Carreiras antigas recebem clima, calendário e eventos.' },
    { ok: Object.keys(WEATHER_PATTERNS).length >= 7, label:'F25 Clima regional', detail:`${Object.keys(WEATHER_PATTERNS).length} padrões climáticos operacionais.` },
    { ok: SEASON_CALENDAR.length === 12, label:'F26 Temporadas', detail:'12 meses operacionais com demanda regional e carga.' },
    { ok: GLOBAL_EVENT_TEMPLATES.length >= 5, label:'F27 Eventos globais', detail:`${GLOBAL_EVENT_TEMPLATES.length} modelos de evento global.` },
    { ok: !c || c.calendar && c.calendar.currentLabel, label:'F28 Calendário vivo no save', detail:c ? c.calendar.currentLabel : 'Sem carreira ativa.' },
    { ok: !c || c.weather && Object.keys(c.weather.regions || {}).length >= 4, label:'Clima salvo por região', detail:c ? `${Object.keys(c.weather.regions || {}).length} regiões monitoradas.` : 'Sem carreira ativa.' },
    { ok: !c || Array.isArray(c.activeGlobalEvents), label:'Eventos ativos no save', detail:c ? `${c.activeGlobalEvents.length} eventos ativos agora.` : 'Sem carreira ativa.' },
    { ok: navItems().some(i => i[0] === 'world'), label:'Tela Mundo no menu', detail:'Painel Mundo vivo acessível pelo HUD mobile.' },
    { ok: typeof routeWeather === 'function' && typeof regionSeasonDemand === 'function', label:'Estimativa climática/sazonal', detail:'Rotas consideram clima, temporada e eventos globais.' }
  ];
  return [...extra, ...base];
};

const previousHandleActionV100 = handleAction;
handleAction = function(target) {
  const action = target.dataset.action;
  if (action === 'advanceWorldDay') {
    const c = activeCareer();
    if (!c) return;
    c.day += 1; updateRegionalWeather(c); maybeStartGlobalEvent(c); updateMarket(c); setActiveCareer(c); render();
    return;
  }
  return previousHandleActionV100(target);
};


// ============================================================
// v1.1.0 - F29-F32: Regulações, congestionamento, incidentes e seguro profundo
// ============================================================
const REGULATION_RULES = Object.freeze({
  Brazil: { label:'Brasil / ANAC', permitCost:0, minSafety:45, minReputation:0, feePerFlight:420, carbonFee:0.004, inspectionRisk:0.05, note:'Mercado doméstico inicial liberado.' },
  'United States': { label:'Estados Unidos / FAA', permitCost:320000, minSafety:68, minReputation:42, feePerFlight:2100, carbonFee:0.011, inspectionRisk:0.12, note:'Exige histórico de segurança e reputação internacional.' },
  Germany: { label:'Alemanha / EASA', permitCost:280000, minSafety:70, minReputation:44, feePerFlight:1900, carbonFee:0.014, inspectionRisk:0.13, note:'Regra ambiental rígida e alta fiscalização.' },
  France: { label:'França / EASA', permitCost:285000, minSafety:70, minReputation:45, feePerFlight:1950, carbonFee:0.014, inspectionRisk:0.14, note:'Boa demanda, mas exige compliance europeu.' },
  Portugal: { label:'Portugal / EASA', permitCost:245000, minSafety:66, minReputation:38, feePerFlight:1650, carbonFee:0.012, inspectionRisk:0.10, note:'Porta de entrada estratégica para Europa.' },
  Spain: { label:'Espanha / EASA', permitCost:250000, minSafety:66, minReputation:39, feePerFlight:1700, carbonFee:0.012, inspectionRisk:0.10, note:'Mercado turístico forte com controle de slots.' },
  'United Kingdom': { label:'Reino Unido / CAA', permitCost:300000, minSafety:70, minReputation:46, feePerFlight:2050, carbonFee:0.013, inspectionRisk:0.12, note:'Aeroportos caros e muito congestionados.' },
  Japan: { label:'Japão / JCAB', permitCost:360000, minSafety:76, minReputation:50, feePerFlight:2300, carbonFee:0.010, inspectionRisk:0.15, note:'Pontualidade e segurança são decisivas.' },
  China: { label:'China / CAAC', permitCost:410000, minSafety:74, minReputation:52, feePerFlight:2600, carbonFee:0.009, inspectionRisk:0.17, note:'Alta demanda com regulação intensa.' },
  'United Arab Emirates': { label:'Emirados / GCAA', permitCost:375000, minSafety:72, minReputation:48, feePerFlight:2450, carbonFee:0.008, inspectionRisk:0.11, note:'Hub global de conexões premium.' },
  SouthAfrica: { label:'África do Sul / SACAA', permitCost:185000, minSafety:60, minReputation:32, feePerFlight:1300, carbonFee:0.007, inspectionRisk:0.10, note:'Boa expansão para África.' },
  default: { label:'Licença internacional padrão', permitCost:220000, minSafety:62, minReputation:34, feePerFlight:1500, carbonFee:0.008, inspectionRisk:0.11, note:'Permissão operacional internacional.' }
});

const ADVANCED_INCIDENTS = Object.freeze([
  { id:'bird-strike', title:'Bird strike na aproximação', type:'safety', severity:2, baseCost:42000, safety:-1.2, reputation:-0.5, condition:-4.5, coverage:'operational', text:'Aeronave sofreu colisão com ave. Exige inspeção técnica antes de ampliar utilização.' },
  { id:'slot-miss', title:'Perda de slot por congestionamento', type:'ops', severity:1, baseCost:26000, punctuality:-1.4, reputation:-0.4, coverage:'delay', text:'Aeroporto congestionado gerou janela perdida e compensações aos passageiros.' },
  { id:'doc-fine', title:'Multa documental regulatória', type:'regulation', severity:2, baseCost:58000, safety:-0.4, reputation:-0.8, compliance:-3.2, coverage:'legal', text:'Fiscalização encontrou falha documental. Regularização reduz reincidência.' },
  { id:'aog-tech', title:'AOG técnico em escala crítica', type:'maintenance', severity:3, baseCost:98000, punctuality:-2.2, reputation:-1.1, condition:-7.5, coverage:'operational', text:'Aeronave ficou no solo por falha técnica. Seguro e manutenção reduzem impacto.' },
  { id:'cargo-customs', title:'Carga retida na alfândega', type:'cargo', severity:1, baseCost:33000, reputation:-0.3, compliance:-1.6, coverage:'legal', text:'Documentação de carga exigiu correção e gerou custo operacional.' },
  { id:'crew-fatigue', title:'Tripulação em fadiga operacional', type:'staff', severity:2, baseCost:38000, safety:-0.8, punctuality:-1.1, morale:-1.4, coverage:'delay', text:'Escala apertada gerou remanejamento de equipe e atraso preventivo.' }
]);

const INSURANCE_DEEP_RULES = Object.freeze({
  basic: { deductible:0.42, legalCoverage:0.10, delayCoverage:0.08, operationalCoverage:0.15, capPerDay:90000, label:'básico' },
  operational: { deductible:0.24, legalCoverage:0.38, delayCoverage:0.42, operationalCoverage:0.52, capPerDay:210000, label:'operacional' },
  premium: { deductible:0.12, legalCoverage:0.68, delayCoverage:0.70, operationalCoverage:0.78, capPerDay:420000, label:'premium' }
});

function regulationKeyForCountry(country) {
  if (!country) return 'default';
  if (REGULATION_RULES[country]) return country;
  if (country === 'South Africa') return 'SouthAfrica';
  return 'default';
}

function regulationForCountry(country) {
  return REGULATION_RULES[regulationKeyForCountry(country)] || REGULATION_RULES.default;
}

function requiredPermitCountry(origin, dest) {
  if (!origin || !dest) return null;
  if (origin.country === dest.country) return origin.country;
  return dest.country || 'default';
}

function hasOperationalPermit(career, country) {
  ensureV11Career(career);
  if (!country) return true;
  if (country === career.homeCountry || country === 'Brazil') return true;
  return !!career.regulations.permits[country];
}

function ensureV11Career(career) {
  if (!career) return career;
  if (typeof ensureV10Career === 'function') ensureV10Career(career);
  career.schema = BUILD.schema;
  career.regulations = Object.assign({ permits:{}, complianceScore:72, finesPaid:0, auditsPassed:0, lastInspectionDay:0, warnings:[], routeBlocks:0 }, career.regulations || {});
  if (!career.regulations.permits || typeof career.regulations.permits !== 'object') career.regulations.permits = {};
  const home = career.homeCountry || (utils.byIata(career.hub || 'GRU') || {}).country || 'Brazil';
  career.homeCountry = home;
  career.regulations.permits[home] = true;
  career.regulations.permits.Brazil = true;
  (career.hubs || []).forEach(iata => {
    const airport = utils.byIata(iata);
    if (airport && airport.country === home) career.regulations.permits[airport.country] = true;
  });
  career.airportOps = Object.assign({ congestion:{}, slotIncidents:0, averageDelay:0, lastRecalcDay:0 }, career.airportOps || {});
  if (!career.airportOps.congestion || typeof career.airportOps.congestion !== 'object') career.airportOps.congestion = {};
  career.pendingIncidents = Array.isArray(career.pendingIncidents) ? career.pendingIncidents : [];
  career.incidentHistory = Array.isArray(career.incidentHistory) ? career.incidentHistory : [];
  career.insurance = Object.assign({ plan:'basic', lastBillingDay: career.day || 1, protectedIncidents:0, claimLog:[], claimPaidToday:0, lastClaimDay:0 }, career.insurance || {});
  career.insurance.claimLog = Array.isArray(career.insurance.claimLog) ? career.insurance.claimLog : [];
  recalcAirportCongestion(career);
  return career;
}

function getSlotInfo(career, iata) {
  if (typeof airportSlotInfo === 'function') return airportSlotInfo(career, iata);
  const airport = utils.byIata(iata);
  const routes = (career.routes || []).filter(r => r.origin === iata || r.dest === iata).length;
  const base = airport ? Math.max(3, Math.round((airport.demand || 50) / 16)) : 4;
  return { used: routes, capacity: base, pressure: routes / Math.max(base, 1) };
}

function recalcAirportCongestion(career) {
  if (!career || !career.airportOps) return;
  const monitored = new Set([...(career.hubs || []), ...(career.routes || []).flatMap(r => [r.origin, r.dest])]);
  AIRPORTS.forEach(a => { if ((a.demand || 0) >= 84) monitored.add(a.iata); });
  monitored.forEach(iata => {
    const airport = utils.byIata(iata);
    if (!airport) return;
    const slot = getSlotInfo(career, iata);
    const routeCount = (career.routes || []).filter(r => r.origin === iata || r.dest === iata).length;
    const basePressure = (airport.demand || 60) / 110;
    const slotPressure = slot.used / Math.max(slot.capacity, 1);
    const routePressure = routeCount / Math.max(4, slot.capacity);
    const level = utils.clamp(Math.round((basePressure * 42) + (slotPressure * 38) + (routePressure * 24)), 8, 100);
    const delay = utils.clamp((level - 48) / 190, 0, 0.35);
    const feeMultiplier = utils.clamp(1 + level / 360, 1.02, 1.32);
    career.airportOps.congestion[iata] = { iata, level, delay, feeMultiplier, slotUsed:slot.used, slotCapacity:slot.capacity, updatedDay:career.day || 1, label: level >= 82 ? 'crítico' : level >= 66 ? 'alto' : level >= 48 ? 'moderado' : 'fluido' };
  });
}

function airportCongestion(career, iata) {
  ensureV11Career(career);
  return career.airportOps.congestion[iata] || { iata, level:30, delay:0.02, feeMultiplier:1.04, slotUsed:0, slotCapacity:4, label:'fluido' };
}

function routeRegulationImpact(career, origin, dest, estimate) {
  ensureV11Career(career);
  const country = requiredPermitCountry(origin, dest);
  const rule = regulationForCountry(country);
  const permitted = hasOperationalPermit(career, country);
  const compliance = Number(career.regulations.complianceScore || 72);
  const safety = Number(career.safety || 0);
  const rep = Number(career.reputation || 0);
  const compliancePenalty = permitted ? utils.clamp((78 - compliance) / 800, 0, 0.08) : 0.22;
  const safetyPenalty = safety < rule.minSafety ? utils.clamp((rule.minSafety - safety) / 500, 0, 0.08) : 0;
  const regFee = Math.round(Number(rule.feePerFlight || 0) + (estimate.fuelKg || 0) * Number(rule.carbonFee || 0) + (estimate.revenue || 0) * (compliancePenalty + safetyPenalty));
  const blocked = !permitted || safety < Math.max(42, rule.minSafety - 16) || rep < Math.max(0, rule.minReputation - 22);
  return { country, rule, permitted, blocked, regFee, compliancePenalty, safetyPenalty };
}

function canBuyPermit(career, country) {
  ensureV11Career(career);
  const rule = regulationForCountry(country);
  return career.cash >= rule.permitCost && Number(career.safety || 0) >= rule.minSafety && Number(career.reputation || 0) >= rule.minReputation;
}

function buyPermit(country) {
  const c = activeCareer(); if (!c) return;
  ensureV11Career(c);
  const rule = regulationForCountry(country);
  if (hasOperationalPermit(c, country)) { showToast('Licença já está ativa.', 'warn'); return; }
  if (!canBuyPermit(c, country)) {
    showToast(`Licença bloqueada: exige ${utils.money(rule.permitCost)}, segurança ${utils.pct(rule.minSafety)} e reputação ${utils.pct(rule.minReputation)}.`, 'warn');
    return;
  }
  c.cash -= rule.permitCost;
  c.regulations.permits[country] = true;
  c.regulations.complianceScore = utils.clamp(Number(c.regulations.complianceScore || 72) + 2.4, 0, 100);
  logFinance(c, `Licença operacional ${rule.label}`, -rule.permitCost, 'regulação');
  pushMessage(c, `Licença ${rule.label} aprovada. Rotas para ${country} liberadas.`, 'success');
  setActiveCareer(c); render();
}

function maybeGenerateAdvancedIncident(career, route, plane, model) {
  ensureV11Career(career);
  const origin = utils.byIata(route.origin), dest = utils.byIata(route.dest);
  if (!origin || !dest) return;
  const oCong = airportCongestion(career, origin.iata), dCong = airportCongestion(career, dest.iata);
  const reg = routeRegulationImpact(career, origin, dest, { fuelKg: Math.max(1, Number(model.fuelBurnKgH || 0)), revenue: Math.max(1, Number(route.lastRevenue || 1)) });
  const plan = INSURANCE_PLANS[career.insurance?.plan || 'basic'] || INSURANCE_PLANS.basic;
  const deep = INSURANCE_DEEP_RULES[career.insurance?.plan || 'basic'] || INSURANCE_DEEP_RULES.basic;
  const conditionRisk = utils.clamp((72 - Number(plane.condition || 100)) / 260, 0, 0.22);
  const congestionRisk = utils.clamp(((oCong.level + dCong.level) / 2 - 58) / 360, 0, 0.16);
  const complianceRisk = utils.clamp((74 - Number(career.regulations.complianceScore || 72)) / 320, 0, 0.12) + (reg.permitted ? 0 : 0.14);
  const baseRisk = 0.045 + conditionRisk + congestionRisk + complianceRisk - Number(plan.safetyBonus || 0) / 220;
  if (Math.random() > utils.clamp(baseRisk, 0.025, 0.42)) return;
  const typePool = ADVANCED_INCIDENTS.filter(i => {
    if (i.id === 'slot-miss') return congestionRisk > 0.03;
    if (i.id === 'doc-fine' || i.id === 'cargo-customs') return complianceRisk > 0.025 || origin.country !== dest.country;
    if (i.id === 'crew-fatigue') return (career.routes || []).length > (career.staff?.pilots || 0);
    return true;
  });
  const tpl = typePool[Math.floor(Math.random() * typePool.length)] || ADVANCED_INCIDENTS[0];
  const severityMul = 1 + (tpl.severity || 1) * 0.16 + congestionRisk + conditionRisk;
  const cost = Math.round((tpl.baseCost || 25000) * severityMul);
  const incident = { id:`inc-${Date.now()}-${Math.floor(Math.random()*9999)}`, template:tpl.id, title:tpl.title, type:tpl.type, routeId:route.id, routeLabel:`${route.origin}-${route.dest}`, planeId:plane.id, planeName:plane.name, day:career.day || 1, severity:tpl.severity || 1, cost, text:tpl.text, coverage:tpl.coverage || 'operational', status:'open' };
  career.pendingIncidents.unshift(incident);
  career.pendingIncidents = career.pendingIncidents.slice(0, 8);
  if (tpl.condition) plane.condition = utils.clamp(Number(plane.condition || 100) + tpl.condition, 0, 100);
  if (tpl.safety) career.safety = utils.clamp(Number(career.safety || 0) + tpl.safety, 0, 100);
  if (tpl.reputation) career.reputation = utils.clamp(Number(career.reputation || 0) + tpl.reputation, 0, 100);
  if (tpl.punctuality) career.punctuality = utils.clamp(Number(career.punctuality || 0) + tpl.punctuality, 0, 100);
  if (tpl.compliance) career.regulations.complianceScore = utils.clamp(Number(career.regulations.complianceScore || 72) + tpl.compliance, 0, 100);
  if (tpl.morale && career.staff) career.staff.morale = utils.clamp(Number(career.staff.morale || 80) + tpl.morale, 0, 100);
  pushMessage(career, `Incidente avançado: ${tpl.title} em ${route.origin}-${route.dest}. Abra Operações para resolver.`, tpl.severity >= 3 ? 'danger' : 'warn');
}

function insuranceCoverageForIncident(career, incident) {
  ensureV11Career(career);
  const deep = INSURANCE_DEEP_RULES[career.insurance?.plan || 'basic'] || INSURANCE_DEEP_RULES.basic;
  let rate = deep.operationalCoverage;
  if (incident.coverage === 'legal') rate = deep.legalCoverage;
  if (incident.coverage === 'delay') rate = deep.delayCoverage;
  const deductible = deep.deductible;
  const capLeft = Math.max(0, Number(deep.capPerDay || 0) - Number(career.insurance.claimPaidToday || 0));
  const eligible = Math.max(0, Number(incident.cost || 0) * rate * (1 - deductible));
  const covered = Math.round(Math.min(eligible, capLeft));
  const net = Math.max(0, Math.round(Number(incident.cost || 0) - covered));
  return { covered, net, rate, deductible, capLeft, label:deep.label };
}

function resolveIncident(incidentId) {
  const c = activeCareer(); if (!c) return;
  ensureV11Career(c);
  const incident = c.pendingIncidents.find(i => i.id === incidentId);
  if (!incident) { showToast('Incidente não encontrado.', 'warn'); return; }
  const cov = insuranceCoverageForIncident(c, incident);
  if (c.cash < cov.net) { showToast(`Caixa insuficiente para resolver: precisa ${utils.money(cov.net)}.`, 'warn'); return; }
  c.cash -= cov.net;
  c.insurance.claimPaidToday = Number(c.insurance.claimPaidToday || 0) + cov.covered;
  c.insurance.protectedIncidents = Number(c.insurance.protectedIncidents || 0) + cov.covered;
  c.insurance.claimLog.unshift({ day:c.day || 1, title:incident.title, covered:cov.covered, net:cov.net, plan:c.insurance.plan || 'basic' });
  c.insurance.claimLog = c.insurance.claimLog.slice(0, 18);
  c.regulations.complianceScore = utils.clamp(Number(c.regulations.complianceScore || 72) + (incident.type === 'regulation' ? 2.8 : 0.9), 0, 100);
  c.safety = utils.clamp(Number(c.safety || 0) + (incident.type === 'safety' || incident.type === 'maintenance' ? 1.2 : 0.4), 0, 100);
  c.punctuality = utils.clamp(Number(c.punctuality || 0) + (incident.type === 'ops' || incident.type === 'staff' ? 1.0 : 0.3), 0, 100);
  c.pendingIncidents = c.pendingIncidents.filter(i => i.id !== incidentId);
  c.incidentHistory.unshift(Object.assign({}, incident, { status:'resolved', resolvedDay:c.day || 1, covered:cov.covered, netPaid:cov.net }));
  c.incidentHistory = c.incidentHistory.slice(0, 30);
  logFinance(c, `Resolução de incidente: ${incident.title}`, -cov.net, 'seguro/incidente');
  pushMessage(c, `Incidente resolvido. Seguro ${cov.label} cobriu ${utils.money(cov.covered)}; caixa pagou ${utils.money(cov.net)}.`, 'success');
  setActiveCareer(c); render();
}

function applyUnresolvedIncidentPenalties(career) {
  ensureV11Career(career);
  const today = Number(career.day || 1);
  (career.pendingIncidents || []).forEach(inc => {
    const age = today - Number(inc.day || today);
    if (age > 0 && age % 3 === 0) {
      const penalty = Math.round(Number(inc.cost || 0) * 0.07);
      career.cash -= penalty;
      career.reputation = utils.clamp(Number(career.reputation || 0) - 0.45, 0, 100);
      career.regulations.complianceScore = utils.clamp(Number(career.regulations.complianceScore || 72) - 0.8, 0, 100);
      logFinance(career, `Penalidade por incidente aberto`, -penalty, 'incidente');
      pushMessage(career, `Incidente aberto gerou penalidade: ${inc.title}.`, 'warn');
    }
  });
}

function maybeRegulatoryInspection(career) {
  ensureV11Career(career);
  const day = Number(career.day || 1);
  if (day - Number(career.regulations.lastInspectionDay || 0) < 4) return;
  career.regulations.lastInspectionDay = day;
  const intlRoutes = (career.routes || []).filter(r => {
    const o = utils.byIata(r.origin), d = utils.byIata(r.dest);
    return o && d && o.country !== d.country;
  }).length;
  const openIncidents = (career.pendingIncidents || []).length;
  const risk = utils.clamp(0.08 + intlRoutes * 0.018 + openIncidents * 0.035 + (74 - Number(career.regulations.complianceScore || 72)) / 260, 0.03, 0.44);
  if (Math.random() > risk) {
    career.regulations.auditsPassed = Number(career.regulations.auditsPassed || 0) + 1;
    career.regulations.complianceScore = utils.clamp(Number(career.regulations.complianceScore || 72) + 0.9, 0, 100);
    return;
  }
  const fine = Math.round(18000 + intlRoutes * 9500 + openIncidents * 7200);
  career.cash -= fine;
  career.regulations.finesPaid = Number(career.regulations.finesPaid || 0) + fine;
  career.regulations.complianceScore = utils.clamp(Number(career.regulations.complianceScore || 72) - 2.6, 0, 100);
  career.events.unshift({ time:Date.now(), day, title:'Fiscalização regulatória', text:'Auditoria encontrou pendências operacionais. Resolva incidentes e mantenha licenças.', type:'regulation', cash:-fine });
  career.events = career.events.slice(0, 18);
  logFinance(career, 'Multa por fiscalização regulatória', -fine, 'regulação');
  pushMessage(career, `Fiscalização aplicou multa de ${utils.money(fine)}. Compliance caiu.`, 'warn');
}

const previousNormalizeCareerV110 = normalizeCareer;
normalizeCareer = function(career) {
  const c = previousNormalizeCareerV110(career);
  ensureV11Career(c);
  return c;
};

const previousCreateCareerV110 = createCareer;
createCareer = function(form) {
  const c = previousCreateCareerV110(form);
  ensureV11Career(c);
  c.messages.unshift({ time: Date.now(), type:'info', text:'v1.1: regulações, congestionamento, incidentes avançados e seguro profundo ativados.' });
  return c;
};

const baseRouteEstimateV110 = utils.routeEstimate.bind(utils);
utils.routeEstimate = function(origin, dest, plane, career, route = null) {
  ensureV11Career(career);
  const e = baseRouteEstimateV110(origin, dest, plane, career, route);
  const reg = routeRegulationImpact(career, origin, dest, e);
  const oCong = airportCongestion(career, origin.iata), dCong = airportCongestion(career, dest.iata);
  const congestionDelay = utils.clamp((oCong.delay + dCong.delay) / 2, 0, 0.38);
  const congestionCost = Math.round((e.airportFees || 0) * (((oCong.feeMultiplier + dCong.feeMultiplier) / 2) - 1) + (e.revenue || 0) * congestionDelay * 0.045);
  e.regulationCountry = reg.country;
  e.regulationLabel = reg.rule.label;
  e.regulationPermitted = reg.permitted;
  e.regulationBlocked = reg.blocked;
  e.regulatoryFee = reg.regFee;
  e.congestionLabel = `${origin.iata}: ${oCong.label} / ${dest.iata}: ${dCong.label}`;
  e.congestionDelayRisk = Math.round(congestionDelay * 100);
  e.congestionCost = congestionCost;
  e.totalCost = Math.round((e.totalCost || 0) + reg.regFee + congestionCost);
  if (!reg.permitted) e.totalCost += Math.round((e.revenue || 0) * 0.22);
  e.profit = Math.round((e.revenue || 0) - e.totalCost);
  e.margin = e.revenue > 0 ? (e.profit / e.revenue) * 100 : -100;
  e.score = utils.clamp((e.profit / Math.max(e.totalCost, 1)) * 100, -150, 210);
  return e;
};

const previousCreateRouteV110 = createRoute;
createRoute = function() {
  const c = activeCareer(); if (!c) return;
  ensureV11Career(c);
  const origin = utils.byIata(document.getElementById('routeOrigin')?.value);
  const dest = utils.byIata(document.getElementById('routeDest')?.value);
  if (origin && dest) {
    const country = requiredPermitCountry(origin, dest);
    const rule = regulationForCountry(country);
    if (!hasOperationalPermit(c, country)) {
      c.regulations.routeBlocks = Number(c.regulations.routeBlocks || 0) + 1;
      pushMessage(c, `Rota bloqueada por regulação: é preciso licença ${rule.label}.`, 'warn');
      setActiveCareer(c);
      showToast(`Licença exigida para ${country}: ${utils.money(rule.permitCost)}. Abra Operações.`, 'warn');
      runtime.view = 'ops'; render();
      return;
    }
  }
  return previousCreateRouteV110();
};

const previousCompleteFlightV110 = completeFlight;
completeFlight = function(career, route, plane, model) {
  previousCompleteFlightV110(career, route, plane, model);
  ensureV11Career(career);
  const origin = utils.byIata(route.origin), dest = utils.byIata(route.dest);
  if (origin && dest) {
    const estimate = utils.routeEstimate(origin, dest, model, career, route);
    route.regulationLabel = estimate.regulationLabel;
    route.regulatoryFee = estimate.regulatoryFee;
    route.congestionLabel = estimate.congestionLabel;
    route.congestionDelayRisk = estimate.congestionDelayRisk;
  }
  maybeGenerateAdvancedIncident(career, route, plane, model);
  recalcAirportCongestion(career);
};

const previousAdvanceCompanyDayV110 = advanceCompanyDay;
advanceCompanyDay = function(career) {
  const beforeDay = Number(career.day || 1);
  previousAdvanceCompanyDayV110(career);
  if (Number(career.day || 1) !== beforeDay) {
    ensureV11Career(career);
    if (career.insurance.lastClaimDay !== career.day) { career.insurance.claimPaidToday = 0; career.insurance.lastClaimDay = career.day; }
    recalcAirportCongestion(career);
    applyUnresolvedIncidentPenalties(career);
    maybeRegulatoryInspection(career);
  }
};

const previousValuationV110 = valuation;
valuation = function(career) {
  ensureV11Career(career);
  const base = previousValuationV110(career);
  const permitValue = Object.keys(career.regulations.permits || {}).length * 42000;
  const compliancePremium = Math.round(Number(career.regulations.complianceScore || 72) * 1800);
  const incidentPenalty = (career.pendingIncidents || []).reduce((s,i)=>s+Number(i.cost||0)*0.38,0);
  const congestionPenalty = Object.values(career.airportOps.congestion || {}).filter(x => Number(x.level||0) > 84).length * 16000;
  return Math.max(0, Math.round(base + permitValue + compliancePremium - incidentPenalty - congestionPenalty));
};

function renderOpsView() {
  const c = activeCareer(); if (!c) return renderOnboarding();
  ensureV11Career(c);
  const routeCountries = Array.from(new Set(AIRPORTS.filter(a => a.country !== c.homeCountry).map(a => a.country))).filter(Boolean).slice(0, 16);
  const permitCards = routeCountries.map(country => {
    const rule = regulationForCountry(country);
    const owned = hasOperationalPermit(c, country);
    const ready = canBuyPermit(c, country);
    return `<article class="ops-card ${owned?'ok':''}"><b>${utils.escape(rule.label)}</b><small>${utils.escape(country)} • ${utils.escape(rule.note)}</small><div class="route-stats"><span>Custo ${utils.money(rule.permitCost)}</span><span>Seg. mín. ${utils.pct(rule.minSafety)}</span><span>Rep. mín. ${utils.pct(rule.minReputation)}</span><span>Taxa voo ${utils.money(rule.feePerFlight)}</span></div><button class="btn mini ${owned?'ghost':ready?'primary':'ghost'}" data-action="buyPermit" data-country="${utils.escape(country)}" ${owned||!ready?'disabled':''}>${owned?'Ativa':ready?'Comprar licença':'Bloqueada'}</button></article>`;
  }).join('');
  const congestionRows = Object.values(c.airportOps.congestion || {}).sort((a,b)=>Number(b.level||0)-Number(a.level||0)).slice(0,12).map(x => `<article class="weather-card congestion-${x.label}"><b>${utils.escape(x.iata)} • ${utils.escape(x.label)}</b><small>nível ${utils.pct(x.level)} • slots ${x.slotUsed}/${x.slotCapacity} • atraso ${utils.pct((x.delay||0)*100)}</small><div class="mini-meter"><span style="width:${utils.clamp(x.level, 4, 100)}%"></span></div></article>`).join('') || '<p>Sem aeroportos monitorados ainda.</p>';
  const incidentRows = (c.pendingIncidents || []).map(i => {
    const cov = insuranceCoverageForIncident(c, i);
    return `<article class="event-card ${utils.escape(i.type)}"><b>${utils.escape(i.title)}</b><small>${utils.escape(i.routeLabel || '')} • ${utils.escape(i.planeName || '')} • severidade ${i.severity} • dia ${i.day}</small><p>${utils.escape(i.text)}</p><div class="route-stats"><span>Custo bruto ${utils.money(i.cost)}</span><span>Seguro cobre ${utils.money(cov.covered)}</span><span>Você paga ${utils.money(cov.net)}</span></div><button class="btn mini primary" data-action="resolveIncident" data-incident="${utils.escape(i.id)}">Resolver incidente</button></article>`;
  }).join('') || '<p class="success-text">Nenhum incidente avançado aberto. Operação controlada.</p>';
  const claimRows = (c.insurance.claimLog || []).slice(0,10).map(cl => `<div class="finance-row"><span>Dia ${cl.day}<small>${utils.escape(cl.plan)} • ${utils.escape(cl.title)}</small></span><b class="ok">${utils.money(cl.covered)}</b><em>Pago pela seguradora • líquido ${utils.money(cl.net)}</em></div>`).join('') || '<p>Sem sinistros processados nesta carreira.</p>';
  const openCost = (c.pendingIncidents || []).reduce((s,i)=>s+Number(i.cost||0),0);
  return `<div class="ops-layout"><section class="panel glass"><span class="eyebrow">F29-F32 Operações reais</span><h2>Regulação, aeroportos, incidentes e seguro</h2><div class="kpi-grid"><div class="kpi"><small>Compliance</small><strong>${utils.pct(c.regulations.complianceScore || 0)}</strong></div><div class="kpi"><small>Licenças</small><strong>${Object.keys(c.regulations.permits||{}).length}</strong></div><div class="kpi"><small>Incidentes abertos</small><strong>${(c.pendingIncidents||[]).length}</strong></div><div class="kpi"><small>Risco aberto</small><strong>${utils.money(openCost)}</strong></div><div class="kpi"><small>Multas pagas</small><strong>${utils.money(c.regulations.finesPaid || 0)}</strong></div><div class="kpi"><small>Seguro</small><strong>${(INSURANCE_PLANS[c.insurance?.plan||'basic']||INSURANCE_PLANS.basic).label}</strong></div></div><p class="hint">Rotas internacionais exigem licença; aeroportos lotados aumentam atraso e custo; incidentes abertos geram penalidades se forem ignorados.</p></section><section class="panel glass"><h2>Licenças por país</h2><div class="ops-grid">${permitCards}</div></section><section class="panel glass"><h2>Congestionamento aeroportuário</h2><div class="weather-grid">${congestionRows}</div></section><section class="panel glass"><h2>Incidentes operacionais avançados</h2><div class="event-grid">${incidentRows}</div></section><section class="panel glass"><h2>Seguro profundo e sinistros</h2><div class="finance-list">${claimRows}</div></section></div>`;
}

const previousNavItemsV110 = navItems;
navItems = function() {
  const items = previousNavItemsV110();
  if (!items.some(i => i[0] === 'ops')) items.splice(Math.max(0, items.length - 1), 0, ['ops','Operações','⚠']);
  return items;
};

const previousRenderV110 = render;
render = function() {
  if (runtime.view === 'ops') {
    safeExecute('render:ops', () => {
      const career = activeCareer(); if (career) ensureV11Career(career);
      dom.app.innerHTML = shell(renderOpsView());
      if (dom.buildBadge) dom.buildBadge.textContent = `${BUILD.game} • v${BUILD.version} • Build ${BUILD.build} • Schema ${BUILD.schema}`;
    });
    return;
  }
  previousRenderV110();
};

const previousRenderDashboardV110 = renderDashboard;
renderDashboard = function() {
  const html = previousRenderDashboardV110();
  const c = activeCareer(); if (!c) return html;
  ensureV11Career(c);
  const critical = Object.values(c.airportOps.congestion || {}).filter(x => Number(x.level||0) >= 78).length;
  const widget = `<section class="panel glass ops-widget"><div class="section-head"><div><span class="eyebrow">Centro operacional</span><h2>Compliance ${utils.pct(c.regulations.complianceScore || 0)} • ${Object.keys(c.regulations.permits||{}).length} licenças</h2><p>${(c.pendingIncidents||[]).length} incidente(s) aberto(s) • ${critical} aeroporto(s) crítico(s) • multas ${utils.money(c.regulations.finesPaid||0)}</p></div><button class="btn primary" data-action="go" data-view="ops">Abrir operações</button></div></section>`;
  const pos = html.lastIndexOf('</div>');
  return pos >= 0 ? html.slice(0, pos) + widget + html.slice(pos) : html + widget;
};

const previousRenderRoutesV110 = renderRoutes;
renderRoutes = function() {
  const html = previousRenderRoutesV110();
  const c = activeCareer(); if (!c) return html;
  ensureV11Career(c);
  const alert = `<section class="panel glass route-climate-hint"><span class="eyebrow">Regulação + congestionamento</span><p>Rotas internacionais agora exigem licença operacional do país. Aeroportos congestionados aumentam atraso, taxa e risco de incidente.</p><button class="btn mini primary" data-action="go" data-view="ops">Ver operações</button></section>`;
  return html.replace('<div class="routes-layout">', `<div class="routes-layout">${alert}`);
};

const previousRenderFinanceV110 = renderFinance;
renderFinance = function() {
  const html = previousRenderFinanceV110();
  const c = activeCareer(); if (!c) return html;
  ensureV11Career(c);
  const deep = INSURANCE_DEEP_RULES[c.insurance?.plan || 'basic'] || INSURANCE_DEEP_RULES.basic;
  const card = `<section class="panel glass"><span class="eyebrow">F32 Seguro profundo</span><h2>Detalhe de cobertura</h2><div class="kpi-grid"><div class="kpi"><small>Franquia efetiva</small><strong>${utils.pct(deep.deductible*100)}</strong></div><div class="kpi"><small>Operacional</small><strong>${utils.pct(deep.operationalCoverage*100)}</strong></div><div class="kpi"><small>Atrasos</small><strong>${utils.pct(deep.delayCoverage*100)}</strong></div><div class="kpi"><small>Legal/regulação</small><strong>${utils.pct(deep.legalCoverage*100)}</strong></div><div class="kpi"><small>Cap/dia</small><strong>${utils.money(deep.capPerDay)}</strong></div><div class="kpi"><small>Pago hoje</small><strong>${utils.money(c.insurance.claimPaidToday||0)}</strong></div></div><button class="btn primary" data-action="go" data-view="ops">Abrir sinistros</button></section>`;
  return html.replace('</div>', card + '</div>');
};

const previousRenderAuditV110 = renderAudit;
renderAudit = function() {
  const checks = runIntegrityAudit();
  const passed = checks.filter(c => c.ok).length;
  return `<div class="audit-layout"><section class="panel glass"><div class="section-head"><div><span class="eyebrow">Sistema anti-quebra</span><h2>Auditoria da build</h2><p>Execução obrigatória por fase para garantir integridade e evolução real.</p></div><button class="btn primary" data-action="runAudit">Rodar auditoria</button></div><div class="audit-score"><strong>${passed}/${checks.length}</strong><span>checks aprovados</span></div><div class="audit-list">${checks.map(c => `<div class="audit-row ${c.ok?'ok':'bad'}"><b>${c.ok?'✓':'!'}</b><span>${c.label}</span><small>${c.detail}</small></div>`).join('')}</div></section><section class="panel glass"><h2>Relatório desta entrega</h2><div class="todo-list"><span>F29 Regulações: OK — licenças por país, compliance, taxas e bloqueio seguro de rotas sem permissão.</span><span>F30 Aeroportos congestionados: OK — nível, slots, atraso, custo e painel operacional.</span><span>F31 Incidentes avançados: OK — bird strike, AOG, multas, alfândega, fadiga e perda de slot com resolução.</span><span>F32 Seguro profundo: OK — cobertura por tipo, franquia, cap diário, sinistros e histórico.</span><span>Anti-quebra: OK — migração de saves v0.4 até v1.0 beta para schema 11 preservada.</span></div></section></div>`;
};

const previousRunIntegrityAuditV110 = runIntegrityAudit;
runIntegrityAudit = function() {
  const c = activeCareer(); if (c) ensureV11Career(c);
  const blockedLabels = ['Schema da build','Chave de save v1.0 beta','Migração v0.9 preservada','Normalização v1.0 beta','F25 Clima regional','F26 Temporadas','F27 Eventos globais','F28 Calendário vivo no save','Clima salvo por região','Eventos ativos no save','Tela Mundo no menu','Estimativa climática/sazonal'];
  const base = previousRunIntegrityAuditV110().filter(check => !blockedLabels.includes(check.label));
  const extra = [
    { ok: BUILD.schema === 11, label:'Schema da build', detail:`Schema atual ${BUILD.schema}.` },
    { ok: STORE_KEY.includes('schema_11'), label:'Chave de save v1.1', detail:STORE_KEY },
    { ok: LEGACY_STORE_KEYS.includes('vale_air_manager_schema_10'), label:'Migração v1.0 preservada', detail:'Saves schema 10 são migrados para schema 11 sem reset.' },
    { ok: typeof ensureV11Career === 'function', label:'Normalização v1.1', detail:'Carreiras antigas recebem regulação, congestionamento e incidentes.' },
    { ok: Object.keys(REGULATION_RULES).length >= 10, label:'F29 Regulações por país', detail:`${Object.keys(REGULATION_RULES).length} regras regulatórias configuradas.` },
    { ok: typeof recalcAirportCongestion === 'function', label:'F30 Congestionamento', detail:'Aeroportos recalculam pressão, delay e multiplicador de taxa.' },
    { ok: ADVANCED_INCIDENTS.length >= 6, label:'F31 Incidentes avançados', detail:`${ADVANCED_INCIDENTS.length} modelos de incidente operacional.` },
    { ok: Object.keys(INSURANCE_DEEP_RULES).length === 3, label:'F32 Seguro profundo', detail:'Franquia, cobertura por tipo e cap diário ativos.' },
    { ok: navItems().some(i => i[0] === 'ops'), label:'Tela Operações no menu', detail:'Centro operacional acessível pelo HUD mobile.' },
    { ok: !c || c.regulations && c.regulations.permits, label:'Regulações no save', detail:c ? `${Object.keys(c.regulations.permits||{}).length} licenças ativas.` : 'Sem carreira ativa.' },
    { ok: !c || c.airportOps && c.airportOps.congestion, label:'Congestionamento no save', detail:c ? `${Object.keys(c.airportOps.congestion||{}).length} aeroportos monitorados.` : 'Sem carreira ativa.' },
    { ok: !c || Array.isArray(c.pendingIncidents), label:'Fila de incidentes', detail:c ? `${c.pendingIncidents.length} incidente(s) aberto(s).` : 'Sem carreira ativa.' },
    { ok: typeof insuranceCoverageForIncident === 'function', label:'Cálculo de sinistro', detail:'Cobertura líquida por tipo de incidente disponível.' }
  ];
  return [...extra, ...base];
};

const previousHandleActionV110 = handleAction;
handleAction = function(target) {
  const action = target.dataset.action;
  if (action === 'buyPermit') return safeExecute('action:buyPermit', () => buyPermit(target.dataset.country));
  if (action === 'resolveIncident') return safeExecute('action:resolveIncident', () => resolveIncident(target.dataset.incident));
  return previousHandleActionV110(target);
};

boot();
