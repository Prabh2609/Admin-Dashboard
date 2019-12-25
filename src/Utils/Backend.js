import Axios from 'axios'

export const getData=async()=>{
    Axios.get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
    .then(response=>{
        console.log(response.data)
        localStorage.setItem("Response",JSON.stringify(response.data))
    })
    .catch(err=>{
        console.log(err)
        
    })
}