package com.capgemini.chirr.flow.logic.api.dto;

import org.joda.time.LocalDateTime;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import com.capgemini.chirr.stream.logic.api.dto.StreamDto;
import com.capgemini.chirr.user.logic.api.dto.UserDto;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import es.capgemini.devon.pagination.PaginationParamsImpl;

@JsonIgnoreProperties(ignoreUnknown = true)
public class FlowDto extends PaginationParamsImpl {

    private static final long serialVersionUID = 1L;

    private Long id;
    private String name;
    private UserDto owner;
    private StreamDto stream;

    @DateTimeFormat(iso = ISO.DATE_TIME)
    private LocalDateTime lastMessage;

    private Integer unread;

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

    public UserDto getOwner() {
        return owner;
    }

    public void setOwner(UserDto owner) {
        this.owner = owner;
    }

    public StreamDto getStream() {
        return stream;
    }

    public void setStream(StreamDto stream) {
        this.stream = stream;
    }

    public LocalDateTime getLastMessage() {
        return lastMessage;
    }

    public void setLastMessage(LocalDateTime lastMessage) {
        this.lastMessage = lastMessage;
    }

    public Integer getUnread() {
        return unread;
    }

    public void setUnread(Integer unread) {
        this.unread = unread;
    }

}
