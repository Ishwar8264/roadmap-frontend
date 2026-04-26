# JavaScript Event Loop

JavaScript is single-threaded.

It uses Event Loop to handle async operations like:

- setTimeout
- fetch
- Promises

# Core Parts

Call Stack → where code runs
Web APIs → browser handles async (timer, fetch)
Callback Queue (Task Queue) → setTimeout, setInterval
Microtask Queue → Promises (.then, async/await)
Event Loop → moves tasks to stack

# Golden Rule

Microtasks (Promises) run BEFORE macrotasks (setTimeout)

# Final Understanding (CRYSTAL CLEAR)

/\*

Call Stack → runs sync code

Web APIs → handles async (timer, fetch)

Microtask Queue → Promise.then(), async/await

Callback Queue → setTimeout, events (macrotasks)

Event Loop →

1. run ALL microtasks
2. then run ONE macrotask

\*/
