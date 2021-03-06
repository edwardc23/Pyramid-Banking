package com.example.demo.controller;

import com.example.demo.model.LoginModel;
import com.example.demo.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.text.DecimalFormat;
import java.util.Random;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController

public class LoginController {
    private final LoginService loginService;
    @Autowired
    public LoginController(LoginService loginService)
    {
        this.loginService = loginService;
    }


    @PostMapping("/addAdmin")
    public void createAdmin(@RequestBody LoginModel admin){

        if(admin.getSaving().equals("Yes")){
            Random rand = new Random();
            String acctNum="723282610701"+new DecimalFormat("0000").format(rand.nextInt(10000));
            admin.setSaving(acctNum);


        }
        if(admin.getChecking().equals("Yes")){
            Random rand = new Random();
            String acctNum="483382610700"+ new DecimalFormat("0000").format(rand.nextInt(10000));
            admin.setChecking(acctNum);

        }

        loginService.saveAdmin(admin);
    }

    @PostMapping("/checkAdmin")
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
    @PostMapping("/returnUser")
    public LoginModel returnUser(@RequestBody String username)
    {

        username = username.substring(13,username.length()-2);
        System.out.println(username);


        return loginService.getAdmin(username);

    }

}
