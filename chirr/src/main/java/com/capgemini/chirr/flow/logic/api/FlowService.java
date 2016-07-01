package com.capgemini.chirr.flow.logic.api;

import java.util.List;

import com.capgemini.chirr.flow.dataaccess.api.entity.FlowEntity;
import com.capgemini.chirr.flow.logic.api.dto.FlowDto;

import es.capgemini.devon.bo.annotations.BusinessProxy;
import es.capgemini.devon.bo.annotations.WebBusinessOperation;

@BusinessProxy
public interface FlowService {

    @WebBusinessOperation(value = "FLOW_GET", convertToClass = FlowDto.class)
    FlowEntity get(Long id);

    @WebBusinessOperation(value = "FLOW_FIND", convertToClass = FlowDto.class)
    List<FlowEntity> find(FlowDto dto);

    @WebBusinessOperation(value = "FLOW_UPDATE")
    void update(FlowDto dto);

    @WebBusinessOperation(value = "FLOW_DELETE")
    void delete(Long id);
}
