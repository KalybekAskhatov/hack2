import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/GamesContext";
import '../Games/Games.css'



const AddGames = () => {
  const navigate = useNavigate();
  const { addProduct } = useProducts()

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
    type: "",
  });

  return (
    <Box className="add-block" sx={{ width: "60vw", margin: "10vh auto" }}>
      <TextField
        value={product.name}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, name: e.target.value }))
        }
        fullWidth
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name="name"
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Description"
        variant="outlined"
        name="description"
        value={product.description}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, description: e.target.value }))
        }
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Price"
        variant="outlined"
        name="price"
        value={product.price}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, price: e.target.value }))
        }
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Picture"
        variant="outlined"
        name="picture"
        value={product.picture}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, picture: e.target.value }))
        }
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Type"
        variant="outlined"
        name="type"
        value={product.type}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, type: e.target.value }))
        }
      />
      <Button
        onClick={() => {
          addProduct(product);
          navigate("/list");
        }}
        variant="outlined"
        fullWidth
        size="large"
      >
        CREATE PRODUCT
      </Button>
    </Box>
  );
};

export default AddGames;
