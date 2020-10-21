package com.example.demo.service;

import com.example.demo.model.LoginModel;
import com.example.demo.repository.LoginRepository;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Random;

@Service
public class LoginService {

        private LoginRepository  loginRepository;

        private Random rand;

        @Autowired
        public LoginService(LoginRepository loginRepository){this.loginRepository=loginRepository;}


        @Transactional
        public LoginModel saveAdmin(LoginModel admin) {
            loginRepository.save(admin);

            return admin;
        }

        public List<LoginModel> listInventory() {
            return loginRepository.findAll();
        }


        @Transactional
        public LoginModel getAdmin(long id) {
            return loginRepository.getOne(id);

        }


        @Transactional
        public boolean checkAdmin(LoginModel Admin) {

            List<LoginModel> list = listInventory();

            for(LoginModel a :list)
            {
                if(a.getUsername().equals(Admin.getUsername())){
                    if (a.getPassword().equals(Admin.getPassword()))
                    {
                        return true;
                    }
                }
            }
            return false;
        }

    }


