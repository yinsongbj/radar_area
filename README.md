# radar_area
calc the area of some radars
## Summary
Many times, we need to calculate the radar coverage. If we use mathematical formulas to calculate, we will face a lot of mathematical problems. Therefore, I propose a simple and effective algorithm for processing: judging by the situation of circular coverage.

## Working principle
1. First, calculate the circumferences of all circles to obtain a rectangle
2. Get a point from the matrix and bring it into the function to check whether the point is within the coverage of the circle
3. If this point is within the coverage of the circle, it indicates that it is within the detection range of the radar. Otherwise, it is out of range
4. Calculate all points in the rectangle in turn
5. Get the number of all covered interior points, which is the coverage area

## Others
When calculating the area, it mainly depends on the calculation accuracy. Each point can be 1 square kilometer or 1 square meter. It mainly consumes the CPU resources of the computer

## How to use
change some radar's params in index.js file, such as:
```nodejs
const radars = [
    { x: 22175, y: 22133, r: 300 },
    { x: 22170, y: 22200, r: 500 },
    { x: 21950, y: 22170, r: 850 },
]
```
then, run it !
```
node index.js
Area:  2269689 <--- Final results
```