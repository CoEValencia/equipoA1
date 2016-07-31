package com.capgemini.chirr.user.logic.api.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import es.capgemini.devon.pagination.PaginationParamsImpl;

@JsonIgnoreProperties(ignoreUnknown = true)
public class UserDto extends PaginationParamsImpl {

    private static final long serialVersionUID = 1L;

    private Long id;
    private String username;
    private String password;
    private String nombre;
    private String apellido1;
    private String apellido2;
    private String email;
    private Long color = 3L;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido1() {
        return apellido1;
    }

    public void setApellido1(String apellido1) {
        this.apellido1 = apellido1;
    }

    public String getApellido2() {
        return apellido2;
    }

    public void setApellido2(String apellido2) {
        this.apellido2 = apellido2;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getColor() {
        return color;
    }

    public void setColor(Long color) {
        this.color = color;
    }

}
