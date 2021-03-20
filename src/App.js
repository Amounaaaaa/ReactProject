import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion ,Card,Button,Form} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     
      <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
       Sign in!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body><Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted" >
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
   
  </Card>
</Accordion>
        
      </header>
    </div>
  );
}

export default App;
