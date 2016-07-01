package com.capgemini.chirr.message.dataaccess.api;

import java.util.List;

import com.capgemini.chirr.message.dataaccess.api.entity.MessageEntity;
import com.capgemini.chirr.message.logic.api.dto.MessageDto;

import es.capgemini.devon.hibernate.dao.HibernateDao;

public interface MessageDao extends HibernateDao<MessageEntity, Long> {

    List<MessageEntity> find(MessageDto dto);
}
