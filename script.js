// Banco del quiz: 30 preguntas de opción múltiple, 10 abiertas y 10 de opinión.
const questions = [
  { type: "multiple", question: "¿Qué es la tipología textual?", options: ["Clasificación de textos según su función y estructura", "Un tipo de narración literaria", "La forma de escribir poesía", "Un método de análisis gramatical"], answer: 0 },
  { type: "multiple", question: "¿Cuáles son los tipos de textos principales que estudiaremos?", options: ["Narrativo, descriptivo, instructivo, argumentativo y expositivo", "Poético, lírico y dramático", "Académico, científico y periodístico", "Formal e informal"], answer: 0 },
  { type: "multiple", question: "¿Cuál es la finalidad principal de un texto narrativo?", options: ["Relatar una serie de hechos", "Defender una opinión", "Dar instrucciones", "Explicar un concepto científico"], answer: 0 },
  { type: "multiple", question: "¿Qué elemento suele organizar los hechos de un texto narrativo?", options: ["Una secuencia de inicio, desarrollo y desenlace", "Una lista de pasos sin orden", "Una tesis con evidencias", "Una tabla de datos"], answer: 0 },
  { type: "multiple", question: "¿Cuál de estos es un ejemplo de texto narrativo?", options: ["Una novela", "Una receta", "Un diccionario", "Un anuncio de opinión"], answer: 0 },
  { type: "multiple", question: "¿Qué tipo de narrador cuenta una historia usando “yo”?", options: ["Narrador en primera persona", "Narrador omnisciente", "Narrador externo objetivo", "Narrador descriptivo"], answer: 0 },
  { type: "multiple", question: "¿Qué busca principalmente un texto descriptivo?", options: ["Representar cómo es alguien o algo", "Convencer al lector de una postura", "Relatar acciones en orden", "Indicar cómo realizar una tarea"], answer: 0 },
  { type: "multiple", question: "¿Qué recursos son frecuentes en una descripción?", options: ["Adjetivos y detalles sensoriales", "Conectores de causa solamente", "Órdenes numeradas", "Personajes y diálogos obligatorios"], answer: 0 },
  { type: "multiple", question: "¿Cuál es un ejemplo de texto descriptivo?", options: ["Un retrato detallado de una persona", "Una fábula", "Un instructivo para armar una silla", "Un debate"], answer: 0 },
  { type: "multiple", question: "¿Qué caracteriza una descripción objetiva?", options: ["Presenta rasgos verificables sin expresar sentimientos personales", "Exagera las emociones del autor", "Defiende una opinión con razones", "Cuenta sucesos imaginarios"], answer: 0 },
  { type: "multiple", question: "¿Para qué sirve un texto instructivo o prescriptivo?", options: ["Guiar acciones mediante indicaciones o reglas", "Narrar una aventura", "Describir un paisaje", "Presentar una teoría sin ejemplos"], answer: 0 },
  { type: "multiple", question: "¿Cuál es un ejemplo de texto instructivo?", options: ["Una receta de cocina", "Una novela de misterio", "Un poema lírico", "Una reseña argumentativa"], answer: 0 },
  { type: "multiple", question: "¿Qué forma verbal aparece con frecuencia en las instrucciones?", options: ["El imperativo: mezcla, corta, añade", "El pasado: mezcló, cortó, añadió", "El condicional: mezclaría, cortaría", "El futuro perfecto"], answer: 0 },
  { type: "multiple", question: "¿Qué ayuda a ordenar los pasos de un instructivo?", options: ["Conectores como primero, después y finalmente", "Metáforas y rimas", "Una tesis y una conclusión", "Descripciones de los personajes"], answer: 0 },
  { type: "multiple", question: "¿Qué busca un texto prescriptivo, como un reglamento?", options: ["Establecer normas o pautas que deben cumplirse", "Contar hechos ficticios", "Describir un objeto", "Entretener con una historia"], answer: 0 },
  { type: "multiple", question: "¿Cuál es el propósito principal de un texto argumentativo?", options: ["Convencer o persuadir con razones", "Enumerar instrucciones", "Pintar un lugar con palabras", "Relatar una secuencia de aventuras"], answer: 0 },
  { type: "multiple", question: "¿Cómo se llama la idea central que se defiende en un texto argumentativo?", options: ["Tesis", "Escenario", "Acotación", "Receta"], answer: 0 },
  { type: "multiple", question: "¿Qué función cumplen los argumentos?", options: ["Apoyar y justificar la tesis", "Presentar a los personajes", "Dar instrucciones de uso", "Describir el clima"], answer: 0 },
  { type: "multiple", question: "¿Cuál es un ejemplo de texto argumentativo?", options: ["Un ensayo que defiende una postura", "Una lista de compras", "Un cuento de hadas", "La descripción de un edificio"], answer: 0 },
  { type: "multiple", question: "¿Qué estrategia fortalece un argumento?", options: ["Aportar datos, ejemplos o razones pertinentes", "Repetir la tesis sin explicarla", "Usar instrucciones numeradas", "Añadir detalles de color y tamaño"], answer: 0 },
  { type: "multiple", question: "¿Cuál es el propósito de un texto expositivo?", options: ["Informar y explicar un tema con claridad", "Convencer mediante emociones únicamente", "Dar órdenes al lector", "Crear suspenso con personajes"], answer: 0 },
  { type: "multiple", question: "¿Qué tono suele usar un texto expositivo?", options: ["Claro y objetivo", "Misterioso y fantástico", "Mandón y amenazante", "Humorístico en todos los casos"], answer: 0 },
  { type: "multiple", question: "¿Cuál es un ejemplo de texto expositivo?", options: ["Un artículo científico que explica un fenómeno", "Un cuento de aventuras", "Una carta para convencer a un amigo", "Las reglas de un juego"], answer: 0 },
  { type: "multiple", question: "¿Qué recurso puede ayudar a explicar un tema en un texto expositivo?", options: ["Definiciones y ejemplos", "Diálogos de personajes imaginarios solamente", "Órdenes y advertencias", "Rimas consonantes"], answer: 0 },
  { type: "multiple", question: "¿Qué diferencia general hay entre un texto expositivo y uno argumentativo?", options: ["El expositivo explica; el argumentativo defiende una postura", "El expositivo siempre narra; el argumentativo siempre describe", "El expositivo da recetas; el argumentativo da reglas", "No tienen ninguna diferencia"], answer: 0 },
  { type: "multiple", question: "¿Qué tipo de texto predomina en una biografía?", options: ["Narrativo", "Instructivo", "Descriptivo únicamente", "Prescriptivo"], answer: 0 },
  { type: "multiple", question: "¿Qué tipo de texto predomina en un manual de uso?", options: ["Instructivo", "Narrativo", "Argumentativo", "Lírico"], answer: 0 },
  { type: "multiple", question: "¿Qué tipo de texto predomina en una enciclopedia al explicar un concepto?", options: ["Expositivo", "Narrativo", "Prescriptivo", "Dramático"], answer: 0 },
  { type: "multiple", question: "¿Qué tipo de texto usarías para defender que se protejan los parques?", options: ["Argumentativo", "Instructivo", "Descriptivo", "Narrativo"], answer: 0 },
  { type: "multiple", question: "¿Qué tipo de texto usarías para mostrar con detalle cómo es una playa?", options: ["Descriptivo", "Argumentativo", "Prescriptivo", "Expositivo"], answer: 0 },
  { type: "open", question: "Define brevemente qué es un texto narrativo.", answer: "Relato de hechos reales o ficticios" },
  { type: "open", question: "Escribe un ejemplo de texto descriptivo.", answer: "Descripción de un paisaje" },
  { type: "open", question: "¿Cuál es el objetivo principal de un texto argumentativo?", answer: "Convencer al lector" },
  { type: "open", question: "¿Qué caracteriza a un texto expositivo?", answer: "Explicar un tema de manera clara y objetiva" },
  { type: "open", question: "Da un ejemplo de texto instructivo.", answer: "Receta de cocina" },
  { type: "open", question: "¿Qué busca un texto descriptivo?", answer: "Representar con detalle personas, objetos o lugares" },
  { type: "open", question: "¿Qué es la tipología textual?", answer: "Clasificación de textos según su función y estructura" },
  { type: "open", question: "Escribe un ejemplo de texto narrativo.", answer: "Novela" },
  { type: "open", question: "Escribe un ejemplo de texto expositivo.", answer: "Artículo científico" },
  { type: "open", question: "Escribe un ejemplo de texto argumentativo.", answer: "Ensayo persuasivo" },
  { type: "opinion", question: "¿Por qué crees que ayuda reconocer la tipología textual antes de leer?", labels: ["el propósito", "la estructura", "la comprensión"], rubric: [["proposito", "objetivo", "intencion", "informar", "convencer", "entretener"], ["estructura", "organizacion", "orden", "forma", "tipo"], ["comprender", "interpretar", "entender", "lectura", "lector"]] },
  { type: "opinion", question: "¿Qué hace que una narración te resulte interesante? Explica tu opinión.", labels: ["los personajes", "los hechos o conflictos", "el interés o las emociones"], rubric: [["personaje", "protagonista", "narrador", "persona"], ["conflicto", "problema", "aventura", "suceso", "hecho", "historia", "accion"], ["emocion", "interes", "suspenso", "identificar", "imaginar", "entretener"]] },
  { type: "opinion", question: "¿Qué detalles elegirías para describir un lugar y ayudar a otra persona a imaginarlo?", labels: ["los sentidos", "las características", "la imagen del lugar"], rubric: [["sentido", "color", "olor", "sonido", "textura", "luz"], ["detalle", "adjetivo", "caracteristica", "apariencia", "tamano", "forma"], ["imaginar", "visualizar", "describir", "lugar", "paisaje", "ambiente"]] },
  { type: "opinion", question: "En tu opinión, ¿qué hace que unas instrucciones sean claras y fáciles de seguir?", labels: ["el orden de los pasos", "las acciones indicadas", "los detalles que orientan"], rubric: [["paso", "orden", "secuencia", "primero", "despues", "finalmente", "numerar"], ["verbo", "accion", "indicar", "instruccion", "explicar", "especificar"], ["material", "herramienta", "ejemplo", "cantidad", "evitar", "confusion", "claro"]] },
  { type: "opinion", question: "¿Qué hace convincente un argumento? Explica qué valoras cuando alguien defiende una idea.", labels: ["las razones o evidencias", "la idea defendida", "la coherencia o credibilidad"], rubric: [["razon", "evidencia", "dato", "ejemplo", "prueba"], ["tesis", "postura", "opinion", "idea", "afirmacion"], ["fuente", "confiable", "coherente", "justificar", "explicar", "credibilidad"]] },
  { type: "opinion", question: "¿Qué cualidades debería tener un texto expositivo para explicar bien un tema?", labels: ["la claridad y el orden", "la información objetiva", "los ejemplos o explicaciones"], rubric: [["claridad", "claro", "sencillo", "orden"], ["dato", "informacion", "fuente", "objetivo", "objetiva", "hecho", "evidencia"], ["ejemplo", "definicion", "explicacion", "tema", "termino", "conector"]] },
  { type: "opinion", question: "¿Cómo combinarías narración y descripción en un mismo texto?", labels: ["contar una historia", "describir detalles", "crear una escena para el lector"], rubric: [["historia", "relatar", "suceso", "accion", "personaje"], ["describir", "detalle", "lugar", "apariencia", "ambiente", "caracteristica"], ["lector", "imaginar", "escena", "ambientar", "sentir"]] },
  { type: "opinion", question: "Si quisieras enseñar una habilidad a otra persona, ¿qué tipo de texto elegirías y por qué?", labels: ["el texto instructivo o una guía", "los pasos o acciones", "ayudar a aprender o hacer algo"], rubric: [["instructivo", "prescriptivo", "instruccion", "manual", "receta", "guia"], ["orden", "paso", "accion", "indicar", "secuencia"], ["aprender", "hacer", "seguir", "claro", "facil", "lograr"]] },
  { type: "opinion", question: "¿Por qué una misma idea puede presentarse con diferentes tipos de texto? Da un ejemplo.", labels: ["el público o propósito", "la forma de comunicar", "un tema o ejemplo"], rubric: [["audiencia", "lector", "proposito", "objetivo", "intencion"], ["narrar", "describir", "explicar", "convencer", "instruir", "forma"], ["ejemplo", "reciclaje", "agua", "escuela", "tema", "misma", "cambiar"]] },
  { type: "opinion", question: "¿Qué tipo de texto te resulta más útil en tu vida diaria y en qué situación lo usarías?", labels: ["un tipo textual", "una situación cotidiana", "un ejemplo de uso"], rubric: [["narrativo", "descriptivo", "instructivo", "prescriptivo", "argumentativo", "expositivo", "texto"], ["situacion", "vida", "diaria", "usar", "util", "sirve", "necesito"], ["ejemplo", "receta", "noticia", "manual", "ensayo", "historia", "explicar", "opinion"]] },
];

