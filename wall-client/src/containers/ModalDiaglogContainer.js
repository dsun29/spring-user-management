/**
 * Created by dayongsun on 7/4/17.
 */

import { connect } from 'react-redux'

import ModalDialogComponent from '../components/ModalDialogComponent'

import { Close_MessageBox } from '../redux/actions'

//({showDialog, dialogTitle, dialogBody, onClose})
const mapStateToProps = (state) =>{
    return {
        showMessageBox: state.showMessageBox,
        messageBoxTitle: state.messageBoxTitle,
        messageBoxMessage: state.messageBoxMessage,
        messageBoxType: state.messageBoxType
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeMessageBox: (followupFunction) => {
            dispatch(Close_MessageBox(followupFunction));
        }
    }
}


const ModalDialogContainer = connect(mapStateToProps, mapDispatchToProps)(ModalDialogComponent);


export default ModalDialogContainer