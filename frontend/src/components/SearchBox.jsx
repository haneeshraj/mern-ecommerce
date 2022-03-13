import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
const SearchBox = () => {
  const [keyword, setKeyword] = useState("");

  const naviagate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      naviagate(`/search/${keyword}`);
    } else {
      naviagate(`/`);
    }
  };

  return (
    <>
      <Form onSubmit={submitHandler} inline='true' className='test'>
        <Form.Control
          type='text'
          name='q'
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search Products...'
          className='mr-sm-2 ml-sm-5'
        ></Form.Control>
        <Button type='submit' variant='outline-success' className='p-2'>
          Search
        </Button>
      </Form>
    </>
  );
};

export default SearchBox;
