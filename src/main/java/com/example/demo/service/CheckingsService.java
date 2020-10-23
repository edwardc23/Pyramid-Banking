package com.example.demo.service;

import com.example.demo.model.CheckingsModel;
import com.example.demo.repository.CheckingsRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CheckingsService {

    private final CheckingsRepository checkingsRepository;

    public CheckingsService(CheckingsRepository checkingsRepository) {
        this.checkingsRepository = checkingsRepository;
    }


    public CheckingsModel save(CheckingsModel checkingsModel) {
        return checkingsRepository.save(checkingsModel);
    }


    public List<CheckingsModel> findAll() {
        return checkingsRepository.findAll();
    }

    public Optional<CheckingsModel> findById(Long id) {
        return checkingsRepository.findById(id);
    }

    public void updateCheckings(Long id, CheckingsModel updatedAccount) {

        Optional<CheckingsModel> checkingsModel = checkingsRepository.findById(id);

        checkingsModel.get().setName(updatedAccount.getName());
        checkingsRepository.save(checkingsModel.get());

    }

    public void delete(Long id) {
        checkingsRepository.deleteById(id);
    }

    public CheckingsModel findByAccountNumber(String accountNumber){

        return checkingsRepository.findByAccountNumber(accountNumber);
    }
}
