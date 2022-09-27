import { fetchPlumbers, fetchRequests } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"


const mainContainer = document.querySelector("#container")

const render = async () => {
    await fetchRequests()
    await fetchPlumbers()
    mainContainer.innerHTML = SinkRepair()
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)