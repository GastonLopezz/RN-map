import {AsyncStorage} from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {navigate} from '../navigatorRef';

const authReducer = (state, action) =>{
    switch(action.type){
        case 'error':
            return {...state, error: action.payload}
        case 'signup':
            return {error: '', token: action.payload};
        case 'signin':
            return {error: '', token: action.payload};
        case 'clear_error_message':
            return{...state, error: ''}
        case 'signout':
            return {token: null, error: ''};               
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({type: 'signin', payload: token});
        console.log(token);
        navigate('TrackList');
    } else {
        navigate('Signin');
    }
}

const signup = (dispatch) =>
    async ({email, password})=>{
        try{
            const response = await trackerApi.post('/signup', {email,password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signup', payload: response.data.token});
            console.log(response.data.token);
            navigate('TrackList');
        }catch(err){
            dispatch({type:'error', payload: err.response.data.error});
            console.log(err.response.data);
        }
    }

const signin = (dispatch) =>
    async ({email, password})=>{
        try{
            const response = await trackerApi.post('/signin', {email,password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signin', payload: response.data.token});
            console.log(response.data.token);
            navigate('TrackList');
        }catch(err){
            dispatch({type:'error', payload: err.response.data.error});
            console.log(err.response.data);
        }
    }

const signout = (dispatch) => async ()=>{
        await AsyncStorage.removeItem('token');
        dispatch({type: 'signout'});
        navigate('Signin');
    }

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'});
}


export const {Provider,Context} = createDataContext(
    authReducer,
    {signin, signup, signout,clearErrorMessage,tryLocalSignin},
    {error: '',token: null}
);