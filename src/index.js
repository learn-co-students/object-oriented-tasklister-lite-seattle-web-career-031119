document.addEventListener("DOMContentLoaded", main);

function main(){
  const taskList = new TaskList();
  const form = document.getElementById('create-task-form')
  const listContainer = document.getElementById("list");
  taskList.render();

  // Add Form Behavior Here!
  form.addEventListener('submit', ev => {
    ev.preventDefault()
    const description = ev.target.elements['new-task-description'].value
    ev.target.elements['new-task-description'].value = ''
    taskList.addNewPost(description)
  })
}
