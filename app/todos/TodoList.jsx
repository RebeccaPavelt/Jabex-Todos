async function getTodos() {
  const response = await fetch("http://localhost:4000/todos");

  return response.json();
}

export default async function TodoList() {
  const todos = await getTodos();

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className="card my-5">
          <h3>{todo.title}</h3>
          <p>{todo.body.slice(0, 200)}...</p>
          <div className={`pill ${todo.priority}`}>Priority</div>
        </div>
      ))}
      {todos.length === 0 && (
        <p className="text-center">Super, wir haben alles erledigt!</p>
      )}
    </>
  );
}
