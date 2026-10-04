// English Dev Daily - logica en JS simple. Comentarios en espanol, variables en ingles.
// Niveles oficiales CEFR Pre-A1 a B2, vocabulario general. Progreso en localStorage.
// La app NO certifica: al completar un nivel te indica el test gratis (EF SET).

const LEVELS = [
  {
    id: "prea1",
    label: "Pre-A1 · Starter",
    goal: "Meta: presentarte sin mirar. Al dominarlas pasas a A1 (todavia no eres A1).",
    canDo: "Puedes decir tu nombre, de donde eres y donde trabajas.",
    phrases: [
      { id: "p-name", en: "My name is Alex.", es: "Me llamo Alex.", tip: "I siempre en mayuscula. My = mi. Cambia Alex por tu nombre." },
      { id: "p-from", en: "I am from Colombia.", es: "Soy de Colombia.", tip: "I am = yo soy. From = de. Cambia por tu pais o ciudad." },
      { id: "p-dev", en: "I am a student.", es: "Soy estudiante.", tip: "A + singular: a student. Cambia por tu rol: developer, teacher..." },
      { id: "p-work", en: "I work every day.", es: "Trabajo todos los dias.", tip: "Work con k = trabajo. Every day = todos los dias." },
      { id: "p-study", en: "I study English every day.", es: "Estudio ingles todos los dias.", tip: "Study = estudiar. Tu habito de 1 hora." }
    ]
  },
  {
    id: "a1",
    label: "A1 · Inicial",
    goal: "Meta oficial A1: saludar, datos personales, familia, precios y hora. Al completar, valida con EF SET gratis.",
    canDo: "Puedes presentarte, hablar de tu familia y desenvolverte comprando o preguntando la hora.",
    phrases: [
      { id: "a1-hello", en: "Hello, how are you?", es: "Hola, como estas?", tip: "How are you = como estas." },
      { id: "a1-fine", en: "I am fine, thank you.", es: "Estoy bien, gracias.", tip: "Fine = bien. Thank you = gracias." },
      { id: "a1-live", en: "I live in Colombia.", es: "Vivo en Colombia.", tip: "Live = vivir. Cambia por tu ciudad." },
      { id: "a1-family", en: "I have two brothers.", es: "Tengo dos hermanos.", tip: "I have = yo tengo. Cambia el numero." },
      { id: "a1-time", en: "What time is it?", es: "Que hora es?", tip: "Pregunta oficial A1. Respuesta: It is three o'clock." },
      { id: "a1-price", en: "How much is it?", es: "Cuanto cuesta?", tip: "How much = cuanto. Clave para compras." },
      { id: "a1-help", en: "I need help, please.", es: "Necesito ayuda, por favor.", tip: "I need = necesito." },
      { id: "a1-repeat", en: "Can you repeat, please?", es: "Puedes repetir, por favor?", tip: "Can you = puedes. Usala sin pena." },
      { id: "a1-understand", en: "I do not understand.", es: "No entiendo.", tip: "Do not = no. Mejor que quedarse callado." }
    ]
  },
  {
    id: "a2",
    label: "A2 · Basico",
    goal: "Meta oficial A2: pasado, futuro, rutinas, viajes y gustos. Al completar, valida con EF SET gratis.",
    canDo: "Puedes contar que hiciste, tus planes y describir experiencias simples.",
    phrases: [
      { id: "a2-yesterday", en: "Yesterday I visited my grandmother.", es: "Ayer visite a mi abuela.", tip: "Yesterday = ayer. Visited = visite (pasado -ed)." },
      { id: "a2-today", en: "Today I cook lunch at home.", es: "Hoy cocino el almuerzo en casa.", tip: "Today = hoy. Presente para rutinas." },
      { id: "a2-tomorrow", en: "Tomorrow I will visit the doctor.", es: "Manana visitare al medico.", tip: "Will = futuro. I will = yo hare." },
      { id: "a2-trip", en: "I went to the beach last year.", es: "Fui a la playa el ano pasado.", tip: "Went = fui (pasado irregular de go)." },
      { id: "a2-food", en: "The food was delicious.", es: "La comida estaba deliciosa.", tip: "Was = era/estaba (pasado de is)." },
      { id: "a2-everyday", en: "I drink coffee every morning.", es: "Tomo cafe cada manana.", tip: "Every morning = cada manana. Rutina." },
      { id: "a2-like", en: "I like music and movies.", es: "Me gustan la musica y las peliculas.", tip: "I like = me gusta(n). Cambia por tus gustos." }
    ]
  },
  {
    id: "b1",
    label: "B1 · Intermedio",
    goal: "Meta oficial B1: opinions, planes, experiencias y explicar problemas. Al completar, valida con EF SET gratis.",
    canDo: "Puedes dar tu opinion, hablar de planes y explicar un problema con detalle.",
    phrases: [
      { id: "b1-opinion", en: "In my opinion, this is a good idea.", es: "En mi opinion, esta es una buena idea.", tip: "In my opinion = en mi opinion. Opinion propia." },
      { id: "b1-plan", en: "I plan to travel next month.", es: "Planeo viajar el proximo mes.", tip: "I plan to = planeo. Next month = proximo mes." },
      { id: "b1-problem", en: "The problem is that the page is slow.", es: "El problema es que la pagina esta lenta.", tip: "The problem is that = el problema es que. Explica causa." },
      { id: "b1-reason", en: "I did not go because I was tired.", es: "No fui porque estaba cansado.", tip: "Because = porque. I did not = no fui." },
      { id: "b1-experience", en: "It was an interesting experience.", es: "Fue una experiencia interesante.", tip: "Interesting = interesante.-it suffixes." },
      { id: "b1-meeting", en: "Can we have a meeting tomorrow?", es: "Podemos tener una reunion manana?", tip: "Can we = podemos (propuesta educada)." },
      { id: "b1-opinion2", en: "I think English is easier than I thought.", es: "Creo que el ingles es mas facil de lo que pensaba.", tip: "I think = creo. Easier than = mas facil que." }
    ]
  },
  {
    id: "b2",
    label: "B2 · Avanzado",
    goal: "Meta oficial B2: argumentar, explicar causas, uso del condicional y expresiones Idiomaticas. Al completar, valida con EF SET gratis.",
    canDo: "Puedes defender una opinion, explicar decisiones y desenvolverte con fluidez en temasabstractos.",
    phrases: [
      { id: "b2-arg", en: "Although it was difficult, I managed to finish it.", es: "Aunque fue dificil, logre terminarlo.", tip: "Although = aunque. I managed to = logre." },
      { id: "b2-cond", en: "If I had more time, I would learn another language.", es: "Si tuviera mas tiempo, aprenderia otro idioma.", tip: "If + pasad: If I had, I would. Condicional 2." },
      { id: "b2-cause", en: "The main reason is that it was too expensive.", es: "La razon principal es que era demasiado caro.", tip: "The main reason is that = la razon principal es que." },
      { id: "b2-habit", en: "I used to work in an office, but now I work from home.", es: "Solia trabajar en una oficina, pero ahora trabajo desde casa.", tip: "Used to = solia (habito pasado)." },
      { id: "b2-idiom", en: "It depends on the situation.", es: "Depende de la situacion.", tip: "It depends on = depende de. Frase util B2." },
      { id: "b2-advice", en: "You should consider taking a break.", es: "Deberias considerar tomar un descanso.", tip: "You should = deberias. Consider = considerar." },
      { id: "b2-regret", en: "I wish I had started earlier.", es: "Ojalá hubiera empezado antes.", tip: "I wish = ojalá. Expresa deseo sobre el pasado." }
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
  const done = levelDoneCount(level);
  const completed = done >= level.phrases.length;
  const banner = completed
    ? "<div class='cert-ok'><strong>Nivel completado.</strong> Esta app no certifica, pero ya puedes validar tu nivel real gratis en <a href='https://www.efset.org/' target='_blank' rel='noopener'>EF SET</a> (30 min, te da A1-C2 con certificado). Si te da este nivel o mas, ya eres oficialmente " + level.label.split(" · ")[0] + ".</div>"
    : "";
  document.getElementById("levelInfo").innerHTML =
    "<strong>" + level.label + "</strong><br>" + level.goal + "<br><span class='hint'>" + level.canDo + "</span>" + banner;
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
