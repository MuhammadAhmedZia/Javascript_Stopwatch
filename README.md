# Accurate & Simple JavaScript Stopwatch

A lightweight, clean, and beginner-friendly JavaScript Stopwatch that tracks hours, minutes, seconds, and milliseconds. This project uses clear functional programming logic and a simple state counter to update the UI dynamically.

## 🚀 Features
- **Start, Pause, and Reset** functionality.
- Displays hours, minutes, seconds, and milliseconds (`00 : 00 : 00 : 000`).
- Clean event listeners with zero global scope pollution.
- Simple, easy-to-understand conditional logic for time formatting.

## 🛠️ Tech Stack
- **HTML5** (Structure)
- **CSS3** (Styling / Layout)
- **JavaScript (ES6)** (Core Logic)

## 📂 Project Structure
```text
├── index.html
├── style.css
└── script.js
```

## 💻 Code Structure

### 1. HTML Setup
Add this boilerplate structure inside your `index.html` file:
```html
<div class="stopwatch-container">
    <div class="timer-display">00 : 00 : 00 : 000</div>
    <div class="controls">
        <button id="start-timer">Start</button>
        <button id="pause-timer">Pause</button>
        <button id="reset-timer">Reset</button>
    </div>
</div>
```

### 2. JavaScript Logic
Your core functional logic inside `script.js`:
```javascript
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]; 
let display = document.querySelector('.timer-display'); 
let interger = null; 

document.querySelector('#start-timer').addEventListener('click', () => { 
  if (interger !== null) { 
    clearInterval(interger); 
  } 
  interger = setInterval(displayFunc, 10); 
}); 

document.querySelector('#pause-timer').addEventListener("click", () => { 
  clearInterval(interger); 
}); 

document.querySelector('#reset-timer').addEventListener("click", () => { 
  clearInterval(interger); 
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]; 
  display.innerHTML = '00 : 00 : 00 : 000'; 
}); 

function displayFunc() { 
  milliseconds += 10; 
  if (milliseconds == 1000) { 
    milliseconds = 0; 
    seconds++; 
    if (seconds == 60) { 
      seconds = 0; 
      minutes++; 
      if (minutes == 60) { 
        minutes = 0; 
        hours++; 
      } 
    } 
  } 
  
  let h = hours < 10 ? "0" + hours : hours; 
  let m = minutes < 10 ? "0" + minutes : minutes; 
  let s = seconds < 10 ? "0" + seconds : seconds; 
  let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds; 
  
  display.innerHTML = `${h} : ${m} : ${s} : ${ms}`; 
}
```

## 📖 How it Works
1. **State Array:** Destructures `[milliseconds, seconds, minutes, hours]` starting at `0`.
2. **Interval Engine:** Triggers `displayFunc` every 10 milliseconds using `setInterval`.
3. **Rollover Cascades:** Once `milliseconds` hits `1000`, it resets and bumps up `seconds`. The same pattern applies up to `hours`.
4. **Ternary Formatting:** Pads numbers under 10 with leading zeros so the UI layout remains visually stable.

## 📝 License
This project is open-source and free to use for practice and educational purposes.
