import React from 'react';
import { helpMsg } from '../constants/toasts';
import FontAwesomeIcon from './FontAwesomeIcon';

const HelpMenu = ({ showToast }) => (
    <FontAwesomeIcon 
        icon="bars" 
        text="help"
        onClick={showToast.bind(null, "success", helpMsg)} />
);

export default HelpMenu;