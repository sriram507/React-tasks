// import React from "react";
// import { CardBody, CardFooter } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";


// function ProfileCard(props) {
//   return (
//     <Card style={{ width: "18rem", height: "450px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
//       <Card.Img variant="top" src={props.img} style={{ height: "180px", objectFit: "contain" }} />
//       <Card.Body style={{ flex: "1 1 auto", overflowY: "auto" }}>
//         <Card.Title>{props?.title}</Card.Title>
//         <Card.Text style={{ fontSize: "0.85rem" }}>{props?.desc}</Card.Text>
//       </Card.Body>
//       <Card.Footer className="text-muted">
//         <Button variant="primary">{props?.info}</Button>
//       </Card.Footer>
//     </Card>
//   );
// }





// function ProfileCard(props) {
//   return (
//     <Card
//       style={{
//         width: "18rem",
//         height: "450px",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       {/* Fixed image container */}
//       <div style={{ height: "200px", overflow: "hidden" }}>
//         <Card.Img
//           variant="top"
//           src={props.data.image}
//           style={{
//             objectFit: "cover",
//             width: "100%",
//             height: "100%",
//           }}
//         />
//       </div>

//       {/* Scrollable body */}
//       <Card.Body style={{ flex: "1 1 auto", overflowY: "auto" }}>
//         <Card.Title
//           style={{
//             fontSize: "1rem",
//             fontWeight: "bold",
//           }}
//         >
//           {props.data.title}
//         </Card.Title>
//         <Card.Text style={{ fontSize: "0.9rem" }}>
//           {props.data.description}
//         </Card.Text>
//       </Card.Body>

//       <Card.Footer className="text-muted">
//         <Button variant="primary" size="sm">
//           {props.data.category}
//         </Button>
//       </Card.Footer>
//     </Card>
//   );
// }

// export default ProfileCard;


import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function ProfileCard(props) {
  const navigate = useNavigate();

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.img}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body style={{ height: "150px", overflowY: "scroll" }}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="primary">{props.info}</Button>
          <Button variant="secondary" onClick={() => navigate("/home")}>Back</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default ProfileCard;


