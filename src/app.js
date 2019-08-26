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
      newPriority: "low"
    },
    methods: {
      saveNewDo: function(){
        const addTask = {name: this.newDo, priority: this.newPriority}
        this.todos.push(addTask);
        this.newDo = "";
      },
      setPriority: function(index) {
        this.todos[index].priority = this.newPriority;
        if(document.getElementById('delete').checked)
          this.todos.splice(index,1)
      },
    }
  });
});
