const checkBankAccount = (blance) => {
     const result = blance>=1000000?"millionaire": 
                    blance>= 100000?"rich man":
                    blance>= 10000?"middle class":
                    "poor man";
     return result
}