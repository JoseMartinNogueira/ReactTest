
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, {useState} from 'react'
import './App.css';
import Col from 'react-bootstrap/esm/Col';

function App() {
  
  const [textValue, setTextValue] = useState("");
  const [translated, setTranslated] = useState("")

  const translation = () => {
    setTranslated(textValue.replace(/[aeou]/ig, 'i'))
  }

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };
console.log(textValue);
  return (
    <div className="App">
    <Form.Group>
      <Form.Row>
        <Form.Label column='lg' lg={2}>
          Input Text
        </Form.Label>
        <Col>
          <Form.Control as="textarea" rows={4} className= "big-text" value={textValue} onChange={handleChange}/>
        </Col>
      </Form.Row>
      <Button onClick={translation}>
        Translate
      </Button>
      <Form.Row>
        <Form.Label column="lg" lg={2}>
            Translated Text
        </Form.Label>
        <Col>
          <Form.Control as="textarea" rows={4}  value={translated} className="big-text" readOnly>
            
          </Form.Control>
        </Col>
      </Form.Row>
    </Form.Group>
    </div>
  );
}

export default App;
