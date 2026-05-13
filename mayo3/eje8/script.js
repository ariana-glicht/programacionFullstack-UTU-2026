const rooms = [
  {
    id: "chanel",
    icon: "◆",
    name: "Chanel Room",
    theme: "chanel",
    kicker: "Noir elegance",
    description: "Paredes negras brillantes, espejos antiguos, perfume monumental y cajones secretos.",
    unlock: null,
    objects: [
      { id: "pearl-key", icon: "◇", title: "Cajón lacado", reward: "Llave de perlas", kind: "key", message: "Encontraste la Llave de perlas." },
      { id: "noir-dress", icon: "♕", title: "Vestido oculto", reward: "Vestido Noir", kind: "outfit", message: "El espejo revela un vestido negro clásico." },
      { id: "perfume-code", icon: "✦", title: "Perfume gigante", reward: "Código 1909", kind: "secret", message: "El perfume revela el Código 1909." },
      { id: "piano-memory", icon: "♪", title: "Piano de salón", game: "memory" }
    ]
  },
  {
    id: "versace",
    icon: "⚜",
    name: "Versace Golden Hall",
    theme: "versace",
    kicker: "Golden palace",
    description: "Columnas doradas, esculturas y símbolos escondidos de Medusa.",
    unlock: "Llave de perlas",
    objects: [
      { id: "medusa-one", icon: "☼", title: "Columna solar", reward: "Medusa I", kind: "symbol", message: "Encontraste un símbolo dorado." },
      { id: "gold-cape", icon: "♜", title: "Capa imperial", reward: "Capa dorada", kind: "outfit", message: "Encontraste la Capa dorada." },
      { id: "medusa-game", icon: "⌖", title: "Buscar Medusas", game: "hidden" }
    ]
  },
  {
    id: "balmain",
    icon: "▣",
    name: "Balmain Future Lab",
    theme: "balmain",
    kicker: "Cyber fashion",
    description: "Neón, hologramas, pantallas digitales y prendas metálicas.",
    unlock: "Código 1909",
    objects: [
      { id: "holo-jacket", icon: "◬", title: "Holograma táctil", reward: "Chaqueta holográfica", kind: "outfit", message: "Encontraste la Chaqueta holográfica." },
      { id: "laser-code", icon: "#", title: "Panel de láser", reward: "Código 808", kind: "secret", message: "Encontraste el Código 808." },
      { id: "code-game", icon: "⌁", title: "Código digital", game: "code" }
    ]
  },
  {
    id: "vuitton",
    icon: "▤",
    name: "Louis Vuitton Travel Room",
    theme: "vuitton",
    kicker: "Luxury travel",
    description: "Maletas clásicas, mapas antiguos, relojes y lluvia en la ventana.",
    unlock: null,
    objects: [
      { id: "passport", icon: "▥", title: "Maleta vintage", reward: "Pasaporte ámbar", kind: "key", message: "Encontraste el Pasaporte ámbar." },
      { id: "travel-coat", icon: "♢", title: "Perchero de viaje", reward: "Abrigo de aeropuerto", kind: "outfit", message: "Encontraste el Abrigo de aeropuerto." },
      { id: "passport-game", icon: "⌕", title: "Pasaportes ocultos", game: "hidden" }
    ]
  },
  {
    id: "dior",
    icon: "✿",
    name: "Dior Rose Garden",
    theme: "dior",
    kicker: "Nocturnal garden",
    description: "Rosas blancas, vestidos flotantes, fuentes cristalinas y niebla.",
    unlock: "Pasaporte ámbar",
    objects: [
      { id: "rose-gown", icon: "❀", title: "Rosa de cristal", reward: "Vestido Rose Night", kind: "outfit", message: "Encontraste el Vestido Rose Night." },
      { id: "crystal-key", icon: "◌", title: "Fuente lunar", reward: "Llave de cristal", kind: "key", message: "Encontraste la Llave de cristal." },
      { id: "rose-memory", icon: "♡", title: "Memoria floral", game: "memory" }
    ]
  },
  {
    id: "gucci",
    icon: "♠",
    name: "Gucci Secret Casino",
    theme: "gucci",
    kicker: "Velvet casino",
    description: "Terciopelo rojo, cartas secretas, mesas verdes y monedas antiguas.",
    unlock: "Llave de cristal",
    objects: [
      { id: "red-card", icon: "♥", title: "Carta roja", reward: "Carta roja", kind: "key", message: "Encontraste la Carta roja." },
      { id: "velvet-suit", icon: "♣", title: "Traje de terciopelo", reward: "Traje Velvet", kind: "outfit", message: "Encontraste el Traje Velvet." },
      { id: "card-game", icon: "♦", title: "Cartas secretas", game: "hidden" }
    ]
  },
  {
    id: "prada",
    icon: "□",
    name: "Prada Art Gallery",
    theme: "prada",
    kicker: "Minimal gallery",
    description: "Galería moderna con cuadros fashion, vitrinas y pasarela digital.",
    unlock: "Carta roja",
    objects: [
      { id: "minimal-mask", icon: "▢", title: "Cuadro blanco", reward: "Máscara minimal", kind: "outfit", message: "Encontraste la Máscara minimal." },
      { id: "runway-chip", icon: "▱", title: "Pasarela digital", reward: "Chip de pasarela", kind: "key", message: "Encontraste el Chip de pasarela." },
      { id: "logo-puzzle", icon: "▧", title: "Puzzle de logos", game: "code" }
    ]
  },
  {
    id: "mcqueen",
    icon: "♛",
    name: "Alexander McQueen Dark Room",
    theme: "mcqueen",
    kicker: "Theatrical finale",
    description: "Teatro oscuro con humo, máscaras, viento y vestidos góticos.",
    unlock: "Chip de pasarela",
    objects: [
      { id: "gothic-gown", icon: "♛", title: "Vitrina teatral", reward: "Vestido gótico final", kind: "outfit", message: "Encontraste el Vestido gótico final." },
      { id: "final-code", icon: "≋", title: "Susurro del viento", reward: "Código FINAL", kind: "secret", message: "El viento revela el Código FINAL." },
      { id: "final-memory", icon: "✺", title: "Colección rara", game: "memory" }
    ]
  }
];

