import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ID, setID] = useState(null);
  console.log(ID);

  const returnData = () => {
    axios.put(`https://6295e8a1810c00c1cb6afc7d.mockapi.io/crudData/${ID}`, {
      firstName,
      lastName
    });
  };
  useEffect(() => {
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setID(localStorage.getItem("ID"));
  });
  return (
    <>
      <div className="create-form">
        <div className="form">
          <form>
            <label for="fname">First name:</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              //   placeholder="Last Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </form>
          <form>
            <label for="fname">Last name:</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              //   placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </form>
          {/* <Checkbox
            checked={checked}
            onChange={() => setCheckbox(!checkbox)}
            inputProps={{ "aria-label": "controlled" }}
          /> */}
        </div>
        <Link to="/read">
          <Button variant="outlined" onClick={returnData}>
            Update
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Update;
