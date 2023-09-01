import React from "react";
import { MdDelete } from 'react-icons/md';
import { BiSolidEditAlt } from 'react-icons/bi';

export class FormCard extends React.Component{
    render(){
        console.log(this.props)
const {fullName,imageUrl,password,email} = this.props
        return(

            <div class="card d-flex flex-column align-items-center me-2" style={{width: "20rem"}}>
  <img src={imageUrl} class="card-img-top" alt="picture" style={{width:"150px" ,height:"150px",objectFit:"cover",borderRadius:"50%"}}/>
  <div class="card-body d-flex flex-column align-items-center">
    <h2> {fullName}</h2>
    <p>{password}</p>
    <p>{email}</p>

    <div className="d-flex  align-items-center">
        <BiSolidEditAlt style={{color:"green",marginRight: "8px" }}/>
        <MdDelete style={{color:"brown"}}/>
    </div>
  </div>
</div>
        )
    }
}