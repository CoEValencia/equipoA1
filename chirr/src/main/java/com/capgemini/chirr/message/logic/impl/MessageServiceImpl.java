package com.capgemini.chirr.message.logic.impl;

import java.util.List;

import org.joda.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import com.capgemini.chirr.flow.dataaccess.api.entity.FlowEntity;
import com.capgemini.chirr.flow.logic.api.FlowService;
import com.capgemini.chirr.message.dataaccess.api.MessageDao;
import com.capgemini.chirr.message.dataaccess.api.entity.MessageEntity;
import com.capgemini.chirr.message.logic.api.MessageService;
import com.capgemini.chirr.message.logic.api.dto.MessageDto;

import es.capgemini.devon.beans.Service;
import es.capgemini.devon.security.user.model.User;
import es.capgemini.devon.security.user.service.UserManager;

@Service("messageServiceTwo")
public class MessageServiceImpl implements MessageService {

    @Autowired
    private MessageDao messageDao;

    @Autowired
    private UserManager userManager;

    @Autowired
    private FlowService flowService;

    @Override
    @Transactional(readOnly = true)
    public MessageEntity get(Long id) {
        return messageDao.get(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<MessageEntity> find(@RequestBody MessageDto dto) {
        return messageDao.find(dto);
    }

    @Override
    @Transactional(readOnly = true)
    public Integer count(@RequestBody MessageDto dto) {
        return messageDao.count(dto);
    }

    @Override
    @Transactional(readOnly = false)
    public void update(@RequestBody MessageDto dto) {

        MessageEntity message = messageDao.getOrNew(dto.getId());

        message.setContent(dto.getContent());
        message.setTime(new LocalDateTime());

        User user = userManager.get(dto.getUser().getId());
        if (user != null) {
            message.setUser(user);
        }

        FlowEntity flow = flowService.get(dto.getFlow().getId());
        if (flow != null) {
            message.setFlow(flow);
        }

        messageDao.saveOrUpdate(message);
    }

    @Override
    @Transactional(readOnly = false)
    public void delete(Long id) {
        messageDao.deleteById(id);
    }
}
