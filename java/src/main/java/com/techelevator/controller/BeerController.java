package com.techelevator.controller;

import com.techelevator.dao.BeerDao;
import com.techelevator.dao.BreweryDao;
import com.techelevator.dao.ReviewDao;
import com.techelevator.dao.UserDao;
import com.techelevator.model.Beer;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@PreAuthorize("isAuthenticated()")
public class BeerController {

    private BeerDao beerDao;

    public BeerController(BeerDao beerDao) {this.beerDao = beerDao;}

    @GetMapping(path="/beer/all")
    public List<Beer> getAllBeers() { return beerDao.findAll(); }

    @GetMapping(path="/beer/{id}")
    public Beer findBeerById(@PathVariable int id) { return beerDao.findBeerById(id); }

    @GetMapping(path="/beer/q={name}")
    public Beer findBeerByName(@PathVariable String name) {
        return beerDao.findBeerByName(name);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(path="/beer/create")
    public boolean createBeer(@RequestBody Beer beer) {
        return beerDao.createBeer(beer);
    }

    @PutMapping(path="/beer/{id}")
    public boolean updateBeer(@RequestBody Beer beer, @PathVariable int id) {
        return beerDao.updateBeer(beer);
    }

}
