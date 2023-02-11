import React from "react";
import Slider from "@mui/material/Slider";
import { pink } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  thumb: {
    color: "#000",
  },
  rail: {
    color: `rgba(0, 0, 0, 0.26)`,
  },
  track: {
    color: "#000",
  },
});

const SliderProton = ({ value, changedPrice }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Slider
        getAriaLabel={(index) =>
          index === 0 ? "Minimum price" : "Maximum price"
        }
        defaultValue={[100, 5000]}
        value={value}
        onChange={changedPrice}
        min={50}
        max={6000}
        valueLabelDisplay="auto"
        classes={{
          thumb: classes.thumb,
          rail: classes.rail,
          track: classes.track,
        }}
      />
    </div>
  );
};

export default SliderProton;
