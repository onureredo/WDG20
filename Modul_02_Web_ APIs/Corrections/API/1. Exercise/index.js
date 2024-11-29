// Referenziere das HTML-Element, in dem die To-Do-Liste angezeigt wird
const todoList = document.getElementById('todo-list');

// Asynchrone Funktion zum Abrufen der To-Dos
async function fetchTodos() {
  try {
    // Sende eine Anfrage an die JSONPlaceholder-API und warte auf die Antwort
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    // Parse die Antwort als JSON
    const todos = await response.json();
    // Rufe die Funktion auf, um die To-Dos auf der Webseite anzuzeigen
    displayTodos(todos);
  } catch (error) {
    // Fange Fehler ab und logge diese in der Konsole
    console.error('Error fetching todos', error);
  }
}

// Funktion, um die abgerufenen To-Dos als Liste auf der Webseite darzustellen
function displayTodos(todos) {
  // Iteriere über jedes To-Do-Objekt im Array
  todos.forEach((todo) => {
    // Erstelle ein neues <li>-Element für jedes To-Do
    const todoItem = document.createElement('li');
    // Setze den Textinhalt des <li>-Elements auf den Titel des To-Dos
    todoItem.textContent = todo.title;

    // Füge eine Tailwind-CSS-Klasse basierend auf dem Status des To-Dos
    // 'line-through' für abgeschlossene To-Dos, sonst 'none'
    todoItem.classList.add(todo.completed ? 'line-through' : 'none');

    // Hänge das <li>-Element an die To-Do-Liste im DOM an
    todoList.appendChild(todoItem);
  });
}

fetchTodos();
