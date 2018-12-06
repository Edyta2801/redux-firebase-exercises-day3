import React from 'react'
import {connect} from 'react-redux'  

class UserData extends Component{
    render(){
        return(
            <div>

            </div>
        )
    }
}

const mapStateToProps=state=>({})
const mapDispatchToProps=dispatch=>({})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserData)