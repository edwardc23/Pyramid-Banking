package com.example.demo.service;

import com.example.demo.model.CheckingsModel;
import com.example.demo.model.SavingsModel;
import com.example.demo.repository.SavingsRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SavingsService {

    private final SavingsRepository savingsRepository;

    public SavingsService(SavingsRepository savingsRepository) {
        this.savingsRepository = savingsRepository;
    }

    public SavingsModel save(SavingsModel savingsModel) {
        return savingsRepository.save(savingsModel);
    }


    public List<SavingsModel> findAll() {
        return savingsRepository.findAll();
    }

    public Optional<SavingsModel> findById(Long id) {
        return savingsRepository.findById(id);
    }

    public void updateSavings(Long id, SavingsModel updatedAccount) {

        Optional<SavingsModel> savingsModel = savingsRepository.findById(id);

        savingsModel.get().setName(updatedAccount.getName());
        savingsRepository.save(savingsModel.get());

    }

    public void delete(Long id) {
        savingsRepository.deleteById(id);
    }

    public SavingsModel findByAcctNumber(String accountNumber){
        List<SavingsModel> a= savingsRepository.findAll();
        for(SavingsModel t:a)
        {
            if(accountNumber.equals(t.getAccountNumber()))
            {
                return t;
            }
        }
        return null;
    }
    public SavingsModel withdrawChecking(Long id, double amt) {

        Optional<SavingsModel> checkingsModel = savingsRepository.findById(id);
        checkingsModel.get().withdraw(amt);

        return savingsRepository.save(checkingsModel.get());

    }

    public SavingsModel depositChecking(Long id, double amt) {

        System.out.println(amt);
        Optional<SavingsModel> checkingsModel = savingsRepository.findById(id);
        checkingsModel.get().deposit(amt);

        return savingsRepository.save(checkingsModel.get());

    }
}