const achievements = [
  { id: "first", label: "Primera pieza encontrada", test: s => s.inventory.length >= 1 },
  { id: "rooms", label: "Tres habitaciones exploradas", test: s => s.visited.length >= 3 },
  { id: "collector", label: "Coleccionista couture", test: s => s.inventory.filter(i => i.kind === "outfit").length >= 5 },
  { id: "codes", label: "Cazadora de códigos", test: s => s.inventory.filter(i => i.kind === "secret").length >= 3 },
  { id: "games", label: "Minijuegos dominados", test: s => s.completedGames.length >= 3 },
  { id: "finale", label: "Final de alta moda", test: s => s.inventory.some(i => i.id === "gothic-gown") }
];

const defaultState = {
  activeRoom: "foyer",
  visited: [],
  collected: [],
  inventory: [],
  completedGames: [],
  achievements: [],
  finaleShown: false,
  sound: false
};

const state = JSON.parse(localStorage.getItem("fashion-mystery-state") || "null") || structuredClone(defaultState);

const $ = id => document.getElementById(id);

let audioCtx;
let ambientNodes = [];
let openedCards = [];

function saveState() {
  localStorage.setItem("fashion-mystery-state", JSON.stringify(state));
}

function hasItem(name) {
  return state.inventory.some(item => item.name === name || item.id === name);
}

function canEnter(room) {
  return !room.unlock || hasItem(room.unlock);
}

function getRoom(id) {
  return rooms.find(room => room.id === id);
}

function toast(text) {
  const div = document.createElement("div");
  div.className = "toast";
  div.textContent = text;
  $("toasts").appendChild(div);
  setTimeout(() => div.remove(), 3500);
}

function initParticles() {
  for (let i = 0; i < 50; i++) {
    const p = document.createElement("span");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "%";
    p.style.setProperty("--speed", 8 + Math.random() * 10 + "s");
    p.style.animationDelay = Math.random() * -10 + "s";
    $("particles").appendChild(p);
  }
}

function renderDock() {
  $("dock").innerHTML = rooms.map(room => `
    <button class="room-card ${state.activeRoom === room.id ? "active" : ""} ${canEnter(room) ? "" : "locked"}" data-room="${room.id}">
      <span>${room.icon}</span>
      <strong>${room.name}</strong>
      <small>${canEnter(room) ? "Disponible" : "Requiere " + room.unlock}</small>
    </button>
  `).join("");
}

function renderMap() {
  $("mapGrid").innerHTML = rooms.map(room => `
    <button class="map-node ${canEnter(room) ? "" : "locked"}" data-room="${room.id}">
      <strong>${room.icon} ${room.name}</strong>
      <p>${canEnter(room) ? "Explorar" : "Bloqueada: " + room.unlock}</p>
    </button>
  `).join("");
}

