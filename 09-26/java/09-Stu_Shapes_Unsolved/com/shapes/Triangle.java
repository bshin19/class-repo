package com.shapes;

import java.lang.Math;

class Triangle {

  // The prefixed s is a naming convention indicating "static."
  // The variable is static and belongs to the class as a whole
  private static final int sSides = 3; // cant be changed

  // The prefixed m is a naming convention, indicating "member."
  private final int mSideLength; // can only be assigned to once.

  Triangle(int sideLength) {
    this.mSideLength = sideLength;
  };

  private double getHeight() {
    return this.mSideLength * Math.sin(Math.toRadians(60));
  };

  public double area() {
    return (.5 * this.mSideLength * this.getHeight());
  };

  public int perimeter() {
    return this.mSideLength * Triangle.sSides;
  };
};