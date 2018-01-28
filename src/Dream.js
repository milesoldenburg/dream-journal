import React, {Component} from 'react';
import {Button, Grid, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import Datetime from 'react-datetime';
import TagInput from './TagInput';

import 'react-datetime/css/react-datetime.css';

export default class Dream extends Component {
    render() {
        return (
            <Grid>
                <form>
                    <h1>New Dream</h1>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Details</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="Enter the details of what happened in your dream."/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Tags</ControlLabel>
                        <TagInput/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>When?</ControlLabel>
                        <Datetime/>
                    </FormGroup>
                    <Button type="submit">Save</Button>
                </form>
            </Grid>
        );
    }
}
