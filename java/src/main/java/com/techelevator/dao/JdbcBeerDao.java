package com.techelevator.dao;


import com.techelevator.model.Beer;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class JdbcBeerDao implements BeerDao {

    private JdbcTemplate jdbcTemplate;

    public JdbcBeerDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Beer> getBeersByBreweryId(int breweryId) {
        return null;
    }

    @Override
    public List<Beer> getBeersByBreweryName(String breweryName) {
        return null;
    }

    @Override
    public Beer getBeerById(int beerId) {
        return null;
    }

    @Override
    public Beer getBeerByName(String beerName) {
        return null;
    }

    @Override
    public Beer createBeer(Beer beer) {
        return null;
    }

    @Override
    public boolean updateBeer(Beer beer) {
        return false;
    }

    @Override
    public void deleteBeer(int beerId) {

    }

    @Override
    public void deleteBeer(String beerName) {

    }

    private Beer mapRowToBeer(SqlRowSet results) {

        Beer beer = new Beer();
        beer.setBeerId(results.getInt("beer_id"));
        beer.setBeerName(results.getString("beer_name"));
        beer.setBeerImg(results.getString("beer_img"));
        beer.setDescription(results.getString("description"));
        beer.setAbv(results.getDouble("abv"));
        beer.setBeerType(results.getString("beer_type"));
        beer.setBreweryId(results.getInt("brewery_id"));
//        beer.setIsActive(results.getBoolean("is_active"));
        return beer;

    }
}
