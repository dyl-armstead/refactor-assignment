import React, { Component } from 'react';

class SummaryOptions extends Component {
    render() {  
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          });
        const {current} = this.props;
        const summary = Object.keys(current).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = current[feature];
      
            return (
              <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                  {USCurrencyFormat.format(selectedOption.cost)}
                </div>
              </div>
            );
          });
        return summary
    }
}

export default SummaryOptions