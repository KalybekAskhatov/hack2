import { Box, CircularProgress, Grid, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../context/GamesContext";
import ProductCard from "./ProductCard";
import SideBar from "./SideBar";
import '../Games/Games.css'

const GameList = () => {
  const { getProducts, products } = useProducts()
  const [searchParams, setSearchParams] = useSearchParams() 

  const [page, setPage] = useState(1)

  const itemsPerPage = 6;

  const count = Math.ceil(products.length/itemsPerPage)

  const handleChange = (e, p) => {
    console.log(p)
    setPage(p)
  }

  function currentData (){
    const begin = (page -1) * itemsPerPage; // 0
    const end = begin + itemsPerPage; // 5
    return products.slice(begin, end);
  }


  useEffect(()=>{
    getProducts()
  }, [searchParams])


  return (
    <div className="games-list">
      <video id="background-video" loop autoPlay muted>
                <source src={require("./video.mp4")} type="video/mp4" />
            </video>
      <SideBar/>
    <Grid
      item
      md={9}
      sx={{ justifyContent: "center", display: "flex", flexWrap: "wrap" }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minHeight: "40vh",
          gap: "10px",
        }}
      >

        {products.length > 0 ? (currentData().map((item) => (
          <ProductCard item={item} key={item.id} />
        ))) : (<CircularProgress color="inherit" />)}

        {}
      </Box>
      
    </Grid>
    <Box className="pagination" sx={{}}>
    <Pagination id="" sx={{m:6, color: 'white'}} variant="outlined"  count={count} shape="rounded" page={page} onChange={handleChange} />
    </Box>
    </div>

  );
};


export default GameList;