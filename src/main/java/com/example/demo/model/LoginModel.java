package com.example.demo.model;

import javax.persistence.*;
@Entity
@Table(name="admininfo")
public class LoginModel {




        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name="ID")
        private int id;

        @Column(name="Username")
        private String userName;

        @Column(name="Password")
        private String password;

        public LoginModel(String userName, String password) {
            this.userName = userName;
            this.password = password;
        }
        public LoginModel()
        {}

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getUsername() {
            return userName;
        }

        public void setUserName(String userName) {
            this.userName = userName;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }

        @Override
        public String toString() {
            return "Admin{" +
                    ", Username='" + userName + '\'' +
                    ", Password='" + password + '\'' +
                    '}';
        }
    }


