// style import //
import "./style.css";
import "./bel.png";
import "./eng.png";

// add html in html file //
document.body.innerHTML += `
<h2 class="app-title">Віртуальная клавіятура</h2>
<textarea name="text" id="textarea" class="keyboard-textarea" maxlength="259" placeholder="Наша мова - беларуская, таму што мы беларусы, наша дзяржава - Беларусь, і мы вялікі культурны народ. Зянон Пазьняк"></textarea>
<p class="discription"></p>
<div class="keyboard-body">
    <div class="keyboard-body__row">
        <button class="keyboard-body__row_key key backquote" data-code="Backquote"></button>
        <button class="keyboard-body__row_key key" data-code="Digit1"></button>
        <button class="keyboard-body__row_key key" data-code="Digit2"></button>
        <button class="keyboard-body__row_key key" data-code="Digit3"></button>
        <button class="keyboard-body__row_key key" data-code="Digit4"></button>
        <button class="keyboard-body__row_key key" data-code="Digit5"></button>
        <button class="keyboard-body__row_key key" data-code="Digit6"></button>
        <button class="keyboard-body__row_key key" data-code="Digit7"></button>
        <button class="keyboard-body__row_key key" data-code="Digit8"></button>
        <button class="keyboard-body__row_key key" data-code="Digit9"></button>
        <button class="keyboard-body__row_key key" data-code="Digit0"></button>
        <button class="keyboard-body__row_key key" data-code="Minus"></button>
        <button class="keyboard-body__row_key key" data-code="Equal"></button>
        <button class="keyboard-body__row_key backspace" data-code="Backspace">Backspace</button>
    </div>
    <div class="keyboard-body__row">
        <button class="keyboard-body__row_key tab" data-code="Tab">Tab</button>
        <button class="keyboard-body__row_key key" data-code="KeyQ"></button>
        <button class="keyboard-body__row_key key" data-code="KeyW"></button>
        <button class="keyboard-body__row_key key" data-code="KeyE"></button>
        <button class="keyboard-body__row_key key" data-code="KeyR"></button>
        <button class="keyboard-body__row_key key" data-code="KeyT"></button>
        <button class="keyboard-body__row_key key" data-code="KeyY"></button>
        <button class="keyboard-body__row_key key" data-code="KeyU"></button>
        <button class="keyboard-body__row_key key" data-code="KeyI"></button>
        <button class="keyboard-body__row_key key" data-code="KeyO"></button>
        <button class="keyboard-body__row_key key" data-code="KeyP"></button>
        <button class="keyboard-body__row_key key" data-code="BracketLeft"></button>
        <button class="keyboard-body__row_key key" data-code="BracketRight"></button>
        <button class="keyboard-body__row_key key" data-code="Backslash"></button>
        <button class="keyboard-body__row_key del" data-code="Delete">Del</button>
    </div>
    <div class="keyboard-body__row">
        <button class="keyboard-body__row_key caps" data-code="CapsLock"> CapsLock</button>
        <button class="keyboard-body__row_key key" data-code="KeyA"></button>
        <button class="keyboard-body__row_key key" data-code="KeyS"></button>
        <button class="keyboard-body__row_key key" data-code="KeyD"></button>
        <button class="keyboard-body__row_key key" data-code="KeyF"></button>
        <button class="keyboard-body__row_key key" data-code="KeyG"></button>
        <button class="keyboard-body__row_key key" data-code="KeyH"></button>
        <button class="keyboard-body__row_key key" data-code="KeyJ"></button>
        <button class="keyboard-body__row_key key" data-code="KeyK"></button>
        <button class="keyboard-body__row_key key" data-code="KeyL"></button>
        <button class="keyboard-body__row_key key" data-code="Semicolon"></button>
        <button class="keyboard-body__row_key key" data-code="Quote"></button>
        <button class="keyboard-body__row_key enter" data-code="Enter">Enter</button>
    </div>
    <div class="keyboard-body__row">
        <button class="keyboard-body__row_key shift left-shift" data-code="ShiftLeft">Shift</button>
        <button class="keyboard-body__row_key key" data-code="KeyZ"></button>
        <button class="keyboard-body__row_key key" data-code="KeyX"></button>
        <button class="keyboard-body__row_key key" data-code="KeyC"></button>
        <button class="keyboard-body__row_key key" data-code="KeyV"></button>
        <button class="keyboard-body__row_key key" data-code="KeyB"></button>
        <button class="keyboard-body__row_key key" data-code="KeyN"></button>
        <button class="keyboard-body__row_key key" data-code="KeyM"></button>
        <button class="keyboard-body__row_key key" data-code="Comma"></button>
        <button class="keyboard-body__row_key key" data-code="Period"></button>
        <button class="keyboard-body__row_key key" data-code="Slash"></button>
        <button class="keyboard-body__row_key up" data-code="ArrowUp">⮝</button>
        <button class="keyboard-body__row_key shift right-shift" data-code="ShiftRight">Shift</button>
    </div>
    <div class="keyboard-body__row">
        <button class="keyboard-body__row_key ctrl left-ctrl" data-code="ControlLeft">Ctrl</button>
        <button class="keyboard-body__row_key win" data-code="MetaLeft">Win</button>
        <button class="keyboard-body__row_key alt" data-code="AltLeft">Alt</button>
        <button class="keyboard-body__row_key space" data-code="Space"></button>
        <button class="keyboard-body__row_key alt" data-code="AltRight">Alt</button>
        <button class="keyboard-body__row_key left" data-code="ArrowLeft">⮜</button>
        <button class="keyboard-body__row_key down" data-code="ArrowDown">⮟</button>
        <button class="keyboard-body__row_key right" data-code="ArrowRight">⮞</button>
        <button class="keyboard-body__row_key ctrl right-ctrl" data-code="ControlRight">Ctrl</button>
    </div>
</div>
`;

