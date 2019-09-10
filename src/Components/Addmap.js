import React, { Component } from 'react'
import { Button,Form } from 'react-bootstrap';
import Autocomplete from "./Autocomplete";
import axios from 'axios';
const API_PATH = 'http://localhost:3000/api/index.php';


 

export default class Addmap extends Component {

    state = {
        place: {},
        id:'',
        name:'',
      };
    
    
      showPlaceDetails(place) {
        this.setState({ place });
      }

      handleFormSubmit = e => {
        e.preventDefault();
        axios({
          method: 'post',
          url: `${API_PATH}`,
          headers: { 'content-type': 'application/json' },
          data: this.state
        })
          .then(result => {
            this.setState({
              mailSent: result.data.sent
            })
          })
          .catch(error => this.setState({ error: error.message }));
      };
      
     

    render() {
        const AddressDetails = props => {
            return (
                <div>
                    {console.log(props.place.name)}

                    {console.log(props.place.id)}
                    {console.log(props.place)}
                  <pre>{JSON.stringify(props.place, null, 2)}</pre>
                </div>
            )
          };
        return (
            <div>
                <h1>Add Map Location</h1>
                <Form>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Location</Form.Label>
                <Autocomplete onPlaceChanged={this.showPlaceDetails.bind(this)} />
                <AddressDetails place={this.state.place} />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                 
                Submit
                </Button>
                </Form>
            </div>
        )
    }
}
