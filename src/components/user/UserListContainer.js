import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as userAction from '../../action/UserAction';
import UserList from './UserList';



export class UserListContainer extends React.Component {

    constructor() {
        super();

        this.state = {selectedUserId: undefined};

        this.handleAddUser = this.handleAddUser.bind(this);
        this.handleEditUser = this.handleEditUser.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.action.getUsersAction()
            .catch(error => {
                toastr.error(error);
            });
    }

    handleAddUser() {
        this.props.history.push('/user');
    }

    handleEditUser(row, isSelected) {
        const selectedUserId = isSelected.id;

        if (selectedUserId) {
            this.setState({selectedUserId: undefined});
            this.props.history.push(`/user/${selectedUserId}`);
        }        
    }



    handleDelete() {
        const selectedUserId = this.state.selectedUserId;

        if (selectedUserId) {
            this.setState({selectedUserId: undefined});
            this.props.action.deleteUserAction(selectedUserId)
                .catch(error => {
                    toastr.error(error);
                });
        }
    }

    render() {
        const { users } = this.props;

        if (!users) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div className="container">
                <h1>Users</h1>

                <UserList users={users} handleRowSelect={this.handleEditUser}/>

            </div>
        );
    }
}



const mapStateToProps = state => ({
    users: state.usersReducer.users
});



const mapDispatchToProps = dispatch => ({
    action: bindActionCreators(userAction, dispatch)

});



UserListContainer.propTypes = {
    users: PropTypes.array,
    action: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};



export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
