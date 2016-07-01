package com.capgemini.chirr.stream.dataaccess.api;

import java.util.List;

import com.capgemini.chirr.stream.dataaccess.api.entity.StreamEntity;
import com.capgemini.chirr.stream.logic.api.dto.StreamDto;

import es.capgemini.devon.hibernate.dao.HibernateDao;

public interface StreamDao extends HibernateDao<StreamEntity, Long> {

    List<StreamEntity> find(StreamDto dto);

}
