import React, { Component } from 'react'
import classes from "./ContactData.module.css"
import axios from '../../../axios-orders'
import Spinner from "../../../components/UI/Spinner/Spinner"


export default class ContactData extends Component {
    state={
        name:"",
        email:"",
        address: {
            street:"",
            postCode:"",
            country: ""
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault()
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Max Schwarzmüller',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false, purchasing: false })
                this.props.history.push("/")
            })
            .catch(error => {
                this.setState({ loading: false, purchasing: false })
            })
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your name"/>
                <input className={classes.Input} type="text" name="email" placeholder="Your email"/>
                <input className={classes.Input} type="text" name="street" placeholder="Your street"/>
                <input className={classes.Input} type="text" name="postCode" placeholder="Your post code"/>
                <input className={classes.Input} type="text" name="country" placeholder="Your country"/>
                <button btnType="Success">ORDER</button>
            </form>
        )
        if (this.state.loading) {
            form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}
