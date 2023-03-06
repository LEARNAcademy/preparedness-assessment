import React, { useState } from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
  const [modal, setModal] = useState(false)
  const [nameFromInput, setNameFromInput] = useState("")
  const toggle = () => setModal(!modal)
  const handleInputValue = (e) => setNameFromInput(e.target.value)
  const clearForm = () => setNameFromInput("")

  return (
    <>
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input onChange={handleInputValue} value={nameFromInput} />
        </div>
        <Button color="info" onClick={toggle}>
          Click Me
        </Button>
        <Button color="info" onClick={clearForm}>
          Reset
        </Button>
        <ModalComponent
          toggle={toggle}
          modal={modal}
          nameFromInput={nameFromInput}
        />
      </div>
    </>
  )
}

export default App