function renderInventory() {
  $("inventoryCount").textContent = state.inventory.length;

  $("inventory").innerHTML = state.inventory.length
    ? state.inventory.map(item => `<div class="item"><span>${item.icon}</span>${item.name}</div>`).join("")
    : `<div class="item"><span>◇</span>Vacío</div>`;

  $("savedPieces").innerHTML = state.inventory.length
    ? state.inventory.map(item => `<div class="piece"><strong>${item.icon} ${item.name}</strong><p>${item.room}</p></div>`).join("")
    : `<p>Aún no hay prendas guardadas.</p>`;
}

function renderAchievements() {
  achievements.forEach(a => {
    if (!state.achievements.includes(a.id) && a.test(state)) {
      state.achievements.push(a.id);
      toast("Logro desbloqueado: " + a.label);
      sparkle();
    }
  });

  $("achievementCount").textContent = `${state.achievements.length}/${achievements.length}`;
  $("achievements").innerHTML = achievements.map(a => {
    const done = state.achievements.includes(a.id);
    return `<div class="achievement">${done ? "✦" : "○"} ${a.label}</div>`;
  }).join("");
}

function getDoneCount() {
  return rooms.reduce((sum, room) => {
    return sum + room.objects.filter(obj => {
      return state.collected.includes(obj.id) || state.completedGames.includes(obj.id);
    }).length;
  }, 0);
}

function updateProgress() {
  const total = rooms.reduce((sum, room) => sum + room.objects.length, 0);
  const percent = Math.round((getDoneCount() / total) * 100);
  $("progressText").textContent = percent + "%";
  $("progressFill").style.width = percent + "%";
}

function isMansionComplete() {
  return rooms.every(room => {
    return room.objects.every(obj => {
      return state.collected.includes(obj.id) || state.completedGames.includes(obj.id);
    });
  });
}

function showFinale() {
  if (state.finaleShown || !isMansionComplete()) return;

  state.finaleShown = true;
  saveState();

  setTimeout(() => {
    document.querySelectorAll("dialog[open]").forEach(dialog => dialog.close());
    $("finaleModal").showModal();
    toast("Final desbloqueado: colección completa.");
    sparkle();
  }, 500);
}

function renderAll() {
  renderDock();
  renderMap();
  renderInventory();
  renderAchievements();
  updateProgress();
  saveState();
  showFinale();
}

function startGame() {
  $("intro").style.display = "none";
  $("game").classList.add("active");
  showHall();
  if (state.sound) startAmbient();
}

function showHall() {
  state.activeRoom = "foyer";

  $("stage").className = "stage foyer";
  $("roomTitle").textContent = "Grand Foyer";
  $("roomKicker").textContent = "Mapa de exploración";
  $("stageKicker").textContent = "Mansion entrance";
  $("stageTitle").textContent = "Grand Foyer";
  $("stageText").textContent = "El vestíbulo conecta las alas secretas de la mansión.";

  $("hotspots").innerHTML = `
    <button class="hotspot" data-open="mapModal"><span>⌖</span><strong>Mapa</strong></button>
    <button class="hotspot" data-open="wardrobeModal"><span>◈</span><strong>Armario</strong></button>
    <button class="hotspot" data-open="mirrorModal"><span>◐</span><strong>AI Mirror</strong></button>
    <button class="hotspot" data-room="chanel"><span>◆</span><strong>Chanel Room</strong></button>
    <button class="hotspot" data-room="vuitton"><span>▤</span><strong>Travel Room</strong></button>
    <button class="hotspot" data-room="versace"><span>⚜</span><strong>Golden Hall</strong></button>
  `;

  renderAll();
}

function openRoom(id) {
  const room = getRoom(id);
  if (!room) return;

  if (!canEnter(room)) {
    toast(room.name + " requiere " + room.unlock + ".");
    tone(120, .12, "sawtooth", .04);
    return;
  }

  state.activeRoom = id;
  if (!state.visited.includes(id)) state.visited.push(id);

  $("stage").className = "stage " + room.theme;
  $("roomTitle").textContent = room.name;
  $("roomKicker").textContent = room.kicker;
  $("stageKicker").textContent = room.kicker;
  $("stageTitle").textContent = room.name;
  $("stageText").textContent = room.description;

  $("hotspots").innerHTML = room.objects.map(obj => {
    const done = state.collected.includes(obj.id) || state.completedGames.includes(obj.id);
    return `
      <button class="hotspot" data-object="${obj.id}">
        <span>${done ? "✓" : obj.icon}</span>
        <strong>${obj.title}</strong>
        <small>${done ? "Descubierto" : obj.game ? "Minijuego" : "Interactuar"}</small>
      </button>
    `;
  }).join("");

  doorSound();
  renderAll();
}

