import React, { useState } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import Form from './form';


function Maplists({ list, deleteList, updateList }) {
  const [edit, setEdit] = useState({
    id: null,
    text: "",
    select: ""
  })

  const submitUpdate = (text, select) => {
    updateList(edit.id, text, select)
    setEdit({
      id: null,
      text: "",
      select: ""
    })
  }

  if (edit.id) {
    return <Container className='update-todo'>
      <Form edit={edit} onSubmit={submitUpdate}></Form>
      </Container>
  }



  return (
    <div>
      {list.map((item, index) => (
        <div key={index} className="cards">
          <Card key={index}>
            <Card.Body>
              <Card.Title>ID : {item.id}</Card.Title>
              <Card.Text>
                <span className='category'>Category : {item.category}  </span>  <br />
                <span className='todo'>Todo  : {item.text}</span>
              </Card.Text>
              <div className="button">
                <Button variant="warning" onClick={() => setEdit({ id: item.id, text: item.text, select: item.category })}>Update</Button>
                <Button variant="danger" onClick={() => deleteList(item.id)}>Delete</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}

    </div>
  );
}

export default Maplists;