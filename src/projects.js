import {Row, Col, Card, Button} from 'react-bootstrap';

export default () => {
    return <div style={{marginBottom: '320px'}}>
        <h3>Projects</h3>
        <div style={{color: "black"}}>
            <Col>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Medical Billing App</Card.Title>
                                <Card.Text>
                                        App I created in my computer methodoloy class in which a person can keep track of their medical bills
                                </Card.Text>
                                <Button onClick={() => window.open("https://github.com/chayagitty/MedicalBillingApp")} variant="primary">Show</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Credit Card App</Card.Title>
                                <Card.Text>
                                   App I created for my data structures 1 course in which a person can keep track of and manage thier credit cards
                                </Card.Text>
                                <Button  onClick={() => window.open("https://github.com/chayagitty/CreditCardApp")} variant="primary">Show</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Distributed System Simulator</Card.Title>
                                <Card.Text>
                                    Project done for operating systems that demonstrates how a distributed system works
                                </Card.Text>
                                <Button  onClick={() => window.open("https://github.com/chayagitty/DistributedSystemSimulator")} variant="primary">Show</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
               
            </Col>
        </div>
    </div>
}