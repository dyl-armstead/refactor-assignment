import React, { Component } from 'react';
import FeatureItem from '../FeatureItem/FeatureItem.js'

class Feature extends Component {
    render(){
        const {features} = this.props;
            features.keys(this.props.features)
            .map((feature, idx) => {
            const featureHash = feature + '-' + idx;
                return (
                    <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    <FeatureItem
                        updateFeature={(feature, newValue) => this.updateFeature(feature, newValue)}
                        features={this.props.features}
                        feature={this.props.feature}
                        current={this.state.selected}
                    />
                    </fieldset>
                );
            })
        return {features}
    }
}

Feature.defaultProps = {
    features: []

};

export default Feature;
//FeatureItem inside of Feature
