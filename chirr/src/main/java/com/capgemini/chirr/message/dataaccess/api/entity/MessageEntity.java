package com.capgemini.chirr.message.dataaccess.api.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.Type;
import org.joda.time.LocalDateTime;

import com.capgemini.chirr.flow.dataaccess.api.entity.FlowEntity;

import es.capgemini.devon.security.user.model.User;

@Entity
@Table(name = "MESSAGE")
public class MessageEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "MessageGenerator")
    @SequenceGenerator(name = "MessageGenerator")
    @Column(name = "ID")
    private Long id;

    @Column(name = "CONTENT")
    private String content;

    @Type(type = "es.capgemini.devon.hibernate.usertype.joda.PersistentLocalDateTime")
    @Column(name = "MSG_TIME")
    private LocalDateTime time;

    @JoinColumn(name = "FLOW_ID")
    @ManyToOne
    private FlowEntity flow;

    @JoinColumn(name = "USER_ID")
    @ManyToOne
    private User user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDateTime getTime() {
        return time;
    }

    public void setTime(LocalDateTime time) {
        this.time = time;
    }

    public FlowEntity getFlow() {
        return flow;
    }

    public void setFlow(FlowEntity flow) {
        this.flow = flow;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}
