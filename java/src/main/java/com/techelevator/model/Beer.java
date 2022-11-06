package com.techelevator.model;

import javax.validation.constraints.NotNull;

public class Beer {

    private int beerId;
    @NotNull
    private int breweryId;
    @NotNull
    private String beerName;
    @NotNull
    private String beerImg;
    @NotNull
    private String description;
    private double abv;
    @NotNull
    private String beerType;
    @NotNull
    private boolean isActive;

    public Beer() {}

    public Beer(int beerId, int breweryId, String beerName, String beerImg, String description, double abv, String beerType, boolean isActive) {
        this.beerId = beerId;
        this.breweryId = breweryId;
        this.beerName = beerName;
        this.beerImg = beerImg;
        this.description = description;
        this.abv = abv;
        this.beerType = beerType;
        this.isActive = isActive;
    }

    public int getBeerId() {
        return beerId;
    }

    public int getBreweryId() {
        return breweryId;
    }

    public String getBeerName() {
        return beerName;
    }

    public String getBeerImg() {
        return beerImg;
    }

    public String getDescription() {
        return description;
    }

    public double getAbv() {
        return abv;
    }

    public String getBeerType() {
        return beerType;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setBeerId(int beerId) {
        this.beerId = beerId;
    }

    public void setBreweryId(int breweryId) {
        this.breweryId = breweryId;
    }

    public void setBeerName(String beerName) {
        this.beerName = beerName;
    }

    public void setBeerImg(String beerImg) {
        this.beerImg = beerImg;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setAbv(double abv) {
        this.abv = abv;
    }

    public void setBeerType(String beerType) {
        this.beerType = beerType;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

//    @Override

    @Override
    public String toString() {
        return "Beer{" +
                "beerId=" + beerId +
                ", breweryId=" + breweryId +
                ", beerName='" + beerName + '\'' +
                ", beerImg='" + beerImg + '\'' +
                ", description='" + description + '\'' +
                ", abv=" + abv +
                ", beerType='" + beerType + '\'' +
                ", isActive=" + isActive +
                '}';
    }
}