// Estado y referencias a los elementos principales de la página.
const state = { index: 0, score: 0, seconds: 15, locked: false, timerId: null, nextId: null };
const introScreen = document.getElementById("introScreen");
const gameScreen = document.getElementById("gameScreen");
const resultScreen = document.getElementById("resultScreen");
const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");
const questionNumber = document.getElementById("questionNumber");
const totalQuestions = document.getElementById("totalQuestions");
const timer = document.getElementById("timer");
const timerText = document.getElementById("timerText");
const progressTrack = document.getElementById("progressTrack");
const progressFill = document.getElementById("progressFill");
const questionType = document.getElementById("questionType");
const questionText = document.getElementById("questionText");
const answerArea = document.getElementById("answerArea");
const answerFeedback = document.getElementById("answerFeedback");
const scoreCount = document.getElementById("scoreCount");
const resultTotal = document.getElementById("resultTotal");
const soundToggle = document.getElementById("soundToggle");
const soundLabel = document.getElementById("soundLabel");
const soundIcon = document.getElementById("soundIcon");
const backgroundMusic = document.getElementById("backgroundMusic");

// Web Audio queda reservado para los efectos breves del quiz.
let audioContext = null;
let masterVolume = null;
let soundEnabled = false;

totalQuestions.textContent = String(questions.length);
resultTotal.textContent = String(questions.length);
progressTrack.setAttribute("aria-valuemax", String(questions.length));

