package com.capgemini.chirr.authority.logic.api.dto;

import es.capgemini.devon.security.user.model.User;

public class AuthorityDto {

    private User user;

    private String authority;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getAuthority() {
        return authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }

}
