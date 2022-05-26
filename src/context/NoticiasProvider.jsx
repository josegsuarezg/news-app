import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  
  const [cargando, setCargando] = useState(false);
  const [categoria, setCategoria] = useState('general');
  const [noticias, setNoticias] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0);
  
  const handleChangeCategoria = e => {
    setCategoria(e.target.value);
  }
  
  const handleChangePagina = (e, value) => {
    setPagina(value)
  }
  
  useEffect(() => {
    const consultarAPI = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;
        setCargando(true);
        const {data} = await axios(url);
        setNoticias(data.articles);
        setTotalNoticias(data.totalResults);
        setCargando(false);
        setPagina(1);
      } catch (error) {
        console.log(error);
      }
    }
    consultarAPI();
  }, [categoria]);
  
  useEffect(() => {
    const consultarAPI = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=ar&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;
        setCargando(true);
        const {data} = await axios(url);
        setNoticias(data.articles);
        setTotalNoticias(data.totalResults);
        setCargando(false);
      } catch (error) {
        console.log(error);
      }
    }
    consultarAPI();
  }, [pagina]);
  
  return (
    <NoticiasContext.Provider 
      value={{
        categoria,
        noticias,
        cargando,
        handleChangeCategoria,
        totalNoticias,
        handleChangePagina,
        pagina
      }}
    >
      {children}
    </NoticiasContext.Provider>
  )
  
}

export { NoticiasProvider };
export default NoticiasContext