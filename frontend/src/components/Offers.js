import React, { Component } from 'react';
import Offer from './Offer';
import { connect } from 'react-redux';
import { fetchOffers } from '../actions/fetchOffers';

class Offers extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    // return <div>{console.log(this.props.offers)}</div>;
    return (
      <div className='flex flex-col p-2 m-2 font-bold'>
        {this.props.offers.offers.map(offer => (
          <Offer key={offer.id} description={offer.description} name={offer.name} location={offer.location} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    offers: state.offers
  };
};

const mapDispatchToProps = () => {
  return {
    fetchOffers
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Offers);