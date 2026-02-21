import React, { Component } from "react";
import SecondaryButton from "../../components/shared/SecondaryButton";
import { withRouter } from "react-router-dom";
import PrimaryButton from "../../components/shared/PrimaryButton";


class FormFooter extends Component {
    
    render() {

        const SubmitButton = withRouter(({ history }) => (
            <PrimaryButton
             onClick={() => {this.props.onSubmit(); history.push('/find') }} 
             label="Submit"
            />
          ))

        return (<div className="d-flex flex-row justify-content-between">
            {this.props.formToggle !== 0 ? <SecondaryButton label="Back" onClick={this.props.onBack} /> : <div />}
            {this.props.formToggle === 1 ? 
                <SubmitButton />: 
                <SecondaryButton 
                    label="Next" 
                    onClick={this.props.onNext} 
                    disabled={this.props.nextDisabled} />}
                
        </div>);
    }
}

export default FormFooter;