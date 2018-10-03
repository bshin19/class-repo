package com.exceptions;

class Test {

  public static void main (String args[]) {

    try {
      Polygon Square = new Polygon(10,4);
      System.out.println("Polygon's area is " + Square.area());
    } 
    catch (Polygon.InsufficientVerticesException e) {
      System.out.println(e);
    }
    catch (Polygon.InvalidSideLengthException e) {
      System.out.println(e);
    }
    finally {
      System.out.println("After the try block, the instantiated object is inaccessible");
    };

    // Combines catches into one line.
    // catch (Polygon.InvalidSideLengthException | Polygon.InvalidVerticesException e) {}
    
  }

}
