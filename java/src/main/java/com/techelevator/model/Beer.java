package com.techelevator.model;

public class Beer {

    private int beerId;
    private int breweryId;
    private String name;
    private String beerImg;
    private String description;
    private long abv;
    private String beerType;
    private boolean isActive;

    public Beer() {}

    public Beer(int beerId, int breweryId, String name, String beerImg, String description, long abv, String beerType, boolean isActive) {
        this.beerId = beerId;
        this.breweryId = breweryId;
        this.name = name;
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

    public String getName() {
        return name;
    }

    public String getBeerImg() {
        return beerImg;
    }

    public String getDescription() {
        return description;
    }

    public long getAbv() {
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

    public void setName(String name) {
        this.name = name;
    }

    public void setBeerImg(String beerImg) {
        this.beerImg = beerImg;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setAbv(long abv) {
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
                ", name='" + name + '\'' +
                ", beerImg='" + beerImg + '\'' +
                ", description='" + description + '\'' +
                ", abv=" + abv +
                ", beerType='" + beerType + '\'' +
                ", isActive=" + isActive +
                '}';
    }
}
