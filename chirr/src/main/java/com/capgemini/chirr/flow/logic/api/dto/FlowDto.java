package com.capgemini.chirr.flow.logic.api.dto;

import com.capgemini.chirr.stream.logic.api.dto.StreamDto;
import com.capgemini.chirr.utils.UserDto;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import es.capgemini.devon.pagination.PaginationParamsImpl;

@JsonIgnoreProperties(ignoreUnknown = true)
public class FlowDto extends PaginationParamsImpl {

    private static final long serialVersionUID = 1L;

    private Long id;
    private String name;
    private UserDto owner;
    private StreamDto stream;

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
}
