import React, {Component} from 'react';
import {Consumer} from "../../Context";
import axios from 'axios'
import {Link} from 'react-router-dom'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showContactInfo: false
        }
    }


    OnShowClick(){
        this.setState({
            showContactInfo : !this.state.showContactInfo
        })
    }

    OnDeleteClick(id , dispatch){
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response =>
            dispatch({type : "DELETE_CONTACT" , payload:id})
        )
    }

    render() {

        const {id , name , phone , email} = this.props.contact;
        const {showContactInfo} = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-2">
                            <h4>
                                {name}{' '}
                                <i style={{cursor : 'pointer'}} onClick={this.OnShowClick.bind(this)} className="fa fa-sort-down"> </i>
                                <i
                                    className="fa fa-times"
                                    style={{float : 'right', color : 'red' , cursor : 'pointer'
                                    }} onClick={this.OnDeleteClick.bind(this ,  id , dispatch)}>
                                </i>
                                <Link to={`/contact/${id}`}>
                                    <i
                                        style={{cursor : 'pointer' ,
                                            float : 'right',
                                            color : 'black',
                                            marginRight : '1rem'
                                        }}
                                        className="fa fa-pencil">
                                    </i>
                                </Link>
                            </h4>

                            {showContactInfo ? (

                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Email : {email}
                                    </li>
                                    <li className="list-group-item">
                                        Phone : {phone}
                                    </li>
                                </ul>
                            ) : null }

                        </div>
                    )
                }}
            </Consumer>

        );
    }
}

export default Contact;