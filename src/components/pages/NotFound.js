import React, {Component} from 'react';

class NotFound extends Component {
    render() {
        return (
            <div>
                <h1 className="display-4"><span className="text-danger">404</span>  not <span className="text-warning">found</span></h1>
                <p className="lead">this page does not exist</p>
            </div>
        );
    }
}

export default NotFound;