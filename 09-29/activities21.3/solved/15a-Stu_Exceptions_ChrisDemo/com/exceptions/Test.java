package com.exceptions;

//import static com.exceptions.Polygon.InsufficientVerticesException;
//import static com.exceptions.Polygon.InvalidSideLengthException;
//import com.exceptions.custom.*;

class Test {

  public static void main (String args[]) {

    System.out.println("Testing your Polygon class with rectangle...");

    //Polygon rectangle = new Polygon(4,0);
    //System.out.println(rectangle.area());
   
    try {
      Polygon rectangle = new Polygon(4,0);
      System.out.println(rectangle.area());
    } catch (Polygon.InsufficientVerticesException e) {
      e.printStackTrace();
    } catch (Polygon.InvalidSideLengthException e) {
      e.printStackTrace();
    } 

  }
 
}
