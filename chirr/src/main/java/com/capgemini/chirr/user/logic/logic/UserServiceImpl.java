package com.capgemini.chirr.user.logic.logic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import com.capgemini.chirr.authority.logic.api.AuthorityService;
import com.capgemini.chirr.authority.logic.api.dto.AuthorityDto;
import com.capgemini.chirr.user.logic.api.UserService;
import com.capgemini.chirr.user.logic.api.dto.UserDto;
import com.capgemini.chirr.utils.Utils;

import es.capgemini.devon.beans.Service;
import es.capgemini.devon.exception.UserException;
import es.capgemini.devon.security.user.dao.UserDao;
import es.capgemini.devon.security.user.model.User;

@Service("usuarioService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private AuthorityService authorityService;

    @Override
    @Transactional(readOnly = false)
    public void update(@RequestBody UserDto dto) {

        User user1 = userDao.getByUsername(dto.getUsername());
        User user2 = userDao.getByEmail(dto.getEmail());

        if (user1 != null) {
            throw new UserException("The username you entered is already in use.");
        }
        if (user2 != null) {
            throw new UserException("The email you entered is already in use.");
        }

        User user = new User();
        user.setUsername(dto.getUsername());
        user.setEmail(dto.getEmail());
        userDao.saveOrUpdate(user);

        user.setPassword(Utils.encryptPassword(dto.getPassword() + "{" + user.getId() + "}"));
        userDao.saveOrUpdate(user);

        AuthorityDto authorityDto = new AuthorityDto();
        authorityDto.setUser(user);
        authorityDto.setAuthority("ROLE_USER");
        authorityService.update(authorityDto);

    }

}
