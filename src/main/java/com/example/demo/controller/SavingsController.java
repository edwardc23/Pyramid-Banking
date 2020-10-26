package com.example.demo.controller;

import com.example.demo.model.CheckingsModel;
import com.example.demo.model.LoginModel;
import com.example.demo.model.SavingsModel;
import com.example.demo.repository.LoginRepository;
import com.example.demo.service.SavingsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/savings")
public class SavingsController {

    private final SavingsService savingsService;
    private final LoginRepository loginRepository;

    public SavingsController(SavingsService savingsService, LoginRepository loginRepository) {
        this.savingsService = savingsService;
        this.loginRepository = loginRepository;
    }

    @PostMapping("/create")
    public SavingsModel createSavings(@RequestBody SavingsModel savingsModel) throws InterruptedException {

        Thread.sleep(5000);
        LoginModel list = loginRepository.findAll().get(loginRepository.findAll().size()-1);

        if(savingsModel.getAccountNumber().equals("Yes")){

            savingsModel.setAccountNumber(list.getSaving());
            savingsModel.setName(list.getFull());
        }
        return this.savingsService.save(savingsModel);
    }


    @GetMapping("/{id}")
    public Optional<SavingsModel> getCheckings(@PathVariable Long id){
        return this.savingsService.findById(id);
    }

    @GetMapping("/accounts")
    public List<SavingsModel> getAllCheckings(){
        return this.savingsService.findAll();
    }

    @PutMapping("/update/{id}")
    public String updateAccount(@PathVariable Long id, @RequestBody SavingsModel updateAccount){
        if(this.savingsService.findById(id).isPresent()){

            this.savingsService.updateSavings(id,updateAccount);
            return "Record updated";
        }
        else {
            return "Record not found";
        }
    }

    @DeleteMapping("/delete/{id}")
    public String deleteAccount(@PathVariable Long id){
        if(this.savingsService.findById(id).isPresent()) {
            this.savingsService.delete(id);
            return "Account Deleted";
        }
        else
            return "Account not deleted.";
    }

    @PostMapping("/find")
    public SavingsModel findByAccountNumber(@RequestBody String accountNumber){
        System.out.println("og saving: " + accountNumber);
        accountNumber = accountNumber.substring(15,accountNumber.length()-2);
        System.out.println("sub sav: " + accountNumber);
SavingsModel test = savingsService.findByAcctNumber(accountNumber);
        System.out.println(test.toString());
        return test;
    }
    @PostMapping("/withdraw/{id}")
    public SavingsModel withdraw(@PathVariable Long id, @RequestBody String amt){

        double withAmt = Double.parseDouble(amt.substring(8,amt.length()-2));

        return savingsService.withdrawChecking(id, withAmt);
    }

    @PostMapping("/deposit/{id}")
    public SavingsModel deposit(@PathVariable Long id, @RequestBody String amt){

        System.out.println(amt);
        double depAmt = Double.parseDouble(amt.substring(8,amt.length()-2));
        System.out.println(depAmt);
        return savingsService.depositChecking(id,depAmt);
    }
}
