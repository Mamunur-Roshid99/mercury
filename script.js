// =============================================
//  Marcury – Chatbot Brain (HTML/CSS/JS)
// =============================================

// ---- Knowledge Base ----
const KB = {

  // --- Greetings ---
  greetings: {
    patterns: [/^(hi|hello|hey|hiya|yo|sup)/i],
    responses: [
      "Hey there! 👋 Great to see you. Ask me anything — coding, study, or just chat!",
      "Hello! 😊 I'm here and ready to help. What's on your mind?",
      "Hey hey! What can I help you with today? 🚀"
    ]
  },

  howAreYou: {
    patterns: [/how are you|how r u|how do you do/i],
    responses: [
      "I'm doing great, thanks for asking! 😄 Always happy to chat. How about you?",
      "Feeling awesome and ready to help! 💪 What do you need?"
    ]
  },

  // --- What can you do ---
  capabilities: {
    patterns: [/what can you (do|help)|what are you/i],
    responses: [
      "I can help you with:\n• 💻 Coding questions (HTML, CSS, JS, Python…)\n• 📚 Study & homework help\n• 🌐 General knowledge\n• 💡 Ideas & motivation\n\nJust ask away! 😊"
    ]
  },

  // --- Coding Help ---
  html: {
    patterns: [/\bhtml\b/i],
    responses: [
      "HTML is the backbone of every webpage! 🌐\n\nA basic page looks like:\n```\n<!DOCTYPE html>\n<html>\n  <head><title>My Page</title></head>\n  <body>\n    <h1>Hello World!</h1>\n  </body>\n</html>\n```\nWhat part do you need help with?",
      "HTML stands for HyperText Markup Language. It uses **tags** like `<h1>`, `<p>`, `<div>` to structure content. What specific tag or concept do you need?"
    ]
  },

  css: {
    patterns: [/\bcss\b/i],
    responses: [
      "CSS makes your page look beautiful! 🎨\n\nBasic syntax:\n```\nh1 {\n  color: purple;\n  font-size: 24px;\n}\n```\nAre you working on colors, layouts, animations? Let me know!",
      "CSS = Cascading Style Sheets. You can use **Flexbox**, **Grid**, **animations**, gradients — so much power! What do you want to style?"
    ]
  },

  javascript: {
    patterns: [/\bjavascript\b|\bjs\b|\bnode\.?js\b/i],
    responses: [
      "JavaScript brings pages to life! ⚡\n\nQuick example:\n```\nconst name = \"User\";\nconsole.log(\"Hello, \" + name);\n```\nAre you stuck on something specific — functions, loops, APIs, DOM?",
      "JS is awesome for making interactive websites! 🚀 You can do DOM manipulation, fetch APIs, build full apps. What do you need help with?"
    ]
  },

  python: {
    patterns: [/\bpython\b/i],
    responses: [
      "Python is super beginner-friendly! 🐍\n\n```python\nname = input(\"What's your name? \")\nprint(f\"Hello, {name}!\")\n```\nAre you doing data science, automation, web (Flask/Django), or just basics?",
      "Python is great for beginners and pros! 🐍 Simple syntax, powerful libraries. What are you building?"
    ]
  },

  loop: {
    patterns: [/\bloop\b|\bfor loop\b|\bwhile loop\b/i],
    responses: [
      "Loops repeat code! Here's a **for loop** in JS:\n```js\nfor (let i = 1; i <= 5; i++) {\n  console.log(i);\n}\n```\nNeed a while loop or loop in another language?",
      "Loops are super useful! In Python:\n```python\nfor i in range(1, 6):\n    print(i)\n```\nWhich language are you using?"
    ]
  },

  array: {
    patterns: [/\barray\b|\blist\b/i],
    responses: [
      "Arrays store multiple values! In JavaScript:\n```js\nconst fruits = [\"apple\", \"banana\", \"mango\"];\nconsole.log(fruits[0]); // apple\n```\nNeed help with array methods like `.map()`, `.filter()`, `.push()`?"
    ]
  },

  function: {
    patterns: [/\bfunction\b|\bmethod\b/i],
    responses: [
      "Functions are reusable blocks of code! In JS:\n```js\nfunction greet(name) {\n  return \"Hello, \" + name + \"!\";\n}\ngreet(\"User\"); // Hello, User!\n```\nArrow functions are also popular: `const greet = (name) => \"Hello, \" + name;`"
    ]
  },

  api: {
    patterns: [/\bapi\b|\bfetch\b|\brest api\b/i],
    responses: [
      "APIs let you get data from servers! 🌐\n\nIn JavaScript:\n```js\nfetch('https://api.example.com/data')\n  .then(res => res.json())\n  .then(data => console.log(data));\n```\nAre you working with a specific API?"
    ]
  },

  git: {
    patterns: [/\bgit\b|\bgithub\b/i],
    responses: [
      "Git is a version control system! 🔀\n\nBasic commands:\n• `git init` – start a repo\n• `git add .` – stage changes\n• `git commit -m \"message\"` – save\n• `git push` – upload to GitHub\n\nWhat are you trying to do?"
    ]
  },

  // --- Study Help ---
  math: {
    patterns: [/\bmath\b|\bcalculus\b|\balgebra\b|\bgeometry\b/i],
    responses: [
      "Math can be tricky but I'll help! 🔢 Share the problem and I'll walk you through it step by step."
    ]
  },

  physics: {
    patterns: [/\bphysics\b/i],
    responses: [
      "Physics questions? I'm here! ⚛️ Share your topic (motion, electricity, waves?) and I'll explain simply."
    ]
  },

  study: {
    patterns: [/study|homework|assignment|exam/i],
    responses: [
      "Study mode activated! 📚 Tell me your subject or topic and I'll help you understand it quickly."
    ]
  },

  // --- Motivation ---
  motivation: {
    patterns: [/motivat|inspire|quote/i],
    responses: [
      "Here's one for you 💪\n\n*\"The secret of getting ahead is getting started.\"* — Mark Twain\n\nYou've got this! One step at a time. 🚀",
      "You're doing amazing just by showing up! 🌟\n\n*\"It does not matter how slowly you go as long as you do not stop.\"* — Confucius"
    ]
  },

  // --- Time / Date ---
  time: {
    patterns: [/what time|what('s| is) the (time|date)/i],
    responses: [
      () => {
        const now = new Date();
        return `Right now it's **${now.toLocaleTimeString('en-BD', { hour: '2-digit', minute: '2-digit' })}** 🕐\nToday is **${now.toLocaleDateString('en-BD', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}**.`;
      }
    ]
  },

  // --- Identity ---
  whoAreYou: {
    patterns: [/who are you|what are you/i],
    responses: [
      "I'm **Marcury** 🤖 — a friendly chatbot built with HTML, CSS & JavaScript!\n\nI'm here to help with coding, studies, general questions, or just a fun chat. Think of me as your smart classmate! 😊"
    ]
  },

  // --- Thanks ---
  thanks: {
    patterns: [/thank|thanks/i],
    responses: [
      "You're welcome! 😊 Anything else I can help you with?",
      "Happy to help! 🌟 Feel free to ask more anytime."
    ]
  },

  // --- Bye ---
  bye: {
    patterns: [/bye|goodbye|see you|cya/i],
    responses: [
      "Goodbye! 👋 Come back anytime. Take care!",
      "See you later! 😊 It was nice chatting. Good luck!"
    ]
  },

  // --- Joke ---
  joke: {
    patterns: [/joke|funny/i],
    responses: [
      "Here's one 😄\n\nWhy do programmers prefer dark mode?\n*Because light attracts bugs!* 🐛",
      "Why did the JavaScript developer go broke?\n*Because he used up all his cache!* 💸😄"
    ]
  },

  // --- General AI knowledge fallback topics ---
  weather: {
    patterns: [/weather|আবহাওয়া/i],
    responses: [
      "I can't check live weather right now 🌤️ Try Google or weather.com for your area. Anything else I can help with?"
    ]
  }
};

// ---- Utility: pick random item ----
function pick(arr) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  return typeof item === 'function' ? item() : item;
}

// ---- Get Bot Response ----
function getBotResponse(msg) {
  const lower = msg.toLowerCase().trim();

  // Match knowledge base
  for (const key in KB) {
    const entry = KB[key];
    for (const pattern of entry.patterns) {
      if (pattern.test(msg)) {
        return pick(entry.responses);
      }
    }
  }

  // Smart fallback rules
  if (/\d+\s*[\+\-\*\/]\s*\d+/.test(msg)) {
    try {
      const result = eval(msg.replace(/[^0-9\+\-\*\/\.\(\)\s]/g, ''));
      if (!isNaN(result)) return `The answer is **${result}** 🔢 Easy math!`;
    } catch {}
  }

  if (/\b(what is|what are|define|explain)\b/i.test(msg)) {
    return `Good question! 🤔 I don't have a detailed answer for that yet, but try searching on Google or Wikipedia for more info. Want me to help with something else?`;
  }

  if (/\b(how to|how do)\b/i.test(msg)) {
    return `Hmm, I'd love to help! Can you be a little more specific? Like — is this a coding question, study topic, or something else? 😊`;
  }

  // Generic fallback
  const fallbacks = [
    "Hmm, I'm not 100% sure about that one. 🤔 Can you rephrase or give more details?",
    "Sorry, I'm not sure about that. 😅 Try asking in a different way?",
    "That's a bit outside my knowledge right now! 😊 But I'm great at coding, study help, and general questions — want to try one of those?",
    "I'm still learning! 🌱 Could you be more specific? I'll do my best to help."
  ];
  return pick(fallbacks);
}

// ---- Format response (handle code blocks and bold) ----
function formatMessage(text) {
  // Code blocks
  text = text.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
    return `<pre><code>${escapeHtml(code.trim())}</code></pre>`;
  });
  // Inline code
  text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
  // Bold
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // Italic
  text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');
  // Newlines to <br> or <p>
  const lines = text.split('\n');
  let html = '';
  let inList = false;
  for (const line of lines) {
    if (line.startsWith('• ')) {
      if (!inList) { html += '<ul>'; inList = true; }
      html += `<li>${line.slice(2)}</li>`;
    } else {
      if (inList) { html += '</ul>'; inList = false; }
      if (line.trim() === '') continue;
      if (line.startsWith('<pre>')) {
        html += line;
      } else {
        html += `<p>${line}</p>`;
      }
    }
  }
  if (inList) html += '</ul>';
  return html;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ---- Time Helper ----
