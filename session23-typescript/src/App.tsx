import React from "react"
import "./App.css"
import {Header} from "./components/test-react-bootstrap-components/Header"
import {Container} from "react-bootstrap"
import {Content} from "./components/test-react-bootstrap-components/Content"
import {Search} from "./components/test-react-bootstrap-components/Search"

function App() {
    return (
            <div>
                <Header/>
                <Search/>
                <Container>
                    <br/>
                    <Content />
                </Container>
            </div>
    )
}

export default App
