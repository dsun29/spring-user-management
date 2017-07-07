/**
 * Created by dayongsun on 7/6/17.
 */
/**
 * Created by dayongsun on 7/4/17.
 */

import { connect } from 'react-redux'
import LoginComponent from '../components/LoginComponent'
import { Login_Action } from '../redux/actions'

const mapStateToProps = (state) =>{
    return {
        showMessageBox: state.showMessageBox
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (email, password, recaptchaResponse) => {

            dispatch(Login_Action(email, password, recaptchaResponse));
        }

    }
}


const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);


export default LoginContainer