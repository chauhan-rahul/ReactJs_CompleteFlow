import React from "react";
import {Card, CardHeader, CardBody, CardText, Col, Form, FormGroup, Label, Input, Button, ModalHeader, ModalBody, ModalFooter ,Row} from 'reactstrap';


export default class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            openModalUser:null
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }



    render(){
        this.state.jsonData = this.props.data;

        return (
            <Row>
                {this.state.jsonData.map( (item, key)  => {
                        return (
                            <Col md="4"  className="pt-3">
                                <Card id={key} className="text-center" onDoubleClick={((e) => this.handleClick(e, item))} color="primary">
                                    <CardHeader tag="h3" style={{
                                        backgroundColor: '#add8e6',
                                        borderColor: '#add8e6',
                                        color: 'black'
                                    }}>{item.name}</CardHeader>
                                    <CardBody>
                                        <CardText>{item.email}</CardText>
                                        <CardText>{item.address.city}</CardText>
                                        <CardText>{item.phone}</CardText>
                                        <CardText>{item.website}</CardText>
                                        <CardText>{item.company.name}</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    }
                )}
            </Row>
        )
    }
}
