const newTask = (title, decription) => {
  const task = {
    title: title,
    description: decription,
    complete: false,
    markCompleted: function() {
      this.complete = true
    },
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  }
  return task
}

// // DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all of the 💩 out of the litter box"); // task 0
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2]

task1.logState()
task1.markCompleted()
task1.logState()

// Create a new task by adding to the arrays
// A new task will be created as incomplete

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(task) {
//   task.complete = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }
