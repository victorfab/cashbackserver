import { Injectable } from '@nestjs/common';

@Injectable()
export class SummaryService {
  errorResponse = {
    errors: [
      {
        code: '400',
        level: '',
        message: '',
        status: 'error',
      },
    ],
  };

  successResponse = {
    customer: {
      customerId: '12345678',
      person: {
        personName: {
          givenName: 'John',
          middleName: 'Nicolas',
          lastName: 'Clark',
          secondLastName: 'Jones',
        },
      },
    },
    cardTransaction: {
      annualAmount: {
        amount: 357,
        currency: 'MXN',
      },
      monthAmount: {
        amount: 141,
        currency: 'MXN',
      },
      cashbackPeriod: {
        month: '01',
        year: '2024',
      },
    },
    cashbackCategory: [
      {
        name: 'Great Gifts',
        categoryCode: 'Res',
        categoryDescription: 'Restaurantes',
        cashBackAmount: {
          amount: 100,
          currency: 'MXN',
        },
        cashBackPercentage: 2,
      },
      {
        name: 'Great Gifts',
        categoryCode: 'Ent',
        categoryDescription: 'Entretenimiento',
        cashBackAmount: {
          amount: 81,
          currency: 'MXN',
        },
        cashBackPercentage: 2,
      },
      {
        name: 'Great Gifts',
        categoryCode: 'Gas',
        categoryDescription: 'Gasolineras',
        cashBackAmount: {
          amount: 96,
          currency: 'MXN',
        },
        cashBackPercentage: 1,
      },
      {
        name: 'Great Gifts',
        categoryCode: 'Far',
        categoryDescription: 'Farmacias',
        cashBackAmount: {
          amount: 61,
          currency: 'MXN',
        },
        cashBackPercentage: 6,
      },
    ],
  };

  getSummary(body: any) {
    if( Object.keys(this.successResponse).length !== 0) {
      return this.successResponse;
    } else {
        return this.errorResponse;
    }
  }

  random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
