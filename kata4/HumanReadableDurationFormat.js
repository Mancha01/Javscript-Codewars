


// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:
// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
//     describe("Tests", () => {
//         it("test", () => {
//           assert.strictEqual(formatDuration(1), "1 second");
//           assert.strictEqual(formatDuration(62), "1 minute and 2 seconds");
//           assert.strictEqual(formatDuration(120), "2 minutes");
//           assert.strictEqual(formatDuration(3600), "1 hour");
//           assert.strictEqual(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
//         });
//       });
      
// function formatDuration (seconds) {
//     if(seconds === 0){
//      return "now"
//     }
//      if(seconds < 60){
//        return seconds > 0 && seconds === 1 ? "1 second" : `${seconds} seconds`
//      }
//      if(seconds > 60 && seconds < 3600){
//        return seconds === 60 ? "1 minute": seconds < 120 ? `1 minute and ${seconds % 60} seconds` : seconds % 60 === 0 && seconds >= 120 ? `${seconds/60} minutes` : seconds % 60 !== 0 && seconds > 120 ? `${Math.floor(seconds/60)} minutes and ${seconds % 60} seconds` : ""   
//      }
//      if(seconds >=3600 && seconds < 86400){
//        return seconds === 3600 ? "1 hour": seconds < 7200 && (seconds % 3600) % 60 === 0 ? `1 hour and ${seconds % 3600} minutes` : seconds < 7200 && (seconds % 3600) % 60 !== 0 && Math.floor((seconds % 3600)/60) === 1 ? `1 hour, 1 minute and ${(seconds % 3600) % 60} seconds`: ""
//      }
//    }
   
