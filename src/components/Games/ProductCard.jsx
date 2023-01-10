import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import '../Games/Games.css'

import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { useNavigate } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ADMIN } from "../../information";
import { useProducts } from "../../context/GamesContext";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/cartContext";

export default function ProductCard({ item }) {
  const navigate = useNavigate();

  const { addProductToCart, checkProductInCart } = useCart();
  const { deleteProduct } = useProducts()
  const {
    user: { email },
  } = useAuth()

  return (
    <div className="product-list">
    <Card id="games-cards" sx={{ width: 300, mt: 10, ml: 5 }}>
      <CardMedia
      id="productcard-img"
        sx={{ height: 250, cursor: "pointer" }}
        image={item.picture}
        title="green iguana"
        onClick={() => navigate(`/products/${item.id}`)}
      />
      <CardContent>
        <Typography
        sx={{color: "white"}}
        className="cards-name" gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography
        className="cards-price"
          sx={{ color: "green", fontWeight: "700" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {item.price}$
        </Typography>
        <Typography
        className="cards-desc"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
            fontSize: "16px",
            color: "white"
          }}
          variant="body2"
          color="text.secondary"
        >
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        {email == ADMIN ? (
          <>
            <Button xs={{}} onClick={() => deleteProduct(item.id)}>Delete</Button>
            <Button onClick={() => navigate(`/edit/${item.id}`)}>Edit</Button>
          </>
        ) : (
          
          <IconButton onClick={() => addProductToCart(item)}>
            {checkProductInCart(item.id) ? (
              <>
                <ShoppingCartIcon
                  sx={{
                    color: "brown",
                  }}
                />
              </>
            ) : (
              <>
                <AddShoppingCartIcon />
              </>
            )}
          </IconButton>
        )}
      </CardActions>
    </Card>
    </div>
  );
}
