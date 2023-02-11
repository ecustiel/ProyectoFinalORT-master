import React from "react";
import { CheckBox } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
import { FormControlLabel } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    "&$checked": {
      color: "#000",
    },
  },
  checked: {},
  wrap: {
    width: "100%",
    display: "block",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "left",
    marginLeft: "20px",
  },
  label: {
    fontSize: ".9rem",
  },
});

const CheckBoxProton = ({ balneario, changeChecked }) => {
  const classes = useStyles();
  const { checked, label, id } = balneario;
  return (
    <div>
      <FormControlLabel
        classes={{
          label: classes.label,
          root: classes.wrap,
        }}
        control={
          <Checkbox
            classes={{
              checked: classes.checked,
              root: classes.root,
            }}
            size="small"
            checked={checked}
            onChange={() => changeChecked(id)}
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
        }
        label={label}
      />
    </div>
  );
};

export default CheckBoxProton;
