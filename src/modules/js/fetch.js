import axios from 'axios'

function fetch(method,url,data){
  return new Promise((resolve, reject) => {
    axios({method,url,data}).then(response=>{
      let status = response.data.status
      if(200<=status<=300){
        resolve(response)
      }
      reject(response)
    }).catch(error=>{
      reject(error)
    })
  })
}

export default fetch
