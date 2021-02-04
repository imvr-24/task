import React, { Component } from "react";

import timezone from "./timezone.json";
import { TimeZoneComponent } from './components/timezone.component.jsx';
import { Card } from './components/card.component.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';

let ctz = [{
  value: 'Asia/Kolkata',
  label: 'Asia/Kolkata'
}]
let tz = []

export class App extends Component {
  constructor() {
    super();

    this.state = {
      currentZone: '',
      currentDT: '',
      selectedZone: '',
      selectedDT: '',
      initialDisplay: false
    };
  }

  componentDidMount() {
    fetch("https://api.timezonedb.com/v2.1/get-time-zone?key=SC4W3H2GK55S&format=json&by=zone&zone=Asia/Kolkata")
      .then(res => res.json())
      .then(
        (result) => {
          ;
          this.setState({
            currentZone: result.zoneName,
            currentDT: result.formatted,
            initialDisplay: true
          }, () => console.log('Done'));
        }
      );
  }

  convertTimeZone = (zone) => {
    fetch(`https://api.timezonedb.com/v2.1/list-time-zone?key=SC4W3H2GK55S&format=json&zone=${zone.value}`)
      .then(res => res.json())
      .then(
        (result) => {
          const { zoneName, timestamp } = result.zones[0];
          const dt = this.convertToFormttedDate(timestamp);
          this.setState({
            selectedDT: dt,
            selectedZone: zoneName
          }, () => console.log('Convert to  Time Zone'));
        }
      )
  };

  convertToFormttedDate = (timestamp) => {

    const milliseconds = timestamp * 1000;
    const dateObject = new Date(milliseconds);
    const dateFormat = dateObject.toLocaleString();

    return dateFormat;
  };

  handleChange = selectedZone => {
    this.setState({ selectedZone: selectedZone.label });
    this.convertTimeZone(selectedZone)
    console.log(`Option selected:`, selectedZone);
  };

  render() {
    return (
      <div className='container ct'>
        <TimeZoneComponent timezone={Object.keys(timezone)} tz={tz} ctz={ctz} handleChange={this.handleChange} />
        <div className='row'>
          <div className='col-md-4'>
            {this.state.initialDisplay ? <Card inps={this.state} /> : null}
          </div>

          {
            this.state.selectedDT ? (
              <div className='col-md-4'>
                <div className='card-container'>
                  <h2> {this.state.selectedZone} </h2>
                  <p> {this.state.selectedDT} </p>
                </div>
              </div>
            ) : null
          }
        </div>
      </div>

    );
  }
}

export default App;
