// import React from "react";

// class SampleForm extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       text: "hello",
//       inputText: "", // New state to store current input value
//     };
//   }

//   handleChange = (e) => {
//     this.setState({ inputText: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault(); // Prevent form from refreshing the page
//     this.setState({ text: this.state.inputText });
//   };

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             value={this.state.inputText}
//             onChange={this.handleChange}
//           />
//           <input type="submit" value="Submit" />
//         </form>

//         <h1>{this.state.text}</h1>
//       </>
//     );
//   }
// }

// export default SampleForm;





import React, { Component } from "react";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      submitted: false
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  render() {
    return (
      <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
        <h2>Contact Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name: </label><br />
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Email: </label><br />
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Message: </label><br />
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              required
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>

        {this.state.submitted && (
          <div style={{ marginTop: "20px" }}>
            <h3>Submitted Data:</h3>
            <p><strong>Name:</strong> {this.state.name}</p>
            <p><strong>Email:</strong> {this.state.email}</p>
            <p><strong>Message:</strong> {this.state.message}</p>
          </div>
        )}
      </div>
    );
  }
}

export default ContactForm;



