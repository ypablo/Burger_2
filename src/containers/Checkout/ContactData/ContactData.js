import React, { Component } from 'react'
import classes from "./ContactData.module.css"

export default class ContactData extends Component {
    state={
        name:"",
        email:"",
        address: {
            street:"",
            postCode:"",
            country: ""
        }
    }
    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your name"/>
                <input className={classes.Input} type="text" name="email" placeholder="Your email"/>
                <input className={classes.Input} type="text" name="street" placeholder="Your street"/>
                <input className={classes.Input} type="text" name="postCode" placeholder="Your post code"/>
                <input className={classes.Input} type="text" name="country" placeholder="Your country"/>
                <button btnType="Success">ORDER</button>
                </form>
            </div>
        )
    }
}
