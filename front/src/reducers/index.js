import { combineReducers } from 'redux';

import nav from './navigations';

export default client => combineReducers({
    apollo: client.reducer(),
    nav
});