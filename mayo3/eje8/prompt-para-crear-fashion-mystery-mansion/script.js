const rooms = [
  {
    id: "chanel",
    icon: "◆",
    name: "Chanel Room",
    theme: "chanel-theme",
    kicker: "Noir elegance",
    description: "Paredes negras brillantes, espejos antiguos, perfume monumental y cajones que esconden joyas bajo una melodía de piano.",
    unlockedBy: null,
    objects: [
      { id: "pearl-key", icon: "◇", title: "Cajón lacado", reward: "Llave de perlas", kind: "key", message: "Una llave diminuta aparece entre guantes de seda." },
      { id: "noir-dress", icon: "♕", title: "Vestido oculto", reward: "Vestido Noir", kind: "outfit", message: "El espejo gira y revela un vestido negro clásico." },
      { id: "perfume-code", icon: "✦", title: "Perfume gigante", reward: "Código 1909", kind: "secret", message: "El frasco susurra el código 1909 sobre el cristal." },
      { id: "piano-memory", icon: "♪", title: "Piano de salón", game: "memory", message: "Las notas abren un memory de piezas couture." }
    ]
  },
  {
    id: "versace",
    icon: "⚜",
    name: "Versace Golden Hall",
    theme: "versace-theme",
    kicker: "Golden palace",
    description: "Columnas bañadas en oro, esculturas, reflejos barrocos y símbolos escondidos que brillan cuando la luz se mueve.",
    unlockedBy: "pearl-key",
    objects: [
      { id: "medusa-one", icon: "☼", title: "Columna solar", reward: "Medusa I", kind: "symbol", message: "El primer símbolo de Medusa arde bajo el oro." },
      { id: "medusa-two", icon: "◎", title: "Escultura dorada", reward: "Medusa II", kind: "symbol", message: "Un segundo símbolo vibra dentro de la escultura." },
      { id: "gold-cape", icon: "♜", title: "Capa imperial", reward: "Capa dorada", kind: "outfit", message: "Una capa brillante cae desde una vitrina secreta." },
      { id: "medusa-game", icon: "⌖", title: "Buscar Medusas", game: "hiddenSymbols", message: "La sala exige encontrar todos los símbolos ocultos." }
    ]
  },
  {
    id: "balmain",
    icon: "▣",
    name: "Balmain Future Lab",
    theme: "balmain-theme",
    kicker: "Cyber fashion",
    description: "Neón, hologramas, pantallas digitales y prendas metálicas custodiadas por códigos futuristas.",
    unlockedBy: "Código 1909",
    objects: [
      { id: "holo-jacket", icon: "◬", title: "Holograma táctil", reward: "Chaqueta holográfica", kind: "outfit", message: "La prenda se materializa con luz azul." },
      { id: "laser-code", icon: "#", title: "Panel de láser", reward: "Código 808", kind: "secret", message: "El laboratorio revela el código digital 808." },
      { id: "chrome-boots", icon: "▰", title: "Botas cromadas", reward: "Botas cromadas", kind: "outfit", message: "Las botas se desbloquean con un pulso eléctrico." },
      { id: "code-game", icon: "⌁", title: "Código digital", game: "code", message: "Ordena la clave para liberar el archivo couture." }
    ]
  },
  {
    id: "vuitton",
    icon: "▤",
    name: "Louis Vuitton Travel Room",
    theme: "vuitton-theme",
    kicker: "Luxury travel",
    description: "Maletas clásicas, mapas antiguos, relojes, humo suave y una ventana con lluvia sobre un tren privado.",
    unlockedBy: null,
    objects: [
      { id: "passport-a", icon: "▥", title: "Maleta vintage", reward: "Pasaporte ámbar", kind: "key", message: "Encuentras un pasaporte entre mapas doblados." },
      { id: "travel-coat", icon: "♢", title: "Perchero de viaje", reward: "Abrigo de aeropuerto", kind: "outfit", message: "Un abrigo perfecto para una fuga elegante." },
      { id: "clock-secret", icon: "◷", title: "Reloj antiguo", reward: "Hora 23:17", kind: "secret", message: "Las agujas se detienen: 23:17." },
      { id: "passport-game", icon: "⌕", title: "Pasaportes ocultos", game: "hiddenObjects", message: "Hay pasaportes escondidos en la sala de viajes." }
    ]
  },
  {
    id: "dior",
    icon: "✿",
    name: "Dior Rose Garden",
    theme: "dior-theme",
    kicker: "Nocturnal garden",
    description: "Rosas blancas, vestidos flotantes, fuentes cristalinas y pétalos que caen entre niebla romántica.",
    unlockedBy: "Pasaporte ámbar",
    objects: [
      { id: "rose-gown", icon: "❀", title: "Rosa de cristal", reward: "Vestido Rose Night", kind: "outfit", message: "Los pétalos forman un vestido suspendido." },
      { id: "fountain-key", icon: "◌", title: "Fuente lunar", reward: "Llave de cristal", kind: "key", message: "Una llave transparente emerge de la fuente." },
      { id: "petal-note", icon: "✧", title: "Pétalo escrito", reward: "Mensaje: busca la carta roja", kind: "secret", message: "El pétalo apunta hacia el casino secreto." },
      { id: "rose-memory", icon: "♡", title: "Memoria floral", game: "memory", message: "Las rosas proponen un memory delicado." }
    ]
  },
  {
    id: "gucci",
    icon: "♠",
    name: "Gucci Secret Casino",
    theme: "gucci-theme",
    kicker: "Velvet casino",
    description: "Terciopelo rojo, mesas verdes, cartas ocultas y monedas antiguas que suenan al desbloquear prendas exclusivas.",
    unlockedBy: "Llave de cristal",
    objects: [
      { id: "red-card", icon: "♥", title: "Carta roja", reward: "Carta roja", kind: "key", message: "La carta mencionada por el jardín aparece bajo la mesa." },
      { id: "velvet-suit", icon: "♣", title: "Traje de terciopelo", reward: "Traje Velvet", kind: "outfit", message: "El traje se abre paso detrás de fichas verdes." },
      { id: "coin-secret", icon: "◎", title: "Moneda dorada", reward: "Moneda de acceso", kind: "secret", message: "La moneda activa una cerradura invisible." },
      { id: "card-game", icon: "♦", title: "Cartas secretas", game: "cards", message: "Encuentra las tres cartas marcadas." }
    ]
  },
  {
    id: "prada",
    icon: "□",
    name: "Prada Art Gallery",
    theme: "prada-theme",
    kicker: "Minimal gallery",
    description: "Galería moderna con esculturas, cuadros fashion, pasarela digital y vitrinas que responden al tacto.",
    unlockedBy: "Moneda de acceso",
    objects: [
      { id: "gallery-mask", icon: "▢", title: "Cuadro blanco", reward: "Máscara minimal", kind: "outfit", message: "El cuadro se desliza y entrega una máscara geométrica." },
      { id: "runway-chip", icon: "▱", title: "Pasarela digital", reward: "Chip de pasarela", kind: "key", message: "Un chip enciende la pasarela como una interfaz." },
      { id: "vitrine-note", icon: "▫", title: "Vitrina sellada", reward: "Nota: teatro oscuro", kind: "secret", message: "La vitrina anuncia la última habitación." },
      { id: "logo-puzzle", icon: "▧", title: "Puzzle de logos", game: "code", message: "La galería exige ordenar una secuencia minimal." }
    ]
  },
  {
    id: "mcqueen",
    icon: "♛",
    name: "Alexander McQueen Dark Room",
    theme: "mcqueen-theme",
    kicker: "Theatrical finale",
    description: "Teatro oscuro con humo, máscaras, viento, vestidos góticos y una vitrina final para la colección rara.",
    unlockedBy: "Chip de pasarela",
    objects: [
      { id: "gothic-gown", icon: "♛", title: "Vitrina teatral", reward: "Vestido gótico final", kind: "outfit", message: "La vitrina libera la pieza final de la mansión." },
      { id: "mask-key", icon: "◍", title: "Máscara negra", reward: "Llave del sótano secreto", kind: "key", message: "La máscara contiene una llave para una zona prohibida." },
      { id: "whisper-code", icon: "≋", title: "Susurro del viento", reward: "Código FINAL", kind: "secret", message: "El viento pronuncia el código FINAL." },
      { id: "final-memory", icon: "✺", title: "Colección rara", game: "memory", message: "Completa el último memory de la colección." }
    ]
  }
];

