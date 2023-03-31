import React from "react";
import { CardActionArea ,Typography, CardMedia,CardContent,Card} from "@mui/material";

const repoImages = require.context('../../Images',true) ;

const CardArt  = ({ data }) => {
  const {  img, name,  price, stock } = data;

  return (
    <Card sx={{ maxWidth: 350, maxHeight: 450, marginTop: 2 , marginBottom:2, marginLeft:2, marginRight:2 }}>
      <CardActionArea>
        <CardMedia component="img"  image={ repoImages(`./${img}`) } alt= {name}  />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {name} 
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Precio: {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stock: {stock}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default CardArt;
