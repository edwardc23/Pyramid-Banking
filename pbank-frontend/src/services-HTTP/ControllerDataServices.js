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




    //__________________________________________________________________________

    //POST requests

    addAdmin(admin) { //for admin component**
        axios.post(`http://localhost:8080/addAdmin`, {
            userName: admin.username,
            password: admin.password,
            full: admin.fullName,
            saving: admin.savingAcct,
            checking: admin.checkingAcct
        });
    }
    addChecking(acct){
        axios.post(`http://localhost:8080/createChecking`,{
          accountNumber: acct.checkingAcct,
          name: acct.fullName,
          balance: 0
        })
    }
    addSaving(acct){
        axios.post(`http://localhost:8080/createSavings`,{
          accountNumber: acct.savingAcct,
          name: acct.fullName,
          balance: 0
        })
    }
    check(admin){ //for admin component**
        return axios.post(`http://localhost:8080/checkAdmin`, {
            userName:admin.username,
            password: admin.password
        });
    }

    //_____________________________________________________________________________

    //DELETE requests

}
export default new ControllerDataServices()
