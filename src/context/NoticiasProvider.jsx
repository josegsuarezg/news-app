import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  
  const [cargando, setCargando] = useState(false);
  const [categoria, setCategoria] = useState('general');
  const [noticias, setNoticias] = useState([]);
  
  const handleChangeCategoria = e => {
    setCategoria(e.target.value);
  }
  
  useEffect(() => {
    const consultarAPI = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&pageSize=100&apiKey=${import.meta.env.VITE_API_KEY}`;
        setCargando(true);
        const {data} = await axios(url);
        setNoticias(data.articles);
        setCargando(false);
      } catch (error) {
        console.log(error);
      }
    }
    consultarAPI();
  }, [categoria]);
  
  
  return (
    <NoticiasContext.Provider 
      value={{
        categoria,
        noticias,
        cargando,
        handleChangeCategoria
      }}
    >
      {children}
    </NoticiasContext.Provider>
  )
  
}

export { NoticiasProvider };
export default NoticiasContext