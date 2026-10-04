// English Dev Daily - logica en JS simple. Comentarios en espanol, variables en ingles.
// Niveles Pre-A1 a B2 con frases para devs. Progreso en localStorage.

const LEVELS = [
  {
    id: "prea1",
    label: "Pre-A1 · Starter",
    goal: "Meta: presentarte sin mirar. Si dominas estas 5, ya eres A1.",
    canDo: "Puedes decir tu nombre, de donde eres y donde trabajas.",
    phrases: [
      { id: "p-name", en: "My name is Carlos.", es: "Me llamo Carlos.", tip: "I siempre en mayuscula. My = mi." },
      { id: "p-from", en: "I am from Monteria, Colombia.", es: "Soy de Monteria, Colombia.", tip: "I am = yo soy. From = de/donde." },
      { id: "p-dev", en: "I am a developer.", es: "Soy desarrollador.", tip: "A + singular: a developer, no a developers." },
      { id: "p-work", en: "I work as a developer.", es: "Trabajo como desarrollador.", tip: "Work as + rol. Work con k = trabajo." },
      { id: "p-study", en: "I study programming every day.", es: "Estudio programacion todos los dias.", tip: "Every day = todos los dias. Bloque de habito." }
    ]
  },
  {
    id: "a1",
    label: "A1 · Supervivencia",
    goal: "Meta: saludar, pedir ayuda y pedir que repitan en una call.",
    canDo: "Puedes sobrevivir a un saludo en una daily.",
    phrases: [
      { id: "a1-hello", en: "Hello, how are you?", es: "Hola, como estas?", tip: "How are you = como estas." },
      { id: "a1-fine", en: "I am fine, thank you.", es: "Estoy bien, gracias.", tip: "Fine = bien. Thank you = gracias." },
      { id: "a1-live", en: "I live in Monteria.", es: "Vivo en Monteria.", tip: "Live = vivir. I live = yo vivo." },
      { id: "a1-help", en: "I need help, please.", es: "Necesito ayuda, por favor.", tip: "I need = necesito. Clave para trabajar remoto." },
      { id: "a1-repeat", en: "Can you repeat, please?", es: "Puedes repetir, por favor?", tip: "Frase salvavidas en calls. Usala sin pena." },
      { id: "a1-understand", en: "I do not understand.", es: "No entiendo.", tip: "Do not = no. Mejor que quedarse callado." }
    ]
  },
  {
    id: "a2",
    label: "A2 · Base pasado/futuro",
    goal: "Meta: hablar de ayer y manana. Base del standup.",
    canDo: "Puedes decir que hiciste y que haras.",
    phrases: [
      { id: "a2-yesterday", en: "Yesterday I fixed a bug.", es: "Ayer arregle un bug.", tip: "Yesterday = ayer. Fixed = arregle (pasado)." },
      { id: "a2-today", en: "Today I work on the login.", es: "Hoy trabajo en el login.", tip: "Today = hoy. Work on = trabajar en algo." },
      { id: "a2-tomorrow", en: "Tomorrow I will deploy the app.", es: "Manana desplegare la app.", tip: "Will = futuro. I will deploy = desplegare." },
      { id: "a2-everyday", en: "I drink coffee every morning.", es: "Tomo cafe cada manana.", tip: "Every morning = cada manana. Rutina." },
      { id: "a2-like", en: "I like Next.js and TypeScript.", es: "Me gusta Next.js y TypeScript.", tip: "I like = me gusta. Tu stack real." }
    ]
  },
  {
    id: "b1",
    label: "B1 · Daily de dev",
    goal: "Meta: dar tu daily standup de 30 segundos.",
    canDo: "Puedes participar en una daily y pedir una reunion.",
    phrases: [
      { id: "b1-standup1", en: "Yesterday I worked on the API.", es: "Ayer trabaje en la API.", tip: "Estructura real de standup." },
      { id: "b1-standup2", en: "Today I will fix the database error.", es: "Hoy arreglare el error de la base de datos.", tip: "Today I will = hoy voy a." },
      { id: "b1-blocker", en: "I have a blocker with the login.", es: "Tengo un bloqueo con el login.", tip: "Blocker = palabra clave en remoto USA." },
      { id: "b1-meeting", en: "Can we have a meeting tomorrow?", es: "Podemos tener una reunion manana?", tip: "Can we = podemos (propuesta educada)." },
      { id: "b1-pr", en: "I will send the pull request today.", es: "Enviare el pull request hoy.", tip: "Pull request = tu entrega diaria." }
    ]
  },
  {
    id: "b2",
    label: "B2 · Entrevista (minimo empleable)",
    goal: "Meta: pasar una entrevista tecnica en ingles.",
    canDo: "Puedes explicar tu experiencia y decisiones tecnicas.",
    phrases: [
      { id: "b2-exp", en: "I have two years of experience with Next.js and TypeScript.", es: "Tengo dos anos de experiencia con Next.js y TypeScript.", tip: "I have = tengo (experiencia). Ajusta los anos reales." },
      { id: "b2-resp", en: "I am responsible for the API and the database.", es: "Soy responsable de la API y la base de datos.", tip: "Responsible for = responsable de." },
      { id: "b2-chose", en: "I chose Postgres because it is fast and reliable.", es: "Elegi Postgres porque es rapido y confiable.", tip: "Because = porque. Explicar decisiones = B2." },
      { id: "b2-project", en: "In my last project I reduced load time by thirty percent.", es: "En mi ultimo proyecto reduje el tiempo de carga 30%.", tip: "Dato con numero impresiona en entrevista." },
      { id: "b2-remote", en: "I am looking for a remote position because I want to grow.", es: "Busco un puesto remoto porque quiero crecer.", tip: "Looking for = buscando. Cierre de entrevista." }
    ]
  }
];

