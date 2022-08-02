import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit"


function signUp(body) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body)
    return promise
}

function logIn(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body)
    return promise
}

function postHabit(body, token) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promise = axios.post(`${BASE_URL}/habits`, body, config)
    return promise
}

function getHabits(token) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promise = axios.get(`${BASE_URL}/habits`, config)
    return promise
}

function deleteHabit(token, id) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promise = axios.delete(`${BASE_URL}/habits/${id}`, config)
    return promise
}

function getHabitsToday(token) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promise = axios.get(`${BASE_URL}/habits/today`, config)
    return promise
}

function habitDone(token, id) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promise = axios.post(`${BASE_URL}/habits/${id}/check`, config)
    return promise
}

function habitUndone(token, id) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promise = axios.post(`${BASE_URL}/habits/${id}/uncheck`, config)
    return promise
}

export { habitDone, habitUndone, getHabits, getHabitsToday, postHabit, deleteHabit, signUp, logIn}

