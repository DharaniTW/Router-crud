import React, { useState, useContext } from "react";
import "./AddUser.css";
import { GlobalContext, GlobalProvider } from "../Context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { v4 as uuid } from "uuid";

export const AddUser = () => {
  const [name, setName] = useState("");
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();
  const onSubmit = () => {
    const newUser = {
      id: uuid(),
      name,
    };
    addUser(newUser);
    history.push("/");
  };
  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          value={name}
          onChange={onChange}
          placeholder="Enter Name"
        ></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ">
        Cancel
      </Link>
    </Form>
  );
};
export default AddUser;