function getTimeStr() {
  return new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

// ---- DOM References ----
const messagesArea   = document.getElementById('messagesArea');
const userInput      = document.getElementById('userInput');
const sendBtn        = document.getElementById('sendBtn');
const clearBtn       = document.getElementById('clearBtn');
const typingIndicator = document.getElementById('typingIndicator');
const quickBtns      = document.getElementById('quickBtns');

// ---- Append Message ----
function appendMessage(text, type) {
  const msg = document.createElement('div');
  msg.className = `message ${type}-message`;

  const avatar = document.createElement('div');
  avatar.className = 'avatar-sm';
  avatar.textContent = type === 'bot' ? '🤖' : '🧑';

  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.innerHTML = formatMessage(text);

  const timeEl = document.createElement('span');
  timeEl.className = 'msg-time';
  timeEl.textContent = getTimeStr();
  bubble.appendChild(timeEl);

  msg.appendChild(avatar);
  msg.appendChild(bubble);
  messagesArea.appendChild(msg);
  scrollBottom();
}

function scrollBottom() {
  messagesArea.scrollTo({ top: messagesArea.scrollHeight, behavior: 'smooth' });
}

// ---- Show / Hide Typing ----
function showTyping() {
  typingIndicator.classList.remove('hidden');
  scrollBottom();
}
function hideTyping() {
  typingIndicator.classList.add('hidden');
}

// ---- Send Message ----
function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  // Remove quick buttons after first message
  if (quickBtns) quickBtns.remove();

  // Append user bubble
  appendMessage(text, 'user');
  userInput.value = '';
  userInput.style.height = 'auto';
  sendBtn.disabled = true;

  // Simulate typing delay
  showTyping();
  const delay = 700 + Math.random() * 900;
  setTimeout(() => {
    hideTyping();
    const response = getBotResponse(text);
    appendMessage(response, 'bot');
  }, delay);
}

