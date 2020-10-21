package com.example.demo.controller;

import com.example.demo.model.CheckingsModel;
import com.example.demo.service.CheckingsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/checkings")
public class CheckingsController {
    private CheckingsService checkingsService;

    public CheckingsController(CheckingsService checkingsService) {
        this.checkingsService = checkingsService;
    }

    @PostMapping("/create")
    public CheckingsModel createCheckings(@RequestBody CheckingsModel checkingsModel){
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
}