// Comienza una partida nueva y limpia cualquier temporizador anterior.
function startQuiz() {
  clearInterval(state.timerId);
  clearTimeout(state.nextId);
  state.index = 0;
  state.score = 0;
  state.seconds = 15;
  state.locked = false;
  scoreCount.textContent = "0";
  introScreen.hidden = true;
  resultScreen.hidden = true;
  gameScreen.hidden = false;
  playSoundEffect("start");
  renderQuestion();
}

// Crea el audio después de una acción del usuario, como exigen los navegadores.
function prepareAudio() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return false;
  if (!audioContext) {
    audioContext = new AudioContextClass();
    masterVolume = audioContext.createGain();
    masterVolume.gain.value = 0.0001;
    masterVolume.connect(audioContext.destination);
  }
  return true;
}

// Activa o silencia a la vez el MP3 de fondo y los efectos del quiz.
async function toggleSound() {
  if (!soundEnabled) {
    if (!prepareAudio()) {
      soundLabel.textContent = "Audio no disponible";
      return;
    }
    soundEnabled = true;
    soundToggle.setAttribute("aria-pressed", "true");
    soundToggle.setAttribute("aria-label", "Desactivar música y sonidos");
    soundLabel.textContent = "Música activada";
    soundIcon.textContent = "♫";
    try {
      await audioContext.resume();
      // Mantiene el volumen del audio de fondo alto, como pidió la persona.
      masterVolume.gain.setTargetAtTime(0.72, audioContext.currentTime, 0.12);
      backgroundMusic.volume = 0.88;
      const playback = backgroundMusic.play();
      if (playback) await playback;
      playSoundEffect("start");
    } catch {
      soundEnabled = false;
      backgroundMusic.pause();
      soundToggle.setAttribute("aria-pressed", "false");
      soundToggle.setAttribute("aria-label", "Activar música y sonidos");
      soundLabel.textContent = "Activar música";
      if (masterVolume) masterVolume.gain.setTargetAtTime(0.0001, audioContext.currentTime, 0.06);
    }
    return;
  }

  soundEnabled = false;
  soundToggle.setAttribute("aria-pressed", "false");
  soundToggle.setAttribute("aria-label", "Activar música y sonidos");
  soundLabel.textContent = "Activar música";
  soundIcon.textContent = "♫";
  backgroundMusic.pause();
  if (audioContext && masterVolume) masterVolume.gain.setTargetAtTime(0.0001, audioContext.currentTime, 0.06);
}

