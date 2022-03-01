import Cabecera from "./components/Cabecera";
import "bootstrap/dist/css/bootstrap.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <Cabecera titulo="Lista" />
      <main className="container w-50">
        <TodoList />
      </main>
    </div>
  );
}

export default App;
