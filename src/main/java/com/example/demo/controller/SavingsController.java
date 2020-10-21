package com.example.demo.controller;

import com.example.demo.model.SavingsModel;
import com.example.demo.service.SavingsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/savings")
public class SavingsController {
    private SavingsService savingsService;

    public SavingsController(SavingsService savingsService) {
        this.savingsService = savingsService;
    }

    @PostMapping("/create")
    public SavingsModel createSavings(@RequestBody SavingsModel savingsModel){
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
