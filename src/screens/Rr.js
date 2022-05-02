import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import RrDetails from "../components/RrDetails"

const Rr = () => {
    return ( 

    <div>
        <h1>Reward & Recognitions</h1>
        <Button variant="info" ><Link to="/addrr">Add a claim</Link></Button>
        <RrDetails />
    </div>


     );
}
 
export default Rr;