const achievements = [
  { id: "first-step", label: "Primera pieza encontrada", test: state => state.inventory.length >= 1 },
  { id: "three-rooms", label: "Tres habitaciones exploradas", test: state => state.visited.length >= 3 },
  { id: "collector", label: "Coleccionista couture", test: state => state.inventory.filter(item => item.kind === "outfit").length >= 5 },
  { id: "code-hunter", label: "Cazadora de códigos", test: state => state.inventory.filter(item => item.kind === "secret").length >= 4 },
  { id: "game-master", label: "Minijuegos dominados", test: state => state.completedGames.length >= 4 },
  { id: "finale", label: "Final de alta moda", test: state => state.inventory.some(item => item.id === "gothic-gown") }
];

const mansionWhispers = [
  "La mansión escribe tu nombre sobre el vidrio empañado.",
  "Un teléfono antiguo suena una vez y se queda en silencio.",
  "Los espejos repiten un outfit que todavía no encontraste.",
  "Una puerta dorada respira como si estuviera esperando.",
  "El reloj avanza aunque nadie lo haya tocado.",
  "El suelo conserva ecos de tacones invisibles."
];

const powerRules = [
  { item: "Llave de perlas", title: "Guantes de apertura", text: "Puedes abrir vitrinas antiguas sin romper el encanto." },
  { item: "Capa dorada", title: "Capa anti-niebla", text: "La niebla se aparta y revela pistas escondidas." },
  { item: "Máscara minimal", title: "Visión reflejo", text: "El espejo permite ver habitaciones invertidas." },
  { item: "Vestido gótico final", title: "Presencia teatral", text: "La mansión te reconoce como invitada final." }
];

const officialProducts = [
  {
    brand: "Chanel",
    name: "Classic 11.12 Handbag",
    collection: "Classic Handbags - Chanel Fashion",
    category: "Bolso",
    price: 11700,
    priceLabel: "$11,700",
    image: "https://www.chanel.com/images//t_one/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_150/classic-11-12-handbag-black-lambskin-gold-tone-metal-lambskin-gold-tone-metal-packshot-default-a01112y01864c3906-9547278643230.jpg",
    url: "https://www.chanel.com/us/fashion/p/A01112Y0129594305/classic-11-12-handbag-lambskin-gold-tone-metal/"
  },
  {
    brand: "Versace",
    name: "La Medusa Large Leather Tote",
    collection: "La Medusa Bags - Versace",
    category: "Bolso",
    price: 1790,
    priceLabel: "$1,790",
    image: "",
    url: "https://www.versace.com/us/en/women/bags/totes/la-medusa-large-leather-tote-black-gold/1020742-1A14675_1B00V.html"
  },
  {
    brand: "Balmain",
    name: "Smooth leather B-Buzz 24 bag",
    collection: "B-Buzz - Balmain",
    category: "Bolso",
    price: 2095,
    priceLabel: "$2,095",
    image: "",
    url: "https://us.balmain.com/en/p/smooth-leather-b-buzz-24-bag-3615884766736.html"
  },
  {
    brand: "Louis Vuitton",
    name: "Neverfull MM",
    collection: "Women's Handbags - Louis Vuitton",
    category: "Bolso",
    price: 0,
    priceLabel: "Consultar precio",
    image: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-neverfull-mm-autres-toiles-monogram-handbags--M28457_PM2_Front%20view.jpg?wid=1090&hei=1090",
    url: "https://us.louisvuitton.com/eng-us/women/handbags/all-handbags/_/N-tfr7qdp/"
  },
  {
    brand: "Dior",
    name: "Lady Dior Micro Bag",
    collection: "Lady Dior - Dior",
    category: "Bolso",
    price: 3900,
    priceLabel: "$3,900",
    image: "",
    url: "https://www.dior.com/en_us/fashion/products/S0856ONGE_M900-lady-dior-micro-bag"
  },
  {
    brand: "Gucci",
    name: "Gucci Jackie 1961",
    collection: "Women's Handbags - Gucci",
    category: "Bolso",
    price: 4280,
    priceLabel: "$4,280",
    image: "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1744647326/810229_AAD5V_1060_001_100_0000_Light-Gucci-Jackie-1961-large-bag.jpg",
    url: "https://www.gucci.com/us/en/pr/women/handbags/crossbody-bags-for-women/gucci-jackie-1961-large-bag-p-810229AAD5V1060"
  },
  {
    brand: "Prada",
    name: "Prada Re-Edition 2005 Re-Nylon bag",
    collection: "Women's Bags - Prada",
    category: "Bolso",
    price: 2200,
    priceLabel: "$2,200",
    image: "",
    url: "https://www.prada.com/us/en/p/prada-re-edition-2005-re-nylon-bag/1BH204_R064_F0Y8C_V_V9L"
  },
  {
    brand: "Alexander McQueen",
    name: "Farringdon Bag",
    collection: "Women's Handbags - Alexander McQueen",
    category: "Bolso",
    price: 2690,
    priceLabel: "$2,690",
    image: "",
    url: "https://www.alexandermcqueen.com/en-us/pr/farringdon-bag-8456441VDEB1000.html"
  },
  {
    brand: "Dior",
    name: "Small Lady Dior Bag with Strap",
    collection: "Lady Dior - Dior",
    category: "Pieza central",
    price: 6400,
    priceLabel: "$6,400",
    image: "",
    url: "https://www.dior.com/en_us/fashion/products/M0531OUQE_M22N_TU"
  },
  {
    brand: "Balmain",
    name: "B-Buzz mini leather bag",
    collection: "B-Buzz - Balmain",
    category: "Accesorio",
    price: 1250,
    priceLabel: "$1,250",
    image: "",
    url: "https://us.balmain.com/en/p/b-buzz-mini-leather-bag-3615884790144.html"
  },
  {
    brand: "Versace",
    name: "Viscose-Jersey Draped Mini Dress",
    collection: "Women's Dresses - Versace",
    category: "Prenda central",
    price: 2550,
    priceLabel: "$2,550",
    image: "",
    url: "https://www.versace.com/us/en/women/clothing/dresses/"
  },
  {
    brand: "Prada",
    name: "Re-Nylon mini-dress",
    collection: "Ready-to-Wear - Prada",
    category: "Prenda central",
    price: 1850,
    priceLabel: "$1,850",
    image: "",
    url: "https://www.prada.com/us/en/women/ready_to_wear/dresses.1.html"
  },
  {
    brand: "Gucci",
    name: "Printed silk chemisier dress",
    collection: "Ready-to-Wear - Gucci",
    category: "Prenda central",
    price: 4900,
    priceLabel: "$4,900",
    image: "",
    url: "https://www.gucci.com/us/en/ca/women/ready-to-wear-for-women/dresses-for-women-c-women-readytowear-dresses"
  },
  {
    brand: "Balmain",
    name: "Double-breasted wool blazer",
    collection: "Ready-to-Wear - Balmain",
    category: "Prenda central",
    price: 2495,
    priceLabel: "$2,495",
    image: "",
    url: "https://us.balmain.com/en/women/ready-to-wear/"
  }
];

