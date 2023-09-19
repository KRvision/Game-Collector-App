package com.codename_vp.serverside.Entity;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
public class OwnedList extends GameCollector {

    private String status;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "ownedList_platform", joinColumns = @JoinColumn(name = "ownedList_id"), inverseJoinColumns = @JoinColumn(name = "platform_id"))
    private Set<Platform> platforms = new HashSet<>();

    public OwnedList(String name, String description, String price, String imgUrl,
            Set<Platform> platforms) {
        super(name, description, price, imgUrl);
        this.status = "Owned";
        this.platforms = platforms;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Set<Platform> getPlatforms() {
        return platforms;
    }

    public void setPlatforms(Set<Platform> platforms) {
        this.platforms = platforms;
    }

    public OwnedList() {

    }
}
