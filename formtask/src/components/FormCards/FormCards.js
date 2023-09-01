import React from "react";
import { FormCard } from "../FormCard/FormCard";
export class FormCards extends React.Component {
    render() {
        console.log(this.props)
const{data} = this.props
const content = data?.map(form=>{
return <FormCard key={form.id} fullName ={form.fullName} email={form.email} imageUrl={form.imageUrl} password={form.password}/>

})
        return (


            <div className="d-flex flex-wrap justify-content-center  align-items-center">{content}</div>


        )
    }


}