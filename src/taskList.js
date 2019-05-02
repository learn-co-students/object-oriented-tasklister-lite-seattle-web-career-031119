class TaskList {

  constructor(){
    this.list = document.getElementById("list");
  }

  addNewPost(description){
    const taskPost = new TaskListItem({description})
    taskPost.save()
    this.list.appendChild(taskPost.render())
  }

  render(){
    fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(json => this.addPosts(json))
  }

  addPosts(posts) {
    posts.forEach(post => this.addPost(post))
  }

  addPost(post){
    const item = new TaskListItem(post)
    this.list.appendChild(item.render())
  }

}
