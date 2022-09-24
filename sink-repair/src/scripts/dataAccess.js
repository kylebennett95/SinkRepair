const applicationState = {
    requests: [],
}

const API = "http://localhost:8088"

export const fetchRequests = async () => {
  const dataFetch = await fetch(`${API}/requests`)
  const serviceRequests= await dataFetch.json()
  // Store the external state in application state
  applicationState.requests = serviceRequests
}

export const getRequests = () => {
    return applicationState.requests.map((a) => ({ ...a }))
}