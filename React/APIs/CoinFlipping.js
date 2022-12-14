function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

// function fiveHeadsSync() {
//     let headsCount = 0;
//     let attempts = 0;
//     while(headsCount < 5) {
//         attempts++;
//         let result = tossCoin();
//         console.log(`${result} was flipped`);
//         if(result === "heads") {
//             headsCount++;
//         } else {
//             headsCount = 0;
//         }
//     }
//     return `It took ${attempts} tries to flip five "heads"`;
// }

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0
        let attempts = 0

        while (headsCount < 5 && attempts < 100) {
            attempts++
            console.log(attempts)
            let result = tossCoin()
            console.log(result)
            if (result === "heads") {
            headsCount++
            } else {
            headsCount = 0
            }
        }

        if (attempts < 100) {
            resolve(`Success. ${attempts} attempts`)
        } else {
            reject(`Exceeded max attempts`)
        }
    });
}

fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );

console.log( "When does this run now?" );
// console.log( fiveHeadsSync() );
// console.log( "This is run after the fiveHeadsSync function completes" );