function collectObject(id) {
  const room = getRoom(state.activeRoom);
  const obj = room.objects.find(o => o.id === id);
  if (!obj) return;

  if (obj.game) {
    openMinigame(obj, room);
    return;
  }

  if (state.collected.includes(obj.id)) {
    toast("Este secreto ya fue encontrado.");
    return;
  }

  state.collected.push(obj.id);
  state.inventory.push({
    id: obj.id,
    name: obj.reward,
    icon: obj.icon,
    kind: obj.kind,
    room: room.name
  });

  toast(obj.message);
  sparkle();
  openRoom(room.id);
}

function openMinigame(obj, room) {
  if (state.completedGames.includes(obj.id)) {
    toast("Este minijuego ya fue completado.");
    return;
  }

  $("miniKicker").textContent = room.name;
  $("miniTitle").textContent = obj.title;

  if (obj.game === "memory") renderMemory(obj, room);
  if (obj.game === "hidden") renderHidden(obj, room);
  if (obj.game === "code") renderCode(obj, room);

  $("gameModal").showModal();
}

function completeMinigame(obj, room, reward) {
  if (!state.completedGames.includes(obj.id)) {
    state.completedGames.push(obj.id);
  }

  state.inventory.push({
    id: obj.id + "-reward",
    name: reward,
    icon: obj.icon,
    kind: "outfit",
    room: room.name
  });

  $("gameModal").close();
  toast("Minijuego completado: " + reward);
  sparkle();
  openRoom(room.id);
}

function renderMemory(obj, room) {
  openedCards = [];
  const symbols = ["♕", "◇", "✦", "♜", "♕", "◇", "✦", "♜"].sort(() => Math.random() - .5);

  $("miniArea").innerHTML = `
    <div class="memory">
      ${symbols.map((s, i) => `<button class="card" data-i="${i}" data-s="${s}">${s}</button>`).join("")}
    </div>
  `;

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      if (card.classList.contains("open") || card.classList.contains("matched")) return;

      card.classList.add("open");
      openedCards.push(card);
      tone(420, .08, "triangle", .03);

      if (openedCards.length === 2) {
        const [a, b] = openedCards;

        if (a.dataset.s === b.dataset.s) {
          a.classList.add("matched");
          b.classList.add("matched");
          openedCards = [];

          if (document.querySelectorAll(".matched").length === symbols.length) {
            setTimeout(() => completeMinigame(obj, room, "Colección memory couture"), 450);
          }
        } else {
          setTimeout(() => {
            a.classList.remove("open");
            b.classList.remove("open");
            openedCards = [];
          }, 650);
        }
      }
    });
  });
}

function renderHidden(obj, room) {
  let found = 0;
  const symbols = ["◇", "✦", "◇", "☼", "◇", "♛"];

  $("miniArea").innerHTML = `
    <p>Encuentra 3 símbolos secretos.</p>
    <div class="hidden">
      ${symbols.map(s => `<button class="symbol" data-s="${s}">${s}</button>`).join("")}
    </div>
  `;

  document.querySelectorAll(".symbol").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("found")) return;

      if (btn.dataset.s === "◇") {
        btn.classList.add("found");
        found++;
        tone(620, .09, "sine", .04);

        if (found >= 3) {
          completeMinigame(obj, room, "Emblema secreto");
        }
      } else {
        tone(160, .08, "square", .025);
      }
    });
  });
}

function renderCode(obj, room) {
  const code = ["1", "9", "0", "9"];
  const scrambled = [...code].sort(() => Math.random() - .5);
  const attempt = [];

  $("miniArea").innerHTML = `
    <p>Ordena el código couture: 1909.</p>
    <div class="code-grid">
      ${scrambled.map(n => `<button class="symbol" data-n="${n}">${n}</button>`).join("")}
    </div>
    <p id="attempt">Código: </p>
  `;

  document.querySelectorAll(".symbol").forEach(btn => {
    btn.addEventListener("click", () => {
      attempt.push(btn.dataset.n);
      btn.disabled = true;
      btn.classList.add("found");
      $("attempt").textContent = "Código: " + attempt.join("");

      if (attempt.length === 4) {
        if (attempt.join("") === "1909") {
          completeMinigame(obj, room, "Archivo couture desbloqueado");
        } else {
          toast("Código incorrecto. Inténtalo otra vez.");
          setTimeout(() => renderCode(obj, room), 650);
        }
      }
    });
  });
}

