package com.streams;

import java.util.ArrayList;

import java.util.Arrays;

import static java.util.Arrays.stream;

class Streams {

  public static void main (String[] args) {
  helloDoctors("Fink", "Rothenberg", "Gauss");
    _helloDoctors("Andrews", "Fink", "Rothenberg", "Gauss", "Alderman");
  }

  private static void helloDoctors (final String... names) {
    System.out.println("These are all doctors!");
    stream(names).map(name -> "Dr. " + name).forEach(System.out::println);

  }

  private static void _helloDoctors (final String... names) {
    System.out.println("No, doctors never start with the letter A!");
    stream(names).filter(string -> !string.startsWith("A")).map(name -> "Dr. " + name).forEach(System.out::println);
  }

}