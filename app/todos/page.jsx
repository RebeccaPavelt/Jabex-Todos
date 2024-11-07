import TodoList from "./TodoList";

export default function Todos() {
  return (
    <main>
      <nav>
        <div>
          <h2>ToDos</h2>
          <p>
            <small>Currently open ToDos.</small>
          </p>
          <ul></ul>
        </div>
      </nav>
      <TodoList />
    </main>
  );
}
