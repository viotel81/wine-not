import { useState, useEffect } from 'react';
import CatalogueHeader from "../../components/catalogueheader/CatalogueHeader";
import Wines from "../../components/wines/Wines";
import axios from 'axios';
import { useLocation } from 'react-router-dom';


function WineCatalogue() {
   const [wines, setWines] = useState([]);
   const { search } = useLocation();
  

  useEffect(() => {
    const fetchWines = async() => {
      const res = await axios.get("/wines" + search)
      setWines(res.data)
    }
    fetchWines()
  },[search])
  
  return (
    <>
      <CatalogueHeader />
      <Wines wines={ wines } />
    </>
  );
}

export default WineCatalogue;
