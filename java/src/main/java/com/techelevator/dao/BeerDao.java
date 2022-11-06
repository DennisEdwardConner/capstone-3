package com.techelevator.dao;

import com.techelevator.model.Beer;

import java.util.List;

public interface BeerDao {

    List<Beer> getBeersByBreweryId(int breweryId);
    List<Beer> getBeersByBreweryName(String breweryName);
    Beer getBeerById(int beerId);
    Beer getBeerByName(String beerName);
    Beer createBeer(Beer beer);
    boolean updateBeer(Beer beer);
    void deleteBeer(int beerId);
    void deleteBeer(String beerName);



}
