import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { isRocketComplete, robotMessage } from '../actions/index'

class Launch extends Component {

    checkProps = () => {
        const nose = this.props.noseShape
        const body = this.props.bodyShape
        const wing = this.props.wingShape
        const window = this.props.windowShape
        const thruster = this.props.thrusterShape
        const dispatch = this.props.dispatch

        if (nose == "") { return dispatch(robotMessage("This rocket won't take off without a nose, add one now!")) }
        else if (body == "") { return dispatch(robotMessage("!This rocket won't take off without a body, add one now!")) }
        else if (wing == "") { return dispatch(robotMessage("This rocket won't take off without a  wing, add one now!"))}
        else if (window == "") { return dispatch(robotMessage( "This rocket won't take off without a  window, add one now!")) }
        else if (thruster == "") { return dispatch(robotMessage("This rocket won't take off without a  thruster, add one now!")) }
        else if (nose == "Pyramid") {return dispatch(robotMessage())}
        else if (wing == "SmallTriangle") {return dispatch(robotMessage())}
        else if (thruster == "Thruster1") {return dispatch(robotMessage())}
        else this.props.dispatch(isRocketComplete(true));
    }
    render() {
        return (
            <Fragment>
                <div className='launch-button'>
                    <button onClick={() => this.checkProps()} >Launch</button>
                    {/* {this.state.launchRocket && <Animations />} */}
                </div>
            </Fragment>
        )
    }
}


function mapStateToProps(state) {
    return {
        noseShape: state.rocket.noseShape,
        bodyShape: state.rocket.bodyShape,
        wingShape: state.rocket.wingShape,
        windowShape: state.rocket.windowShape,
        thrusterShape: state.rocket.thrusterShape,
        isRocketComplete: state.rocket.isRocketComplete,
        changeColor: state.rocket.changeColor,
        strokeColor: state.rocket.strokeColor,
        robot: state.rocket.robotMessage
    }
}

export default connect(mapStateToProps)(Launch)