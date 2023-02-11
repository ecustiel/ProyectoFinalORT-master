import React from "react";
import { ToggleButtonGroup } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import "./FilterToggle.css";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    justifyContent: "center",
  },
  toggle: {
    fontSize: ".8rem",
    border: "0.5px solid rgba(0, 0, 0, 0.12)",
    borderRadius: "10px",
    "&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)": {
      borderRadius: "10px",
    },
    "&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)": {
      borderRadius: "5px",
      border: "1px solid rgba(0, 0, 0, 0.12)",
      width: "90px",
    },
    "&.Mui-selected": {
      borderRadius: "5px",
      background: "#000",
      color: "#fff",
    },
    "&.MuiToggleButton-root": {
      "&:hover": {
        background: "#000",
        color: "#fff",
      },
    },
  },
});

const FilterToggle = ({ options, value, selectToggle }) => {
  const classes = useStyles();

  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={selectToggle}
      className={classes.root}
    >
      {options.map(({ label, id, value }) => (
        <ToggleButton className={classes.toggle} key={id} value={value}>
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default FilterToggle;