const state = JSON.parse(localStorage.getItem("fashion-mystery-state") || "null") || {
  activeRoom: "foyer",
  visited: [],
  collected: [],
  inventory: [],
  completedGames: [],
  achievements: [],
  finaleShown: false,
  drama: 0,
  midnightStep: 0,
  archiveUnlocked: false,
  reflectMode: false,
  sound: false
};

state.drama ??= 0;
state.midnightStep ??= 0;
state.archiveUnlocked ??= false;
state.reflectMode ??= false;

const els = {
  loading: document.getElementById("loadingScreen"),
  intro: document.getElementById("intro"),
  mansion: document.getElementById("mansion"),
  enter: document.getElementById("enterMansion"),
  roomStage: document.getElementById("roomStage"),
  roomTitle: document.getElementById("roomTitle"),
  roomSubtitle: document.getElementById("roomSubtitle"),
  brandKicker: document.getElementById("brandKicker"),
  stageHeading: document.getElementById("stageHeading"),
  stageDescription: document.getElementById("stageDescription"),
  zone: document.getElementById("interactiveZone"),
  dock: document.getElementById("roomDock"),
  mapGrid: document.getElementById("mapGrid"),
  inventoryGrid: document.getElementById("inventoryGrid"),
  inventoryCount: document.getElementById("inventoryCount"),
  progressText: document.getElementById("progressText"),
  progressFill: document.getElementById("progressFill"),
  midnightClock: document.getElementById("midnightClock"),
  dramaLevel: document.getElementById("dramaLevel"),
  achievementList: document.getElementById("achievementList"),
  achievementCount: document.getElementById("achievementCount"),
  toastStack: document.getElementById("toastStack"),
  savedPieces: document.getElementById("savedPieces"),
  lookAdvice: document.getElementById("lookAdvice"),
  mirrorText: document.getElementById("mirrorText"),
  mirrorAvatar: document.getElementById("mirrorAvatar"),
  realProductImage: document.getElementById("realProductImage"),
  realProductName: document.getElementById("realProductName"),
  realProductCollection: document.getElementById("realProductCollection"),
  realProductLink: document.getElementById("realProductLink"),
  outfitList: document.getElementById("outfitList"),
  archiveGrid: document.getElementById("archiveGrid"),
  gameKicker: document.getElementById("gameKicker"),
  gameTitle: document.getElementById("gameTitle"),
  gameArea: document.getElementById("gameArea"),
  particleLayer: document.getElementById("particleLayer")
};

let audioCtx;
let ambientNodes = [];
let roomAudioNodes = [];
let memoryOpen = [];

function saveState() {
  localStorage.setItem("fashion-mystery-state", JSON.stringify(state));
}

function hasUnlock(requirement) {
  return !requirement || state.inventory.some(item => item.id === requirement || item.name === requirement);
}

function roomById(id) {
  return rooms.find(room => room.id === id);
}

function initParticles() {
  els.particleLayer.innerHTML = "";
  for (let i = 0; i < 52; i += 1) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.setProperty("--speed", `${8 + Math.random() * 10}s`);
    particle.style.animationDelay = `${Math.random() * -10}s`;
    els.particleLayer.appendChild(particle);
  }
}

function renderDock() {
  els.dock.innerHTML = rooms.map(room => {
    const locked = !hasUnlock(room.unlockedBy);
    const active = state.activeRoom === room.id;
    return `<button class="room-card ${active ? "is-active" : ""} ${locked ? "is-locked" : ""}" data-room="${room.id}">
      <span>${room.icon}</span>
      <strong>${room.name}</strong>
      <small>${locked ? `Requiere ${room.unlockedBy}` : "Disponible"}</small>
    </button>`;
  }).join("");
}

