package com.capgemini.chirr.message.dataaccess.impl;

import java.util.HashMap;
import java.util.List;

import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import com.capgemini.chirr.message.dataaccess.api.MessageDao;
import com.capgemini.chirr.message.dataaccess.api.entity.MessageEntity;
import com.capgemini.chirr.message.logic.api.dto.MessageDto;

import es.capgemini.devon.hibernate.dao.AbstractHibernateDao;
import es.capgemini.devon.utils.StringUtils;

@Repository("messageDao")
public class MessageDaoImpl extends AbstractHibernateDao<MessageEntity, Long> implements MessageDao {

    @SuppressWarnings("unchecked")
    @Override
    public List<MessageEntity> find(MessageDto dto) {
        Query query = findQuery(dto, false);
        return query.list();
    }

    @Override
    public Integer count(MessageDto dto) {
        Query query = findQuery(dto, true);
        return (Integer) query.uniqueResult();
    }

    private Query findQuery(MessageDto dto, Boolean count) {

        StringBuilder hql = new StringBuilder();
        HashMap<String, Object> params = new HashMap<String, Object>();
        if (count) {
            hql.append("count (1) from MessageEntity m where 1=1");
        } else {
            hql.append("from MessageEntity m where 1=1");
        }

        if (dto.getFlow() != null && dto.getFlow().getId() != null) {
            hql.append(" AND m.flow.id = :flow");
            params.put("flow", dto.getFlow().getId());
        }

        if (dto.getUser() != null && dto.getUser().getId() != null) {
            hql.append(" AND m.user.id != :user");
            params.put("user", dto.getUser().getId());
        }

        if (dto.getLastMessage() != null) {
            hql.append(" AND m.time > :lastmessg");
            params.put("lastmessg", dto.getLastMessage());
        }

        if (StringUtils.hasText(dto.getContent())) {
            hql.append(" AND upper(m.content) like '%'||:content||'%'");
            params.put("content", dto.getContent().toUpperCase());
        }

        if (StringUtils.hasText(dto.getSort())) {
            hql.append(addOrderBy(dto));
        } else {
            hql.append(" order by m.time ASC");
        }

        Query query = getSession().createQuery(hql.toString());
        setParameters(query, params);

        return query;
    }
}