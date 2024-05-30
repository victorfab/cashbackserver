import { Injectable } from '@nestjs/common';

@Injectable()
export class CardsService {
  respComplete = {
    products: [
      {
        cardIdentification: {
          displayNumber: 'xxxx-xxxx-xxxx-5643',
        },
        type: 'credit',
        isBlocked: true,
        associatedAccounts: [
          {
            account: {
              contract: {
                contractId: '031710023000002367',
              },
              typeCode: 'C',
              statusInfo: {
                statusCode: 'CANC',
              },
              balances: [
                {
                  amount: {
                    amount: 99.99,
                    currency: 'MXN',
                  },
                },
              ],
            },
          },
        ],
        image: {
          imageNumber: '75290502641',
        },
        product: {
          name: 'LIKE U BLUE',
        },
      },
      {
        cardIdentification: {
          displayNumber: "***",
        },
        type: 'credit',
        isBlocked: true,
        associatedAccounts: [
          {
            account: {
              contract: {
                contractId: '031710023000002365',
              },
              typeCode: 'C',
              statusInfo: {
                statusCode: 'CANC',
              },
              balances: [
                {
                  amount: {
                    amount: 99.99,
                    currency: 'MXN',
                  },
                },
              ],
            },
          },
        ],
        image: {
          imageNumber: '74110501050',
        },
        product: {
          name: 'VISA WORLD RED',
        },
      },
      {
        cardIdentification: {
            displayNumber: "***"
        },
        type: "DEBIT",
        image: {
            imageNumber: ""
        },
        associatedAccounts: [
            {
                account: {
                    statusInfo: {
                        statusCode: "ACTIVE"
                    },
                    contract: {
                        contractId: "00145559770000205570"
                    },
                    balances: [
                      {
                        amount: {
                          amount: 99.99,
                          currency: 'MXN',
                        },
                      },
                    ],
                    typeCode: "D"
                }
            }
        ],
        product: {
            name: "DEBITO SANTANDER"
        },
        blocked: false
    }
     ],
  };
  getCards(): any {
    return this.respComplete;
  }
}
