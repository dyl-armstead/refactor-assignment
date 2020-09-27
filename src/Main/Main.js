import React, { Component } from 'react';
import Form from '../Form/Form.js';
import SummaryTotal from '../SummaryTotal/SummaryTotal.js';

class Main extends Component {

    render(){
        return (
            <main>
                <Form 
                updateFeature= {this.props.updateFeature}
                features={this.props.features}
                current={this.props.current}
                />
                <SummaryTotal 
                features={this.props.features}
                current={this.props.current}
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
