import UPDATE from '../redux/UPDATE.js';
import { UPDATE_ACTION } from '../redux/action.js';

function updateWordAndApi(updatedWord) {
    return function (dispatch) {
        UPDATE(updatedWord)
            .then(() => dispatch(UPDATE_ACTION(updatedWord)))
            .catch(error => console.error(error));
    };
}

export default updateWordAndApi;