package com.exceptions;

class Test {

  public static void main (String args[]) {

    try {
      Polygon triangle = new Polygon(3, 8);
      System.out.println("hello");
    } catch (Polygon.InvalidSideLengthException | Polygon.InsufficientVerticesException e) {
      e.printStackTrace();
    }
    finally {
    // This causes a compiler error.
    // System.out.println(triangle.area());
    };

  };

};
