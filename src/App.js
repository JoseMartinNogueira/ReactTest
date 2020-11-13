
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, {useState} from 'react'
import axios from 'axios'
import './App.css';
import Col from 'react-bootstrap/esm/Col';


function App() {
  
  const [textValue, setTextValue] = useState("")
  const [translated, setTranslated] = useState("")
  const [language, setLanguage] = useState("es")

  const translation = () => {
    //axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+key+'&lang='+language+'&text='+textValue).then((response) =>
    //setTranslated(response.data.text[0]))
    
  }
  const handleChange = (event) => {
    setTextValue(event.target.value)
  }
  const setLanguageTranslation = (event) => {
    setLanguage(event.target.value)
  }
console.log(language);
  return (
    <div className="App">
    <Form.Group c>
      <Form.Row>
        <Form.Label column='lg' lg={2}>
          Input Text
        </Form.Label>
        <Col>
          <Form.Control as="textarea" rows={4} className= "big-text" value={textValue} onChange={handleChange}/>
        </Col>
      </Form.Row>
      <Form.Control as="select" className="nice-select" multiple onChange={setLanguageTranslation}>
        <option value="es"> Spanish </option>
        <option value="fr"> French </option>
        <option value="ru"> Russian </option>   
      </Form.Control> 
      <Form.Row>
      <br/>
        <Button onClick={translation}>
          Translate
        </Button>
      <br/>
        <Form.Label column="lg" lg={2}>
            Translated Text
        </Form.Label>
        <Col>
          <Form.Control as="textarea" rows={4}  value={translated} className="big-text" readOnly/>
        </Col>
      </Form.Row>
    </Form.Group>
    </div>
  );
}

export default App;
