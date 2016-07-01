package com.capgemini.chirr.stream.dataaccess.impl;

import java.util.HashMap;
import java.util.List;

import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import com.capgemini.chirr.stream.dataaccess.api.StreamDao;
import com.capgemini.chirr.stream.dataaccess.api.entity.StreamEntity;
import com.capgemini.chirr.stream.logic.api.dto.StreamDto;

import es.capgemini.devon.hibernate.dao.AbstractHibernateDao;
import es.capgemini.devon.utils.StringUtils;

@Repository("streamDao")
public class StreamDaoImpl extends AbstractHibernateDao<StreamEntity, Long>implements StreamDao {

    @SuppressWarnings("unchecked")
    @Override
    public List<StreamEntity> find(StreamDto dto) {
        Query query = findQuery(dto);
        return query.list();
    }

    private Query findQuery(StreamDto dto) {

        StringBuilder hql = new StringBuilder();
        HashMap<String, Object> params = new HashMap<String, Object>();
        hql.append("from StreamEntity s where 1=1");

        if (dto.getName() != null && StringUtils.hasText(dto.getName())) {
            hql.append(" AND s.name = :name");
            params.put("name", dto.getName());
        }

        if (dto.getOwner() != null && dto.getOwner().getId() != null) {
            hql.append(" AND s.owner.id = :owner");
            params.put("owner", dto.getOwner().getId());
        }

        if (StringUtils.hasText(dto.getSort())) {
            hql.append(addOrderBy(dto));
        } else {
            hql.append(" order by s.name ASC");
        }

        Query query = getSession().createQuery(hql.toString());
        setParameters(query, params);

        return query;
    }
}