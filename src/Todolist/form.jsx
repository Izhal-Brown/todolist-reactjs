import React,{useState} from 'react';
import {Form, Button} from 'react-bootstrap';

function Forms(props) {
  const [input, setInput] = useState(props.edit ? props.edit.text : "")
  const [category, setCategory] = useState(props.edit ? props.edit.select : "")

  const handleForm = (e) => {
    e.preventDefault()
    // console.log("all data", input,category)
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
      category : category,
    })
    setInput("")
    setCategory("")
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSelect = (s) => {
    setCategory(s.target.value)
  }

  return (
    <div className='container'>
      <Form onSubmit={handleForm}>
        {props.edit ? 
        (<>
          {/* Update Todo */}
          <Form.Group className="mb-3">
            <Form.Label htmlFor="" >Update Todo</Form.Label>
            <Form.Control type="text" placeholder='Please Update your todo' onChange={handleChange} value={input}/>
            <Form.Select aria-label="Default select" name="category" onChange={handleSelect}>
              <option value={category}>{category}</option>
              <option value="Kantor">Kantor</option>
              <option value="Rumah">Rumah</option>
            </Form.Select>
            <Button variant="dark" type="submit">Update</Button>
          </Form.Group>
        </>
        ):(
        <>
          {/* Input Todo */}
          <Form.Group className="mb-3">
            <Form.Label htmlFor="">Input Todo</Form.Label>
            <Form.Control type="text" placeholder='Please Input your todo' onChange={handleChange} value={input}/>
            <Form.Select aria-label="Default select"  name="category" onChange={handleSelect} value={category}>
              <option>Pilih Category</option>
              <option value="Kantor">Kantor</option>
              <option value="Rumah">Rumah</option>
            </Form.Select>
            <Button variant="dark" type="submit">Add</Button>
          </Form.Group>
        </>)}
      </Form>
    </div>
  );
}

export default Forms;