function renderMap() {
  els.mapGrid.innerHTML = rooms.map(room => {
    const roomItems = room.objects.map(object => object.id);
    const complete = roomItems.every(id => state.collected.includes(id) || state.completedGames.includes(id));
    const locked = !hasUnlock(room.unlockedBy);
    return `<button class="map-node ${complete ? "is-complete" : ""} ${locked ? "is-locked" : ""}" data-room="${room.id}">
      <strong>${room.icon} ${room.name}</strong>
      <p>${locked ? `Puerta cerrada: ${room.unlockedBy}` : complete ? "Ala completada" : "Explorar secretos"}</p>
    </button>`;
  }).join("");
}

function renderInventory() {
  els.inventoryCount.textContent = `${state.inventory.length} piezas`;
  els.inventoryGrid.innerHTML = state.inventory.length
    ? state.inventory.slice(-8).map(item => `<div class="inventory-item"><span>${item.icon}</span>${item.name}</div>`).join("")
    : `<div class="inventory-item"><span>◇</span>Vacío</div>`;

  els.savedPieces.innerHTML = state.inventory.length
    ? state.inventory.map(item => `<button class="piece-card" data-piece="${item.id}"><strong>${item.icon} ${item.name}</strong><p>${item.room}</p></button>`).join("")
    : `<p>Aún no hay prendas ni secretos. Explora habitaciones para llenar el armario.</p>`;
}

function renderAchievements() {
  achievements.forEach(achievement => {
    if (!state.achievements.includes(achievement.id) && achievement.test(state)) {
      state.achievements.push(achievement.id);
      toast(`Logro desbloqueado: ${achievement.label}`);
      playSparkle();
    }
  });
  els.achievementCount.textContent = `${state.achievements.length}/${achievements.length}`;
  els.achievementList.innerHTML = achievements.map(achievement => {
    const unlocked = state.achievements.includes(achievement.id);
    return `<div class="achievement-item ${unlocked ? "is-unlocked" : ""}">${unlocked ? "✦" : "○"} ${achievement.label}</div>`;
  }).join("");
}

function updateProgress() {
  const totalSecrets = rooms.reduce((sum, room) => sum + room.objects.length, 0);
  const done = rooms.reduce((sum, room) => {
    return sum + room.objects.filter(object => {
      return state.collected.includes(object.id) || state.completedGames.includes(object.id);
    }).length;
  }, 0);
  const percentage = Math.min(100, Math.round((done / totalSecrets) * 100));
  els.progressText.textContent = `${percentage}%`;
  els.progressFill.style.width = `${percentage}%`;
}

