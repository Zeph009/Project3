/**
 *   @author Daniel King
 *   @version 0.0.2
 *   @summary Project 3 || created: 12.2.2018
 */

"use strict";
const PROMPT = require('readline-sync');

let count=0,totalStars=0;
let movieTitle;
let continueResponse=1;
/**
 * @method
 * @desc The dispatch method for our program
 * @returns {null}
 */
function main() {
    console.log(`\tWelcome to the Hollywood Movie Rating Guide.`);
    setTitle();
    while (continueResponse === 1) {
        reviewMovie();
        setContinueResponse();
    }
    calculateAve();
}

main();

/**
 * @method
 * @desc continueResponse mutator
 * @returns {null}
 */
function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to review again? [0=no, 1=yes]: `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}
function setTitle() {
    movieTitle= PROMPT.question(`\nWhat movie would you like to review?`);
}
/**
 * @method
 * @desc monthNum mutator
 * @returns {null}
 */
function reviewMovie() {
    console.log('\nPlease review ' + movieTitle);
    let reviewScore = Number(PROMPT.question(`\nPlease enter a score between 0 and 5: `));
    let triesNum=0;
    for (let i = 3; i > 0; i--) {
        if (reviewScore<0||reviewScore>5) {
            console.log(`\n.You entered` + reviewScore);
            console.log(`\n.Tries Remaining` + i);
            reviewScore = Number(PROMPT.question(`\nPlease enter a score between 0 and 5: `));
            triesNum++;
        }
        else if(count===3) {
            console.log(`\n.No tries left`);
        }
        else {
            totalStars= Number(totalStars+reviewScore);
            console.log(totalStars);
            count++;
        }
    }

}

/**
 * @method
 * @desc calculate average
 * @returns {null}
 */
function calculateAve() {
    totalStars=totalStars/count;
    console.log(`\nAverage stars is ` +totalStars);

}



