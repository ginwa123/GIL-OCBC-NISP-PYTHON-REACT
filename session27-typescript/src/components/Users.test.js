import React from "react"
import {fireEvent, render, screen, waitFor} from "@testing-library/react"
import {Users} from "./Users";
import App from "../App";

test("Render halaman Users dengan benar", async () => {
  // render(<Users/>)
  render(<App/>)
  const button = screen.getByRole("button")
  expect(button).toBeInTheDocument()
  expect(button).toHaveTextContent("Users List")

  fireEvent.click(button)

  const btn = screen.getByRole("button")
  expect(btn).toBeInTheDocument()
  expect(btn).toHaveTextContent("Back to Home")

  const user = await waitFor(() => {
    return screen.findByText("delectus aut autem")
  }, {timeout: 5000})
  expect(user).toBeInTheDocument()
})