function updateMysteryStatus() {
  const hour = 11 + Math.floor(state.midnightStep / 4);
  const minute = (state.midnightStep % 4) * 15;
  els.midnightClock.textContent = `${String(Math.min(hour, 12)).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
  els.dramaLevel.textContent = `${Math.min(100, state.drama)}`;
  if (state.midnightStep >= 4 && !state.archiveUnlocked) {
    state.archiveUnlocked = true;
    toast("The Archive se abrió a medianoche.");
    playSparkle();
  }
}

function addDrama(amount) {
  state.drama = Math.min(100, state.drama + amount);
  if (state.drama >= 100) {
    toast("Drama máximo: la mansión enciende sus luces teatrales.");
    playEscapeSound();
    state.drama = 72;
  }
}

function advanceMidnight() {
  state.midnightStep = Math.min(4, state.midnightStep + 1);
}

function renderArchive() {
  const powers = powerRules.map(power => {
    const active = hasUnlock(power.item);
    return `<div class="archive-card">
      <strong>${active ? "✦" : "○"} ${power.title}</strong>
      <p>${active ? power.text : `Encuentra ${power.item} para activar este poder.`}</p>
    </div>`;
  }).join("");
  els.archiveGrid.innerHTML = `
    ${powers}
    <div class="archive-card"><strong>${state.reflectMode ? "✦" : "○"} Habitaciones reflejo</strong><p>${state.reflectMode ? "El mundo invertido está activo." : "Actívalo desde el Fashion AI Mirror."}</p></div>
    <div class="archive-card"><strong>Drama level</strong><p>Tu nivel actual es ${state.drama}. A 100 se activa una escena teatral.</p></div>
    <div class="archive-card"><strong>Medianoche</strong><p>${state.archiveUnlocked ? "La sala prohibida está abierta." : "Completa secretos para avanzar el reloj."}</p></div>
  `;
}

function isMansionComplete() {
  return rooms.every(room => {
    return room.objects.every(object => {
      return state.collected.includes(object.id) || state.completedGames.includes(object.id);
    });
  });
}

function showFinale() {
  if (state.finaleShown || !isMansionComplete()) return;
  state.finaleShown = true;
  saveState();
  setTimeout(() => {
    document.querySelectorAll("dialog[open]").forEach(dialog => dialog.close());
    document.getElementById("finaleModal").showModal();
    playEscapeSound();
    playSparkle();
    toast("Final desbloqueado: colección completa.");
  }, 500);
}

function renderAll() {
  renderDock();
  renderMap();
  renderInventory();
  renderAchievements();
  updateProgress();
  updateMysteryStatus();
  renderArchive();
  saveState();
  showFinale();
}

function enterMansion() {
  els.intro.style.display = "none";
  els.mansion.classList.add("is-active");
  showFoyer();
  if (state.sound) startAmbient();
}

function showFoyer() {
  state.activeRoom = "foyer";
  startRoomAmbience("foyer");
  els.roomStage.className = "room-stage foyer-theme";
  els.roomStage.classList.toggle("is-reflection", state.reflectMode);
  els.roomTitle.textContent = "Grand Foyer";
  els.roomSubtitle.textContent = "Mapa de exploración";
  els.brandKicker.textContent = "Mansion entrance";
  els.stageHeading.textContent = "Grand Foyer";
  els.stageDescription.textContent = "Un vestíbulo de mármol oscuro conecta ocho alas secretas. Algunas puertas se abren con llaves, códigos y piezas raras de tu inventario.";
  els.zone.innerHTML = `
    <button class="hotspot" data-open="mapModal"><span>⌖</span><strong>Mapa de la mansión</strong></button>
    <button class="hotspot" data-open="wardrobeModal"><span>◈</span><strong>Armario inteligente</strong></button>
    <button class="hotspot" data-open="mirrorModal"><span>◐</span><strong>Fashion AI Mirror</strong></button>
    <button class="hotspot" data-open="cinemaModal"><span>▻</span><strong>Archivo de clips</strong></button>
    <button class="hotspot" data-phone="true"><span>☎</span><strong>Teléfono antiguo</strong></button>
    <button class="hotspot" data-archive="true"><span>✦</span><strong>The Archive</strong></button>
    <button class="hotspot" data-room="chanel"><span>◆</span><strong>Puerta Noir</strong></button>
    <button class="hotspot" data-room="vuitton"><span>▤</span><strong>Ala de viajes</strong></button>
    <button class="hotspot" data-room="versace"><span>⚜</span><strong>Puerta dorada bloqueada</strong></button>
  `;
  renderAll();
}

function openRoom(id) {
  const room = roomById(id);
  if (!room) return;
  if (!hasUnlock(room.unlockedBy)) {
    toast(`La puerta de ${room.name} requiere ${room.unlockedBy}.`);
    playTone(120, .12, "sawtooth", .04);
    return;
  }
  state.activeRoom = id;
  startRoomAmbience(id);
  if (!state.visited.includes(id)) state.visited.push(id);
  els.roomStage.className = `room-stage ${room.theme}`;
  els.roomStage.classList.toggle("is-reflection", state.reflectMode);
  els.roomTitle.textContent = room.name;
  els.roomSubtitle.textContent = room.kicker;
  els.brandKicker.textContent = room.kicker;
  els.stageHeading.textContent = room.name;
  els.stageDescription.textContent = room.description;
  els.zone.innerHTML = room.objects.map(object => {
    const done = state.collected.includes(object.id) || state.completedGames.includes(object.id);
    return `<button class="hotspot" data-object="${object.id}">
      <span>${done ? "✓" : object.icon}</span>
      <strong>${object.title}</strong>
      <small>${done ? "Descubierto" : object.game ? "Minijuego" : "Interactuar"}</small>
    </button>`;
  }).join("");
  playDoor();
  renderAll();
}

function collectObject(objectId) {
  const room = roomById(state.activeRoom);
  const object = room?.objects.find(item => item.id === objectId);
  if (!object) return;
  if (object.game) {
    openGame(object, room);
    return;
  }
  if (state.collected.includes(object.id)) {
    toast("Este secreto ya está en tu inventario.");
    return;
  }
  state.collected.push(object.id);
  state.inventory.push({
    id: object.id,
    name: object.reward,
    icon: object.icon,
    kind: object.kind,
    room: room.name
  });
  toast(object.message);
  addDrama(7);
  advanceMidnight();
  playSparkle();
  openRoom(room.id);
}

function openGame(object, room) {
  if (state.completedGames.includes(object.id)) {
    toast("Este minijuego ya fue completado.");
    return;
  }
  els.gameKicker.textContent = room.name;
  els.gameTitle.textContent = object.title;
  if (object.game === "memory") renderMemoryGame(object, room);
  if (object.game === "hiddenSymbols") renderHiddenGame(object, room, "☼", ["☼", "◎", "☉", "◇", "✦", "♜"], 4);
  if (object.game === "hiddenObjects") renderHiddenGame(object, room, "▥", ["▥", "✈", "◷", "✉", "⌖", "◇"], 4);
  if (object.game === "cards") renderOutfitPuzzle(object, room);
  if (object.game === "code") renderCodeGame(object, room);
  document.getElementById("gameModal").showModal();
}

function completeGame(object, room, rewardName = "Recompensa de minijuego") {
  if (!state.completedGames.includes(object.id)) state.completedGames.push(object.id);
  if (!state.collected.includes(`${object.id}-reward`)) {
    state.collected.push(`${object.id}-reward`);
    state.inventory.push({
      id: `${object.id}-reward`,
      name: rewardName,
      icon: object.icon,
      kind: "outfit",
      room: room.name
    });
  }
  document.getElementById("gameModal").close();
  toast(`Minijuego completado: ${rewardName}`);
  addDrama(10);
  advanceMidnight();
  playSparkle();
  openRoom(room.id);
}

function renderMemoryGame(object, room) {
  memoryOpen = [];
  let moves = 0;
  let matches = 0;
  let locked = true;
  const symbols = ["♕", "◇", "✦", "♜", "◈", "✿", "♕", "◇", "✦", "♜", "◈", "✿"].sort(() => Math.random() - .5);
  els.gameArea.innerHTML = `
    <div class="mini-hud">
      <span>Encuentra pares couture</span>
      <strong id="memoryMoves">Movimientos: 0</strong>
    </div>
    <div class="memory-grid advanced-memory">
      ${symbols.map((symbol, index) => `<button class="game-card is-preview" data-index="${index}" data-symbol="${symbol}">${symbol}</button>`).join("")}
    </div>
  `;
  setTimeout(() => {
    locked = false;
    els.gameArea.querySelectorAll(".game-card").forEach(card => card.classList.remove("is-preview"));
  }, 1200);
  els.gameArea.querySelectorAll(".game-card").forEach(card => {
    card.addEventListener("click", () => {
      if (locked || card.classList.contains("is-open") || card.classList.contains("is-matched")) return;
      card.classList.add("is-open");
      memoryOpen.push(card);
      playTone(420, .08, "triangle", .03);
      if (memoryOpen.length === 2) {
        locked = true;
        moves += 1;
        document.getElementById("memoryMoves").textContent = `Movimientos: ${moves}`;
        const [a, b] = memoryOpen;
        if (a.dataset.symbol === b.dataset.symbol) {
          a.classList.add("is-matched");
          b.classList.add("is-matched");
          matches += 1;
          memoryOpen = [];
          locked = false;
          if (matches === symbols.length / 2) setTimeout(() => completeGame(object, room, "Colección memory couture"), 450);
        } else {
          a.classList.add("is-wrong");
          b.classList.add("is-wrong");
          setTimeout(() => {
            a.classList.remove("is-open");
            b.classList.remove("is-open");
            a.classList.remove("is-wrong");
            b.classList.remove("is-wrong");
            memoryOpen = [];
            locked = false;
          }, 650);
        }
      }
    });
  });
}

function renderHiddenGame(object, room, targetSymbol, symbols, needed) {
  let found = 0;
  let timeLeft = 24;
  const boardSymbols = Array.from({ length: 18 }, (_, index) => {
    return index < needed ? targetSymbol : symbols[Math.floor(Math.random() * symbols.length)];
  }).sort(() => Math.random() - .5);
  els.gameArea.innerHTML = `
    <div class="mini-hud">
      <span>Encuentra ${needed} piezas ${targetSymbol}</span>
      <strong id="hiddenTimer">Tiempo: ${timeLeft}s</strong>
    </div>
    <div class="puzzle-meter"><span id="hiddenMeter"></span></div>
    <div class="hidden-grid advanced-hidden">
      ${boardSymbols.map((symbol, index) => `<button class="symbol-card floating-symbol" style="--delay:${index * .08}s" data-symbol="${symbol}" data-index="${index}">${symbol}</button>`).join("")}
    </div>
  `;
  const timer = setInterval(() => {
    timeLeft -= 1;
    const timerNode = document.getElementById("hiddenTimer");
    if (timerNode) timerNode.textContent = `Tiempo: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      toast("Se apagaron las luces. El puzzle se reinicia.");
      renderHiddenGame(object, room, targetSymbol, symbols, needed);
    }
  }, 1000);
  els.gameArea.querySelectorAll(".symbol-card").forEach(card => {
    card.addEventListener("click", () => {
      if (card.classList.contains("is-found")) return;
      if (card.dataset.symbol === targetSymbol) {
        card.classList.add("is-found");
        found += 1;
        document.getElementById("hiddenMeter").style.width = `${(found / needed) * 100}%`;
        playTone(620, .09, "sine", .04);
        if (found >= needed) {
          clearInterval(timer);
          completeGame(object, room, "Emblema secreto");
        }
      } else {
        timeLeft = Math.max(1, timeLeft - 3);
        card.classList.add("is-wrong");
        setTimeout(() => card.classList.remove("is-wrong"), 320);
        playTone(160, .08, "square", .025);
      }
    });
  });
}

