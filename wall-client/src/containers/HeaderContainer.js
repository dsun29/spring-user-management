/**
 * Created by dayongsun on 7/4/17.
 */

import { connect } from 'react-redux'
import HeaderComponent from '../components/HeaderComponent'

const mapStateToProps = (state) =>{
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {


    }
}


const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);


export default HeaderContainer