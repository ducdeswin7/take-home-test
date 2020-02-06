export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (let drug of this.drugs) {
      switch (drug.name) {
        case "Herbal Tea":
          if (drug.benefit < 50) {
            if (drug.expiresIn > 0) {
              drug.benefit += 1;
            } else {
              drug.benefit += 2;
            }
          }
          drug.expiresIn -= 1;
          break;
        case "Fervex":
          if (drug.benefit < 50) {
            if (drug.expiresIn > 10) {
              drug.benefit += 1;
            } else if (drug.expiresIn > 5) {
              drug.benefit += 2;
            } else if (drug.expiresIn > 0) {
              drug.benefit += 3;
            } else {
              drug.benefit = 0;
            }
          }
          drug.expiresIn -= 1;
          break;
        case "Magic Pill":
          break;
        case "Dafalgan":
          if (drug.benefit > 0) {
            if (drug.expiresIn > 0) {
              drug.benefit -= 2;
            } else {
              drug.benefit -= 4;
            }
          }
          drug.expiresIn -= 1;
          break;
        default:
          if (drug.benefit > 0) {
            if (drug.expiresIn > 0) {
              drug.benefit -= 1;
            } else {
              drug.benefit -= 2;
            }
          }
          drug.expiresIn -= 1;
          break;
      }
    }

    return this.drugs;
  }
}