function renderCodeGame(object, room) {
  const code = object.id === "code-game" ? ["8", "0", "8"] : object.id === "logo-puzzle" ? ["P", "R", "A", "D", "A"] : ["1", "9", "0", "9"];
  const keys = [...new Set([...code, ..."7390LVPRDA".split("")])].sort(() => Math.random() - .5).slice(0, Math.max(8, code.length + 3));
  let attempts = 3;
  els.gameArea.innerHTML = `
    <div class="mini-hud">
      <span>${object.id === "logo-puzzle" ? "Reconstruye la firma minimal" : "Abre la cerradura digital"}</span>
      <strong id="codeAttempts">Intentos: ${attempts}</strong>
    </div>
    <div class="code-display" id="codeAttempt">${"_ ".repeat(code.length)}</div>
    <div class="code-grid">
      ${keys.map(key => `<button class="symbol-card code-key" data-number="${key}">${key}</button>`).join("")}
    </div>
    <div class="mini-actions">
      <button class="mini-button" id="clearCode">Borrar</button>
      <button class="mini-button" id="hintCode">Pista</button>
    </div>`;
  const attempt = [];
  const renderAttempt = () => {
    document.getElementById("codeAttempt").textContent = code.map((_, index) => attempt[index] || "_").join(" ");
  };
  els.gameArea.querySelectorAll(".code-key").forEach(card => {
    card.addEventListener("click", () => {
      if (attempt.length >= code.length) return;
      attempt.push(card.dataset.number);
      card.classList.add("is-found");
      setTimeout(() => card.classList.remove("is-found"), 180);
      renderAttempt();
      playTone(500 + attempt.length * 80, .08, "triangle", .035);
      if (attempt.length === code.length) {
        if (attempt.join("") === code.join("")) {
          completeGame(object, room, "Archivo couture desbloqueado");
        } else {
          attempts -= 1;
          document.getElementById("codeAttempts").textContent = `Intentos: ${attempts}`;
          toast(attempts ? "La secuencia vibra mal. Prueba otra combinación." : "La cerradura reinicia el puzzle.");
          attempt.length = 0;
          renderAttempt();
          if (attempts <= 0) setTimeout(() => renderCodeGame(object, room), 650);
        }
      }
    });
  });
  document.getElementById("clearCode").addEventListener("click", () => {
    attempt.length = 0;
    renderAttempt();
  });
  document.getElementById("hintCode").addEventListener("click", () => {
    toast(`Pista: empieza con ${code[0]}`);
    playTone(720, .12, "triangle", .035);
  });
}

function renderOutfitPuzzle(object, room) {
  const correct = ["Carta roja", "Traje Velvet", "Moneda dorada"];
  const options = ["Carta roja", "Traje Velvet", "Moneda dorada", "Sombrero falso", "Guante sin marca", "Zapato incorrecto"].sort(() => Math.random() - .5);
  const selected = [];
  els.gameArea.innerHTML = `
    <div class="mini-hud">
      <span>Arma el look secreto del casino</span>
      <strong id="outfitScore">0/3 piezas</strong>
    </div>
    <p>Elige solo las 3 piezas que desbloquean la mesa privada.</p>
    <div class="hidden-grid outfit-puzzle">
      ${options.map(option => `<button class="symbol-card outfit-choice" data-piece="${option}">${option}</button>`).join("")}
    </div>
    <div class="runway-preview" id="runwayPreview"><span></span><span></span><span></span></div>
  `;
  els.gameArea.querySelectorAll(".outfit-choice").forEach(button => {
    button.addEventListener("click", () => {
      const piece = button.dataset.piece;
      if (button.classList.contains("is-found")) return;
      if (correct.includes(piece)) {
        selected.push(piece);
        button.classList.add("is-found");
        document.getElementById("outfitScore").textContent = `${selected.length}/3 piezas`;
        document.getElementById("runwayPreview").classList.add(`look-step-${selected.length}`);
        playTone(540 + selected.length * 90, .1, "triangle", .04);
        if (selected.length === correct.length) setTimeout(() => completeGame(object, room, "Look casino secreto"), 450);
      } else {
        button.classList.add("is-wrong");
        setTimeout(() => button.classList.remove("is-wrong"), 350);
        toast("Esa pieza rompe el dress code del casino.");
        playTone(150, .08, "square", .03);
      }
    });
  });
}

function toast(message) {
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  els.toastStack.appendChild(node);
  setTimeout(() => node.remove(), 3600);
}

function setupAudio() {
  if (!audioCtx) audioCtx = new AudioContext();
}

function startAmbient() {
  setupAudio();
  stopAmbient();
  const rain = audioCtx.createOscillator();
  const wind = audioCtx.createOscillator();
  const rainGain = audioCtx.createGain();
  const windGain = audioCtx.createGain();
  rain.type = "sawtooth";
  wind.type = "sine";
  rain.frequency.value = 70;
  wind.frequency.value = 145;
  rainGain.gain.value = .018;
  windGain.gain.value = .012;
  rain.connect(rainGain).connect(audioCtx.destination);
  wind.connect(windGain).connect(audioCtx.destination);
  rain.start();
  wind.start();
  ambientNodes = [rain, wind, rainGain, windGain];
}

