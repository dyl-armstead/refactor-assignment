import React, { Component } from 'react';
import Form from '../Form/Form.js';
import SummaryTotal from '../SummaryTotal/SummaryTotal.js';

class Main extends Component {

    render(){
        return (
            <main>
                <Form 
                updateFeature={(feature, newValue) => this.updateFeature(feature, newValue)}
                features={this.props.features}
                current={this.state.selected}
                />
                <SummaryTotal 
                features={this.props.features}
                current={this.state.selected}
                />
            </main>
        )
    }
}

Main.defaultProps = {
    features: []
};

export default Main;
//Form, Feature, FeatureItem, SummaryOptions, SummaryTotal inside of Main
