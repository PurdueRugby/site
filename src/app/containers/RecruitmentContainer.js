import React from 'react';
import {
  Step,
  Stepper,
  StepButton,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import PersonalInfoForm from '../components/PersonalInfoForm';
import AthleticInfoForm from '../components/AthleticInfoForm';
import Paper from 'material-ui/Paper';
import theme from '../config/theme';

class RecruitmentContainer extends React.Component {

  constructor(props) {
    super(props);
    // set initial state
    this.state = {
      stepIndex: 0,
      // Height in inches
      heightSlider: 72,
      // weight in lbs
      weightSlider: 180
    };
    // bind functions to scope
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleHeightSlider = this.handleHeightSlider.bind(this);
    this.handleWeightSlider = this.handleWeightSlider.bind(this);
    this.handleGetHeight = this.handleGetHeight.bind(this);
    this.handleGetWeight = this.handleGetWeight.bind(this);
  }

  handleNext() {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  }

  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  handleHeightSlider(event, value) {
    this.setState({heightSlider: value});
  }

  handleWeightSlider(event, value) {
    this.setState({weightSlider: value});
  }

  handleGetHeight() {
    const height = this.state.heightSlider;
    return Math.floor(height/12) + '\' ' + Math.round(height % 12) + '"';
  }

  handleGetWeight() {
    const weight = this.state.weightSlider;
    return Math.round(weight) + 'lbs';
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <PersonalInfoForm
            getWeight={this.handleGetWeight}
            getHeight={this.handleGetHeight}
            height={this.state.heightSlider}
            weight={this.state.weightSlider}
            handleWeightSlider={this.handleWeightSlider}
            handleHeightSlider={this.handleHeightSlider}
          />
      );
      case 1:
        return <AthleticInfoForm />;
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const {stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper linear={false} activeStep={stepIndex}>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              Personal Information
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              Athletic Experience
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              Review
            </StepButton>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {this.getStepContent(stepIndex)}
          <div style={{marginTop: 12}}>
            <FlatButton
              label="Back"
              disabled={stepIndex === 0}
              onTouchTap={this.handlePrev}
              style={{marginRight: 12}}
            />
            <RaisedButton
              label={stepIndex === 2 ? "Submit" : "Next"}
              primary={true}
              onTouchTap={this.handleNext}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RecruitmentContainer;
