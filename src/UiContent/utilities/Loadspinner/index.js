import Spinner from 'react-bootstrap/Spinner';

function Loadspinner() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loadspinner;