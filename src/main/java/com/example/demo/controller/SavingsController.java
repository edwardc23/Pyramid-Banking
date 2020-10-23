package com.example.demo.controller;

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
    private LoginRepository loginRepository;

    public SavingsController(SavingsService savingsService, LoginRepository loginRepository) {
        this.savingsService = savingsService;
        this.loginRepository = loginRepository;
    }

    @PostMapping("/createSavings")
    public SavingsModel createSavings(@RequestBody SavingsModel savingsModel) throws InterruptedException {

        Thread.sleep(5000);
        LoginModel list = loginRepository.findAll().get(loginRepository.findAll().size()-1);

        if(savingsModel.getAccountNumber().equals("Yes")){

            savingsModel.setAccountNumber(list.getSaving());

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
}
