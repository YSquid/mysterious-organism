/****************************
 STARTING HELPER FUNCTIONS
****************************/

// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }


/****************************
pAEQUOR FACTORY FUNCTION
****************************/

const pAequorFactory= (num, dna) => {
    return {
        specimenNum: num,
        dna: dna,
        mutate () {
            let randomPosition = (Math.floor(Math.random() * 14))
            let random3 = (Math.floor(Math.random() * 3))
            console.log(random3)
            console.log(this.dna[randomPosition])
            switch (this.dna[randomPosition]) {
              case 'A':
                let aSwaps = ['T','C','G'];
                this.dna[randomPosition] = aSwaps[random3];
                break;
              case 'T':
                let tSwaps = ['A','C','G']
                this.dna[randomPosition] = tSwaps[random3];
                break;
              case 'C':
                let cSwaps = ['A','T','G']
                this.dna[randomPosition] = cSwaps[random3];
                break;
              case 'G':
                let gSwaps = ['A','T','C']
                this.dna[randomPosition] = gSwaps[random3];
                break;
            }
         
        }
    }
}


let testSpecimen =  pAequorFactory(1,mockUpStrand())
console.log(testSpecimen)
testSpecimen.mutate()
console.log(testSpecimen)