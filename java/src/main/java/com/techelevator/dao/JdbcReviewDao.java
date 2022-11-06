package com.techelevator.dao;

import com.techelevator.model.Review;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class JdbcReviewDao implements ReviewDao{

    private JdbcTemplate jdbcTemplate;

    public JdbcReviewDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Review> getReviewsByBeerId(int beerId) {
        return null;
    }

    @Override
    public List<Review> getReviewsByBeerName(String beerName) {
        return null;
    }

    @Override
    public List<Review> getRatingsByBeerId(int beerId) {
        return null;
    }

    @Override
    public List<Review> getRatingsByBeerName(String beerName) {
        return null;
    }

    @Override
    public Review getRatingByBeerId(int beerId) {
        return null;
    }

    @Override
    public Review getRatingByBeerName(String beerName) {
        return null;
    }

    @Override
    public Review createRating(int rating) {
        return null;
    }

    @Override
    public Review createReview(String review) {
        return null;
    }
    //add mapRowToReview once we know whether we're adding a rating MVC
    //and splitting a Rating table off of reviews
}
