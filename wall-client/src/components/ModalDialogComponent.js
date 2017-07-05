/**
 * Created by dayongsun on 7/4/17.
 */
import React from 'react'


const ModalDialogComponent = ({showMessageBox, messageBoxTitle, messageBoxMessage, messageBoxType}) =>
    (

        showMessageBox ? ( <div className="modal fade" role="dialog">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">{messageBoxTitle}</h4>
                        </div>
                        <div className="modal-body">
                            <p>{messageBoxMessage}</p>
                        </div>

                        <div className="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div> )
        :
        null
    )


export default ModalDialogComponent