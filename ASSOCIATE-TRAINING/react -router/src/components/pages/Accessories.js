import React from "react";
import AccessoriesData from "../data/AccessoriesData";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

const useStyles = makeStyles({
  container: {
    // border: "2px solid purple",
    textAlign: "center",
    justifyContent: "center",
    color: "purple",
    fontSize: 20

  },
  imageContainer: {
    width: 240,
    height: 290,
  },
});
const Accessories = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>Accessories</h1>
      <Grid container spacing={2}>
        {AccessoriesData.map((item) => {
          return (
            <Grid item  xs={12} sm={6} md={4} key={item.id} className={classes.container}>
              <h3>{item.name}</h3>
              <img
                src={item.pics}
                alt="No Pics"
                className={classes.imageContainer}
              />
              <h3>{item.price}</h3>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Accessories;