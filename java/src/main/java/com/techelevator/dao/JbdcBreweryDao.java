package com.techelevator.dao;

import java.util.List;

import com.techelevator.model.Brewery;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class JbdcBreweryDao implements BreweryDao {

    private JdbcTemplate jdbcTemplate;


    @Override
    public List<Brewery> findAll() {
        //return jdbcTemplate.queryForObject();
        return null;
    }

    @Override
    public Brewery getBreweryById(int breweryId) {
        return null;
    }

    @Override
    public Brewery findByBreweryName(String breweryName) {
        return null;
    }

    @Override
    public int findIdByBreweryName(String BreweryName) {
        return 0;
    }

    @Override
    public boolean create(int breweryId, String breweryName, int ownerId, String breweryImg, String description, boolean isActive) {
        return false;
    }

    @Override
    public boolean delete(int breweryId) {
        return false;
    }

    @Override
    public boolean update(Brewery brewery) {
        return false;
    }
}


