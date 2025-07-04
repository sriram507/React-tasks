// import React, { Component } from "react";

// class SampleForm extends Component {
//   constructor() {
//     super();
//     this.state = {
//       fname: "",
//       sname: "",
//       mob: "",
//       fullname: "",
//     };
//   }

//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { fname, sname, mob } = this.state;
//     this.setState({
//       fullname: `${fname} ${sname} - ${mob}`,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             name="fname"
//             placeholder="First Name"
//             onChange={this.handleChange}
//           />
//           <input
//             type="text"
//             name="sname"
//             placeholder="Last Name"
//             onChange={this.handleChange}
//           />
//           <input
//             type="text"
//             name="mob"
//             placeholder="Mobile Number"
//             onChange={this.handleChange}
//           />
//           <input type="submit" value="Submit" />
//         </form>

//         <h1>{this.state.fullname}</h1>
//       </div>
//     );
//   }
// }

// export default SampleForm;

import React, { Component } from "react";

class EvenOddChecker extends Component {
  constructor() {
    super();
    this.state = {
      number: "",
      result: "",
    };
  }

  handleChange = (event) => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const num = parseInt(this.state.number, 10);

    if (isNaN(num)) {
      this.setState({ result: "Please enter a valid number." });
    } else {
      const result = num % 2 === 0 ? "Even" : "Odd";
      this.setState({ result });
    }
  };

  render() {
    return (
      <div>
        <h2>Even or Odd Checker</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter a number"
            value={this.state.number}
            onChange={this.handleChange}
          />
          <button type="submit">Check</button>
        </form>
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default EvenOddChecker;
