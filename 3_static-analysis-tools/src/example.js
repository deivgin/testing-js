"use strict";

const username = "John Doe";
typeof username === "strng";

if (!"serviceWorker" in navigator) {
  console.log("Service Worker not supported");
}

const greeting = "Hello";
console.log(`${greeting}, world`);
[1, 2, 3].forEach((n) => console.log(n));
