package com.example.demo.repository;

import com.example.demo.model.SavingsModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SavingsRepository extends JpaRepository<SavingsModel,Long> {
}
