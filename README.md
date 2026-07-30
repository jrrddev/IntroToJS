# JavaScript Sandbox

A repository created to track my basic JavaScript learnings and study progress. Feel free to explore, clone, or use it to learn fundamental JavaScript concepts, syntax, and functions!

---

## Repository Structure & Topics Covered

> [!NOTE]
> This repository is constantly updated whenever I learn or experiment with new JavaScript concepts. As a result, the summary table below might not always reflect the latest files or updates immediately!

### `VariablesAndStrings/`
Focuses on string manipulation, variable declarations, data types, template literals, and ASCII methods.

| File | Topic / Concept Covered | Key Functions & Features |
| :--- | :--- | :--- |
| **`script.js`** | Basics & Variables | `console.log`, `var`, `let`, `const`, string concatenation (`+`, `.concat()`), dynamic typing, BigInt |
| **`script1.js`** | Data Types & Templates | Template literals (`` `${}` ``), `typeof` checks (`number`, `boolean`, `object`), `null` vs objects |
| **`script2.js`** | String Indexing & Interpolation | Indexing (`[i]`, `length - 1`), escape characters (`\n`, `\"`, `\'`), string interpolation, `indexOf()` |
| **`script3.js`** | ASCII & String Methods | `charCodeAt()`, `fromCharCode()`, `.includes()`, `.slice()` (positive & negative indices) |
| **`script4.js`** | String Transformation | `.toUpperCase()`, `.toLowerCase()`, `.trim()`, `.trimStart()`, `.replace()`, `.repeat()` |

### `BooleansAndNumbers/`
Focuses on mathematical operations, boolean logic, control flow, number parsing, type checks, and mini-projects.

| File | Topic / Concept Covered | Key Functions & Features |
| :--- | :--- | :--- |
| **`script5.js`** | Arithmetic & Increment/Decrement | Arithmetic operators (`+`, `*`), prefix (`++x`, `--x`) vs. postfix (`x++`, `x--`) operators |
| **`script6.js`** | Assignment & Equality | Compound operators (`+=`), booleans, loose (`==`) vs. strict equality (`===`) |
| **`script7.js`** | Control Flow & Conditionals | Truthy & falsy values, `if` / `else if` / `else`, ternary operator (`condition ? true : false`) |
| **`script8.js`** | Logical & Nullish Operators | Logical AND (`&&`), Logical OR (`||`), short-circuiting, Nullish Coalescing (`??`) |
| **`script9.js`** | Math Object Methods | `Math.random()`, `Math.min()`, `Math.max()`, `Math.floor()`, `Math.ceil()`, `Math.round()`, `Math.trunc()`, `Math.sqrt()`, `Math.cbrt()`, `Math.abs()`, `Math.pow()`, random range formula |
| **`script10.js`** | `NaN` & Type Safety | `NaN` properties, `isNaN()` coercion behavior vs. `Number.isNaN()` strict checking |
| **`script11.js`** | Number Parsing & Formatting | `parseFloat()`, `parseInt()`, `.toFixed()` for precision and currency formatting |
| **`fortunetellerproj.js`** | Mini-Project: Fortune Teller | Practical integration of `Math.random()`, `Math.floor()`, `if / else if` logic, and strict equality |

### Root Directory
| File | Topic / Concept Covered | Key Functions & Features |
| :--- | :--- | :--- |
| **`index.html`** | HTML & DOM Integration | Linking external JavaScript scripts via `<script src="...">`, CSS styling, and inline `onclick` event handlers |

---

## How to Use / Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. **Open in browser:**
   - Open `index.html` in any web browser.
   - Update the script source in `index.html` to point to any module (e.g. `<script src="BooleansAndNumbers/script11.js"></script>`).
   - Open Browser Developer Tools (`F12` or right-click -> **Inspect**) and navigate to the **Console** tab to view the outputs!

3. **Run via Node.js (Terminal):**
   Execute any script directly using Node.js:
   ```bash
   node BooleansAndNumbers/script11.js
   # or
   node VariablesAndStrings/script4.js
   ```

---

## Purpose & Learnings

- Hands-on practice with JavaScript syntax, type coercion, and core operators.
- Practical understanding of built-in utility objects (`Math`, `String`, `Number`).
- Clean, structured reference guides for beginner and intermediate JavaScript topics.

---

Happy Coding! 

<sub>"In jrrddev we trust"</sub>

