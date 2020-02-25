import React from 'react';
import { connect } from 'react-redux';
import { showToast } from "../actions/toastActions";
import HelpMenu from '../components/HelpMenu';

const HelpMenuContainer = (props) => (
    <HelpMenu {...props} />
);

export default connect(
    null,
    { showToast }
)(HelpMenuContainer);