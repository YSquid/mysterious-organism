/****************************
 STARTING HELPER FUNCTIONS
****************************/

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

/****************************
pAEQUOR FACTORY FUNCTION
****************************/

const pAequorFactory = (num, dna) => {
  return {
    specimenNum: num,
    dna: dna,
    mutate() {
      let randomPosition = Math.floor(Math.random() * 14);
      let random3 = Math.floor(Math.random() * 3);
      console.log(random3);
      console.log(this.dna[randomPosition]);
      switch (this.dna[randomPosition]) {
        case "A":
          let aSwaps = ["T", "C", "G"];
          this.dna[randomPosition] = aSwaps[random3];
          break;
        case "T":
          let tSwaps = ["A", "C", "G"];
          this.dna[randomPosition] = tSwaps[random3];
          break;
        case "C":
          let cSwaps = ["A", "T", "G"];
          this.dna[randomPosition] = cSwaps[random3];
          break;
        case "G":
          let gSwaps = ["A", "T", "C"];
          this.dna[randomPosition] = gSwaps[random3];
          break;
      }
    },

    compareDNA(compareSpecimen) {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === compareSpecimen.dna[i]) {
          count += 1;
        } else {
          null;
        }
      }
      console.log(count);
      let percentMatch = (count / 15) * 100;
      return `The specimens have a ${percentMatch}% DNA match`;
    },

    willLikelySurvive() {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          count += 1;
        }
      }
      if ((count/this.dna.length) >= 0.6) {
        return true;
      } else {
        return false;
      }
    },
  };
};

//let specimen1 = pAequorFactory(1, mockUpStrand());
//console.log(specimen1);
//console.log(specimen1.willLikelySurvive());



/************************************
 INSTANTIATING 30 THAT WILL SURVIVE 
***********************************/
function makeCopies(copies) {
  let survivors = [];
  let deads = [];
  let i = 0
  while (survivors.length < copies) {
    let s = pAequorFactory(i, mockUpStrand())
    if (s.willLikelySurvive()) {
      survivors.push(s)
      i++
    } else {
      deads.push(s)
      i++
    }
    
  }
  return survivors
 }





 console.log(makeCopies(30))


/*
let specimen2 =  pAequorFactory(2,mockUpStrand())
console.log(specimen1)
console.log(specimen2)
*/
