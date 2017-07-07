/**
 * Created by dayongsun on 7/4/17.
 */
import React from 'react'


const ModalDialogComponent = ({showMessageBox, messageBoxTitle, messageBoxMessage, messageBoxType}) =>
    (

        showMessageBox ? ( <div className="modal show" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">

                        {
                            ( messageBoxTitle === null ) ? null: (<div className="modal-header">
                                <h4 className="modal-title">{messageBoxTitle}</h4>
                            </div>)
                        }


                        <div className="modal-body">
                            <p>{messageBoxMessage}</p>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className={'btn btn-' + messageBoxType} data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div> )
        :
        null
    )


export default ModalDialogComponent