// ---- Event Listeners ----
sendBtn.addEventListener('click', sendMessage);

userInput.addEventListener('input', () => {
  sendBtn.disabled = userInput.value.trim() === '';
  // Auto-grow textarea
  userInput.style.height = 'auto';
  userInput.style.height = Math.min(userInput.scrollHeight, 120) + 'px';
});

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    if (!sendBtn.disabled) sendMessage();
  }
});

// Quick suggestion buttons
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('quick-btn')) {
    userInput.value = e.target.dataset.msg;
    sendBtn.disabled = false;
    sendMessage();
  }
});

// Clear chat
clearBtn.addEventListener('click', () => {
  const msgs = messagesArea.querySelectorAll('.message:not(#introMessage)');
  msgs.forEach(m => m.remove());
  // Also handle if intro was removed
  messagesArea.innerHTML = '';
  // Re-add intro
  const intro = document.createElement('div');
  intro.className = 'message bot-message intro-message';
  intro.id = 'introMessage';
  intro.innerHTML = `
    <div class="avatar-sm">🤖</div>
    <div class="bubble">
      <p>Chat cleared! 🧹 Ready to help again.</p>
      <p>Ask me anything — coding, study, or just chat!</p>
    </div>`;
  messagesArea.appendChild(intro);
});

// Focus input on load
window.addEventListener('load', () => {
  setTimeout(() => userInput.focus(), 300);
});
