// Description: Your Goal: Calculate the fee!
// At the end of the execute function, calculate the fee as the sum of all the inputs minus the sum of all the outputs.

// Given that we throw an error if the inputs are insufficient, this number should be at least zero. Any time outputs are less, this should be a positive fee.
// Store the fee amount in a property called fee on the transaction itself.
// For example:

// const iTXO = new TXO(fromAddress, 5);
// const oTXO = new TXO(toAddress, 3);

// const tx = new Transaction([iTXO], [oTXO]);

// tx.execute();

// console.log( tx.fee ); // 2
// Nice tip! 

// My Solution=>

class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs;
        this.outputUTXOs = outputUTXOs;
    }
    execute() {
        const anySpent = this.inputUTXOs.some((x) => x.spent);
        if (anySpent) {
            throw new Error("Cannot include a spent UTXO");
        }

        const inputAmount = this.inputUTXOs.reduce((p, c) => {
            return p + c.amount;
        }, 0);
        const outputAmount = this.outputUTXOs.reduce((p, c) => {
            return p + c.amount;
        }, 0);
        if (inputAmount < outputAmount) {
            throw new Error("Not enough here");
        }

        this.inputUTXOs.forEach((utxo) => {
            utxo.spend();
        });
            this.fee = (inputAmount - outputAmount);
       
    }
}

module.exports = T