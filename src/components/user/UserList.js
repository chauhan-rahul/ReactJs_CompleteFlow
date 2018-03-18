import React, { PropTypes } from 'react';

class UserList extends React.Component {

    constructor(props) {
        super(props);

        this.options = {
            sortIndicator: true,
            noDataText: 'No data'
        };

        this.selectRowProp = {
            mode: 'radio',
            bgColor: '#c1f291',
            onSelect: props.handleRowSelect,
            clickToSelect: true, 
            hideSelectColumn: true            
        };
    }



    render() {


        return (
            <div className="container">
            <div className="row">
                {this.props.users.map( (item, key)  => {
                        return (
                            <div key={key} className="col-md-4 pt-3" >
                                <div className="card text-center bg-primary" id={key} onDoubleClick={((e) => this.props.handleRowSelect(e, item))}>
                                <div className="card-header">{item.name}</div>
                                <div className="card-body">
                                    <p className="card-text">{item.email}</p>
                                    <p className="card-text">{item.address.city}</p>
                                    <p className="card-text">{item.phone}</p>
                                    <p className="card-text">{item.website}</p>
                                    <p className="card-text">{item.company.name}</p>
                                </div>
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
            </div>
        );
    }
}



UserList.propTypes = {
    users: PropTypes.array.isRequired,
    handleRowSelect: PropTypes.func.isRequired
};



export default UserList;

