// ── VOTEPATH AI: EDUCATION EDITION (LEARNING LOGIC) ──
const i18n = {
  en: {
    bot_name: "VoteWise AI",
    bot_greet: "👋 Hello! I'm **VoteWise AI**. I can guide you through the election process and share interesting civic facts!",
    bot_delay: "⚡ *Analyzing civic databases (typically takes 4-5 minutes). Please wait...*",
    chat_ph: "Ask about EVMs, Article 326, or NOTA...",
    rank_lbl: "GLOBAL CITIZEN RANK",
    score_lbl: "READINESS SCORE",
    nav_home: "Home", nav_elec: "Elections", nav_hub: "Learning Hub", nav_set: "Reset Portal",
    hero_h1a: "Election Information", hero_h1b: "Simplified.",
    hero_p: "This Education Edition transforms voting from a complex procedure into an easy-to-understand civic encyclopedia.",
    btn_how: "How to Vote", btn_exp: "Explore Candidates",
    tag_ver: "01 · PROTOCOL", age_h: "Confirm Eligibility", age_p: "Verify your status to unlock the national educational roadmap.",
    age_yes: "Adult Voter (18+)", age_no: "Future Voter (<18)",
    tag_tailor: "02 · TAILORING", pers_h: "Personalize Your Hub", pers_p: "Your learning hub is customized based on your region and experience.",
    lbl_state: "📍 Voting State / UT", lbl_exp: "👤 Voter Experience",
    p_first: "First-time", p_ret: "Returning"
  },
  hi: {
    bot_name: "वोटवाइज AI",
    bot_greet: "👋 नमस्ते! मैं **वोटवाइज AI** हूँ। मैं चुनाव प्रक्रिया में आपका मार्गदर्शन कर सकता हूँ और रोचक नागरिक तथ्य साझा कर सकता हूँ!",
    bot_delay: "⚡ *नागरिक डेटाबेस का विश्लेषण (आमतौर पर 4-5 मिनट लगते हैं)। कृपया प्रतीक्षा करें...*",
    chat_ph: "EVMs, अनुच्छेद 326, या NOTA के बारे में पूछें...",
    rank_lbl: "वैश्विक नागरिक रैंक",
    score_lbl: "तत्परता स्कोर",
    nav_home: "होम", nav_elec: "चुनाव", nav_hub: "लर्निंग हब", nav_set: "पोर्टल रीसेट करें",
    hero_h1a: "चुनाव की जानकारी", hero_h1b: "सरल भाषा में।",
    hero_p: "यह शिक्षा संस्करण मतदान को एक जटिल प्रक्रिया से समझने में आसान नागरिक विश्वकोश में बदल देता है।",
    btn_how: "वोट कैसे दें", btn_exp: "उम्मीदवार खोजें",
    tag_ver: "01 · प्रोटोकॉल", age_h: "पात्रता की पुष्टि करें", age_p: "राष्ट्रीय शैक्षिक रोडमैप को अनलॉक करने के लिए अपनी स्थिति सत्यापित करें।",
    age_yes: "वयस्क मतदाता (18+)", age_no: "भविष्य का मतदाता (<18)",
    tag_tailor: "02 · अनुकूलन", pers_h: "अपने हब को निजीकृत करें", pers_p: "आपका लर्निंग हब आपके क्षेत्र और अनुभव के आधार पर अनुकूलित किया गया है।",
    lbl_state: "📍 मतदान राज्य / केंद्र शासित प्रदेश", lbl_exp: "👤 मतदाता अनुभव",
    p_first: "पहली बार", p_ret: "अनुभवी"
  }
};

