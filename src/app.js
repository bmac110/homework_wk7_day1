import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  console.log("apploaded");
  new Vue({
    el: "#app",
    data: {
      todos: [{name: "Buy Shopping", priority: "high"},
    {name: "Clean Bathroom", priority: "low"},
  {name: "Car's MOT", priority: "high"}],
      newDo: "",
      newPriority: ""
    },
    methods: {
      saveNewDo: function(){
        const doToAdd = {name: this.newDo, priority: this.newPriority}
        this.todos.push(doToAdd);
        this.newDo = "";
      },
      
    }
  });
});
