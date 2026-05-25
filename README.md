# Backend1 — Node.js Practice Exercises

A collection of beginner backend exercises built with Node.js, focused on **OOP fundamentals**: classes, encapsulation, validation logic, and module exports.

---

## Exercises

### Practice 1 — ProductManager

A class that manages a product catalog stored in memory.

**Concepts practiced:**
- Class creation with constructor and internal state (`this.products`, `this.currentId`)
- Auto-incremental ID generation
- Field validation before inserting data
- Duplicate code detection using `.some()`
- Data retrieval with `.find()` by ID
- Module export with `module.exports`

**Methods:** `addProduct()` · `getProducts()` · `getProductById()`

---

### Practice 2 — UserManager

A class that handles user registration with roles and lookup filters.

**Concepts practiced:**
- Default parameter values (`role = 'user'`)
- Multi-field duplicate validation (username and email independently)
- Role-based filtering using `.filter()`
- Error handling with descriptive `console.error()` messages
- Separation of concerns: `index.js` only consumes the class, logic lives in the manager

**Methods:** `registerUser()` · `getUser()` · `getUsersById()` · `getUsersByRole()`

---

### Practice 3 — PlayListManager

A class that manages a playlist with play tracking and favorites filtering.

**Concepts practiced:**
- Composite uniqueness check (title + artist combination)
- Mutable state on objects: incrementing a `plays` counter on the original object
- Filtering by numeric threshold with `.filter()`
- Modeling richer data structures (song with metadata + behavior)

**Methods:** `addSong()` · `getPlayList()` · `playSong()` · `getFavorites(minPlays)`

---

## How to run

```bash
# Clone the repo
git clone https://github.com/BNicDev/Backend1.git
cd Backend1

# Run any exercise (no dependencies needed)
node "practica 1/index.js"
node "practica 2/index.js"
node "practica 3/index.js"
```

---

## Tech stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)

---

> These exercises are part of my backend learning path. Next step: building a REST API with Express, PostgreSQL and JWT authentication.
