package com.capgemini.chirr.common;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.AbstractUserDetailsAuthenticationProvider;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;

import es.capgemini.devon.web.security.WebSecurityUserInfoDto;

public class CustomAuthenticationProvider extends AbstractUserDetailsAuthenticationProvider {

    @Override
    protected void additionalAuthenticationChecks(UserDetails userDetails, UsernamePasswordAuthenticationToken authentication) throws AuthenticationException {
    }

    @Override
    protected UserDetails retrieveUser(String username, UsernamePasswordAuthenticationToken authentication) throws AuthenticationException {

        WebSecurityUserInfoDto userInfoWeb = new WebSecurityUserInfoDto();
        String name = authentication.getName();
        String password = authentication.getCredentials().toString();

        if (name.equals("admin") && password.equals("admin")) {
            userInfoWeb.setUsername(name);
            List<String> roles = new ArrayList<String>();
            roles.add("ROLE_USER");
            userInfoWeb.setRoles(roles);
        }

        return userInfoWeb;
    }

}