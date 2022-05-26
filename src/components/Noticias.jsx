import useNoticias from '../hooks/useNoticias';
import Noticia from './Noticia';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Spinner from './Spinner';

const Noticias = () => {
  
  const { noticias, cargando, totalNoticias, handleChangePagina, pagina } = useNoticias();
  
  const totalPaginas = Math.ceil(totalNoticias / 20);
  
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
      <Stack spacing={2} marginTop={5}>
        <Pagination 
          count={totalPaginas} 
          variant="outlined" 
          shape="rounded" 
          color="primary"
          onChange={handleChangePagina}
          page={pagina}
        />
      </Stack>
    </>
  )
}

export default Noticias