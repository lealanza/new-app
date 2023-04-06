import Container from '@mui/material/Container';
import TodoList from './components/ToDoList';
import AddTodo from './components/AddToDo';
import "./App.css"

function App() {
  return (
    <div style={{backgroundColor:'lightgrey', height:'100vh', gap:'20px'}}>
      <Container maxWidth="sm" 
      style={{
        backgroundColor:'white', 
        borderRadius:'20px', 
        maxWidth:'1000px', 
        boxShadow: 'black 9px 7px 11px 0px',
        position:'relative',
        top:'50px'
        }}>
      <div style={{gap:'20px'}}>
        <h1 style={{ textAlign: 'center'}}>Lista de Tareas</h1>
        <AddTodo />
        <TodoList />
      </div>
      </Container>
    </div>
    
  );
}

export default App;