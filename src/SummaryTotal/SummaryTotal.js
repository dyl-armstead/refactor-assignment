import React, { Component } from 'react';
import SummaryOptions from '../SummaryOptions/SummaryOptions.js'


class SummaryTotal extends Component {
    render() {
            const USCurrencyFormat = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            });
            const {current} = this.props;
            const total = Object.keys(current).reduce(
                (acc, curr) => acc + current[curr].cost,
                0
            );
            return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <SummaryOptions
                features={this.props.features}
                current={this.state.selected}
                />
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                    {USCurrencyFormat.format(total)}
                    </div>
                </div>
            </section>
        )
    }
}

SummaryTotal.defaultProps = {
    features: []
};

export default SummaryTotal


//SummaryOptions inside of SummaryTotal