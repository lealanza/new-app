import { IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../todoSlice';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { Checkbox } from '@mui/material';
import { FiTrash2 } from 'react-icons/fi'


function TodoList() {
  const todos = useSelector(state => state.todo);
  const dispatch = useDispatch();

  return (
    <List>
      {todos.map((todo) =>(
        <ListItem key={todo.id} dense button>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={todo.completed}
              tabIndex={-1}
              disableRipple
              onClick={() => dispatch(toggleTodo(todo.id))}
            />
          </ListItemIcon>
          <ListItemText 
          primary={todo.text} 
          style={{ 
            textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? 'red' : 'blue'
            }} 
            />
          <IconButton onClick={() => dispatch(deleteTodo(todo.id))}>
          <FiTrash2 style={{color:"red"}}/>
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}

export default TodoList;