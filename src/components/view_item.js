import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSingleItem} from '../actions';
import  NavButton from './nav_button'

class ViewItem extends Component {

    componentDidMount(){
        // console.log('view item', this.props.match.params);   //under params we create the name of the id (did that within Route on App.js)
        // console.log(this.props.match.params.item_id);

        this.props.getSingleItem(this.props.match.params.item_id);  //using the ID that is getting passed in to action getSingleItem

    }

    render(){

        // console.log('hello', this.props.item)

        const  {details, title} = this.props.item;   //destructing state so we can input the information

        if(!title){
            return<h1>LOADING....</h1>
        }


        return(
            <div>
                <h1 className='center'>View Item</h1>
                <NavButton color='blue' to='/' text='Back to List'/>
                <p><b>Title:</b>{title}</p>
                <p><b>Details:</b>{details}</p>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        item: state.list.single    //state . list (list reducer). single (from state single in reducer)
    }
}

export default connect (mapStateToProps, {
    getSingleItem: getSingleItem
})(ViewItem);