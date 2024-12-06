# JavaScript Null Value Handling

This repository demonstrates a common error in JavaScript when dealing with null values and provides a solution.

## The Problem

Many JavaScript functions implicitly assume that their input parameters are not null.  If a null value is passed, unexpected behavior or runtime errors may occur. 

## The Solution

Always explicitly check for null (or undefined) values before performing any operation on a variable.

## Usage

1. Clone this repository.
2. Open `bug.js` to see the erroneous code.
3. Open `bugSolution.js` to see how null values can be correctly handled.