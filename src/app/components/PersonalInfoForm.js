import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import { Grid, Col, Row } from 'react-bootstrap';

const PersonalInfoForm = ({getHeight, getWeight, height, weight, handleWeightSlider, handleHeightSlider}) => {
  return (
    <Grid>
      <Row>
        <Col xs={4}>
          <TextField
            floatingLabelText='First Name'
          />
        </Col>
        <Col xs={4}>
          <TextField
            floatingLabelText='Last Name'
          />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <TextField
            floatingLabelText='Age'
          />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <TextField
            floatingLabelText='Email'
          />
        </Col>
      </Row>
      <Row>
        <Col xs={7}>
          <h5 style={{'color': '#ceb888'}}><strong>Height: {getHeight()}</strong></h5>
          <Slider
            defaultValue={72}
            min={54}
            max={84}
            value={height}
            onChange={handleHeightSlider}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={7}>
          <h5 style={{'color': '#ceb888'}}><strong>Weight: {getWeight()}</strong></h5>
          <Slider
            defaultValue={180}
            min={100}
            max={300}
            value={weight}
            onChange={handleWeightSlider}
          />
        </Col>
      </Row>
  </Grid>
  )
}

export default PersonalInfoForm;
