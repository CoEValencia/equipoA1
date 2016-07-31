package com.capgemini.chirr.user.logic.api;

import com.capgemini.chirr.user.logic.api.dto.UserDto;

import es.capgemini.devon.bo.annotations.BusinessProxy;
import es.capgemini.devon.bo.annotations.WebBusinessOperation;

@BusinessProxy
public interface UserService {

    @WebBusinessOperation(value = "USER_UPDATE")
    void update(UserDto dto);
}
