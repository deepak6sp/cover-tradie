import React from 'react';
import { Button } from 'bootstrap-4-react';

export const CTButton = props => 
     <Button text="white" as="a" href="tel:1300 190 535" target="_self">
          {props.text}
     </Button>