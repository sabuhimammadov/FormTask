import React from "react";
import { FormInfo } from "../FormInfo";
import { FormCards } from "../FormCards";

export class FormContent extends React.Component {
    constructor(){
        super()
        this.state = {
            data:[]
        }
        this.addForm = this.addForm.bind(this)
    }
    addForm(fullName,password,imageUrl,email) {
        const form = {
            id: Date.now(),
            fullName,
            password,
            imageUrl,
            email,
            created: new Date()
        }
        const newForm = [form, ...this.state.data]
        this.setState({ data: newForm })
    }
    render() {
console.log(this.state.data)
        return (

            <div className="container mt-5 w-75  d-flex  flex-column align-items-center gap-5">
                <FormInfo addForm={this.addForm}/>
                <FormCards data={this.state.data} />

            </div>

        )
    }


}