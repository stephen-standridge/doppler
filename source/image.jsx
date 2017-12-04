import React from 'react';

const Image = React.createClass({
  render() {
    return <div className={`image__wrapper ${this.props.className}`} >
      <img className="image__float" src={`${this.props.url}${this.props.image_id}/640x480` } />
    </div>
  }
})

export default Image;
