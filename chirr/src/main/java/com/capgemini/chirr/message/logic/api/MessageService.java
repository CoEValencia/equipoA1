package com.capgemini.chirr.message.logic.api;

import java.util.List;

import com.capgemini.chirr.message.dataaccess.api.entity.MessageEntity;
import com.capgemini.chirr.message.logic.api.dto.MessageDto;

import es.capgemini.devon.bo.annotations.BusinessProxy;
import es.capgemini.devon.bo.annotations.WebBusinessOperation;

@BusinessProxy
public interface MessageService {

    @WebBusinessOperation(value = "MESSAGE_GET", convertToClass = MessageDto.class)
    MessageEntity get(Long id);

    @WebBusinessOperation(value = "MESSAGE_FIND", convertToClass = MessageDto.class)
    List<MessageEntity> find(MessageDto dto);

    @WebBusinessOperation(value = "MESSAGE_COUNT")
    Integer count(MessageDto dto);

    @WebBusinessOperation(value = "MESSAGE_UPDATE")
    void update(MessageDto dto);

    @WebBusinessOperation(value = "MESSAGE_DELETE")
    void delete(Long id);
}
