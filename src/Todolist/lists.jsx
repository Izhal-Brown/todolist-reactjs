import React, {useState} from 'react';
import Form from './form';
import MapLists from './mapLists';
import {Container} from 'react-bootstrap';


function List() {
  const [lists, setLists] = useState([])

  const addLists = (list) => {
    const newList = [list, ...lists] 
    setLists(newList)
  };

  const deleteLists = (id) => {
   const deleteArr = [...lists].filter((list) => list.id !== id)
   setLists(deleteArr)
  }

  const updateLists=  (listId, newValue) => {
    setLists ((prev) =>
      prev.map((item) => (item.id === listId ? newValue : item))
    )
  }

  return (
    <div>
      <Container className='input-todo'>
        <Form onSubmit={addLists}/>
      </Container>
      <Container fluid className='map-list'>
        <MapLists list={lists}
          deleteList={deleteLists} updateList={updateLists}/>
      </Container>
    </div>
  );
}

export default List;