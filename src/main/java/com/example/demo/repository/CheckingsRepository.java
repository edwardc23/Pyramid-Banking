package com.example.demo.repository;

import com.example.demo.model.CheckingsModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CheckingsRepository extends JpaRepository<CheckingsModel, Long> {
    CheckingsModel findByAccountNumber(String accountNumber);

}
