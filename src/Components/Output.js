import React, {Component} from "react";

class Output extends Component {
  cmToFeet(n) {
    let realFeet = ((n * 0.393700) / 12);
    let feet = Math.floor(realFeet);
    let inches = Math.round((realFeet - feet) * 12);
    return feet + "'" + inches + '"';
  }

  kgToLbs(n) {
    let nearExact = n / 0.45359237;
    let lbs = Math.floor(nearExact);
    return lbs;
  }

  render() {
    let height = this.cmToFeet(this.props.data.height);
    let weight = this.kgToLbs(this.props.data.weight);
    let bmi = this.props.data.bmi;
    let bmiClass = this.props.data.bmiClass;

    return (
      <div className="output">
        <h3>{height}</h3>
        <h3>{weight}lbs</h3>
        <h3>BMI: {bmi}</h3>
        <h3 className={(this.props.data.bmiClass === 'Obese') ? 'danger' : ''}>
          {bmiClass} {(this.props.data.bmiClass === 'Obese') ?
          <a href='http://www.goodhousekeeping.com/health/diet-nutrition/advice/a17162/lose-weight-faster-karas-0302/'>What can I do?</a> : ''}
        </h3>
      </div>
    );
  }
}

export default Output;
