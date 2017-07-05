import reqwest from 'reqwest'

/*********************************************************************************/
export const Open_Spinner = () => {
    return {
        type: 'OPEN_SPINNER'
    }
}

export const Close_Spinner = () => {

    return {
        type: 'CLOSE_SPINNER'
    }
}

//type: one of: ["success", "warning", "danger", "info", "default", "primary"]
export const Open_MessageBox = (type, title, message) => {
    return {
        type: 'OPEN_MESSAGEBOX',
        messageBoxType: type,
        messageBoxTitle: title,
        messageBoxMessage: message
    }
}

export const Close_MessageBox = (followUpAction) => {

    return {
        type: 'CLOSE_MESSAGEBOX',
        messageBoxFollowUp: followUpAction
    }
}

/*********************************************************************************/

export const Register_Action = (email, password, recaptchaResponse) => {

    return function (dispatch) {
        dispatch(Open_Spinner());
        return reqwest({
            url: './api/texts',
            method: 'get',
            type: 'json',
            withCredentials: false,
            error: function (err) {
                dispatch(Open_MessageBox('danger', err.responseText));
                console.log('error in Get_Texts_Action = ', err);
            },

            success: function (response) {
                console.log('successfully Get_Texts_Action', response);

                dispatch(Close_Spinner());
                dispatch(Get_Texts_Succeed_Action(response));
            }

        })
    }
}

export const Get_Texts_Succeed_Action = (response) => {
    return {
        type: 'Get_Texts_Succeed',
        EV_AGREEMENT_TEXTS: response.EV_AGREEMENT_TEXTS,
        EV_FERPA_RIGHTS_TEXTS: response.EV_FERPA_RIGHTS_TEXTS,
        EV_FERPA_DIRECTORY_TEXTS: response.EV_FERPA_DIRECTORY_TEXTS
    }
}

/******************************************************************************************/

export const Update_Texts_Action = (textId, content, user, token) => {


    return function (dispatch) {
        dispatch(Open_Spinner());
        return reqwest({
            url: './api/texts',
            method: 'post',
            type: 'json',
            withCredentials: false,
            headers: { user: user, token: token },
            data: {
                textid: textId,
                content: content
            },
            error: function (err) {
                dispatch(Close_Spinner());
                dispatch(Open_MessageBox('danger', err.responseText));
                console.log('error in Get_Texts_Action = ', err);
            },

            success: function (response) {
                console.log('successfully Update_Texts_Action', response);
                dispatch(Close_Spinner());
                dispatch(Open_MessageBox('success', 'Texts saved successfully', 'Texts saved successfully'));
            }

        })
    }
}

export const Update_Texts_Succeed_Action = (response) => {
    return {
        type: 'Update_Texts_Succeed'
    }
}

/******************************************************************************************/

export const Init_Action = (user, token) => {


    return function (dispatch) {
        dispatch(Open_Spinner());
        return reqwest({
            url: './api/initialization',
            method: 'get',
            type: 'json',
            withCredentials: false,
            headers: {
                user: user,
                token: token
            },

            error: function (err) {
                dispatch(Close_Spinner());
                dispatch(Open_MessageBox('danger', err.responseText));
                console.log('error in Init_Action = ', err);
            },

            success: function (response) {
                console.log('successfully Init_Action', response);
                dispatch(Close_Spinner());

                const returnMessages = response.ET_RETURN;
                if ( returnMessages !== null ) {
                    returnMessages.map(function(returnRecord) {
                        if (returnRecord.TYPE == 'E') {
                            dispatch(Open_MessageBox('danger', 'Error', returnRecord.MESSAGE));

                            return;
                        }
                    })
                }

                dispatch(Init_Succeed_Action(response));

            }

        })
    }
}

export const Init_Succeed_Action = (response) => {
    return {
        type: 'Init_Succeed',
        ET_SESSIONS: response.ET_SESSIONS,
        ET_YEARS: response.ET_YEARS
    }
}

/******************************************************************************************/

export const Get_Agreement_Status_Action = (year, semester, user, token) => {


    return function (dispatch) {
        dispatch(Open_Spinner());
        return reqwest({
            url: './api/agreement',
            method: 'get',
            type: 'json',
            withCredentials: false,
            headers: {
                user: user,
                token: token
            },
            data: {
                year: year,
                semester: semester
            },

            error: function (err) {
                dispatch(Close_Spinner());
                dispatch(Open_MessageBox('danger', 'Error', err.responseText));
                console.log('error in Get_Agreement_Status_Action = ', err);
            },

            success: function (response) {
                console.log('successfully Get_Agreement_Status_Action', response);

                dispatch(Close_Spinner());

                let returnMessages = response.ET_RETURN;

                if ( returnMessages !== null && returnMessages.length > 0) {

                    returnMessages.map(function(returnRecord) {

                        if (returnRecord.TYPE === 'E') {
                            console.log('type equals', returnRecord.TYPE);
                            dispatch(Open_MessageBox('danger', 'Error', returnRecord.MESSAGE));

                            return;
                        }
                    })
                }
                else if (response.EV_WINDOW_OPEN === '' && response.EV_ACCEPTED !== 'X') {
                    dispatch(Open_MessageBox('danger', 'Registration window closed', 'The registration window for the semester is not open'));

                    return;
                }
                else if (response.EV_ACCEPTED === 'X') {
                    dispatch(Open_MessageBox('danger', 'No action needed', 'You have already finished all pre-registration activities.'));
                    //dispatch(Get_Agreement_Status_Succeed_Action(response, year, semester));
                    return;
                }
                else{

                    dispatch(Get_Agreement_Status_Succeed_Action(response, year, semester));
                }

            }

        })
    }
}

