// FIZZ BUZZ

const num = 100;

// 3 = fizz
// 5 = buzz
// 3 y 5 = fizzbuzz

for( let i = 1; i <= num;i++ ){
    if( i % 15 === 0 ){
        console.log(`Fizz Buzz ${i}`);
    } else if( i % 5 === 0 ){
        console.log(` Buzz ${i} `);
    } else if( i % 3 === 0 ){
        console.log( `Fizz ${i}` );
    }
}
