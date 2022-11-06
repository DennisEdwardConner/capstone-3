package com.techelevator.dao;

import com.techelevator.model.Review;

import java.util.List;
//Should ratings and reviews should be two separate tables
//and 2 separate Model classes? If not, how do I get the lists to work?
public interface ReviewDao {
    List<Review> getReviewsByBeerId(int beerId);
    List<Review> getReviewsByBeerName(String beerName);
    List<Review> getRatingsByBeerId(int beerId);
    List<Review> getRatingsByBeerName(String beerName);
    Review getRatingByBeerId(int beerId);
    Review getRatingByBeerName(String beerName);
    Review createRating(int rating);
    Review createReview(String review);


}
