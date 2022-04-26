import {useEffect, useState} from "react"
import {Link} from "react-router-dom"

interface User {
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean
}

export const Users = () => {
  const [sUsers, setUsers] = useState<User[]>([])
  useEffect(() => {
    fetch("/todos")
            .then(response => response.json())
            .then(json => setUsers(json))
  }, [])


  return (
          <>
            <Link to="/">
              <button type="button" className="btn btn-primary">Back to Home</button>
            </Link>
            <table className="table table-striped table-hover">
              <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
              </tr>
              </thead>
              <tbody>
              {sUsers.map(value => <tr>
                <th key={value.id} scope="row">{value.id}</th>
                <td>{value.title}</td>
              </tr>)}

              </tbody>
            </table>
          </>
  )
}