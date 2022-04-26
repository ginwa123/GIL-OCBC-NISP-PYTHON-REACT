import {Link} from "react-router-dom"

export const Home = () => {
  return (
          <>
            <div className="container">
              <div className="p-5 mb-4 bg-light rounded-3 border">
                <div className="container-fluid py-5">
                  <h1 className="display-5 fw-bold">why do we need test</h1>
                  <p className="col-md-8 fs-4">Loremsa daskdn j oasdm asmdo masodn asmd as Loremsa daskdn j oasdm
                    asmdo masodn asmd as Loremsa daskdn j oasdm asmdo masodn asmd as Loremsa daskdn j oasdm
                    asmdo masodn asmd as Loremsa daskdn j oasdm asmdo masodn asmd as Loremsa daskdn j oasdm
                    asmdo masodn asmd as Loremsa daskdn j oasdm asmdo masodn asmd as Loremsa daskdn j oasdm
                    asmdo masodn asmd as Loremsa daskdn j oasdm asmdo masodn asmd as Loremsa daskdn j oasdm
                    asmdo masodn asmd as Loremsa daskdn j oasdm asmdo masodn</p>
                  <Link to="/users">
                    <button className="btn btn-primary btn-lg" type="button">
                      Users List
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
  )
}