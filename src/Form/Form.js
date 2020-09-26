import React, { Component } from 'react';
import Feature from '../Feature/Feature';

class Form extends Component {
    render(){
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Feature
                updateFeature={(feature, newValue) => this.updateFeature(feature, newValue)}
                features={this.props.features}
                current={this.state.selected}
                />
            </form>
        )
    }
}

Form.defaultProps = {
    features: []
};

export default Form;
    //Feature and FeatureItem inside of Form