// Genera una nota con entrada y salida suaves para que los sonidos no sean bruscos.
function playTone(frequency, duration, volume, wave = "sine") {
  if (!soundEnabled || !audioContext || !masterVolume) return;
  const oscillator = audioContext.createOscillator();
  const envelope = audioContext.createGain();
  const now = audioContext.currentTime;
  oscillator.type = wave;
  oscillator.frequency.setValueAtTime(frequency, now);
  envelope.gain.setValueAtTime(0.0001, now);
  envelope.gain.exponentialRampToValueAtTime(volume, now + 0.025);
  envelope.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  oscillator.connect(envelope);
  envelope.connect(masterVolume);
  oscillator.start(now);
  oscillator.stop(now + duration + 0.04);
}

// Sonidos cortos para acompañar las acciones importantes del quiz.
function playSoundEffect(type) {
  if (!soundEnabled) return;
  const effects = {
    start: [[659.25, 0.11], [783.99, 0.16]],
    correct: [[659.25, 0.12], [783.99, 0.15], [987.77, 0.22]],
    wrong: [[392, 0.16], [329.63, 0.22]],
    timeout: [[440, 0.16], [349.23, 0.26]],
    finish: [[523.25, 0.13], [659.25, 0.13], [783.99, 0.13], [1046.5, 0.34]],
  };
  (effects[type] || []).forEach(([frequency, duration], index) => {
    // Escalonar las notas convierte cada efecto en una pequeña melodía.
    window.setTimeout(() => playTone(frequency, duration, 0.16, "triangle"), index * 115);
  });
}

