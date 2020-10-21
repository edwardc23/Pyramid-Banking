package com.example.demo.repository;

import com.example.demo.model.LoginModel;
import com.example.demo.model.SavingsModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<LoginModel,Long> {
}
