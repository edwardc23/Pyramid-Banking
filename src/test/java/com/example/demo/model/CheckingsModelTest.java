package com.example.demo.model;

import com.example.demo.repository.Account;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CheckingsModelTest {
    Account account;
    @BeforeEach
    void setUp() {
        account = new CheckingsModel();
        account.setName("Rickey");
        account.setBalance(100.00);

    }


    @Test
    void check(){
        assertEquals(0,account.getId());
        assertEquals("Rickey", account.getName());
        assertEquals("Checking", account.accountType());

    }

}
