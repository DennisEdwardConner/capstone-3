package com.techelevator.model;

public class Brewery {
    private int breweryId;
    private String breweryName;
    private int ownerId;
    private String breweryImg;
    private String description;
    private boolean isActive;

    public Brewery() {}

    public Brewery(int breweryId, String breweryName, int ownerId, String breweryImg, String description, boolean isActive) {
        this.breweryId = breweryId;
        this.breweryName = breweryName;
        this.ownerId = ownerId;
        this.breweryImg = breweryImg;
        this.description = description;
        this.isActive = isActive;
    }

    public int getBreweryId() {
        return breweryId;
    }

    public void setBreweryId(int breweryId) {
        this.breweryId = breweryId;
    }

    public String getBreweryName() {
        return breweryName;
    }

    public void setBreweryName(String breweryName) {
        this.breweryName = breweryName;
    }

    public int getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(int ownerId) {
        this.ownerId = ownerId;
    }

    public String getBreweryImg() {
        return breweryImg;
    }

    public void setBreweryImg(String breweryImg) {
        this.breweryImg = breweryImg;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }
}