const KNOWLEDGE_BASE = {
  en: {
    "register": "To register as a new voter, fill out **Form 6** on the NVSP portal (voters.eci.gov.in). You'll need age and address proof.",
    "evm": "Electronic Voting Machines (EVMs) record votes securely. They were first used in Kerala in 1982. Every EVM is connected to a VVPAT.",
    "timeline": "Elections are held every 5 years. The Election Commission (ECI) announces the schedule 6-8 weeks prior.",
    "documents": "Valid IDs include the **EPIC card** (Voter ID), Aadhaar, PAN, or Passport.",
    "nota": "NOTA (None of the Above) was introduced in 2013, allowing voters to officially register a protest vote.",
    "article 326": "Article 326 of the Indian Constitution grants Universal Adult Suffrage, meaning every citizen aged 18+ has the right to vote."
  },
  hi: {
    "register": "नए मतदाता के रूप में पंजीकरण करने के लिए, NVSP पोर्टल (voters.eci.gov.in) पर **फॉर्म 6** भरें।",
    "evm": "ईवीएम सुरक्षित रूप से वोट रिकॉर्ड करते हैं। पहली बार 1982 में केरल में इनका इस्तेमाल हुआ था।",
    "timeline": "चुनाव हर 5 साल में होते हैं। चुनाव आयोग 6-8 सप्ताह पहले कार्यक्रम की घोषणा करता है।",
    "documents": "वैध आईडी में **एपिक कार्ड** (वोटर आईडी), आधार, पैन या पासपोर्ट शामिल हैं।",
    "nota": "नोटा (NOTA) 2013 में पेश किया गया था, जो मतदाताओं को आधिकारिक तौर पर विरोध वोट दर्ज करने की अनुमति देता है।",
    "article 326": "भारतीय संविधान का अनुच्छेद 326 सार्वभौमिक वयस्क मताधिकार प्रदान करता है।"
  }
};

const CIVIC_FACTS = {
  en: [
    "Did you know? The indelible ink applied during elections is exclusively manufactured by Mysore Paints and Varnish Limited.",
    "Civic Fact: The Election Commission of India was established on January 25, 1950 (now celebrated as National Voters' Day).",
    "Did you know? In the 2019 General Elections, over 600 million people voted, making it the largest democratic exercise in history.",
    "Civic Fact: Article 326 is the bedrock of Indian democracy, ensuring no discrimination based on religion, race, caste, or sex for voting rights."
  ],
  hi: [
    "क्या आप जानते हैं? चुनावों के दौरान लगाई जाने वाली अमिट स्याही विशेष रूप से मैसूर पेंट्स एंड वार्निश लिमिटेड द्वारा निर्मित की जाती है।",
    "नागरिक तथ्य: भारत के चुनाव आयोग की स्थापना 25 जनवरी 1950 को हुई थी (अब राष्ट्रीय मतदाता दिवस के रूप में मनाया जाता है)।",
    "क्या आप जानते हैं? 2019 के आम चुनावों में 600 मिलियन से अधिक लोगों ने मतदान किया, जो इसे इतिहास का सबसे बड़ा लोकतांत्रिक अभ्यास बनाता है।",
    "नागरिक तथ्य: अनुच्छेद 326 भारतीय लोकतंत्र का आधार है, जो मतदान अधिकारों के लिए धर्म, मूलवंश, जाति या लिंग के आधार पर कोई भेदभाव सुनिश्चित नहीं करता है।"
  ]
};

