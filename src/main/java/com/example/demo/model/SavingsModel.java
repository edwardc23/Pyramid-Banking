package com.example.demo.model;

import com.example.demo.repository.Account;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class SavingsModel implements Account {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String accountNumber;
    private String name;
    private double balance;

    public SavingsModel() {
    }

    public SavingsModel( String accountNumber, String name, double balance) {
        this.accountNumber = accountNumber;
        this.name = name;
        this.balance = balance;
    }


    @Override
    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public String withdraw(Double amt){
        this.balance -= amt;
        return "Balance: " + this.balance;
    }

    public String deposit(Double amt){
        this.balance += amt;
        return "Balance: " + this.balance;
    }

    @Override
    public String accountType() {
        return "Savings";
    }
}
