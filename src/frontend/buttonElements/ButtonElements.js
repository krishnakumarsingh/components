import React from 'react'
import ReactDOM from 'react-dom'
//import { Button } from 'react-toolbox/lib/button';
import {Button, IconButton} from 'react-toolbox/lib/button';
class ButtonElements extends React.Component {
    render(){
        return (
          <div>
            <IconButton icon='favorite' accent />
            <Button accent="false" label='Primary Button2' primary />
          </div>
        );
    }
}

export default ButtonElements