const storeKey = "engdaily_progress_v1";
const peekKey = "engdaily_peeked_v1";
const taskKey = () => "engdaily_tasks_" + new Date().toISOString().slice(0, 10);

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(storeKey) || '{"done":{}}'); }
  catch { return { done: {} }; }
}
function saveProgress(state) { localStorage.setItem(storeKey, JSON.stringify(state)); }

// Ojo usado: si revelaste el ingles, esa frase no cuenta como dominada
// hasta reintentarla sin mirar. Se guarda para que valga entre sesiones.
function loadPeeked() {
  try { return JSON.parse(localStorage.getItem(peekKey) || '{}'); }
  catch { return {}; }
}
function savePeeked(peeked) { localStorage.setItem(peekKey, JSON.stringify(peeked)); }
let peeked = loadPeeked();

// Primer nivel sin completar: todo lo posterior sigue bloqueado.
function firstIncompleteIdx() {
  for (let i = 0; i < LEVELS.length; i++) {
    if (levelDoneCount(LEVELS[i]) < LEVELS[i].phrases.length) return i;
  }
  return LEVELS.length;
}

let state = loadProgress();
let activeLevel = LEVELS[0].id;

function normalize(text) {
  return (text || "").toLowerCase().trim().replace(/[.,!?¿?¡!]/g, "").replace(/\s+/g, " ");
}

function totalPhrases() { return LEVELS.reduce((n, l) => n + l.phrases.length, 0); }
function doneCount() { return Object.keys(state.done).length; }

function levelDoneCount(level) {
  return level.phrases.filter((p) => state.done[level.id + ":" + p.id]).length;
}

function currentLevelLabel() {
  for (const level of LEVELS) {
    if (levelDoneCount(level) < level.phrases.length) return level.label;
  }
  return "B2 completado";
}

function renderTabs() {
  // Si el nivel activo quedo bloqueado por la nueva regla, vuelve al primero sin completar.
  const firstOpen = firstIncompleteIdx();
  if (firstOpen < LEVELS.length && LEVELS.findIndex((l) => l.id === activeLevel) > firstOpen) {
    activeLevel = LEVELS[firstOpen].id;
  }
  const box = document.getElementById("levelTabs");
  box.innerHTML = "";
  LEVELS.forEach((level, idx) => {
    const done = levelDoneCount(level);
    const locked = idx > firstOpen;
    const btn = document.createElement("button");
    btn.className = "tab" + (level.id === activeLevel ? " active" : "");
    btn.textContent = (locked ? "Bloqueado · " : "") + level.label + " (" + done + "/" + level.phrases.length + ")";
    btn.disabled = locked;
    btn.title = locked ? "Completa el nivel anterior sin mirar para desbloquear" : "Practicar este nivel";
    btn.onclick = () => { activeLevel = level.id; renderAll(); };
    box.appendChild(btn);
  });
}

function speak(text) {
  try {
    speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 0.85;
    speechSynthesis.speak(utter);
  } catch { alert("Tu navegador no soporta audio. Lee en voz alta 3 veces."); }
}

function renderLevelInfo() {
  const level = LEVELS.find((l) => l.id === activeLevel);
  document.getElementById("levelInfo").innerHTML =
    "<strong>" + level.label + "</strong><br>" + level.goal + "<br><span class='hint'>" + level.canDo + "</span>";
  const done = levelDoneCount(level);
  const pct = Math.round((done / level.phrases.length) * 100);
  document.getElementById("levelProgress").style.width = pct + "%";
  document.getElementById("levelProgressText").textContent = "· " + done + "/" + level.phrases.length;
}

