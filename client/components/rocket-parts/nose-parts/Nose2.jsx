import React, { Component, Fragment } from 'react'

class Nose2 extends Component {
    render() {
        return (
            <Fragment>
                {/* Nose equal triangle 2 */}
                <polygon points="180 200 290 120 340 200" fill={this.props.changeColor} stroke={this.props.strokeColor} strokeWidth='1' />
            </Fragment>
        )
    }
}

export default Nose2