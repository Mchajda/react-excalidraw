import logo from './logo.svg';
import './App.css';
import MyExcalidraw from '../src/components/MyExcalidraw/MyExcalidraw'
import { Grid } from '@mui/material';

function App() {
  const size = 2;
  return (
    <Grid container>
      <Grid item sm={size} sx={{ backgroundColor: "#1f2937" }}>
        sidebar
      </Grid>
      <Grid item sm={12 - size} >
        <MyExcalidraw />
      </Grid>
    </Grid>
  );
}

export default App;