function recommendLook() {
  const outfits = state.inventory.filter(item => item.kind === "outfit");

  if (!outfits.length) {
    $("lookAdvice").textContent = "Encuentra al menos una prenda para crear un look.";
    return;
  }

  const pick = outfits[Math.floor(Math.random() * outfits.length)];
  $("lookAdvice").textContent = `Recomendación: combina ${pick.name} con joyería brillante y actitud de pasarela nocturna.`;
  sparkle();
}

function setupAudio() {
  if (!audioCtx) audioCtx = new AudioContext();
}

function startAmbient() {
  setupAudio();
  stopAmbient();

  const rain = audioCtx.createOscillator();
  const wind = audioCtx.createOscillator();
  const gain1 = audioCtx.createGain();
  const gain2 = audioCtx.createGain();

  rain.type = "sawtooth";
  wind.type = "sine";
  rain.frequency.value = 70;
  wind.frequency.value = 145;
  gain1.gain.value = .018;
  gain2.gain.value = .012;

  rain.connect(gain1).connect(audioCtx.destination);
  wind.connect(gain2).connect(audioCtx.destination);

  rain.start();
  wind.start();

  ambientNodes = [rain, wind, gain1, gain2];
}

function stopAmbient() {
  ambientNodes.forEach(node => {
    try {
      if (node.stop) node.stop();
      if (node.disconnect) node.disconnect();
    } catch {}
  });
  ambientNodes = [];
}

function tone(freq, duration, type = "sine", volume = .05) {
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

function sparkle() {
  [660, 880, 1320].forEach((freq, i) => {
    setTimeout(() => tone(freq, .18, "triangle", .045), i * 75);
  });
}

function doorSound() {
  tone(82, .25, "sawtooth", .035);
  setTimeout(() => tone(210, .18, "triangle", .025), 170);
}

function toggleSound() {
  state.sound = !state.sound;
  $("soundBtn").textContent = state.sound ? "♫" : "♪";

  if (state.sound) {
    startAmbient();
    toast("Sonido activado.");
  } else {
    stopAmbient();
    toast("Sonido pausado.");
  }

  saveState();
}

function restartGame() {
  const keepSound = state.sound;

  Object.assign(state, structuredClone(defaultState));
  state.sound = keepSound;

  localStorage.removeItem("fashion-mystery-state");
  $("finaleModal").close();
  showHall();

  toast("La mansión vuelve a esconder sus secretos.");
}

function setupEvents() {
  $("startGame").addEventListener("click", startGame);
  $("soundBtn").addEventListener("click", toggleSound);
  $("goHall").addEventListener("click", showHall);
  $("mapBtn").addEventListener("click", () => $("mapModal").showModal());
  $("wardrobeBtn").addEventListener("click", () => $("wardrobeModal").showModal());
  $("mirrorBtn").addEventListener("click", () => $("mirrorModal").showModal());
  $("styleBtn").addEventListener("click", recommendLook);
  $("restartBtn").addEventListener("click", restartGame);

  document.body.addEventListener("click", event => {
    const close = event.target.closest("[data-close]");
    const open = event.target.closest("[data-open]");
    const room = event.target.closest("[data-room]");
    const object = event.target.closest("[data-object]");
    const style = event.target.closest("[data-style]");

    if (close) $(close.dataset.close).close();

    if (open) $(open.dataset.open).showModal();

    if (room) {
      document.querySelectorAll("dialog[open]").forEach(d => d.close());
      openRoom(room.dataset.room);
    }

    if (object) collectObject(object.dataset.object);

    if (style) {
      const selected = style.dataset.style;
      $("mirrorText").textContent = `${selected}: silueta recomendada con contraste alto y brillo de gala.`;

      $("avatar").style.background = selected.includes("Cyber")
        ? "linear-gradient(180deg, rgba(50,210,199,.9), rgba(157,113,255,.7))"
        : selected.includes("Golden")
        ? "linear-gradient(180deg, rgba(244,209,138,.95), rgba(143,24,49,.65))"
        : selected.includes("Rose")
        ? "linear-gradient(180deg, rgba(242,167,195,.95), rgba(255,255,255,.68))"
        : "linear-gradient(180deg, rgba(255,255,255,.9), rgba(20,20,24,.8))";

      sparkle();
    }
  });
}

window.addEventListener("load", () => {
  initParticles();
  setupEvents();
  renderAll();
  $("soundBtn").textContent = state.sound ? "♫" : "♪";

  setTimeout(() => {
    $("loader").classList.add("hidden");
  }, 1800);
});
