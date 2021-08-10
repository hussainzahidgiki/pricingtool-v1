import './App.css';
import Form from './components/Form'
import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    prices: state.prices,
  }
}
class App extends Component {

  render() {
    return (
      <div>
        <Form />
        {this.props.prices.map((price, i) => { return <li key={`price-${i}`}>{`Supplier: EDF |Tariff:${price.Contract} |Term:${price.Contractlength}months|Day:${price.Day}|Night:${price.Night}| Evening/Weekend:${price.Evening_Weekend}`}</li> })}
      </div>
    );
  }
}
export default connect(mapStateToProps, null)(App);