export const Get_Agreement_Status_Succeed_Action = (response, year, semester) => {
    return {
        type: 'Get_Agreement_Status_Succeed',
        EV_WINDOW_OPEN: response.EV_WINDOW_OPEN,
        EV_ACCEPTED: response.EV_ACCEPTED,
        EV_AGREEMENT_TEXTS: response.EV_AGREEMENT_TEXTS,
        EV_FERPA_RIGHTS_TEXTS: response.EV_FERPA_RIGHTS_TEXTS,
        EV_FERPA_DIRECTORY_TEXTS: response.EV_FERPA_DIRECTORY_TEXTS,
        ES_HOME_ADDR: response.ES_HOME_ADDR,
        ES_MAILING_ADDR: response.ES_MAILING_ADDR,
        year: year,
        semester: semester

    }
}


export const Update_Agreement_Status_Action = (year, semester, user, token) => {


    return function (dispatch) {
        dispatch(Open_Spinner());
        return reqwest({
            url: './api/agreement',
            method: 'post',
            type: 'json',
            withCredentials: false,
            headers: {
                user: user,
                token: token
            },
            data: {
                year: year,
                semester: semester
            },

            error: function (err) {
                dispatch(Close_Spinner());
                dispatch(Open_MessageBox('danger', 'Error', err.responseText));
                console.log('error in Update_Agreement_Status_Action = ', err);
            },

            success: function (response) {
                console.log('successfully Update_Agreement_Status_Action', response);

                dispatch(Close_Spinner());

                let returnMessages = response.ET_RETURN;

                if ( returnMessages !== null && returnMessages.length > 0) {

                    returnMessages.map(function(returnRecord) {

                        if (returnRecord.TYPE === 'E') {
                            console.log('type equals', returnRecord.TYPE);
                            dispatch(Open_MessageBox('danger', 'Error', returnRecord.MESSAGE));

                            return;
                        }
                    })
                }
                else{

                    dispatch(Update_Agreement_Status_Succeed_Action(response));
                }

            }

        })
    }
}

export const Update_Agreement_Status_Succeed_Action = (response) => {
    return {
        type: 'Update_Agreement_Status_Succeed'

    }
}

/******************************************************************************************/

export const Update_Mailing_Addr_Action = (newAddr, user, token) => {


    return function (dispatch) {
        dispatch(Open_Spinner());
        return reqwest({
            url: './api/address',
            method: 'post',
            type: 'json',
            withCredentials: false,
            headers: {
                user: user,
                token: token
            },
            data: { addr: JSON.stringify(newAddr) },
            error: function (err) {
                dispatch(Close_Spinner());
                dispatch(Open_MessageBox('danger', err.responseText));
                console.log('error in Update_Mailing_Addr_Action = ', err);
            },

            success: function (response) {
                console.log('successfully Update_Mailing_Addr_Action', response);
                dispatch(Close_Spinner());

                let returnMessages = response.ET_RETURN;
                if ( returnMessages !== null ) {
                    returnMessages.map(function(returnRecord) {
                        if (returnRecord.TYPE == 'E') {
                            dispatch(Open_MessageBox('danger', 'Error', returnRecord.MESSAGE));

                            return;
                        }
                    })
                }
                dispatch(Open_MessageBox('success', 'Successfully updated', 'Your local mailing address was successfully updated.'));
                dispatch(Update_Mailing_Addr_Succeed_Action(response, newAddr));
            }

        })
    }
}

export const Update_Mailing_Addr_Succeed_Action = (response, newAddr) => {
    return {
        type: 'Update_Mailing_Addr_Succeed',
        ES_MAILING_ADDR: newAddr

    }
}

export const Reg_Agreement_Accepted_Action = (finished) => {
    return {
        type: 'Reg_Agreement_Accepted',
        regfinished: finished
    }
}

export const Ferpa_Directory_Accepted_Action = (finished) => {
    return {
        type: 'Ferpa_Directory_Accepted',
        ferpadirectoryfinished: finished
    }
}

export const Ferpa_Rights_Accepted_Action = (finished) => {
    return {
        type: 'Ferpa_Rights_Accepted',
        ferparightsfinished: finished
    }
}