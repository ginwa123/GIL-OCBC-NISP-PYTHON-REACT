import {Button, Card, Container, Modal} from "react-bootstrap"
import {useState} from "react"

export const Content = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
            <>
                <Container fluid className="bg-light">
                    <Card>
                        <Card.Header>
                            <h1>First Paragraph in Jumbo</h1>
                        </Card.Header>
                        <Card.Body>
                          <Card.Text>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                  has
                                  been
                                  the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                  galley
                                  of type and scrambled it to make a type specimen book. It has survived not only five
                                  centuries,
                                  but also the leap into electronic typesetting, remaining essentially unchanged. It was
                                  popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                  passages,
                                  and more recently with desktop publishing software like Aldus PageMaker including
                                  versions
                                  of
                                  Lorem Ipsum.</p>
                          </Card.Text>
                            <Button onClick={handleShow} variant="primary">Show Modal</Button>
                        </Card.Body>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Card>
                </Container>
            </>
    )
}