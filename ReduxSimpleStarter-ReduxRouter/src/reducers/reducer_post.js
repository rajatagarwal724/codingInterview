import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_POSTS: 
            return _.mapKeys(action.payload.data, 'id');
        default:
        return state;
    }
}

// Line no 7 : the _.mapKeys takes the Array of posts Objects as the argument
// and the second argument as the one which should be the Key for each entry
// in the constructed Map.