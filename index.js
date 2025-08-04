//Es6 Module Example
import {PI,getCircumference,getArea,getVolume} from './mathUtil.js'

console.log(`Value of PI: ${PI}`);

const circumference = getCircumference(5);
console.log(`Circumference of circle with radius 5: ${circumference}`);

const area = getArea(5);
console.log(`Area of circle with radius 5: ${area}`);

const volume = getVolume(5);
console.log(`Volume of cylinder with radius 5: ${volume}`);