package com.capgemini.chirr.flow.logic.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import com.capgemini.chirr.flow.dataaccess.api.FlowDao;
import com.capgemini.chirr.flow.dataaccess.api.entity.FlowEntity;
import com.capgemini.chirr.flow.logic.api.FlowService;
import com.capgemini.chirr.flow.logic.api.dto.FlowDto;
import com.capgemini.chirr.stream.dataaccess.api.entity.StreamEntity;
import com.capgemini.chirr.stream.logic.api.StreamService;

import es.capgemini.devon.beans.Service;
import es.capgemini.devon.security.user.model.User;
import es.capgemini.devon.security.user.service.UserManager;

@Service("flowService")
public class FlowServiceImpl implements FlowService{

    @Autowired
    private FlowDao flowDao;

    @Autowired
    private UserManager userManager;

    @Autowired
    private StreamService streamService;

    @Override
    @Transactional(readOnly = true)
    public FlowEntity get(Long id) {
        return flowDao.get(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<FlowEntity> find(@RequestBody FlowDto dto) {
        return flowDao.find(dto);
    }

    @Override
    @Transactional(readOnly = false)
    public void update(@RequestBody FlowDto dto) {

        FlowEntity flow = flowDao.getOrNew(dto.getId());

        flow.setName(dto.getName());

        User owner = userManager.get(dto.getOwner().getId());
        if(owner != null){
            flow.setOwner(owner);
        }

        StreamEntity stream = streamService.get(dto.getStream().getId());
        if(owner != null){
            flow.setStream(stream);
        }

        flowDao.saveOrUpdate(flow);
    }

    @Override
    @Transactional(readOnly = false)
    public void delete(Long id) {
        flowDao.deleteById(id);
    }
}
