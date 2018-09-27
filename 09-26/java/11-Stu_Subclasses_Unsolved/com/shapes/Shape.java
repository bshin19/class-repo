package com.shapes;

import java.lang.Math;

abstract class Shape {
    protected final int mSides;
    protected final int mSideLength;

    // Method to initialize shape dimensions
    Shape(int sides, int sideLength) {
        this.mSides = sides;
        this.mSideLength = sideLength;
    };

    int perimeter() {
        return this.mSides * this.mSideLength;
    };

    int sides() {
        return this.mSides;
    };

    double area() {
        return Math.pow(this.mSideLength, 2);
    };
};