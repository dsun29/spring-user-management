/**
 * Created by dayongsun on 7/4/17.
 */
function Reducer(state = {}, action)  {
    switch (action.type){

        case 'OPEN_SPINNER':

            return Object.assign({}, state,  {showSpinner: true });

        case 'CLOSE_SPINNER':

            return Object.assign({}, state, { showSpinner: false });

        case 'OPEN_MESSAGEBOX':
            return  Object.assign({}, state, {
                messageBoxType: action.messageBoxType,
                messageBoxTitle: action.messageBoxTitle,
                messageBoxMessage: action.messageBoxMessage,
                showMessageBox: true

            });

        case 'CLOSE_MESSAGEBOX':
            return  Object.assign({}, state, {
                messageBoxFollowUp: action.messageBoxFollowUp,
                showMessageBox: false

            });

        case 'Get_Texts_Succeed':

            return  Object.assign({}, state, {
                EV_AGREEMENT_TEXTS: action.EV_AGREEMENT_TEXTS,
                EV_FERPA_RIGHTS_TEXTS: action.EV_FERPA_RIGHTS_TEXTS,
                EV_FERPA_DIRECTORY_TEXTS: action.EV_FERPA_DIRECTORY_TEXTS

            });

        case 'Init_Succeed':

            return  Object.assign({}, state, {
                ET_SESSIONS: action.ET_SESSIONS,
                ET_YEARS: action.ET_YEARS

            });

        case 'Get_Agreement_Status_Succeed':

            return  Object.assign({}, state, {
                EV_AGREEMENT_TEXTS: action.EV_AGREEMENT_TEXTS,
                EV_FERPA_RIGHTS_TEXTS: action.EV_FERPA_RIGHTS_TEXTS,
                EV_FERPA_DIRECTORY_TEXTS: action.EV_FERPA_DIRECTORY_TEXTS,
                EV_WINDOW_OPEN: action.EV_WINDOW_OPEN,
                EV_ACCEPTED: action.EV_ACCEPTED,
                ES_HOME_ADDR: action.ES_HOME_ADDR,
                ES_MAILING_ADDR: action.ES_MAILING_ADDR,
                showMessageBox: false,
                year: action.year,
                semester: action.semester

            });

        case 'Update_Agreement_Status_Succeed':

            return  Object.assign({}, state, {
                showMessageBox: false,
                EV_AGREEMENT_TEXTS: action.EV_AGREEMENT_TEXTS,
                EV_FERPA_RIGHTS_TEXTS: action.EV_FERPA_RIGHTS_TEXTS,
                EV_FERPA_DIRECTORY_TEXTS: action.EV_FERPA_DIRECTORY_TEXTS

            });

        case 'Update_Mailing_Addr_Succeed':

            return  Object.assign({}, state, {
                ES_MAILING_ADDR: action.ES_MAILING_ADDR
            });


        /***************************************************************************/
        case 'Reg_Agreement_Accepted':

            return  Object.assign({}, state, {
                regfinished: action.regfinished
            });

        case 'Ferpa_Directory_Accepted':

            return  Object.assign({}, state, {
                ferpadirectoryfinished: action.ferpadirectoryfinished
            });

        case 'Ferpa_Rights_Accepted':

            return  Object.assign({}, state, {
                ferparightsfinished: action.ferparightsfinished
            });

        /***************************************************************************/

        default:
            return state;
    }
}

export default Reducer