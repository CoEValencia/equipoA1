package com.capgemini.chirr.stream.logic.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import com.capgemini.chirr.stream.dataaccess.api.StreamDao;
import com.capgemini.chirr.stream.dataaccess.api.entity.StreamEntity;
import com.capgemini.chirr.stream.logic.api.StreamService;
import com.capgemini.chirr.stream.logic.api.dto.StreamDto;

import es.capgemini.devon.beans.Service;
import es.capgemini.devon.security.user.model.User;
import es.capgemini.devon.security.user.service.UserManager;

@Service("streamService")
public class StreamServiceImpl implements StreamService {

    @Autowired
    private StreamDao streamDao;

    @Autowired
    private UserManager userManager;

    @Override
    @Transactional(readOnly = true)
    public StreamEntity get(Long id) {
        return streamDao.get(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<StreamEntity> find(@RequestBody StreamDto dto) {
        return streamDao.find(dto);
    }

    @Override
    @Transactional(readOnly = false)
    public void update(@RequestBody StreamDto dto) {

        StreamEntity stream = streamDao.getOrNew(dto.getId());

        stream.setName(dto.getName());

        User owner = userManager.get(dto.getOwner().getId());
        if(owner != null){
            stream.setOwner(owner);
        }

        streamDao.saveOrUpdate(stream);
    }

    @Override
    @Transactional(readOnly = false)
    public void delete(Long id) {
        streamDao.deleteById(id);
    }

}
