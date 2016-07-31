package com.capgemini.chirr.flow.dataaccess.api;

import java.util.List;

import com.capgemini.chirr.flow.dataaccess.api.entity.FlowEntity;
import com.capgemini.chirr.flow.logic.api.dto.FlowCountDto;
import com.capgemini.chirr.flow.logic.api.dto.FlowDto;

import es.capgemini.devon.hibernate.dao.HibernateDao;

public interface FlowDao extends HibernateDao<FlowEntity, Long> {

    List<FlowEntity> find(FlowDto dto);

    List<FlowCountDto> findWithCount(FlowDto dto);

}
