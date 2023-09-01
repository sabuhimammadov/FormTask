import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { isValidEmail } from "../../Utils/isnotEmail";
import { isTextValid } from "../../Utils/isNotText";
import { isPasswordValid } from "../../Utils/isNotPassword";
import { isImageFile } from "../../Utils/isNotImage";
export class FormInfo extends React.Component {

  constructor() {


    super()

    this.state = {
      fullName: "",
      password: undefined,
      imageUrl: "",
      email: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeInput = this.handleChangeInput.bind(this)

  }

  handleChangeInput(e) {
    const inputName = e.target.name
    const inputValue = e.target.value

    this.setState({ [inputName]: inputValue })

  }
  handleSubmit(e) {
    e.preventDefault()
    const fullName = this.state.fullName
    const email = this.state.email
    const password = this.state.password
    const imageUrl = this.state.imageUrl

    const form = {
      fullName,
      email,
      password,
      imageUrl
    }
    this.props.addForm(this.state.fullName,this.state.password,this.state.imageUrl,this.state.email)

    this.setState({
      fullName: "",
      password: "",
      imageUrl: "",
      email: ""
    })
  }
  render() {
    const isNotEmail = isValidEmail(this.state.email)
    const isNotText = isTextValid(this.state.fullName)
    const isNotPassword = isPasswordValid(this.state.password)
    const isNotImage = isImageFile(this.state.imageUrl)

    return (

      <Form className="w-75" onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3 " >
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name" value={this.state.fullName} name="fullName" onChange={this.handleChangeInput} />
          <Form.Text className=" text-danger">
            {!isNotText && "Name is required"}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" value={this.state.email} name="email" onChange={this.handleChangeInput} />
          <Form.Text className="text-danger">
            {!isNotEmail && "Email is required"}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChangeInput} />
          <Form.Text className="text-danger">
            {!isNotPassword && "Password is required"}

          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-4" >
          <Form.Label>Your Image</Form.Label>
          <Form.Control type="text" placeholder="Your Image" value={this.state.imageUrl} name="imageUrl" onChange={this.handleChangeInput} />
          <Form.Text className=" text-danger">
            {!isNotImage && "Image is required"}
          </Form.Text>
        </Form.Group>
        <Button variant="danger" type="submit" className="w-100" disabled={!isNotEmail || !isNotImage || !isNotText || !isNotPassword}>
          Submit
        </Button>
      </Form>
    )
  }
}