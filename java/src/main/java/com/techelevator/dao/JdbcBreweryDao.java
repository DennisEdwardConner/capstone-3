package com.techelevator.dao;

import java.util.ArrayList;
import java.util.List;
import com.techelevator.model.Brewery;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Service;

@Service
public class JdbcBreweryDao implements BreweryDao {

    private JdbcTemplate jdbcTemplate;

    public JdbcBreweryDao(JdbcTemplate jdbcTemplate) {this.jdbcTemplate = jdbcTemplate;}



    @Override
    public List<Brewery> findAll() {
        List<Brewery> breweries = new ArrayList<>();
        String sql = "select * from breweries";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        while(results.next()) {
            Brewery brewery = mapRowToBrewery(results);
            breweries.add(brewery);
        }

        return breweries;
    }


    @Override
    public Brewery getBreweryById(int breweryId) {
        String sql = "SELECT * FROM breweries WHERE brewery_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, breweryId);
        if(results.next()) {
            return mapRowToBrewery(results);
        } else {
            throw new RuntimeException("brewery ID "+breweryId+" was not found.");
        }
    }


    @Override
    public Brewery findByBreweryName(String breweryName) {
        String sql = "SELECT * FROM breweries WHERE brewery_name = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, breweryName);
        if(results.next()) {
            return mapRowToBrewery(results);
        } else {
            throw new RuntimeException("brewery name "+breweryName+" was not found.");
        }
    }



    @Override
    public boolean createBrewery(Brewery brewery) {


        int breweryId = brewery.getBreweryId();
        String breweryName = brewery.getBreweryName();
        int ownerId = brewery.getBreweryId();
        String breweryImg = brewery.getBreweryImg();
        String description = brewery.getDescription();
        boolean isActive = brewery.getIsActive();

        // create brewery
       try {
           String sql = "INSERT into breweries " +
                   "(brewery_id, brewery_name, owner_id, brewery_img, description, isActive) " +
                   "VALUES(?, ?, ?, ?, ?, ?); ";
           jdbcTemplate.update(sql, breweryId, breweryName, ownerId, breweryImg, description, isActive);
           return true;
       }
       catch(DataAccessException e) {
            System.out.println(e.getMessage());
            return false;
       }

    }


    @Override
    public boolean deleteBrewery(Brewery brewery) {
        int breweryId = brewery.getBreweryId();
        String sql = "DELETE brewery FROM breweries WHERE brewery_id = ?";
        try{
            jdbcTemplate.update(sql, breweryId);
            return true;
        }
        catch (DataAccessException e){
            System.out.print(e.getMessage());
            return false;
        }

    }



    @Override
    public boolean updateBrewery(Brewery brewery) {
        int breweryId = brewery.getBreweryId();
        String breweryName = brewery.getBreweryName();
        int ownerId = brewery.getBreweryId();
        String breweryImg = brewery.getBreweryImg();
        String description = brewery.getDescription();
        boolean isActive = brewery.getIsActive();

        String sql = "UPDATE transfer SET brewery_name = ?, owner_id = ?, brewery_img = ?, description = ?, isActive = ? " +
                "WHERE brewery_id = ?; ";
        try {
            jdbcTemplate.update(sql,breweryName, ownerId, breweryImg, description, isActive, breweryId);
            return true;
        }
        catch (DataAccessException e) {
            System.out.println(e.getMessage());
            return false;
        }
    }

    //helper method
    private Brewery mapRowToBrewery(SqlRowSet rs) {
        Brewery brewery = new Brewery();
        brewery.setBreweryId(rs.getInt("brewery_id"));
        brewery.setBreweryName(rs.getString("brewery_name"));
        brewery.setOwnerId(rs.getInt("owner_id"));
        brewery.setBreweryImg(rs.getString("brewery_img"));
        brewery.setDescription(rs.getString("description"));
        brewery.setActive(true);

        return brewery;
    }
}


