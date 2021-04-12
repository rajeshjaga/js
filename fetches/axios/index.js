import axios from "axios"
const URI="https://lucifer-13een.herokuapp.com/post"


axios.get(URI).then((response)=>{
	console.log(response)
}).catch(error=>{
	console.log(error.message)
}
).then(()=>{
	console.log('setLoading to false')
})
