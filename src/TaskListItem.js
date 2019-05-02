class TaskListItem {

  constructor(data){
    this.id = data.id
    this.description = data.description
  }

  render() {
    const li = document.createElement('li')
    li.textContent = this.description
    const rmButton = document.createElement('button')
    rmButton.textContent = " X "
    rmButton.addEventListener('click', ()=>{
      li.remove()
      this.delete()
    })

    li.appendChild(rmButton)
    return li
  }

  delete(){
    fetch('http://localhost:3000/posts/' + this.id, {
      method: "DELETE",
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  save(){
    fetch('http://localhost:3000/posts', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        description: this.description
      })
    })
    .then(res => res.json())
    .then(json => {
      this.id = json.id
    })
  }

}
