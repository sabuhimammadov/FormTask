import React, { createRef } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export class FormInfo extends React.Component {
  fullNameInput = createRef()
  emailInput = createRef()
  passwordInput = createRef()
  imageInput = createRef()

  constructor() {


    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.state = {


    // }
  }
  handleSubmit(e) {
e.preventDefault()
    const fullName = this.fullNameInput.current.value
    const email = this.emailInput.current.value
    const password = this.passwordInput.current.value
    const imagevalue = this.imageInput.current.value

    const form = {
      fullName,
      email,
      password,
      imagevalue
    }
    console.log(form)

    this.fullNameInput.current.value = ""
    this.emailInput.current.value = ""
    this.passwordInput.current.value = ""
    this.imageInput.current.value = ""
  }
  render() {


    return (

      <Form className="w-75" onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3 " >
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name" ref={this.fullNameInput}/>
          <Form.Text className=" text-danger">
            Name is required
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" ref={this.emailInput} />
          <Form.Text className="text-danger">
            Email is required
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={this.passwordInput}/>
          <Form.Text className="text-danger">
            Password is required
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-4" >
          <Form.Label>Your Image</Form.Label>
          <Form.Control type="text" placeholder="Your Image" ref={this.imageInput}/>
          <Form.Text className=" text-danger">
            Image is required
          </Form.Text>
        </Form.Group>
        <Button variant="danger" type="submit" className="w-100">
          Submit
        </Button>
      </Form>
    )
  }
}