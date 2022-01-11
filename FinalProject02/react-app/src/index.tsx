import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import {Provider} from "react-redux"
import {store} from "./g-store/store"
import "react-toastify/dist/ReactToastify.min.css"
import {GDialogDelete} from "./components/dialogs/GDialogDelete"
import {GDialogAddUpdateForm} from "./components/dialogs/GDialogAddUpdateForm"
import axios from "axios"
import {sActionLoading} from "./g-store/loading/reducer"

axios.defaults.baseURL = "http://localhost:5000/"


axios.interceptors.request.use(request => {
  store.dispatch(sActionLoading.setIsLoading(true))
  return request;
}, error => {
  store.dispatch(sActionLoading.setIsLoading(false))
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  store.dispatch(sActionLoading.setIsLoading(false))
  return response;
}, error => {
  store.dispatch(sActionLoading.setIsLoading(false))
  return Promise.reject(error);
});

ReactDOM.render(
        <React.StrictMode>
          <Provider store={store}>
            <BrowserRouter>
              <Routes>
                <Route path="/home">
                  <Route path="" element={<App/>}>
                    <Route path="dialog">
                      <Route path="delete">
                        <Route path="batch">
                          <Route path=":batch_key" element={<GDialogDelete/>}/>
                        </Route>
                        <Route path=":key" element={<GDialogDelete/>}/>
                      </Route>
                      <Route path=":mode" element={<GDialogAddUpdateForm/>}>
                        <Route path=":key" element={<GDialogAddUpdateForm/>}/>
                      </Route>
                    </Route>
                  </Route>
                </Route>
                <Route
                        path="*"
                        element={<Navigate to="/home"/>}
                />
              </Routes>
            </BrowserRouter>
          </Provider>
        </React.StrictMode>,
        document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