function renderPhrases() {
  const level = LEVELS.find((l) => l.id === activeLevel);
  const list = document.getElementById("phraseList");
  list.innerHTML = "";
  level.phrases.forEach((phrase) => {
    const key = level.id + ":" + phrase.id;
    const isDone = !!state.done[key];
    const card = document.createElement("div");
    card.className = "phrase" + (isDone ? " done" : "");
    card.innerHTML =
      "<p class='es-main'>" + phrase.es + "</p>" +
      "<button data-act='toggle' aria-label='Mostrar ingles' title='Mostrar ingles'>👁</button>" +
      "<div data-part='hidden' hidden>" +
      "<p class='en'>" + phrase.en + "</p>" +
      "<div class='tip'>Tip: " + phrase.tip + "</div>" +
      "</div>" +
      "<div class='row'>" +
      "<button data-act='listen'>Escuchar</button>" +
      "<input type='text' placeholder='Escribe aqui el INGLES del español de arriba…' aria-label='Escribe la frase en ingles' />" +
      "<button class='primary' data-act='check'>Comprobar</button>" +
      "<button data-act='reset'>Reintentar</button>" +
      "</div><p class='msg'></p>";

    const input = card.querySelector("input");
    const msg = card.querySelector(".msg");
    const hiddenPart = card.querySelector("[data-part=hidden]");
    const toggleBtn = card.querySelector("[data-act=toggle]");
    toggleBtn.onclick = () => {
      const isHidden = hiddenPart.hidden;
      hiddenPart.hidden = !isHidden;
      toggleBtn.textContent = isHidden ? "🙈" : "👁";
      toggleBtn.setAttribute("aria-label", isHidden ? "Ocultar ingles" : "Mostrar ingles");
      if (isHidden) {
        // Revelaste el ingles: este intento ya no cuenta, aunque salga verde.
        peeked[key] = true; savePeeked(peeked);
      }
    };
    if (isDone) msg.innerHTML = "<span class='ok'>Dominada. Repasala manana para no olvidarla.</span>";

    card.querySelector("[data-act=listen]").onclick = () => speak(phrase.en);
    card.querySelector("[data-act=reset]").onclick = () => {
      delete state.done[key]; delete peeked[key];
      saveProgress(state); savePeeked(peeked); renderAll();
    };
    card.querySelector("[data-act=check]").onclick = () => {
      if (normalize(input.value) === normalize(phrase.en)) {
        if (peeked[key]) {
          msg.textContent = "Verde pero no cuenta: usaste el ojito en este intento. Dale Reintentar, tapala y escribela de memoria para dominarla.";
          msg.className = "msg bad";
          return;
        }
        state.done[key] = true; saveProgress(state);
        // Si se completo el nivel, avanza solo al siguiente desbloqueado.
        const level = LEVELS.find((l) => l.id === activeLevel);
        if (levelDoneCount(level) >= level.phrases.length) {
          const next = LEVELS[LEVELS.findIndex((l) => l.id === activeLevel) + 1];
          if (next) activeLevel = next.id;
        }
        renderAll();
      } else if (normalize(input.value) === normalize(phrase.es)) {
        msg.textContent = "Eso esta en espanol. Aqui va en INGLES: dale al ojito para verla, tapala y escribela de memoria: \"" + phrase.en + "\"";
        msg.className = "msg bad";
      } else {
        msg.textContent = "Casi. Escucha de nuevo, fijate en I mayuscula y el punto final. Intenta otra vez.";
        msg.className = "msg bad";
      }
    };
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") card.querySelector("[data-act=check]").click();
    });
    list.appendChild(card);
  });
}

function renderGlobal() {
  const total = totalPhrases();
  const done = doneCount();
  const pct = total ? Math.round((done / total) * 100) : 0;
  document.getElementById("globalProgress").style.width = pct + "%";
  document.getElementById("globalText").textContent = done + " / " + total + " frases dominadas";
  document.getElementById("currentLevelBadge").textContent = "Tu nivel: " + currentLevelLabel();
  // Racha simple: dias distintos con al menos 1 frase.
  const days = JSON.parse(localStorage.getItem("engdaily_days") || "[]");
  document.getElementById("streak").textContent = days.length + " días";
}

function markDay() {
  const today = new Date().toISOString().slice(0, 10);
  let days = JSON.parse(localStorage.getItem("engdaily_days") || "[]");
  if (!days.includes(today)) {
    days.push(today);
    localStorage.setItem("engdaily_days", JSON.stringify(days));
  }
}

function renderTasks() {
  const saved = JSON.parse(localStorage.getItem(taskKey()) || "{}");
  document.querySelectorAll("[data-task]").forEach((box) => {
    box.checked = !!saved[box.dataset.task];
    box.onchange = () => {
      const current = JSON.parse(localStorage.getItem(taskKey()) || "{}");
      current[box.dataset.task] = box.checked;
      localStorage.setItem(taskKey(), JSON.stringify(current));
    };
  });
}

const originalSave = saveProgress;
saveProgress = function (s) {
  if (Object.keys(s.done).length > 0) markDay();
  originalSave(s);
};

function renderAll() { renderTabs(); renderLevelInfo(); renderPhrases(); renderGlobal(); renderTasks(); }
renderAll();
