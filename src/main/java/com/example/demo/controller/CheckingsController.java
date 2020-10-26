package com.example.demo.controller;

import com.example.demo.model.CheckingsModel;
import com.example.demo.model.LoginModel;
import com.example.demo.repository.LoginRepository;
import com.example.demo.service.CheckingsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/checkings")
public class CheckingsController {
    private final CheckingsService checkingsService;
    private LoginRepository loginRepository;

    public CheckingsController(CheckingsService checkingsService, LoginRepository loginRepository) {
        this.checkingsService = checkingsService;
        this.loginRepository = loginRepository;
    }

    @PostMapping("/create")
    public CheckingsModel createCheckings(@RequestBody CheckingsModel checkingsModel) throws InterruptedException {
        Thread.sleep(5000);
        LoginModel list = loginRepository.findAll().get(loginRepository.findAll().size()-1);
        System.out.println(list.toString());

        if(checkingsModel.getAccountNumber().equals("Yes")){

            checkingsModel.setAccountNumber(list.getChecking());

        }
        return this.checkingsService.save(checkingsModel);
    }


    @GetMapping("/{id}")
    public Optional<CheckingsModel> getCheckings(@PathVariable Long id){
        return this.checkingsService.findById(id);
    }

    @GetMapping("/accounts")
    public List<CheckingsModel> getAllCheckings(){
        return this.checkingsService.findAll();
    }

    @PutMapping("/update/{id}")
    public String updateAccount(@PathVariable Long id, @RequestBody CheckingsModel updateAccount){
        if(this.checkingsService.findById(id).isPresent()){

             this.checkingsService.updateCheckings(id,updateAccount);
             return "Record updated";
        }
        else {
             return "Record not found";
        }
    }

    @DeleteMapping("/delete/{id}")
    public String deleteAccount(@PathVariable Long id){
        if(this.checkingsService.findById(id).isPresent()) {
            this.checkingsService.delete(id);
            return "Account Deleted";
        }
        else
            return "Account not deleted.";
    }

    @PostMapping("/find")
    public CheckingsModel findByAccountNumber(@RequestBody String accountNumber){
        System.out.println(accountNumber);
        System.out.println("og check: " + accountNumber);
        accountNumber = accountNumber.substring(17,accountNumber.length()-2);
        System.out.println("sub check: " + accountNumber);
        return checkingsService.findByAccountNumber(accountNumber);
    }
}
