// :::::: ENUM HOLDER TYPE :::::: \\

// const holderType = {

//     MT: "Móvil Terrestre",
//     DEPOSITO: "Depósito",
//     BARCO: "Barco",
//     MAQUINA: "Máquina",
//     ESTACIÓN: "Estación"

// }

// :::::: HOLDER CLASS :::::: \\

class Holder {

    constructor(holderType, chasisNumber, holderName, domainName, nextReviewDate, holderStatus) {
        this.holderType = holderType;
        this.chasisNumber = chasisNumber;
        this.holderName = holderName;
        this.domainName = domainName;
        this.nextReviewDate = nextReviewDate;
        this.holderStatus = holderStatus;
    }
    // :::::: GETTER AND SETTER :::::: \\

    getHolderType() {
        return this.holderType;
    }

    setHolderType(holderType) {
        this.holderType = holderType;
    }

    getChasisNumber() {
        return this.chasisNumber;
    }

    setChasisNumber(chasisNumber) {
        this.chasisNumber = chasisNumber;
    }

    getHolderName() {
        return this.holderName;
    }

    setHolderName(holderName) {
        this.holderName = holderName;
    }

    getDomainName() {
        return this.domainName;
    }

    setDomainName(domainName) {
        this.domainName = domainName;
    }

    getnextReviewDate() {
        return this.nextReviewDate;
    }

    setnextReviewDate(nextReviewDate) {
        this.nextReviewDate = nextReviewDate;
    }

    getHolderStatus() {
        return this.holderStatus;
    }

    setHolderStatus(holderStatus) {
        this.holderStatus = holderStatus;
    }


}


// :::::: INSTANCE :::::: \\

// var holder1 = new Holder("MT", 1234, "Camión 2", "ab123cd", "04-01-21", 1);








