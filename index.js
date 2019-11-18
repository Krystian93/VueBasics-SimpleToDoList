new Vue({
  el: '#root',

  data: {
    newTask: "",
    tasks: [],
  },

  methods: {
    addTask() {
      if (this.checkTextInput(this.newTask)) {
        this.tasks.push({
          title: this.newTask,
          completed: false,
          id: new Date().valueOf(),
        });
        this.newTask = "";
      }
    },

    checkTextInput(text) {
      if (text.length) {
        return true;
      } else {
        alert('Fill input field')
      }

    },

    checkDone(taskID) {
      this.tasks.find(task => {
        if (task.id === taskID) {
          task.completed = !task.completed;
        }
      })
    },

    deleteTask(taskID) {
      let taskIndex
      this.tasks.find(task => {
        if (task.id === taskID) {
          taskIndex = this.tasks.indexOf(task)

        }
      })
      this.tasks.splice(taskIndex, 1)
    }


  },
  computed: {
    completedTask() {
      return this.tasks.filter(task => task.completed);
    }
  }
})