import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { changeColor, strokeColor } from '../../actions/index'

import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

class AccordionColor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      strokeColor: '',
    }
  }

  onColorChanged = (e) => {
    this.props.dispatch(changeColor(e.currentTarget.value));
    this.setState({ ...this.state, changeColor: e.currentTarget.value })
  }

  render() {
    return (

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Color
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>

          <div className='container__input'>

            <label className='container__radio' htmlFor='r21'>
              <input className='custom purple' type='radio' name='change-colour' id='r21' value='Green' onChange={this.onColorChanged} />
              <span id='radio__colour--green' className='checkmark checkmark__colours'></span>
            </label>

            <label className='container__radio' htmlFor='r22'>
              <input type='radio' name='change-colour' id='r22' value='Blue' onChange={this.onColorChanged} />
              <span id='radio__colour--blue' className='checkmark checkmark__colours'></span>
            </label>


            <label className='container__radio' htmlFor='r23'>
              <input type='radio' name='change-colour' id='r23' value='#FF0000' onChange={this.onColorChanged} />
              <span id='radio__colour--chuckNorris' className='checkmark checkmark__colours'></span>
            </label>

            <label className='container__radio' htmlFor='r24'>
              <input type='radio' name='change-colour' id='r24' value='Yellow' onChange={this.onColorChanged} />
              <span id='radio__colour--yellow' className='checkmark checkmark__colours'></span>
            </label>
          </div>

          <div className='container__input--text'>
            <p className=''>Green</p>
            <p className=''>Blue</p>
            <p className=''>Chuck Norris</p>
            <p className=''>Yellow</p>
          </div>

          <div className='container__text--code'>
            <p className='margin__left'> {this.state.changeColor}</p>
          </div>

        </AccordionItemPanel>
      </AccordionItem>
    )
  }
}

function mapStateToProps(state) {
  return {
    changeColor: state.rocket.changeColor,
  }
}

export default connect(mapStateToProps)(AccordionColor)

