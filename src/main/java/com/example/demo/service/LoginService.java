package com.example.demo.service;

import com.example.demo.model.LoginModel;
import com.example.demo.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Random;

@Service
public class LoginService {

        private final LoginRepository  loginRepository;

        private Random rand;

        @Autowired
        public LoginService(LoginRepository loginRepository){this.loginRepository=loginRepository;}


        @Transactional
        public String saveAdmin(LoginModel admin) {
            if(checkForUsername(admin.getUserName())) {
                return "User already exists";
            }
            else {
                loginRepository.save(admin);
                return "User is being created";
            }
        }

        public List<LoginModel> listInventory() {
            return loginRepository.findAll();
        }


        @Transactional
        public LoginModel getAdmin(long id) {
            return loginRepository.getOne(id);

        }
       @Transactional
       public LoginModel getAdmin(String username)
       {
           List<LoginModel> admins= listInventory();
           for (LoginModel admin : admins) {
               if (admin.getUserName().equals(username)) {
                   return admin;
               }
           }
          return null;
       }


        @Transactional
        public boolean checkAdmin(LoginModel admin) {


            List<LoginModel> list = listInventory();

            for(LoginModel a :list)
            {

                if(a.getUserName().equals(admin.getUserName())){
                    if (a.getPassword().equals(admin.getPassword()))
                    {
                        return true;
                    }
                }
            }
            return false;
        }

        public boolean checkForUsername(String username){
            List<LoginModel> list = listInventory();

            for(LoginModel a :list)
            {
                if(a.getUserName().equals(username)){
                        return true;
                }
            }
            return false;
        }

    }


