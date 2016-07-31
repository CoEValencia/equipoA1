package com.capgemini.chirr.user.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.capgemini.chirr.user.logic.api.UserService;
import com.capgemini.chirr.user.logic.api.dto.UserDto;

@Controller
public class UserController {

    @Autowired
    private UserService usuarioService;

    /**
     * Operación pública para registrar usuarios
     * @param dto {@link UserDto} con los datos del usuario registrado
     * @return
     */
    @RequestMapping("/public/USER_CREATE${fwk.bo.pathSuffix}")
    @ResponseBody
    public String createUser(@RequestBody UserDto dto) {
        usuarioService.update(dto);

        return "{success:true}";
    }

}
