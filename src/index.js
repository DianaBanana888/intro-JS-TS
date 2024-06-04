'use strict';
// const num = 6;
// const result = (num % 2  != 0) ? "odd" : "even";
// // display the result
// console.log(`Number is ${result}.`)
function logVisits(data) {
  data.visits.forEach(visit => console.log(visit.page.caption, data.user.name));
}
logVisits({
  visits: [{page: {caption: 'Line1'}}, {page: {caption: 'Line2'}}],
  user: {name: 'BobbyBrown'},
});