const JOURNEY_CONTENT = [
  {
    id: "eligibility",
    title: { en: "1. Legal Eligibility & Rights", hi: "1. कानूनी पात्रता और अधिकार" },
    desc: { en: "Understanding Article 326 of the Constitution.", hi: "संविधान के अनुच्छेद 326 को समझना।" },
    items: [
      { id: "art326", title: { en: "Article 326", hi: "अनुच्छेद 326" }, detail: { en: "Grants universal adult suffrage to citizens 18 and older.", hi: "18 वर्ष और उससे अधिक आयु के नागरिकों को सार्वभौमिक वयस्क मताधिकार प्रदान करता है।" } },
      { id: "citz", title: { en: "Citizenship Check", hi: "नागरिकता की जांच" }, detail: { en: "Must be a documented citizen of India.", hi: "भारत का प्रलेखित नागरिक होना चाहिए।" } }
    ]
  },
  {
    id: "registration",
    title: { en: "2. The Electoral Roll", hi: "2. निर्वाचक नामावली" },
    desc: { en: "Form 6 and the journey to getting your EPIC card.", hi: "फॉर्म 6 और अपना EPIC कार्ड प्राप्त करने की यात्रा।" },
    items: [
      { id: "form6", title: { en: "Form 6 Filing", hi: "फॉर्म 6 दाखिल करना" }, detail: { en: "Applying for inclusion in the voter list via NVSP.", hi: "एनवीएसपी के माध्यम से मतदाता सूची में शामिल होने के लिए आवेदन करना।" } },
      { id: "epic", title: { en: "EPIC Card Generation", hi: "एपिक कार्ड जनरेशन" }, detail: { en: "Receiving your Electors Photo Identity Card.", hi: "अपना निर्वाचक फोटो पहचान पत्र प्राप्त करना।" } }
    ]
  },
  {
    id: "polling",
    title: { en: "3. Polling Day Protocol", hi: "3. मतदान दिवस प्रोटोकॉल" },
    desc: { en: "EVMs, VVPATs, and the Indelible Ink process.", hi: "EVM, VVPAT और अमिट स्याही प्रक्रिया।" },
    items: [
      { id: "ink", title: { en: "Indelible Ink Application", hi: "अमिट स्याही" }, detail: { en: "Applied to the left forefinger to prevent double voting.", hi: "दोहरे मतदान को रोकने के लिए बायीं तर्जनी पर लगाया जाता है।" } },
      { id: "vvpat", title: { en: "VVPAT Verification", hi: "VVPAT सत्यापन" }, detail: { en: "Visual confirmation of your vote via the paper trail.", hi: "पेपर ट्रेल के माध्यम से आपके वोट की दृश्य पुष्टि।" } }
    ]
  }
];

let state = {
  lang: 'en', age: null, persona: null, location: '',
  currentStepIndex: 0, completedItems: {},
  score: 0, rank: 16738
};

function init() {
  setLang('en');
  const inp = document.getElementById('state-input');
  if(inp) {
    const h = (e) => { state.location = e.target.value.trim(); checkMandatoryFields(); };
    inp.addEventListener('input', h); inp.addEventListener('change', h);
  }
}

function setLang(lang) {
  state.lang = lang;
  document.documentElement.setAttribute('data-lang', lang);
  const dict = i18n[lang];
  document.querySelectorAll('[data-t]').forEach(el => {
    const k = el.getAttribute('data-t');
    if (dict[k]) el.innerHTML = dict[k];
  });
  document.querySelectorAll('[data-t-ph]').forEach(el => {
    const k = el.getAttribute('data-t-ph');
    if (dict[k]) el.placeholder = dict[k];
  });
  const bE = document.getElementById('lang-en'), bH = document.getElementById('lang-hi');
  if(bE) bE.classList.toggle('active', lang === 'en');
  if(bH) bH.classList.toggle('active', lang === 'hi');
  if(state.location && document.getElementById('s-journey').classList.contains('active')) setupJourney();
}

function goScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const t = document.getElementById(id);
  if(t) t.classList.add('active');
}

function pickAge(v) { state.age = v; goScreen('s-persona'); }
function setPersona(v) { 
  state.persona = v; 
  document.querySelectorAll('.choice-btn').forEach(b => b.classList.toggle('active', b.dataset.persona === v));
  checkMandatoryFields();
}

function checkMandatoryFields() {
  const b = document.getElementById('btn-show-journey');
  if(b) b.disabled = !(state.location.length >= 2 && state.persona);
}

function validateAndLaunch() {
  if (state.location.length < 2 || !state.persona) return;
  setupJourney();
  goScreen('s-journey');
}

function setupJourney() {
  const p = document.getElementById('sb-profile');
  if(p) p.innerHTML = `👤 ${state.location} · ${state.persona === 'first' ? (state.lang === 'en' ? 'New Learner' : 'नया मतदाता') : (state.lang === 'en' ? 'Veteran' : 'अनुभवी')}`;
  
  const c = document.getElementById('step-cards');
  if(!c) return;
  c.innerHTML = '';

  JOURNEY_CONTENT.forEach((step, idx) => {
    const card = document.createElement('div');
    card.className = `step-card ${idx === state.currentStepIndex ? 'active-card' : ''}`;
    card.innerHTML = `
      <div class="sc-header" onclick="jumpToStep(${idx})">
        <div class="sc-num">${idx + 1}</div>
        <div class="sc-info">
          <div class="sc-title">${step.title[state.lang]}</div>
          <div class="sc-desc">${step.desc[state.lang]}</div>
        </div>
      </div>
      <div class="sc-body">
        <div class="micro-steps">
          ${step.items.map(item => {
            const key = item.id;
            const isDone = state.completedItems[key];
            return `
              <div class="ms-item ${isDone ? 'done-ms' : ''}" onclick="toggleItem('${key}')">
                <div class="ms-check">${isDone ? '✓' : ''}</div>
                <div class="ms-text">
                  <div class="ms-title">${item.title[state.lang]}</div>
                  <div class="ms-detail">${item.detail[state.lang]}</div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
    c.appendChild(card);
  });
  updateStats();
}

