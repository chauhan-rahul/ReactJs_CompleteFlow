import * as ActionType from '../action/ActionType';
import initialState from './initialState';
import _ from 'lodash';



const usersReducer = (state = initialState.usersReducer, action) => {
    switch(action.type) {
        case ActionType.GET_USERS_RESPONSE: {
            return {
                ...state,
                users: _.assign(action.users)
            };
        }


        default: { return state; }
    }
};



export default usersReducer;
