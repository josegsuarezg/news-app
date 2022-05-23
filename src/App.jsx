import { Container, Grid, Typography } from '@mui/material';
import {NoticiasProvider} from './context/NoticiasProvider.jsx'
import Formulario from './components/Formulario.jsx';
import Noticias from './components/Noticias.jsx';

function App() {


  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align='center' marginY={5} component='h1' variant='h3'>
            Noticias Relevantes del Día
          </Typography>
        </header>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6} lg={4}>
            <Formulario />
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="center" alignItems="center" marginY={4}>
          <Noticias />
        </Grid>
      </Container>
    </NoticiasProvider>
  )
}

export default App
