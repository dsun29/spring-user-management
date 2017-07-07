/**
 * Created by dayongsun on 7/4/17.
 */

import { connect } from 'react-redux'
import RegisterComponent from '../components/RegisterComponent'
import { Register_Action } from '../redux/actions'

const mapStateToProps = (state) =>{
    return {
        showMessageBox: state.showMessageBox
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (email, password, recaptchaResponse) => {

            dispatch(Register_Action(email, password, recaptchaResponse));
        }

    }
}


const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);


export default RegisterContainer