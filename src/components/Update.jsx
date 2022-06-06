import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const Update = () => {
  // const [state, setState] = useState({
  //     id: "",
  //     firstName: "",
  //     lastName: "",
  // })
  const [firstName, setFirstName] = useState(
    localStorage.getItem("First Name")
  );
  const [lastName, setLastName] = useState(localStorage.getItem("Last Name"));
  const [ID, setID] = useState(localStorage.getItem("ID"));
  console.log(ID);

  //   const returnData = () => {
  //       axios.put(`https://6295e8a1810c00c1cb6afc7d.mockapi.io/crudData/${ID}`, {
  //           firstName,
  //           lastName
  //       })
  //   }

  const returnData = () => {
    localStorage.setItem("ID", ID);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    axios.put(`https://6295e8a1810c00c1cb6afc7d.mockapi.io/crudData/${ID}`, {
      firstName,
      lastName,
    });
    // localStorage.setItem("Checkbox", checkbox);
    // console.log(id);
  };

  //   const returnData = (ID, firstName, lastName) => {
  //     axios.put(`https://6295e8a1810c00c1cb6afc7d.mockapi.io/crudData/${ID}`, {
  // firstName,
  //     });
  //   .then(() => {
  // localStorage.setItem("ID", ID),
  //   localStorage.setItem("First Name", firstName),
  //   localStorage.setItem("Last Name", lastName);
  //   });
  //   };

  //   const handleChange = (e) => {
  //       setState(prevState => {
  //           ...prevState,
  //           [e.target.name]: e.target.value,
  //       });
  // console.log("changed");
  //   };
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
              // onChange={handleChange}
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
