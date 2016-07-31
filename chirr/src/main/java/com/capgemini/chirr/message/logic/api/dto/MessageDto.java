package com.capgemini.chirr.message.logic.api.dto;

import org.joda.time.LocalDateTime;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import com.capgemini.chirr.flow.logic.api.dto.FlowDto;
import com.capgemini.chirr.user.logic.api.dto.UserDto;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import es.capgemini.devon.pagination.PaginationParamsImpl;

@JsonIgnoreProperties(ignoreUnknown = true)
public class MessageDto extends PaginationParamsImpl {

    private static final long serialVersionUID = 1L;

    private Long id;
    private String content;
    @DateTimeFormat(iso = ISO.DATE_TIME)
    private LocalDateTime time;
    private FlowDto flow;
    private UserDto user;

    @DateTimeFormat(iso = ISO.DATE_TIME)
    private LocalDateTime lastMessage;

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

    public FlowDto getFlow() {
        return flow;
    }

    public void setFlow(FlowDto flow) {
        this.flow = flow;
    }

    public UserDto getUser() {
        return user;
    }

    public void setUser(UserDto user) {
        this.user = user;
    }

    public LocalDateTime getLastMessage() {
        return lastMessage;
    }

    public void setLastMessage(LocalDateTime lastMessage) {
        this.lastMessage = lastMessage;
    }
}
