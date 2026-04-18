import axios from "axios";

const localBaseUrl = "http://localhost:3000"
const remoteBaseUrl = "https://breaking-news-api-a622.onrender.com"

const signup = (data) => {
    delete data.confirm_password
    const body = {
        ...data, 
        username: generateUsername(data.name), 
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwmG52pVI5JZfn04j9gdtsd8pAGbqjjLswg&s",
        background: "https://nextnature.org/en/magazine/story/2010/lets-grow-an-avatar-forrest"
    }
    const response = axios.post(`${remoteBaseUrl}/users`, body)
    return response
}

function generateUsername (name) {
    const nameWithoutSpaces = name.replace(/\s/g, "").toLowerCase()
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${nameWithoutSpaces}-${randomNumber}`
}

export default {
    signup
}