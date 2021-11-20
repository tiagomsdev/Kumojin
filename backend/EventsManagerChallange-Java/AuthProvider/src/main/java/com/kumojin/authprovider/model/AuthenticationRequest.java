package com.kumojin.authprovider.model;

import java.io.Serializable;

public class AuthenticationRequest implements Serializable{
	
	private static final long serialVersionUID = 1L;
	private String UserName;
	private String Password;
	
	public AuthenticationRequest() {
		
	}
	
	public AuthenticationRequest(String username, String password) {
		this.setUserName(username);
		this.setPassword(password);
		
	}

	public String getUserName() {
		return UserName;
	}

	public void setUserName(String userName) {
		this.UserName = userName;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		this.Password = password;
	}

}
