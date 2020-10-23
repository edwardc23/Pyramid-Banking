package com.example.demo.controller;

import com.example.demo.model.CheckingsModel;
import com.example.demo.service.CheckingsService;
import org.springframework.web.bind.annotation.*;

import java.text.DecimalFormat;
import java.util.List;
import java.util.Optional;
import java.util.Random;
@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/checkings")
public class CheckingsController {
    private final CheckingsService checkingsService;

    public CheckingsController(CheckingsService checkingsService) {
        this.checkingsService = checkingsService;
    }

    @PostMapping("/createChecking")
    public CheckingsModel createCheckings(@RequestBody CheckingsModel checkingsModel){
        if(checkingsModel.getAccountNumber().equals("Yes")){
            Random rand = new Random();
            String acctNum="483382610700"+new DecimalFormat("0000").format(String.valueOf(rand.nextInt(10000)));

            checkingsModel.setAccountNumber(acctNum);

        }
        return this.checkingsService.save(checkingsModel);
    }


    @GetMapping("/Checking/{id}")
    public Optional<CheckingsModel> getCheckings(@PathVariable Long id){
        return this.checkingsService.findById(id);
    }

    @GetMapping("Checking/accounts")
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
}