// Dibuja la pregunta y sus controles según el tipo de respuesta.
function renderQuestion() {
  const item = questions[state.index];
  state.locked = false;
  state.seconds = 15;
  questionNumber.textContent = String(state.index + 1);
  questionType.textContent = item.type === "multiple" ? "Opción múltiple" : item.type === "opinion" ? "Tu opinión" : "Respuesta abierta";
  questionText.textContent = item.question;
  answerFeedback.textContent = "";
  answerFeedback.className = "answer-feedback";
  progressFill.style.width = `${(state.index / questions.length) * 100}%`;
  progressTrack.setAttribute("aria-valuenow", String(state.index));
  answerArea.innerHTML = item.type === "multiple" ? createOptions(item) : item.type === "opinion" ? createOpinionAnswer() : createOpenAnswer();

  if (item.type === "multiple") {
    answerArea.querySelectorAll(".answer-button").forEach((button) => {
      button.addEventListener("click", () => chooseAnswer(Number(button.dataset.option)));
    });
  } else {
    const form = answerArea.querySelector("form");
    const input = answerArea.querySelector("input, textarea");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (item.type === "opinion") checkOpinionAnswer(input.value);
      else checkOpenAnswer(input.value);
    });
    input.focus({ preventScroll: true });
  }

  // El límite de 15 segundos solo aplica a la opción múltiple.
  const hasTimer = item.type === "multiple";
  timer.hidden = !hasTimer;
  timer.classList.remove("is-urgent");
  if (hasTimer) startTimer();
  else clearInterval(state.timerId);
}

// Crea opciones con una letra para que la respuesta sea fácil de identificar.
function createOptions(item) {
  const letters = ["A", "B", "C", "D"];
  // Mezcla el orden para que la respuesta correcta no aparezca siempre en el mismo lugar.
  const order = item.options.map((_, index) => index);
  for (let index = order.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [order[index], order[randomIndex]] = [order[randomIndex], order[index]];
  }
  return order.map((optionIndex, displayIndex) => `
    <button class="answer-button" type="button" data-option="${optionIndex}">
      <span class="answer-letter">${letters[displayIndex]}</span><span>${item.options[optionIndex]}</span>
    </button>
  `).join("");
}

// Crea el formulario de las preguntas abiertas; Enter también permite verificar.
function createOpenAnswer() {
  return `
    <form class="open-form" autocomplete="off">
      <input class="open-input" type="text" name="answer" placeholder="Escribe tu respuesta aquí…" aria-label="Tu respuesta" />
      <button class="verify-button" type="submit">Verificar <span aria-hidden="true">✓</span></button>
    </form>
  `;
}

// Las preguntas de opinión usan un área de texto para que la persona explique su razonamiento.
function createOpinionAnswer() {
  return `
    <form class="open-form opinion-form" autocomplete="off">
      <textarea class="open-input opinion-input" name="answer" rows="3" maxlength="600" placeholder="Escribe tu opinión y explica tu idea…" aria-label="Escribe tu opinión"></textarea>
      <button class="verify-button" type="submit">Verificar <span aria-hidden="true">✓</span></button>
    </form>
    <p class="opinion-note">Se valoran las ideas relacionadas con la pregunta, aunque las expreses con tus propias palabras.</p>
  `;
}

