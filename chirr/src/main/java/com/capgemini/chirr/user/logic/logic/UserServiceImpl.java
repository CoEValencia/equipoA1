package com.capgemini.chirr.user.logic.logic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import com.capgemini.chirr.user.logic.api.UserService;
import com.capgemini.chirr.utils.UserDto;

import es.capgemini.devon.beans.Service;
import es.capgemini.devon.security.user.service.UserManager;
import es.capgemini.devon.security.user.service.UserServiceDto;

@Service("userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserManager userManager;

    @Override
    @Transactional(readOnly = false)
    public void update(@RequestBody UserDto dto) {

        UserServiceDto dtoUS = new UserServiceDto();

        dtoUS.setUsername(dto.getUsername());
        dtoUS.setPassword(dto.getPassword());
        dtoUS.setEmail(dtoUS.getEmail());

        userManager.update(dtoUS);
    }

}