function stopAmbient() {
  ambientNodes.forEach(node => {
    try {
      if (node.stop) node.stop();
      if (node.disconnect) node.disconnect();
    } catch (error) {
      // Audio nodes may already be stopped by the browser.
    }
  });
  ambientNodes = [];
}

function stopRoomAmbience() {
  roomAudioNodes.forEach(node => {
    try {
      if (node.stop) node.stop();
      if (node.disconnect) node.disconnect();
    } catch (error) {
      // Room audio can already be stopped by a navigation change.
    }
  });
  roomAudioNodes = [];
}

function addRoomTone(freq, type, volume) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.value = volume;
  osc.connect(gain).connect(audioCtx.destination);
  osc.start();
  roomAudioNodes.push(osc, gain);
}

function startRoomAmbience(roomId) {
  if (!state.sound) return;
  setupAudio();
  stopRoomAmbience();
  const presets = {
    foyer: [[98, "sine", .006], [196, "triangle", .004]],
    chanel: [[261, "sine", .007], [392, "triangle", .004]],
    versace: [[130, "triangle", .008], [520, "sine", .004]],
    balmain: [[72, "sawtooth", .007], [440, "square", .003]],
    vuitton: [[110, "sine", .006], [220, "triangle", .004]],
    dior: [[329, "sine", .006], [493, "triangle", .003]],
    gucci: [[146, "triangle", .007], [277, "sine", .004]],
    prada: [[240, "sine", .005], [360, "triangle", .003]],
    mcqueen: [[55, "sawtooth", .007], [165, "sine", .004]]
  };
  (presets[roomId] || presets.foyer).forEach(([freq, type, volume]) => addRoomTone(freq, type, volume));
}

function playTone(freq, duration, type = "sine", volume = .05) {
  if (!state.sound) return;
  setupAudio();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.value = volume;
  gain.gain.exponentialRampToValueAtTime(.001, audioCtx.currentTime + duration);
  osc.connect(gain).connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

function playButtonSound() {
  playTone(520, .055, "triangle", .025);
  setTimeout(() => playTone(760, .05, "sine", .018), 35);
}

function playWardrobeSound() {
  playTone(330, .12, "triangle", .035);
  setTimeout(() => playTone(520, .14, "triangle", .03), 95);
  setTimeout(() => playTone(860, .18, "sine", .025), 190);
}

function playMirrorSound() {
  playTone(660, .08, "sine", .03);
  setTimeout(() => playTone(990, .16, "triangle", .025), 80);
}

function playEscapeSound() {
  [110, 146, 196, 261, 392, 523].forEach((freq, index) => {
    setTimeout(() => playTone(freq, .22, index < 2 ? "sawtooth" : "triangle", .045), index * 140);
  });
  setTimeout(() => playTone(70, .38, "sawtooth", .05), 720);
}

function playSparkle() {
  [660, 880, 1320].forEach((freq, index) => setTimeout(() => playTone(freq, .18, "triangle", .045), index * 75));
}

function playDoor() {
  playTone(82, .25, "sawtooth", .035);
  setTimeout(() => playTone(210, .18, "triangle", .025), 170);
}

function toggleSound() {
  state.sound = !state.sound;
  document.getElementById("toggleAudio").textContent = state.sound ? "♫" : "♪";
  if (state.sound) {
    startAmbient();
    startRoomAmbience(state.activeRoom);
    toast("Sonido ambiental activado.");
  } else {
    stopAmbient();
    stopRoomAmbience();
    toast("Sonido ambiental pausado.");
  }
  saveState();
}

function autoStyle() {
  const outfits = state.inventory.filter(item => item.kind === "outfit");
  if (!outfits.length) {
    els.lookAdvice.textContent = "El armario necesita al menos una prenda encontrada para crear un look.";
    return;
  }
  const pick = outfits[Math.floor(Math.random() * outfits.length)];
  const secrets = state.inventory.filter(item => item.kind === "secret").length;
  els.lookAdvice.textContent = `Recomendación: combina ${pick.name} con joyería discreta, sombra profunda y ${secrets > 2 ? "un código secreto como accesorio narrativo" : "una llave luminosa como detalle de misterio"}.`;
  playSparkle();
}

function formatPrice(value) {
  return value
    ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value)
    : "Consultar";
}

function shuffleItems(items) {
  return [...items].sort(() => Math.random() - .5);
}