// Cada pregunta tiene su propio reloj de quince segundos.
function startTimer() {
  clearInterval(state.timerId);
  timer.classList.remove("is-urgent");
  updateTimerDisplay();
  state.timerId = window.setInterval(() => {
    state.seconds -= 1;
    updateTimerDisplay();
    if (state.seconds <= 3 && state.seconds > 0) timer.classList.add("is-urgent");
    if (state.seconds <= 0) handleTimeout();
  }, 1000);
}

function updateTimerDisplay() {
  timerText.textContent = `Tiempo: ${state.seconds}s`;
}

// Si el reloj llega a cero, se marca como incorrecta y el quiz avanza solo.
function handleTimeout() {
  if (state.locked) return;
  state.locked = true;
  clearInterval(state.timerId);
  timer.classList.add("is-urgent");
  playSoundEffect("timeout");
  const item = questions[state.index];
  if (item.type === "multiple") answerFeedback.textContent = `¡Se acabó el tiempo! Respuesta: ${item.options[item.answer]}`;
  else if (item.type === "opinion") answerFeedback.textContent = `¡Se acabó el tiempo! No hay una sola opinión correcta. Puedes relacionar tu idea con ${item.labels.join(", ")}.`;
  else answerFeedback.textContent = `¡Se acabó el tiempo! Respuesta: ${item.answer}`;
  answerFeedback.className = "answer-feedback is-timeout";
  lockAnswers();
  queueNextQuestion();
}

// Evalúa una opción y muestra la correcta antes de avanzar.
function chooseAnswer(selectedIndex) {
  if (state.locked) return;
  const item = questions[state.index];
  const buttons = [...answerArea.querySelectorAll(".answer-button")];
  buttons.find((button) => Number(button.dataset.option) === item.answer)?.classList.add("is-correct");
  if (selectedIndex === item.answer) {
    recordCorrectAnswer();
    playSoundEffect("correct");
    answerFeedback.textContent = "¡Muy bien! Esa es la respuesta correcta.";
    answerFeedback.className = "answer-feedback";
  } else {
    playSoundEffect("wrong");
    buttons.find((button) => Number(button.dataset.option) === selectedIndex)?.classList.add("is-wrong");
    answerFeedback.textContent = "Casi. La opción marcada es la respuesta correcta.";
    answerFeedback.className = "answer-feedback is-wrong";
  }
  finishAnswer();
}

// Normaliza mayúsculas y espacios para comparar las respuestas abiertas.
function normalizeAnswer(value) {
  return value.toLocaleLowerCase("es").trim().replace(/\s+/g, " ");
}

function checkOpenAnswer(value) {
  if (state.locked) return;
  const item = questions[state.index];
  if (!normalizeAnswer(value)) {
    answerFeedback.textContent = "Escribe una respuesta antes de verificar.";
    answerFeedback.className = "answer-feedback is-wrong";
    answerArea.querySelector("input")?.focus();
    return;
  }
  if (normalizeAnswer(value) === normalizeAnswer(item.answer)) {
    recordCorrectAnswer();
    playSoundEffect("correct");
    answerFeedback.textContent = "¡Correcto! Tu respuesta coincide.";
    answerFeedback.className = "answer-feedback";
  } else {
    playSoundEffect("wrong");
    answerFeedback.textContent = `No es exactamente. La respuesta esperada es: ${item.answer}`;
    answerFeedback.className = "answer-feedback is-wrong";
  }
  finishAnswer();
}

