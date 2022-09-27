const API = "http://localhost:8088"

const applicationState = {
    requests: [],
}

export const fetchRequests = async () => {
  const dataFetch = await fetch(`${API}/requests`)
  const serviceRequests= await dataFetch.json()
  // Store the external state in application state
  applicationState.requests = serviceRequests
}

export const getRequests = () => {
    return applicationState.requests.map((a) => ({ ...a }))
}

export const sendRequest = async (userServiceRequest) => {
  const fetchOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(userServiceRequest)
  }

  const mainContainer = document.querySelector("#container")
  const response = await fetch(`${API}/requests`, fetchOptions)
  const responseJson = await response.json()
  mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
  return responseJson
}

export const deleteRequest = async (id) => {
  await fetch(`${API}/requests/${id}`, { method: "DELETE" })
  const mainContainer = document.querySelector("#container")
  mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
}

export const fetchPlumbers = async () => {
  const dataFetch = await fetch(`${API}/plumbers`)
  const plumbers = await dataFetch.json()
  applicationState.plumbers = plumbers
}