function recommendOfficialProduct(style = "") {
  const filtered = officialProducts.filter(product => {
    if (style.includes("Noir")) return ["Chanel", "Prada", "Alexander McQueen"].includes(product.brand);
    if (style.includes("Golden")) return ["Versace", "Louis Vuitton", "Gucci"].includes(product.brand);
    if (style.includes("Cyber")) return ["Balmain", "Prada", "Alexander McQueen"].includes(product.brand);
    if (style.includes("Rose")) return ["Dior", "Chanel", "Louis Vuitton"].includes(product.brand);
    return true;
  });
  const pool = filtered.length ? filtered : officialProducts;
  const central = shuffleItems(pool.filter(item => item.category === "Prenda central"))[0]
    || shuffleItems(officialProducts.filter(item => item.category === "Prenda central"))[0];
  const bag = shuffleItems(pool.filter(item => item.category === "Bolso" && item.name !== central?.name))[0]
    || shuffleItems(officialProducts.filter(item => item.category === "Bolso"))[0];
  const extraPool = pool.filter(item => item.name !== central?.name && item.name !== bag?.name);
  const extra = shuffleItems(extraPool)[0] || shuffleItems(officialProducts.filter(item => item.name !== central?.name && item.name !== bag?.name))[0];
  const outfit = [central, bag, extra].filter(Boolean);
  const total = outfit.reduce((sum, item) => sum + item.price, 0);
  const product = outfit[0];

  els.realProductName.textContent = style
    ? `Outfit ${style} armado por el espejo`
    : "Outfit random armado por el espejo";
  els.realProductCollection.textContent = `Armario virtual: ${outfit.map(item => item.brand).join(" + ")}`;
  els.realProductLink.href = product.url;
  els.realProductLink.textContent = `Ver ${product.name}`;
  els.outfitList.innerHTML = `
    ${outfit.map(item => `
      <div class="outfit-row">
        <a href="${item.url}" target="_blank" rel="noopener">${item.brand} - ${item.name}<br><small>${item.collection}</small></a>
        <span>${item.priceLabel || formatPrice(item.price)}</span>
      </div>
    `).join("")}
    <div class="outfit-total">
      <strong>Total del outfit${outfit.some(item => !item.price) ? " conocido" : ""}</strong>
      <span>${formatPrice(total)}</span>
    </div>
  `;
  els.realProductImage.innerHTML = product.image
    ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`
    : `<span>${product.brand}</span>`;
  const image = els.realProductImage.querySelector("img");
  if (image) {
    image.addEventListener("error", () => {
      els.realProductImage.innerHTML = `<span>${product.brand}</span>`;
    }, { once: true });
  }
  els.mirrorText.textContent = `El espejo armó un outfit con ${outfit.length} piezas originales. Total calculado: ${formatPrice(total)}${outfit.some(item => !item.price) ? " más piezas con precio a consultar" : ""}.`;
  playSparkle();
}

function resetGame(keepInMansion = true) {
  const keepSound = state.sound;
  localStorage.removeItem("fashion-mystery-state");
  Object.assign(state, {
    activeRoom: "foyer",
    visited: [],
    collected: [],
    inventory: [],
    completedGames: [],
    achievements: [],
    finaleShown: false,
    drama: 0,
    midnightStep: 0,
    archiveUnlocked: false,
    reflectMode: false,
    sound: keepSound
  });
  document.querySelectorAll("dialog[open]").forEach(dialog => dialog.close());
  if (keepInMansion) {
    els.intro.style.display = "none";
    els.mansion.classList.add("is-active");
    showFoyer();
  } else {
    els.mansion.classList.remove("is-active");
    els.intro.style.display = "";
    renderAll();
  }
  toast("La mansión vuelve a esconder sus secretos.");
}

function setupEvents() {
  els.enter.addEventListener("click", enterMansion);
  document.getElementById("toggleAudio").addEventListener("click", toggleSound);
  document.getElementById("backToHall").addEventListener("click", showFoyer);
  document.getElementById("openMap").addEventListener("click", () => document.getElementById("mapModal").showModal());
  document.getElementById("openWardrobe").addEventListener("click", () => {
    playWardrobeSound();
    document.getElementById("wardrobeModal").showModal();
  });
  document.getElementById("openMirror").addEventListener("click", () => {
    playMirrorSound();
    document.getElementById("mirrorModal").showModal();
  });
  document.getElementById("autoStyle").addEventListener("click", autoStyle);
  document.getElementById("randomRealLook").addEventListener("click", () => recommendOfficialProduct());
  document.getElementById("mirrorRealm").addEventListener("click", () => {
    state.reflectMode = !state.reflectMode;
    els.roomStage.classList.toggle("is-reflection", state.reflectMode);
    toast(state.reflectMode ? "El modo reflejo está activo." : "Volviste al plano principal.");
    addDrama(8);
    playMirrorSound();
    renderAll();
  });
  document.getElementById("restartGame").addEventListener("click", () => resetGame(true));
  document.getElementById("resetGameNow").addEventListener("click", () => resetGame(true));
  document.getElementById("coverTitleInput").addEventListener("input", event => {
    document.getElementById("coverTitle").textContent = event.target.value || "Icono de Medianoche";
  });
  document.getElementById("coverTone").addEventListener("change", event => {
    const cover = document.getElementById("magazineCover");
    cover.className = `magazine-cover ${event.target.value === "gold" ? "" : event.target.value}`;
  });

  document.body.addEventListener("click", event => {
    const close = event.target.closest("[data-close]");
    const open = event.target.closest("[data-open]");
    const roomButton = event.target.closest("[data-room]");
    const objectButton = event.target.closest("[data-object]");
    const mirrorButton = event.target.closest("[data-style]");
    const pieceButton = event.target.closest("[data-piece]");
    const phoneButton = event.target.closest("[data-phone]");
    const archiveButton = event.target.closest("[data-archive]");

    if (event.target.closest("button, a")) playButtonSound();
    if (close) document.getElementById(close.dataset.close).close();
    if (open) {
      if (open.dataset.open === "wardrobeModal") playWardrobeSound();
      if (open.dataset.open === "mirrorModal") playMirrorSound();
      document.getElementById(open.dataset.open).showModal();
    }
    if (roomButton) {
      document.querySelectorAll("dialog[open]").forEach(dialog => dialog.close());
      openRoom(roomButton.dataset.room);
    }
    if (objectButton) collectObject(objectButton.dataset.object);
    if (phoneButton) {
      const whisper = mansionWhispers[Math.floor(Math.random() * mansionWhispers.length)];
      toast(whisper);
      addDrama(6);
      playTone(740, .16, "sine", .035);
      setTimeout(() => playTone(520, .16, "sine", .03), 220);
      renderAll();
    }
    if (archiveButton) {
      if (!state.archiveUnlocked) {
        toast("The Archive está cerrado hasta medianoche.");
        playTone(140, .1, "sawtooth", .03);
      } else {
        renderArchive();
        document.getElementById("archiveModal").showModal();
      }
    }
    if (mirrorButton) {
      const style = mirrorButton.dataset.style;
      els.mirrorText.textContent = `${style}: silueta recomendada con contraste alto, accesorio brillante y movimiento de pasarela lento.`;
      els.mirrorAvatar.style.background = style.includes("Cyber")
        ? "linear-gradient(180deg, rgba(50,210,199,.9), rgba(157,113,255,.7))"
        : style.includes("Golden")
          ? "linear-gradient(180deg, rgba(244,209,138,.95), rgba(143,24,49,.65))"
          : style.includes("Rose")
            ? "linear-gradient(180deg, rgba(242,167,195,.95), rgba(255,255,255,.68))"
            : "linear-gradient(180deg, rgba(255,255,255,.9), rgba(20,20,24,.8))";
      recommendOfficialProduct(style);
      playSparkle();
    }
    if (pieceButton) {
      const piece = state.inventory.find(item => item.id === pieceButton.dataset.piece);
      if (piece) {
        els.lookAdvice.textContent = `${piece.name} queda guardado como pieza central del próximo look.`;
        playTone(740, .12, "triangle", .035);
      }
    }
  });
}

window.addEventListener("load", () => {
  initParticles();
  setupEvents();
  renderAll();
  document.getElementById("toggleAudio").textContent = state.sound ? "♫" : "♪";
  setTimeout(() => els.loading.classList.add("is-hidden"), 2100);
});
