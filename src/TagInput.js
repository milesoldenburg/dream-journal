import React, {Component} from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

export default class TagInput extends Component {
    render() {
        return (
            <div>
                <Typeahead
                    clearButton
                    labelKey="name"
                    multiple
                    options={["Nightmare", "Third-Person"]}
                    placeholder="Enter tags that do not appear in the above details."
                />
            </div>
        );
    }
}
