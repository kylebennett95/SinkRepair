import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()

    let html = "<ul>"

        const listItems = requests.map(style => {
            return `<li>
            ${requests.id}" "${requests.description}
            </li>`
        })

        html += listItems.join("")
        html += "</ul>"

    return html
}