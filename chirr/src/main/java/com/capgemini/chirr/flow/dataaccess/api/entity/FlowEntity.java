package com.capgemini.chirr.flow.dataaccess.api.entity;

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

import com.capgemini.chirr.stream.dataaccess.api.entity.StreamEntity;

import es.capgemini.devon.security.user.model.User;

@Entity
@Table(name = "FLOW")
public class FlowEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "FlowGenerator")
    @SequenceGenerator(name = "FlowGenerator")
    @Column(name = "ID")
    private Long id;

    @Column(name = "NAME")
    private String name;

    @JoinColumn(name = "USER_ID")
    @ManyToOne
    private User owner;

    @JoinColumn(name = "STREAM_ID")
    @ManyToOne
    private StreamEntity stream;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public StreamEntity getStream() {
        return stream;
    }

    public void setStream(StreamEntity stream) {
        this.stream = stream;
    }

}