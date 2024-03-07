import axios from "axios"

const BASE_URL = "http://localhost:5000/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDU2ZjU1NDE5ZTU1NmE3ZGQ0YjhjZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTAwODEzMSwiZXhwIjoxNjU5MjY3MzMxfQ.MoYF87AgIJFqaQYyYdRAFZELWp_O4qLYY5OpqQNlOXY"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token: `Bearer ${TOKEN}`}
})