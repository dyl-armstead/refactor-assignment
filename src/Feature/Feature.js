import React, { Component } from 'react';
import FeatureItem from '../FeatureItem/FeatureItem.js'

class Feature extends Component {
    render(){
        const {features, current} = this.props;
        const featuresOutput = Object.keys(current).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
                <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                <FeatureItem
                    updateFeature= {this.props.updateFeature}
                    features={this.props.features}
                    feature={feature}
                    current={this.props.current}
                />
                </fieldset>
            );
            })
        return featuresOutput
    }
}

Feature.defaultProps = {
    features: []

};

export default Feature;
//FeatureItem inside of Feature
