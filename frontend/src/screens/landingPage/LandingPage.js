import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div className="main">
            <Container>
                <Row>
                    <div className="intro-text">
                        <div>
                            <h1 className="title">Welcome to MyNotes</h1>
                            <p className="subtitle">A safe palce for all your Notes.</p>
                        </div>
                        <div className="buttonContainer">
                            <a href="/login"></a>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default LandingPage;