/** @format */

// The newsEvent object continuously emits three different events:
// newsEvent, breakingNews and error
// Attach event listeners for each event and log out their data.

const { error } = require("node:console");
const { EventEmitter } = require("node:events");

function createNewsFeed() {
  const emitter = new EventEmitter();

  setInterval(() => {
    emitter.emit("newsEvent", "News: A thing happened in a place.");
  }, 1000);

  setInterval(() => {
    emitter.emit("breakingNews", "Breaking news! A BIG thing happened.");
  }, 4000);

  setTimeout(() => {
    emitter.emit("error", new Error("News feed connection error"));
  }, 5000);

  emitter.on("newsEvent", (data) => {
    console.log(data);
  });

  emitter.on("breakingNews", (data) => {
    console.log(data);
  });
  emitter.on("error", (Error) => {
    console.log(Error, error.message);
  });
  return emitter;
}

const newsFeed = createNewsFeed();