// Revisa la relación con ideas clave, sin exigir una frase idéntica ni una opinión única.
function normalizeForRubric(value) {
  return value.toLocaleLowerCase("es")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function checkOpinionAnswer(value) {
  if (state.locked) return;
  const item = questions[state.index];
  const response = normalizeForRubric(value);
  const wordCount = response ? response.split(" ").length : 0;
  if (wordCount < 4) {
    answerFeedback.textContent = "Cuéntanos un poco más: escribe una idea completa relacionada con la pregunta.";
    answerFeedback.className = "answer-feedback is-wrong";
    answerArea.querySelector("textarea")?.focus();
    return;
  }

  const covered = item.rubric.map((group, index) => ({
    index,
    found: group.some((idea) => response.includes(normalizeForRubric(idea))),
  }));
  const hits = covered.filter((entry) => entry.found).map((entry) => entry.index);
  const needed = Math.ceil(item.rubric.length / 2);
  const coveredLabels = hits.map((index) => item.labels[index]);

  if (hits.length >= needed) {
    recordPoints(1);
    playSoundEffect("correct");
    answerFeedback.textContent = `¡Buena reflexión! Tu respuesta se relaciona con ${coveredLabels.join(" y ")}.`;
    answerFeedback.className = "answer-feedback";
  } else if (hits.length > 0) {
    recordPoints(0.5);
    playSoundEffect("correct");
    const remainingLabels = item.labels.filter((_, index) => !hits.includes(index));
    answerFeedback.textContent = `Tu idea sí se relaciona con ${coveredLabels.join(" y ")}. Sumas medio punto; para desarrollar más tu respuesta, podrías conectar también con ${remainingLabels.join(" o ")}.`;
    answerFeedback.className = "answer-feedback";
  } else {
    playSoundEffect("wrong");
    answerFeedback.textContent = `Tu opinión es válida; intenta enfocarla un poco más en ${item.labels.join(", ")}.`;
    answerFeedback.className = "answer-feedback is-wrong";
  }
  finishAnswer();
}

function recordCorrectAnswer() {
  recordPoints(1);
}

function recordPoints(points) {
  state.score += points;
  scoreCount.textContent = formatScore(state.score);
}

function formatScore(score) {
  return Number.isInteger(score) ? String(score) : score.toFixed(1).replace(".", ",");
}

// Bloquea controles y agenda el siguiente paso para que se alcance a leer el resultado.
function finishAnswer() {
  state.locked = true;
  clearInterval(state.timerId);
  lockAnswers();
  if (questions[state.index].type === "multiple") queueNextQuestion();
  else showContinueButton();
}

// Las respuestas escritas esperan a que la persona pulse para seguir.
function showContinueButton() {
  const button = document.createElement("button");
  button.className = "verify-button continue-button";
  button.type = "button";
  button.innerHTML = 'Siguiente pregunta <span aria-hidden="true">→</span>';
  button.addEventListener("click", advanceToNextQuestion);
  answerArea.append(button);
  button.focus({ preventScroll: true });
}

function lockAnswers() {
  answerArea.querySelectorAll("button, input, textarea").forEach((control) => { control.disabled = true; });
}

function queueNextQuestion() {
  state.nextId = window.setTimeout(() => {
    advanceToNextQuestion();
  }, 1100);
}

function advanceToNextQuestion() {
  clearTimeout(state.nextId);
  state.index += 1;
  if (state.index >= questions.length) showResults();
  else renderQuestion();
}

// Calcula y presenta el resultado final al terminar las 50 preguntas.
function showResults() {
  clearInterval(state.timerId);
  clearTimeout(state.nextId);
  gameScreen.hidden = true;
  resultScreen.hidden = false;
  playSoundEffect("finish");
  const percent = Math.round((state.score / questions.length) * 100);
  document.getElementById("finalScore").textContent = formatScore(state.score);
  document.getElementById("resultPercent").textContent = `${percent}%`;
  document.getElementById("resultFill").style.width = `${percent}%`;

  let title = "¡Reto completado!";
  let description = "¡Gracias por jugar! Cada intento te ayuda a aprender un poco más.";
  let medal = "🌟";
  if (percent >= 90) {
    title = "¡Increíble, eres una estrella!";
    description = "Dominas la tipología textual. ¡Qué gran resultado!";
    medal = "🏆";
  } else if (percent >= 70) {
    title = "¡Muy buen trabajo!";
    description = "Tienes una base excelente. ¡Sigue así!";
    medal = "🥇";
  } else if (percent >= 50) {
    title = "¡Vas por buen camino!";
    description = "Ya tienes varias ideas claras. Un repaso te llevará aún más lejos.";
    medal = "🎖️";
  }
  document.getElementById("resultTitle").textContent = title;
  document.getElementById("resultDescription").textContent = description;
  document.getElementById("resultMedal").textContent = medal;
}

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", startQuiz);
soundToggle.addEventListener("click", toggleSound);
