import React,{Component} from 'react';
import './App.css';
import GoogleMapReact from 'google-map-react';
import { Button,Container,Col,Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'; 

import Listmap from './Components/Listmap';  
import Addmap from './Components/Addmap'; 
import Editmap from './Components/Editmap';
import Deletemap from './Components/Deletemap';


const AnyReactComponent = ({ text }) => <div>{text}</div>;


class MedWing extends Component {
  static defaultProps = {
    center: {
      lat: 51.0899232,
      lng: 5.968358
    },
    zoom: 11
  };
 
  render() {
    return (
      
     <React.Fragment>
    <Container>
    <Row>
      <Col sm={12} md={6}>
              {/* Map   */}
      <div style={{ height: '50vh', width: '100%' }}>
       { /* Google Map */}
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDRCcfJVtzzqsrmB5NpU2pytpTEjNlUDUk' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={51.0899232}
            lng={5.968358} 
            text="My Marker"
          />
        </GoogleMapReact>
      </div>

      </Col>
      <Col sm={12} md={6}>
      {/* Router  */}
        <Router>
          <Link to="/add"> 
          <Button variant="primary">Add Map</Button>

        </Link>
        <hr></hr>
          <Switch>
            <Route exact path="/" component={Listmap} />
            <Route path="/add" component={Addmap} />
            <Route path="/edit/:id" component={Editmap} />
            <Route path="/delete/:id" component={Deletemap} />
          </Switch>
      </Router>
      {/* Router  */}
    </Col>
    </Row>
   
    </Container>
    </React.Fragment>
    );
  }
}
 
export default MedWing;