import React, {Component} from 'react';
import {Consumer} from "../../Context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from 'axios'


class EditContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            email : '',
            phone : '',
            errors : {}
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                const contact = response.data;
                this.setState({
                    name : contact.name,
                    email : contact.email,
                    phone : contact.phone
                })
            })
    }


    handleSubmit(dispatch , event ){
        event.preventDefault();
        const { name , email , phone} = this.state;

        if(name === ''){
            this.setState({
                errors : { name : 'name is required'},
            });
            return;
        }

        if(email === ''){
            this.setState({
                errors : { email : 'email is required'}
            });
            return;
        }

        if(phone === ''){
            this.setState({
                errors : { phone : 'phone is required'}
            });
            return;
        }

        // EditContact
        const updateContact = {
            name,
            email,
            phone,
        };
        const { id } = this.props.match.params;
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}` , updateContact)
            .then(response => dispatch({
                type : "UPDATE_CONTACT",
                payload : response.data
        }));



        this.setState({
            name : '',
            email : '',
            phone : '',
            errors : {}
        });

        this.props.history.push('/')
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })

    }

    render() {
        const  {errors ,name , email , phone} = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">
                                EditContact
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit.bind(this , dispatch)}>
                                    <TextInputGroup
                                        label="name"
                                        type="text"
                                        name="name"
                                        value={name}
                                        placeholder="Enter name ..."
                                        onChange={this.handleChange.bind(this)}
                                        error={errors.name}
                                    />
                                    <TextInputGroup
                                        label="email"
                                        type="email"
                                        name="email"
                                        value={email}
                                        placeholder="Enter email ..."
                                        onChange={this.handleChange.bind(this)}
                                        error={errors.email}
                                    />
                                    <TextInputGroup
                                        label="phone"
                                        type="text"
                                        name="phone"
                                        value={phone}
                                        placeholder="Enter phone ..."
                                        onChange={this.handleChange.bind(this)}
                                        error={errors.phone}
                                    />
                                    <input type="submit" className="btn btn-danger btn-block" value="Update Contact"/>
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        );
    }
}

export default EditContact;