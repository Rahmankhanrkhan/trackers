import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker'
import { AsyncStorage } from "react-native";
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'signup_error':
            return { ...state, errorMessage: action.payload };

        case 'signup':
            // console.log('action.payload:::',action.payload)
            return { errorMessage: '', token: action.payload }
        default:
            return state
    }
};

const signUp = dispatch => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password })
            // console.log('response.data:::', response.data)
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({ type: 'signup', payload: response.data.token })
            const id = response.data.token
            navigate('Index', ({ id }))
        }
        catch (err) {
            dispatch(
                {
                    type: 'signup_error',
                    payload: 'Try '
                }
            )
        }
    }
}
const signIn = dispatch => { }
const signOut = dispatch => { }

export const { Provider, Context } = createDataContext(
    authReducer,
    { signUp, signIn, signOut },
    { token: null, errorMessage: '' }
)