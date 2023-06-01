package com.capstone_project.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone_project.auth.entity.ERole;
import com.capstone_project.auth.entity.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    
	Optional<Role> findByRoleName(ERole roleName);

}
