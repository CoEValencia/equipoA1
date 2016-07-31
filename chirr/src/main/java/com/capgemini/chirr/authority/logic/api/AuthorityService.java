package com.capgemini.chirr.authority.logic.api;

import com.capgemini.chirr.authority.logic.api.dto.AuthorityDto;

import es.capgemini.devon.bo.annotations.BusinessOperation;
import es.capgemini.devon.bo.annotations.BusinessProxy;

@BusinessProxy
public interface AuthorityService {

    @BusinessOperation(value = "AUTHORITY_UPDATE")
    void update(AuthorityDto dto);

}
