import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        < BandInput addBand={this.props.addBand} />
        <ul>
          {this.props.bands.map((band, idx) => {
            return <li key={idx}>{band.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {bands: state.bands}
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch(addBandAction(formData))
  }
}

const addBandAction = band => {
  return {
    type: 'ADD_BAND',
    band: band
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)