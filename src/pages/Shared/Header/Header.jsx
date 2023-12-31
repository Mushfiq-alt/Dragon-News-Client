import { Button, Container} from "react-bootstrap";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <Container>
            <div className="text-center">
                <Link to={'/'}><img src={logo} alt="" /></Link>
                <p className="">
                    <small>Journalism Without Fear or Favour</small>
                </p>
                <p>{moment().format("dddd, MMM Do YYYY")}</p>
            </div>
            <div className="bg-light p-3">
                <div className="d-flex">
                    <Button variant="danger" className="px-4 py-2 rounded">
                        Breaking New !
                    </Button>
                    <Marquee speed={50} style={{ fontWeight: "bold" }}>
                        Match Highlights: Germany vs Spain - as it happened ! Match
                        Highlights: Germany vs Spain - as it happened !
                    </Marquee>
                </div>
            </div>
            
        </Container>
    );
};

export default Header;
