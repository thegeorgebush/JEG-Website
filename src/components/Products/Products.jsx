import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from "./Styles";

/*
const products = [
  {
    id: 1,
    name: "Pizza",
    description: "1 regular pizza",
    price: "$7",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/1a/6e/a0/f2/our-tasty-pizzas-are.jpg"
  },
  {
    id: 2,
    name: "sushi",
    description: "1 roll of sushi",
    price: "$10",
    image:
      "https://images1.miaminewtimes.com/imager/u/original/11655890/sushi-erika-miami-credit-fujifilmgirl-24.jpg"
  }
];
*/

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />{" "}
      {/* this makes the margin the navbar so products dont get blocked */}
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid itemkey={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