// lang settings //
let lang = localStorage.getItem("lang") || document.documentElement.lang;
function saveLangStorage() {
  localStorage.setItem("lang", lang);
}

window.addEventListener("beforeunload", saveLangStorage);

localStorage.setItem("lang", lang);

// change lang //
const favicon = document.querySelector("link[rel=\"shortcut icon\"]");
const discription = document.getElementsByClassName("discription")[0];

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.altKey) {
    if (lang === "be") {
      lang = "en";
      document.documentElement.lang = "en";
      favicon.href = "./assets/eng.png";
      document.title = "Virtual Keyboard";
      discription.innerHTML = "The application is designed for the <b>Windows</b> operating system.<br>To switch the input language, press <b>Ctrl + Alt</b>.<br>Painting: B. Lavern, Vysoky Rynak";
    } else {
      lang = "be";
      document.documentElement.lang = "be";
      favicon.href = "./assets/bel.png";
      document.title = "Віртуальная Клавіятура";
      discription.innerHTML = "Дадатак распрацаваны для аператыўнай сістэмы <b>Windows</b>.<br>Каб пераключыць мову ўвода націсьніце <b>Ctrl + Alt</b>.<br>Жывапіс: Б. Лявэрнь, Высокі Рынак";
    }
  }
});

// init app //
if (lang === "en") {
  document.documentElement.lang = "en";
  favicon.href = "./assets/eng.png";
  document.title = "Virtual Keyboard";
  discription.innerHTML = "The application is designed for the <b>Windows</b> operating system.<br>To switch the input language, press <b>Ctrl + Alt</b>.<br>Painting: B. Lavern, Vysoky Rynak";
} else {
  lang = "be";
  document.documentElement.lang = "be";
  favicon.href = "./assets/bel.png";
  document.title = "Віртуальная Клавіятура";
  discription.innerHTML = "Дадатак распрацаваны для аператыўнай сістэмы <b>Windows</b>.<br>Каб пераключыць мову ўвода націсьніце <b>Ctrl + Alt</b>.<br>Жывапіс: Б. Лявэрнь, Высокі Рынак";
}

// keyboard symbols //
const englishKeyboard = {
  topRow: ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  secondRow: ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
  thirdRow: ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
  fourthRow: ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "⮝", "Shift"],
};
const belarusKeyboard = {
  topRow: ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  secondRow: ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "ў", "з", "х", "'", "\\"],
  thirdRow: ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
  fourthRow: ["Shift", "я", "ч", "с", "м", "і", "т", "ь", "б", "ю", ".", "⮝", "Shift"],
};
const belarusKeyboardShift = {
  // eslint-disable-next-line
  topRow: ["Ё", "!", '"', "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace"],
  secondRow: ["Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Ў", "З", "Х", "'", "/"],
  thirdRow: ["CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter"],
  fourthRow: ["Shift", "Я", "Ч", "С", "М", "І", "Т", "Ь", "Б", "Ю", ",", "⮝", "Shift"],
};

document.addEventListener("keydown", (event) => {
  const virtualKey = document.querySelector(`.keyboard-body__row_key[data-code="${event.code}"]`);
  if (virtualKey) {
    virtualKey.classList.add("active");
  }
});
document.addEventListener("keyup", (event) => {
  const virtualKey = document.querySelector(`.keyboard-body__row_key[data-code="${event.code}"]`);
  if (virtualKey) {
    virtualKey.classList.remove("active");
  }
});
