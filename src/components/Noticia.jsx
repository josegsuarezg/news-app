import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Noticia = (noticia) => {
  
  const {title, description, urlToImage, url, source} = noticia.noticia;
  
  return (
    <Grid item md={6} lg={4}>
      <Card>
        {urlToImage && 
          (
            <CardMedia
              component="img"
              height="250"
              image={urlToImage}
              alt={title}
            />
          )
        }
        <CardContent>
          <Typography variant="body1" color="error">
            {source.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link 
            href={url} 
            target="_blank"
            variant="button"
            color="primary"
            width={"100%"}
            textAlign={"center"}
            sx={{textDecoration: "none"}}
          >
            Ver Noticia Completa
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Noticia