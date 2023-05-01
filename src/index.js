// style import //
import "./style.css";

// add html in html file //
document.body.innerHTML += `
<title class="app-title">Віртуальная клавіятура</title>
<textarea name="text" id="textarea" class="keyboard-textarea" maxlength="259" placeholder="Наша мова - беларуская, таму што мы беларусы, наша дзяржава - Беларусь, і мы вялікі культурны народ. Зянон Пазьняк"></textarea>
<p class="discription">Дадатак распрацаваны для аператыўнай сістэмы <b>Windows</b>.<br>Каб пераключыць мову ўвода націсьніце <b>Ctrl + Alt</b>.<br>Выява: Б. Лявэрнь, Высокі Рынак</p>
<div class="keyboard-body">
    <div class="keyboard-body__row">
        <button class="keyboard-body__row_key backquote"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key backspace">Backspace</button>
    </div>
    <div class="keyboard-body__row">
        <button class="keyboard-body__row_key tab">Tab</button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key del">Del</button>
    </div>
    <div class="keyboard-body__row">
        <button class="keyboard-body__row_key caps"> CapsLock</button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key enter">Enter</button>
    </div>
    <div class="keyboard-body__row">
        <button class="keyboard-body__row_key shift left-shift">Shift</button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key"></button>
        <button class="keyboard-body__row_key up">⮝</button>
        <button class="keyboard-body__row_key shift right-shift">Shift</button>
    </div>
    <div class="keyboard-body__row">
        <button class="keyboard-body__row_key ctrl left-ctrl">Ctrl</button>
        <button class="keyboard-body__row_key win">Win</button>
        <button class="keyboard-body__row_key alt">Alt</button>
        <button class="keyboard-body__row_key space"></button>
        <button class="keyboard-body__row_key alt">Alt</button>
        <button class="keyboard-body__row_key left">⮜</button>
        <button class="keyboard-body__row_key down">⮟</button>
        <button class="keyboard-body__row_key right">⮞</button>
        <button class="keyboard-body__row_key ctrl right-ctrl">Ctrl</button>
    </div>
</div>
`;
