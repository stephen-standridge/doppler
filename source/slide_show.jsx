import React from 'react';
import doppler_manifest from './doppler_slides';

const SlideShow = React.createClass({
  getInitialState() {
    return {
      current_index: 0,
      slides: doppler_manifest
    }
  },
  clickedPrev() {
    this.setState((currentState) => {
      return { current_index: currentState.current_index -1 }
    })
  },
  clickedNext() {
    this.setState((currentState) => {
      return { current_index: currentState.current_index +1 }
    })
  },
  render() {
    const { current_index, slides } = this.state;
    const prev_index = (current_index > 0) && current_index - 1;
    const next_index = (current_index < slides.length - 1) && current_index + 1;

    const prev_slide = prev_index !== false && slides[prev_index].type;
    const current_slide = slides[current_index].type;
    const next_slide = next_index !== false && slides[next_index].type;

    return <div className="slide-show__wrapper" >
      <div className="slide-show__images">
        { prev_index !== false && <div className="slide-show__left-nav" onClick={this.clickedPrev} >
          <div className="slide-show__left-arrow" />
        </div> }

        <div className="slide-show__slide-wrapper">
          { prev_slide && <prev_slide className="slide__prev"/> }
          <current_slide className="slide__current"/>
          { next_slide && <next_slide className="slide__next"/> }
        </div>

        { next_index !== false && <div className="slide-show__right-nav" onClick={this.clickedNext} >
          <div className="slide-show__right-arrow" />
        </div> }
      </div>
      <div className="slide-show__bottom-nav">
      </div>
    </div>
  }
})

export default SlideShow;
