import React from 'react';
//unfortunately, browser-native range slider is broken in chrome developer mode, nw-react-slider is not
import Slider from 'nw-react-slider';
import CSS from './scss/doppler.scss'

const Doppler = React.createClass({
  getInitialState() {
    return {
      current_val: 0.0,
      max_val: 100.0,
      min_val: -100.0,
      log_val: 0,
      max_hue_rotate: 150,
      min_hue_rotate: -120,
      error: false
    }
  },
  showRangeError() {
    this.setState({ error: 'range' })
    return false;
  },
  showStringError() {
    this.setState({ error: 'string' })
    return false;
  },
  removeError() {
    this.setState({ error: false })
    return false;
  },
  updateFromTextMaybe(e) {
    console.warn(e)
    const { value } = e.target;
    const { max_val, min_val, error } = this.state;
    //short circuit if value is outside range
    if (value > max_val || value < min_val) return this.showRangeError();
    if (isNaN(Number(value))) return this.showStringError();
    //remove error flag if it exists
    if (error) this.removeError();
    this.setState({
      current_val: Number(value),
      log_val: this.logarithmicValue()
    })
  },
  updateFromSlider(value) {
    const { error } = this.state;
    if (error) this.removeError();
    this.setState({
      current_val: value,
      log_val: this.logarithmicValue()
    })
  },
  logarithmicValue() {
    const { max_val, min_val, current_val, max_hue_rotate, min_hue_rotate } = this.state;
    const maxOrMinRange = current_val >= 0 ? max_val : Math.abs(min_val);
    const maxOrMinRotate = current_val >= 0 ? max_hue_rotate : min_hue_rotate;
    const zeroToOne = Math.log(1+Math.abs(current_val))/Math.log(1+maxOrMinRange)
    return zeroToOne * maxOrMinRotate;
  },
  render() {
    const { current_val, min_val, max_val, error, log_val } = this.state;
    console.warn(log_val)
    return <div className="doppler__wrapper" >
      <div className="doppler__content">
        <div className={`doppler-image`} style={{ filter: `hue-rotate(${log_val}deg)` }}>
        </div>
        <div className="doppler-inputs__wrapper">
          <div className={`doppler-text-input ${error && 'error' || ''}`}>
            <p className="doppler-text-input__text">Velocity (km/s) :</p>
            <input className="doppler-text-input__input"
                  type='text'
                  value={current_val}
                  onChange={this.updateFromTextMaybe}
                  ref={'text_input'}/>
          </div>
          <div className="doppler-slider-input">
            <Slider className="doppler-slider-input__field"
                  min={min_val}
                  max={max_val}
                  value={current_val}
                  onChange={this.updateFromSlider}
                  ref={'slider_input'}/>
          </div>
          {/*if there is an error, show one based on type of error*/}
          { error && <p className="doppler-inputs__error">
            { error  == 'range' && `value must be between ${min_val} and ${max_val}`
                                  || 'value must be a string'}
          </p>}
        </div>
      </div>
    </div>
  }
})

export default Doppler;
