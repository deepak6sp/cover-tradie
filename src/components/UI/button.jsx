import React from 'react';
import { Button } from 'bootstrap-4-react';

export const CTButton = props => 
     <Button text="white" onClick={props.onClick}>{props.text}</Button>