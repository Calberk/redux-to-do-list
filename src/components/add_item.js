import React, {Component} from 'react';
import Nav_button from './nav_button';
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux';
import {addTodoItem} from '../actions'

class AddItem extends Component{
 
      renderInput(props){           //could be made seperately as its own component
        // console.log('renderinput', props)
        // const {size, input, label, meta: {touched, dirty, erro}=props
        return(
            <div className={`input-field col ${props.size}`}>  
                <input {...props.input} type="text"/>   
                <label>{props.label}</label>
                <p className="red-text">{props.meta.touched && props.meta.error}</p>
            </div>
        )  //conditional to check if the input has been touched and if there is an error
    }

    // const {size, input, label, meta: {touched, dirty, error}=props}    or    renderInput({size, input, label, meta: {touched, dirty, error}){ 
    // <div className={`input-field col ${size}`}>    after breaking down props (destructuring)
    // <input {...input} type="text"/>   
    // <label>{label}</label>
    // <p className="red-text">{touched && error}</p>
    // </div>

  //conditional to check if the input has been touched and if there is an error


    handleAddItem = async (values) => {
        // console.log('push', this.props)
        // console.log('form values', values);

        await this.props.addTodoItem(values);

        this.props.history.push('/');    // HOW TO PROGRAMATICALLY REDIRECT USER
    }

    render(){
        const {handleSubmit, reset} = this.props;
        console.log('add item props', this.props);
        return(
            <div>
                <h1 className="center">Add Item</h1>
                <Nav_button to='/' text='Back To List'/>
                <form onSubmit={handleSubmit(this.handleAddItem)}>
                    <div className="row">
                        <Field size='s12' name='title' label='Title' component={this.renderInput}/>
                    </div>
                    <div className="row">
                        <Field size='s12' name='details' label='Details' component={this.renderInput}/>
                    </div>
                    <div className="row">
                        <div className="col s6 center">
                            <button type='button' onClick={reset} className='btn red'>Clear</button>
                        </div>
                        <div className="col s6 center">
                            <button className='btn blue'>Add Item</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

/* <div className="row">                       // allows two inputs to sit side by side
<Field size='s6' name='title' label='Title' component={this.renderInput}/>

<Field size='s6' name='details' label='Details' component={this.renderInput}/>
</div> */

    function validate(formValues){
        const error = {}

        if(!formValues.title){
            error.title = 'Please enter a Title for your To-Do item'
        }
        if(!formValues.details){
            error.details = 'Please give your To-Do item some details'
        }

        return error
    }

    // function validate({title, details}){
    //     const error = {
        // if(!title){
        //     error.title = 'Please enter a Title for your To-Do item'
        // }
            



AddItem = reduxForm({
    form: 'add-item',
    validate: validate,
})(AddItem)

export default connect(null, {addTodoItem : addTodoItem} )(AddItem)