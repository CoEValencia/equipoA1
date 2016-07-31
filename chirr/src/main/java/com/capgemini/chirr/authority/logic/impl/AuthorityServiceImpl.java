package com.capgemini.chirr.authority.logic.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.capgemini.chirr.authority.logic.api.AuthorityService;
import com.capgemini.chirr.authority.logic.api.dto.AuthorityDto;

import es.capgemini.devon.beans.Service;
import es.capgemini.devon.security.user.dao.AuthorityDao;
import es.capgemini.devon.security.user.model.Authority;

@Service("authorityService")
public class AuthorityServiceImpl implements AuthorityService {

    @Autowired
    private AuthorityDao authorityDao;

    @Override
    @Transactional(readOnly = false)
    public void update(AuthorityDto dto) {

        Authority entity = new Authority();

        entity.setUser(dto.getUser());
        entity.setAuthority(dto.getAuthority());

        authorityDao.save(entity);

    }

}