function toggleItem(key) {
  state.completedItems[key] = !state.completedItems[key];
  const done = Object.values(state.completedItems).filter(v => v).length;
  state.score = Math.min(100, Math.round((done / 6) * 100)); // 6 total items now
  state.rank = Math.max(100, 16738 - Math.round((done / 6) * 16638));
  setupJourney();
}

function jumpToStep(idx) { state.currentStepIndex = idx; setupJourney(); }

function updateStats() {
  const sv = document.getElementById('score-val'), sf = document.getElementById('score-fill'), rv = document.getElementById('rank-val');
  if(sv) sv.textContent = state.score;
  if(sf) sf.style.width = state.score + '%';
  if(rv) rv.textContent = state.rank;
}

// ── CHATBOT LOGIC (WITH CIVIC FACTS) ──
function toggleChat() {
  const w = document.getElementById('chat-window');
  w.classList.toggle('active');
  if(w.classList.contains('active') && !document.getElementById('ap-messages').hasChildNodes()) {
    appendMsg(i18n[state.lang].bot_greet, 'bot');
    renderSuggestions();
  }
}

function renderSuggestions() {
  const q = document.getElementById('ap-quick');
  q.innerHTML = '';
  const sug = state.lang === 'en' ? ["Article 326", "What is EVM?", "Tell me a Fact"] : ["अनुच्छेद 326", "ईवीएम क्या है?", "एक तथ्य बताएं"];
  sug.forEach(s => {
    const b = document.createElement('button');
    b.className = 'ap-q-btn';
    b.textContent = s;
    b.onclick = () => { document.getElementById('ap-input').value = s; sendMsg(); };
    q.appendChild(b);
  });
}

function sendMsg() {
  const i = document.getElementById('ap-input'), t = i.value.trim();
  if(!t) return;
  i.value = '';
  appendMsg(t, 'user');
  
  // Simulated Processing
  const delayMsg = appendMsg(i18n[state.lang].bot_delay, 'bot delay');
  
  setTimeout(() => {
    delayMsg.remove();
    let reply = "";
    let found = false;
    
    const low = t.toLowerCase();
    
    // Check Knowledge Base
    for(let k in KNOWLEDGE_BASE[state.lang]) {
      if(low.includes(k) || (state.lang === 'hi' && low.includes(k))) {
        reply = KNOWLEDGE_BASE[state.lang][k];
        found = true;
        break;
      }
    }
    
    // If not found or specifically asked for a fact
    if(!found || low.includes("fact") || low.includes("तथ्य")) {
      const facts = CIVIC_FACTS[state.lang];
      const randomFact = facts[Math.floor(Math.random() * facts.length)];
      if(!found && !(low.includes("fact") || low.includes("तथ्य"))) {
        reply = state.lang === 'en' 
          ? `I can help you find that on the official portal. Meanwhile, here's a **Civic Fact**:\n\n*${randomFact}*`
          : `मुझे इसके बारे में निश्चित नहीं है। इस बीच, यहाँ एक **नागरिक तथ्य** है:\n\n*${randomFact}*`;
      } else {
        reply = randomFact;
      }
    }
    
    appendMsg(reply, 'bot');
  }, 1500);
}

function appendMsg(t, type) {
  const m = document.getElementById('ap-messages'), d = document.createElement('div');
  d.className = `ap-msg ${type}`;
  d.innerHTML = t.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>');
  m.appendChild(d);
  m.scrollTop = m.scrollHeight;
  return d;
}

function restartApp() { location.reload(); }

window.onload = init;
