import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function ParentComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
      if (e.target.value.includes('a' || 'A')) {
          alert('A is an invalid character')
      } else { setFirstName(e.target.value) }
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value)
  }

  return (
    <>
        <Form
            firstName={firstName}
            lastName={lastName}
            handleFirstNameChange={handleFirstNameChange}
            handleLastNameChange={handleLastNameChange}
        />
        <DisplayData firstName={firstName} lastName={lastName} />
    </>
  )
};

export default ParentComponent;