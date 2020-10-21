package com.example.demo.repository;


public interface Account {
    long getId();

    void setId(long id);

    String getAccountNumber();

    void setAccountNumber(String accountNumber);

    String getName();

    void setName(String name);

    double getBalance();

    void setBalance(double balance);

    String withdraw(Double amt);

    String deposit(Double amt);

    String accountType();
}
