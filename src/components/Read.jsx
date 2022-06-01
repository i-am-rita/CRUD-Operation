import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [mockData, setMockData] = useState([]);
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [checkbox, setCheckbox] = useState(false);

  const getData = () => {
    axios
      .get(`https://6295e8a1810c00c1cb6afc7d.mockapi.io/crudData`)
      .then((getData) => {
        setMockData(getData.data);
      });
  };
  useEffect(() => {
    axios
      .get(`https://6295e8a1810c00c1cb6afc7d.mockapi.io/crudData`)
      .then((getData) => {
        setMockData(getData.data);
      });
  }, []);
  //   We are destructuring our mockData into id, firstName, lastName, and checkbox, and then we are setting this data into local storage.
  //   We're using local storage to store the data in the browser
  // let data = mockData;
  // let { id, firstName, lastName, checkbox } = mockData;

  const setData = (id, firstName, lastName) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    // localStorage.setItem("Checkbox", checkbox);
    console.log(id);
  };

  const onDelete = (id) => {
    axios.delete(`https://6295e8a1810c00c1cb6afc7d.mockapi.io/crudData/${id}`)
    .then(() => {
      getData()
    })
  };
  return (
    <div className="read-form">
      {mockData.map((data) => {
        return (
          <div className="read-data">
            <p>{data.id}</p>
            <p>{data.firstName}</p>
            <p>{data.lastName}</p>
            <p>{data.checkbox ? "checked" : "!checked"}</p>
            <Link to="/update">
              <Button
                variant="outlined"
                onClick={() => setData(data.id, data.firstName, data.lastName)}
              >
                Update
              </Button>
            </Link>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => onDelete(data.id)}
            >
              Delete
            </Button>
          </div>
        );
      })}
      <div className="buttons">
        {/* <h2>Update</h2> */}

        <Link to="/delete"></Link>
      </div>
    </div>
  );
};

export default Read;
// let { id, firstName, lastName, checkbox } = mockData;
// localStorage.setItem("ID", id);
// localStorage.setItem("First Name", firstName);
// localStorage.setItem("Last Name", lastName);
// localStorage.setItem("Checkbox", checkbox);
