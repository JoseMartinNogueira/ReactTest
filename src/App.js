
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, {useState} from 'react'
import axios from 'axios'
import './App.css';
import Col from 'react-bootstrap/esm/Col';

function App() {

  const [textValue, setTextValue] = useState("");
  const [sentiment, setSentiment] = useState("")

  const sentimentResult = () => {
    let apiRequest = {
      method: 'post',
      url: 'https://sentim-api.herokuapp.com/api/v1/',
      headers: {
        'Accept': "application/json", 
        "Content-Type": "application/json"
      },
      data: { 
        "text": textValue 
      },
    }
    axios(apiRequest).then(res =>{
      setSentiment(res.data.result.type)
    })
  }

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

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
      <Button onClick={sentimentResult}>
        Sentiment Check
      </Button>
      <Form.Row>
        <Form.Label column="lg" lg={2}>
            Sentiment Check Result
        </Form.Label>
        <Col>
          <Form.Control as="textarea" rows={4}  className="big-text" value={sentiment} readOnly/>
          
        </Col>
      </Form.Row>
    </Form.Group>
    </div>
  );
}

export default App;
