
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './App.css';
import Col from 'react-bootstrap/esm/Col';

function App() {
  return (
    <div className="App">
    <Form.Group>
      <Form.Row>
        <Form.Label column='lg' lg={2}>
          Input Text
        </Form.Label>
        <Col>
          <Form.Control as="textarea" rows={4} className= "big-text"/>
        </Col>
      </Form.Row>
      <Button>
        Translate
      </Button>
      <Form.Row>
        <Form.Label column="lg" lg={2}>
            Translated Text
        </Form.Label>
        <Col>
          <Form.Control as="textarea" rows={4}  className="big-text" readOnly>
            
          </Form.Control>
        </Col>
      </Form.Row>
    </Form.Group>
    </div>
  );
}

export default App;
