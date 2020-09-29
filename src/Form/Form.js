import React, { Component } from 'react';
import Feature from '../Feature/Feature';


class Form extends Component {
    render(){
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Feature
                updateFeature= {this.props.updateFeature}
                features={this.props.features}
                current={this.props.current}
                />
            </form>
        )
    }
}

export default Form;
    //Feature and FeatureItem inside of Form
