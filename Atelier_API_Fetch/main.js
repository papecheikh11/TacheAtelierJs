async function getTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    let todoList = document.getElementById("todoList");
    const todoListFini = document.getElementById("todoListFini");

    data.forEach((todo) => {
      const listItem = document.createElement("li");
      listItem.textContent = todo.title;
      console.log(todo.title);

      const btnFini = document.createElement("button");
      btnFini.textContent = "Terminer";
      const btnModif = document.createElement('button')
      btnModif.textContent = "Modifier";

      btnFini.addEventListener("click", () => {
        listItem.remove();
        todoList.insertBefore(listItem, todoList.firstChild);
        // Déplacer le todo vers les taches terminés
        todoListFini.appendChild(listItem);
        btnModif.textContent = "details";
        btnFini.textContent = "Non Terminer";
      listItem.appendChild(btnModif)


        btnFini.addEventListener("click", () => {
          listItem.remove();
          todoList.appendChild(listItem);
          btnFini.textContent = "Terminer";

        });
      });
      listItem.appendChild(btnFini);

      if (!todo.completed) {
        todoList.appendChild(listItem);
      }
    });

    // console.log(data);
    // console.log(response);
  } catch (error) {
    console.log(error);
  }
}
getTodo();
