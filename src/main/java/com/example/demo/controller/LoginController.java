package com.example.demo.controller;

import com.example.demo.model.LoginModel;
import com.example.demo.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController

public class LoginController {
    private LoginService loginService;
    @Autowired
    public LoginController(LoginService loginService)
    {
        this.loginService = loginService;
    }


    @PostMapping("/addAdmin")
    public LoginModel createAdmin(@RequestBody LoginModel admin){
        LoginModel item = loginService.saveAdmin(admin);
        return item;
    }
    @GetMapping("/checkAdmin")
    public String checker(@RequestBody LoginModel admin)
    {
        if(loginService.checkAdmin(admin))
        {
            return "Success";
        }
        else
        {
            return "Failure";
        }


    }

}
