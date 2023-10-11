package com.codename_vp.serverside.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.codename_vp.serverside.Entity.OwnedList;
import com.codename_vp.serverside.Repository.OwnedListRepo;

import jakarta.transaction.Transactional;

@Service
public class OwnedListService {

    @Autowired
    private OwnedListRepo ownedListRepo;

    public void addToOwnedList(OwnedList ownedList) {
        this.ownedListRepo.save(ownedList);
    }

    @Transactional
    public void removeFromOwnedList(int id) {
        this.ownedListRepo.deleteById(id);
    }

    public List<OwnedList> getOwnedList() {
        return this.ownedListRepo.findAll();
    }

}
