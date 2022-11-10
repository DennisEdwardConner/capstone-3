package com.techelevator.controller;


import com.techelevator.dao.ReviewDao;
import com.techelevator.model.Review;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
@PreAuthorize("isAuthenticated()")
public class ReviewController {

    private ReviewDao reviewDao;

    public ReviewController(ReviewDao reviewDao) {this.reviewDao = reviewDao;}


    @GetMapping(path="/beer/reviews/{id}")
    public List<Review> getReviewsByBeerId(@PathVariable int id) {
        return reviewDao.getReviewsByBeerId(id); }

    @GetMapping(path="/beer/ratings/{id}")
    public List<Integer> getRatingsByBeerId(@PathVariable int id) {
        return reviewDao.getRatingsByBeerId(id); }

    @GetMapping(path="/beer/ratings/average/{id}")
    public double getAverageRating(@PathVariable int id) {
        return reviewDao.getAverageRating(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(path="/review/create")
    public boolean createReview(@RequestBody Review review) {
        return reviewDao.createReview(review);
    }

    @PutMapping(path="/review/update")
    public boolean updateReview(@RequestBody Review review) {
        return reviewDao.updateReview(review);
    }

}

