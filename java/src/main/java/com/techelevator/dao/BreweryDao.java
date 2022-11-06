package com.techelevator.dao;

import com.techelevator.model.Brewery;

import java.util.List;

public interface BreweryDao {
    List<Brewery> findAll();

    Brewery getBreweryById(int breweryId);

    Brewery findByBreweryName(String breweryName);

    int findIdByBreweryName(String BreweryName);

    boolean create(int breweryId, String breweryName, int ownerId, String breweryImg, String description, boolean isActive);

    boolean delete(int breweryId);

    boolean update(Brewery brewery);


}



