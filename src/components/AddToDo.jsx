import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { addTodo } from '../todoSlice';

function AddTodo() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      dispatch(addTodo({ text, completed: false }));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
      <TextField
        label="Agregar tarea"
        variant="outlined"
        size="small"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ flexGrow: 1,
            fontSize:'40px'}}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        style={{ marginLeft: '10px', fontSize:'20px' }}
        
      >
        Agregar
      </Button>
    </form>
  );
}

export default AddTodo;