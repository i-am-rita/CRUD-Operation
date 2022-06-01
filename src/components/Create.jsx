import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const returnData = () => {
    axios.post(`https://6295e8a1810c00c1cb6afc7d.mockapi.io/crudData`, {
      firstName,
      lastName,
      checkbox,
    });
  };
  // const submitAndMove = () => {
  //   returnData()
  // }
  return (
    <>
      <div className="create-form">
        <div className="form">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            className="input-field"
          >
            <TextField
              id="outlined-basic"
              label="firstName"
              variant="outlined"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="lastName"
              variant="outlined"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Box>

          <Checkbox
            // checked={checked}
            onChange={() => setCheckbox(!checkbox)}
            // inputProps={{ "aria-label": "controlled" }}
          />
        </div>
        <Link to="/read">
          <Button variant="outlined" onClick={returnData}>
            Submit
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Create;
