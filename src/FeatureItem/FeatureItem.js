import React, { Component } from 'react';
import slugify from 'slugify';

class FeatureItem extends Component {
    render() {
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          });
        const {features, current, feature} = this.props;
        const options = features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
            <div key={itemHash} className="feature__item">
                <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={item === current[feature].name}
                onChange={e => this.props.updateFeature(feature, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
                </label>
            </div>
            );
            });
        return options
    }
}

FeatureItem.defaultProps = {
    features: []
};

export default FeatureItem
