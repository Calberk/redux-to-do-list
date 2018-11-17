import React, {Component} from 'react';
import Nav_button from './nav_button';
import {Field, reduxForm} from 'redux-form'

class AddItem extends Component{
    render(){
        return(
            <div>
                <h1 className="center">Add Item</h1>
                <Nav_button to='/' text='Back To List'/>
            </div>
        )
    }
}

export default AddItem