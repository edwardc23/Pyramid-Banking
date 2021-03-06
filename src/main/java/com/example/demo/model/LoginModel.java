package com.example.demo.model;

import javax.persistence.*;
@Entity
@Table(name="admininfo")
public class LoginModel {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name="id")
        private int id;

        @Column(name="user_name")
        private String userName;

        @Column(name="password")
        private String password;

        @Column(name="full_name")
        private String full;


        @Column(name="saving")
        private String saving;


        @Column(name="checking")
        private String checking;

        public LoginModel(String userName, String password, String full, String saving, String checking) {
            this.userName = userName;
            this.password = password;
            this.full=full;
            this.saving=saving;
            this.checking= checking;
        }
        public LoginModel()
        {}

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getUserName() {
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

        public String getFull() {
            return full;
        }

        public void setFull(String full) {
            this.full = full;
        }

        public String getSaving() {
            return saving;
        }

        public void setSaving(String saving) {
            this.saving = saving;
        }

        public String getChecking() {
            return checking;
        }

        public void setChecking(String checking) {
            this.checking = checking;
        }

    @Override
    public String toString() {
        return "LoginModel{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", full='" + full + '\'' +
                ", saving='" + saving + '\'' +
                ", checking='" + checking + '\'' +
                '}';
    }
}


