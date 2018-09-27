package com.shapes;

class Test {

  public static void main(String[] args) {
    System.out.println("Testing your Square and Triangle classes...");

    Triangle triangle = new Triangle(10);
    Square square = new Square(10);

    System.out.println("Area of square is " + square.area());
    System.out.println("Square perimeter is " + square.perimeter());

    System.out.println("Area of triangle is " + triangle.area());
    System.out.println("Triangle perimeter is " + triangle.perimeter());
  }

}
