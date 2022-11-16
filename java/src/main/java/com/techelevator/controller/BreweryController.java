package com.techelevator.controller;

import com.techelevator.dao.BreweryDao;
import com.techelevator.model.Brewery;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;


    @RestController
    @CrossOrigin
//    @PreAuthorize("isAuthenticated()")

    public class BreweryController {

        private BreweryDao breweryDao;

        public BreweryController(BreweryDao breweryDao) {this.breweryDao = breweryDao;}

        @RequestMapping(path="/breweries", method = RequestMethod.GET)
        public List<Brewery> getAllBreweries() { return breweryDao.findAll(); }

        @RequestMapping(path="/brewery/{id}", method = RequestMethod.GET)
        public Brewery getBreweryById(@PathVariable ("id") Integer id) {
            return breweryDao.getBreweryById(id); }

        @RequestMapping(path="/brewery/{name}", method = RequestMethod.GET)
        public Brewery findBreweryByName(@PathVariable ("name") String name) {
            return breweryDao.findByBreweryName(name);
        }

        @RequestMapping(path= "/brewery/create", method = RequestMethod.POST)
//        @PostMapping(path="/brewery/create")
        public boolean createBrewery(@RequestBody Brewery brewery) {
            return breweryDao.createBrewery(brewery);
        }

        @RequestMapping(path="/brewery/{id}", method = RequestMethod.PUT)
        public boolean updateBrewery(@RequestBody Brewery brewery, @PathVariable ("id") Integer id) {
            return breweryDao.updateBrewery(brewery);
        }

    }


