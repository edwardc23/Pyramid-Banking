package com.example.demo.model;

import com.example.demo.repository.Account;

import javax.persistence.*;

@Entity
@Table(name="checking")
public class CheckingsModel implements Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="AcctNumber")
    private String accountNumber;

    @Column(name="full_name")
    private String name;

    @Column(name="balance")
    private double balance;

    public CheckingsModel() {
    }

    public CheckingsModel(String accountNumber, String name, double balance) {

        this.accountNumber = accountNumber;
        this.name = name;
        this.balance = balance;
    }

    public long getId() {
        return id;
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

    public String withdraw(Double amt) {
        if(this.balance < amt){
            return "Insufficient balance\n Balance:" + this.balance;
        }
        else {
            this.balance -= amt;
            return "Balance: " + this.balance;
        }
    }

    public String deposit(Double amt) {
        this.balance += amt;
        return "Balance: " + this.balance;
    }

    @Override
    public String accountType() {
        return "Checking";
    }


}
