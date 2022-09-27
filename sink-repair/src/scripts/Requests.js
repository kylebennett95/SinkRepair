import { getRequests, deleteRequest, fetchPlumbers } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()
    const plumbers = fetchPlumbers()

    let html = "<ul>"

        const listItems = requests.map(requests => {
            return `<li>
             ${requests.description}
             
             <button class="request_delete" id="request--${requests.id}">
             Delete
             </button>
            </li>`
        })
        `<select class="plumbers" id="plumbers">
    <option value="">Choose</option>
    ${
        plumbers.map(
            plumber => {
                return `<option value="${requests.id}--${plumber.id}">${plumber.name}</option>`
            }
        ).join("")
    }
</select>`
        html += listItems.join("")
        html += "</ul>"

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")
            return {
                requestId: Requests(),
                plumberId: fetchPlumbers(),
                date_created: 
            }
            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
            const completion = { }

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */

        }
    }
)