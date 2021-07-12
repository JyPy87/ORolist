import { sendingApiConfing, sendData, fetchData } from "./api.js"

const dataFromForm = () => {
    const bodyMessage = document.querySelector('#textBody').value

    return {
        "body": bodyMessage,

    }
}

/**
 * create config for the HTTP request
 * @returns {object}
 */
const formToApiConfig = () => sendingApiConfing(dataFromForm(), "POST")

const conversationId = location.pathname.split('/')[2]
const apiRoute = `/api/v1/message/user/conversation/${conversationId}`

const afterResponse = (response) => {
    location.reload()
}

/**
 * handle message form submit event
 * @param {event} evt 
 */
export const addMessage = evt => {
    sendData(apiRoute, formToApiConfig(), afterResponse)

}

