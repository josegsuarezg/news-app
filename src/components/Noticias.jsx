import useNoticias from '../hooks/useNoticias';
import Noticia from './Noticia';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Spinner from './Spinner';

const Noticias = () => {
  
  const { noticias, cargando } = useNoticias();
  
  return (
    <>
      {
        cargando ? 
          <Spinner />
        :
        <Grid container spacing={2}>
          {
            noticias.map(noticia => (
                <Noticia noticia={noticia} key={noticia.url}/>
            ))
          }
        </Grid>
      }
    </>
  )
}

export default Noticias