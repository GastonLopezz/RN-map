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
        default:
            return state;
    }
};

const signup = (dispatch) =>
    async ({email, password})=>{
        try{
            const response = await trackerApi.post('/signup', {email,password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signup', payload: response.data.token});
            console.log(response.data.token);
            navigate('TrackList');
        }catch(err){
            dispatch({type:'error', payload:'Something went wrong with sign up'});
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
            dispatch({type:'error', payload:'Something went wrong with sign up'});
            console.log(err.response.data);
        }
    }

const signout = (dispatch) =>{
    return ()=>{
        
    }
}

export const {Provider,Context} = createDataContext(
    authReducer,
    {signin, signup, signout},
    {error: '',token: null}
);