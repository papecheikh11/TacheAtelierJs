async function todos() {
  try {
    let rep = await fetch("https://jsonplaceholder.typicode.com/todos/");
    let response = await rep.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

todos();
