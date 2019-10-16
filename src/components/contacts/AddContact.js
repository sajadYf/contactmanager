import React, {Component} from 'react';
import {Consumer} from "../../Context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from 'axios'


class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            email : '',
            phone : '',
            errors : {}
        }
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

        const newContact = {
            name,
            email,
            phone,
        };

        axios.post('https://jsonplaceholder.typicode.com/users' , newContact)
            .then(response =>
                dispatch({
                    type : "ADD_CONTACT",
                    payload : response.data
                })
            );



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
                                AddContact
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
                                    <input type="submit" className="btn btn-danger btn-block" value="Add Contact"/>
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        );
    }
}

export default AddContact;