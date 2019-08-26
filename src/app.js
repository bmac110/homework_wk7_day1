import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  console.log("apploaded");
  new Vue({
    el: "#app",
    data: {
      todos: ["Buy shopping", "Clean bathroom", "Car's MOT"]
    }
    });
})
