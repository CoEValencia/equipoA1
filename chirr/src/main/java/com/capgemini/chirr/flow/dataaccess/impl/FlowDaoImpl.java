package com.capgemini.chirr.flow.dataaccess.impl;

import java.util.HashMap;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;

import com.capgemini.chirr.flow.dataaccess.api.FlowDao;
import com.capgemini.chirr.flow.dataaccess.api.entity.FlowEntity;
import com.capgemini.chirr.flow.logic.api.dto.FlowDto;

import es.capgemini.devon.hibernate.dao.AbstractHibernateDao;
import es.capgemini.devon.utils.StringUtils;

@Repository("flowDao")
public class FlowDaoImpl extends AbstractHibernateDao<FlowEntity, Long> implements FlowDao {

    @SuppressWarnings("unchecked")
    @Override
    public List<FlowEntity> find(FlowDto dto) {
        Query query = findQuery(dto);
        return query.list();
    }

    private Query findQuery(FlowDto dto) {

        StringBuilder hql = new StringBuilder();
        HashMap<String, Object> params = new HashMap<String, Object>();
        hql.append("from FlowEntity f where 1=1");

        if (dto.getName() != null && StringUtils.hasText(dto.getName())) {
            hql.append(" AND f.name = :name");
            params.put("name", dto.getName());
        }

        if (dto.getOwner() != null && dto.getOwner().getId() != null) {
            hql.append(" AND f.owner.id = :owner");
            params.put("owner", dto.getOwner().getId());
        }

        if (dto.getStream() != null && dto.getStream().getId() != null) {
            hql.append(" AND f.stream.id = :stream");
            params.put("stream", dto.getStream().getId());
        }

        if (StringUtils.hasText(dto.getSort())) {
            hql.append(addOrderBy(dto));
        } else {
            hql.append(" order by f.name ASC");
        }

        Query query = getSession().createQuery(hql.toString());
        setParameters(query, params);

        return query;
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<FlowDto> findWithUnread(FlowDto dto) {
        StringBuilder hql = new StringBuilder();
        HashMap<String, Object> params = new HashMap<String, Object>();
        hql.append(" select f.id as id, f.name as name, f.owner as owner, f.stream as stream,");
        hql.append(" count(m.id) as unread");
        hql.append(" from Message m join m.flow f");
        hql.append(" where 1=1");

        if (dto.getStream() != null && dto.getStream().getId() != null) {
            hql.append(" AND f.stream.id = :stream");
            params.put("stream", dto.getStream().getId());
        }

        if (dto.getLastMessage() != null) {
            hql.append(" AND m.time > :lastmessg");
            params.put("lastmessg", dto.getLastMessage());
        }

        hql.append(" group by m.id");

        Query query = getSession().createQuery(hql.toString());

        query.setResultTransformer(Transformers.aliasToBean(FlowDto.class));
        return query.list();

    }
}