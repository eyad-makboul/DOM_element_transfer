# 📦 Element Mover Task

A dynamic and interactive Vanilla JavaScript application that allows users to select items from an **Available** list and move them dynamically to a **Selected** list, and vice versa. 

---

## 🚀 Features

* **Dynamic DOM Manipulation:** Move elements between parent containers smoothly using native `appendChild`.
* **State Tracking:** Utilizes active element tracking flags to manage which item is currently highlighted.
* **Smart UI Feedback:** Visual indication (color overriding) when an item is clicked.
* **Global Reset:** Clicking anywhere on the `body` clears the active selection safely.
* **Event Propagation Prevention:** Uses `event.stopPropagation()` to ensure clicks on elements don't trigger global body resets.

---

## 🛠️ Tech Stack

* **HTML5:** Semantic structure for layouts (`<section>`, `<input>`, `<div>`).
* **CSS3:** Flexible layout architecture using **Flexbox** along with hover transitions.
* **JavaScript (ES6):** DOM events, styling overrides, and conditional node nesting.

---

## 📂 Project Structure

<pre><code>
element-mover/
├── index.html    # Layout structure & component styling
└── script.js     # State logic, click events, and item routing
</code></pre>

---

## ⚙️ How it Works

1. **Selection:** Clicking on any skill (`React`, `JavaScript`, `HTML`, `CSS`) highlights the element with an important dark background and sets a conditional `flag_`.
2. **Moving Forward:** Clicking the **Move (→)** button checks the active flag and shifts the selected element into the `Selected` paper container.
3. **Moving Backward:** Clicking the **Back (←)** button returns the chosen item to the `Available` paper container.
4. **Deselection:** Clicking anywhere on the background resets all element backgrounds and clears the selection buffer.

---

## 💡 Code Optimization Insights
* The current JS implementation uses hardcoded sequential check counters (`flag_ == 1`, `flag_ == 2`, etc.).
* *Future Scale:* Can be refactored to use dynamic class selectors (`.selected`) to allow shifting multiple elements at once or minimizing the number of distinct event listeners!
