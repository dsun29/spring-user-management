/**
 * Created by dayongsun on 7/4/17.
 */
import React from 'react'
import {  connect } from 'react-redux'
import SpinnerComponent from '../components/SpinnerComponent'


const mapStateToProps = (state) =>{
    return {
        showSpinner: state.showSpinner
    }
}


const SpinnerContainer = connect(mapStateToProps)(SpinnerComponent);


export default SpinnerContainer