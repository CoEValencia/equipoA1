package com.capgemini.chirr.stream.logic.api;

import java.util.List;

import com.capgemini.chirr.stream.dataaccess.api.entity.StreamEntity;
import com.capgemini.chirr.stream.logic.api.dto.StreamDto;

import es.capgemini.devon.bo.annotations.BusinessProxy;
import es.capgemini.devon.bo.annotations.WebBusinessOperation;

@BusinessProxy
public interface StreamService {

    @WebBusinessOperation(value = "STREAM_GET", convertToClass = StreamDto.class)
    StreamEntity get(Long id);

    @WebBusinessOperation(value = "STREAM_FIND", convertToClass = StreamDto.class)
    List<StreamEntity> find(StreamDto dto);

    @WebBusinessOperation(value = "STREAM_UPDATE")
    void update(StreamDto dto);

    @WebBusinessOperation(value = "STREAM_DELETE")
    void delete(Long id);
}
