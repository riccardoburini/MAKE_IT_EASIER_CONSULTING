package com.capstone_project.auth.service;

import com.capstone_project.auth.payload.LoginDto;
import com.capstone_project.auth.payload.RegisterDto;

public interface AuthService {
    
	String login(LoginDto loginDto);
    String register(RegisterDto registerDto);
    
}
