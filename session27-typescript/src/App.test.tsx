import React from "react"
import {fireEvent, render, screen} from "@testing-library/react"
import App from "./App"
//
// test("renders learn react link", () => {
//   render(<App/>)
//   const linkElement = screen.getByText(/learn react/i)
//   expect(linkElement).toBeInTheDocument()
// })

test("Render app", () => {
  render(<App/>)
  const title = screen.getByText(/why do we need test?/i)
  expect(title).toBeInTheDocument()


  const button = screen.getByRole("button")
  expect(button).toBeInTheDocument()
  expect(button).toHaveTextContent("Users List")

  fireEvent.click(button)

  const btn2 = screen.getByRole("button")
  expect(btn2).toBeInTheDocument()
  expect(btn2).toHaveTextContent("Back to Home")

})