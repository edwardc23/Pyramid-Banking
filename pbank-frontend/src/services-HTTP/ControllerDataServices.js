import axios from 'axios'

class ControllerDataServices {
    //PUT requests
    updateItem(item){
        return axios.put(`http://localhost:8080/update`,item);
    }

    //________________________________________________________________________
    
    //GET requests
    listOfCards(){
        return axios.get(`http://localhost:8080/grabAll`);
    }



    check(admin){ //for admin component**
        return axios.post(`http://localhost:8080/checkAdmin`, {
            userName:admin.username,
            password: admin.password
        });
    }
    //__________________________________________________________________________

    //POST requests

    addAdmin(admin) { //for admin component**
        axios.post(`http://localhost:8080/addAdmin`,{
            userName: admin.username,
            password: admin.password
        });
    }


    //_____________________________________________________________________________

    //DELETE requests

}
export default new ControllerDataServices()
