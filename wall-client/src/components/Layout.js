/**
 * Created by dayongsun on 7/4/17.
 */
import React from 'react';
import HeaderContainer from '../containers/HeaderContainer'
import ModalDialogContainer from '../containers/ModalDiaglogContainer'
import SpinnerContainer from '../containers/SpinnerContainer'

export default class Layout extends React.Component {

    render() {
        return (
            <div>
                <SpinnerContainer/>
                <HeaderContainer />

                <ModalDialogContainer />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}