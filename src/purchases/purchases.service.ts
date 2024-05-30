import { Injectable } from '@nestjs/common';

@Injectable()
export class PurchasesService {
  errorResponse = {
    errors: [
      {
        code: 400,
        level: '',
        message: '',
        status: 'error',
      },
    ],
  };

    resultsuccessResponse1 = {
       "purchases": [
        {
            "cardTransactionId": "0000019",
            "orderDate": "2023-12-05T13:23:23",
            "acquirerReferenceNumber": "0000019",
            "amount": {
                "amount": 15.0,
                "currency": "484"
            },
            "clearing": {
                "cashBackPercentage": 5,
                "cashBackAmount": {
                    "amount": 0.75,
                    "currency": "MXP"
                }
            },
            "merchant": {
                "name": "Great Gifts",
                "categoryCode": "Ent",
                "categoryDescription": "Gasolineras Pemex"
            }
        },
        {
            "cardTransactionId": "0000011",
            "orderDate": "2023-12-05T13:23:23",
            "acquirerReferenceNumber": "0000011",
            "amount": {
                "amount": 1000.0,
                "currency": "484"
            },
            "clearing": {
                "cashBackPercentage": 5,
                "cashBackAmount": {
                    "amount": 50.0,
                    "currency": "MXP"
                }
            },
            "merchant": {
                "name": "Great Gifts",
                "categoryCode": "Ent",
                "categoryDescription": "Gasolineras Pemex"
            }
        },
        {
            "cardTransactionId": "000005",
            "orderDate": "2023-12-05T13:23:23",
            "acquirerReferenceNumber": "000005",
            "amount": {
                "amount": 1000.0,
                "currency": "484"
            },
            "clearing": {
                "cashBackPercentage": 5,
                "cashBackAmount": {
                    "amount": 50.0,
                    "currency": "MXP"
                }
            },
            "merchant": {
                "name": "Great Gifts",
                "categoryCode": "Ent",
                "categoryDescription": "Gasolineras Pemex"
            }
        },
        {
            "cardTransactionId": "0000017",
            "orderDate": "2023-12-05T13:23:23",
            "acquirerReferenceNumber": "0000017",
            "amount": {
                "amount": 1000.0,
                "currency": "484"
            },
            "clearing": {
                "cashBackPercentage": 5,
                "cashBackAmount": {
                    "amount": 50.0,
                    "currency": "MXP"
                }
            },
            "merchant": {
                "name": "Great Gifts",
                "categoryCode": "Ent",
                "categoryDescription": "Gasolineras Pemex"
            }
        },
        {
            "cardTransactionId": "0000013",
            "orderDate": "2023-12-05T13:23:23",
            "acquirerReferenceNumber": "0000013",
            "amount": {
                "amount": 1000.0,
                "currency": "484"
            },
            "clearing": {
                "cashBackPercentage": 5,
                "cashBackAmount": {
                    "amount": 50.0,
                    "currency": "MXP"
                }
            },
            "merchant": {
                "name": "Great Gifts",
                "categoryCode": "Ent",
                "categoryDescription": "Gasolineras Pemex"
            }
        },
        {
            "cardTransactionId": "000009",
            "orderDate": "2023-12-05T13:23:23",
            "acquirerReferenceNumber": "000009",
            "amount": {
                "amount": 1000.0,
                "currency": "484"
            },
            "clearing": {
                "cashBackPercentage": 5,
                "cashBackAmount": {
                    "amount": 50.0,
                    "currency": "MXP"
                }
            },
            "merchant": {
                "name": "Great Gifts",
                "categoryCode": "Ent",
                "categoryDescription": "Gasolineras Pemex"
            }
        },
        {
            "cardTransactionId": "0000021",
            "orderDate": "2023-12-05T13:23:23",
            "acquirerReferenceNumber": "0000021",
            "amount": {
                "amount": 70.0,
                "currency": "484"
            },
            "clearing": {
                "cashBackPercentage": 5,
                "cashBackAmount": {
                    "amount": 3.5,
                    "currency": "MXP"
                }
            },
            "merchant": {
                "name": "Great Gifts",
                "categoryCode": "Ent",
                "categoryDescription": "Gasolineras Pemex"
            }
        },
        {
            "cardTransactionId": "000002",
            "orderDate": "2023-12-05T13:23:23",
            "acquirerReferenceNumber": "000002",
            "amount": {
                "amount": 1000.0,
                "currency": "484"
            },
            "clearing": {
                "cashBackPercentage": 5,
                "cashBackAmount": {
                    "amount": 50.0,
                    "currency": "MXP"
                }
            },
            "merchant": {
                "name": "Great Gifts",
                "categoryCode": "Ent",
                "categoryDescription": "Gasolineras Pemex"
            }
        },
        {
            "cardTransactionId": "0000012",
            "orderDate": "2023-12-05T13:23:23",
            "acquirerReferenceNumber": "0000012",
            "amount": {
                "amount": 1000.0,
                "currency": "484"
            },
            "clearing": {
                "cashBackPercentage": 5,
                "cashBackAmount": {
                    "amount": 50.0,
                    "currency": "MXP"
                }
            },
            "merchant": {
                "name": "Great Gifts",
                "categoryCode": "Ent",
                "categoryDescription": "Gasolineras Pemex"
            }
        },
        {
            "cardTransactionId": "000006",
            "orderDate": "2023-12-05T13:23:23",
            "acquirerReferenceNumber": "000006",
            "amount": {
                "amount": 1000.0,
                "currency": "484"
            },
            "clearing": {
                "cashBackPercentage": 5,
                "cashBackAmount": {
                    "amount": 50.0,
                    "currency": "MXP"
                }
            },
            "merchant": {
                "name": "Great Gifts",
                "categoryCode": "Ent",
                "categoryDescription": "Gasolineras Pemex"
            }
        },
        ],
        "paginationMetadata": {
          "count": 21,
          "_first": {
              "href": "&_offset=0&_limit=10"
          },
          "_prev": {
              "href": "&_offset=0&_limit=10"
          },
          "_next": {
              "href": "&_offset=0&_limit=10"
          },
          "_last": {
              "href": "&_offset=0&_limit=10"
          },
          "self": {
              "href": "&_offset=0&_limit=21"
          }
        }
    };

    resultsuccessResponse2 = {
        "purchases": [
        {
            "cardTransactionId": "0000016",
            "orderDate": "2023-12-05T13:23:23",
            "acquirerReferenceNumber": "0000016",
            "amount": {
                "amount": 1000.0,
                "currency": "484"
            },
            "clearing": {
                "cashBackPercentage": 5,
                "cashBackAmount": {
                    "amount": 50.0,
                    "currency": "MXP"
                }
            },
            "merchant": {
                "name": "Great Gifts",
                "categoryCode": "Ent",
                "categoryDescription": "Gasolineras Pemex"
            }
        },
        {
            "cardTransactionId": "0000014",
            "orderDate": "2023-12-05T13:23:23",
            "acquirerReferenceNumber": "0000014",
            "amount": {
                "amount": 1000.0,
                "currency": "484"
            },
            "clearing": {
                "cashBackPercentage": 5,
                "cashBackAmount": {
                    "amount": 50.0,
                    "currency": "MXP"
                }
            },
            "merchant": {
                "name": "Great Gifts",
                "categoryCode": "Ent",
                "categoryDescription": "Gasolineras Pemex"
            }
        },
        {
            "cardTransactionId": "000008",
            "orderDate": "2023-12-05T13:23:23",
            "acquirerReferenceNumber": "000008",
            "amount": {
                "amount": 1000.0,
                "currency": "484"
            },
            "clearing": {
                "cashBackPercentage": 5,
                "cashBackAmount": {
                    "amount": 50.0,
                    "currency": "MXP"
                }
            },
            "merchant": {
                "name": "Great Gifts",
                "categoryCode": "Ent",
                "categoryDescription": "Gasolineras Pemex"
            }
        },
        {
            "cardTransactionId": "0000018",
            "orderDate": "2023-12-05T13:23:23",
            "acquirerReferenceNumber": "0000018",
            "amount": {
                "amount": 10.0,
                "currency": "484"
            },
            "clearing": {
                "cashBackPercentage": 5,
                "cashBackAmount": {
                    "amount": 0.5,
                    "currency": "MXP"
                }
            },
            "merchant": {
                "name": "Great Gifts",
                "categoryCode": "Ent",
                "categoryDescription": "Gasolineras Pemex"
            }
        },
        {
            "cardTransactionId": "000004",
            "orderDate": "2023-12-05T13:23:23",
            "acquirerReferenceNumber": "000004",
            "amount": {
                "amount": 1000.0,
                "currency": "484"
            },
            "clearing": {
                "cashBackPercentage": 5,
                "cashBackAmount": {
                    "amount": 50.0,
                    "currency": "MXP"
                }
            },
            "merchant": {
                "name": "Great Gifts",
                "categoryCode": "Ent",
                "categoryDescription": "Gasolineras Pemex"
            }
        },
        {
            "cardTransactionId": "0000020",
            "orderDate": "2023-12-05T13:23:23",
            "acquirerReferenceNumber": "0000020",
            "amount": {
                "amount": 25.0,
                "currency": "484"
            },
            "clearing": {
                "cashBackPercentage": 5,
                "cashBackAmount": {
                    "amount": 1.25,
                    "currency": "MXP"
                }
            },
            "merchant": {
                "name": "Great Gifts",
                "categoryCode": "Ent",
                "categoryDescription": "Gasolineras Pemex"
            }
        },
        {
            "cardTransactionId": "0000010",
            "orderDate": "2023-12-05T13:23:23",
            "acquirerReferenceNumber": "0000010",
            "amount": {
                "amount": 1000.0,
                "currency": "484"
            },
            "clearing": {
                "cashBackPercentage": 5,
                "cashBackAmount": {
                    "amount": 50.0,
                    "currency": "MXP"
                }
            },
            "merchant": {
                "name": "Great Gifts",
                "categoryCode": "Ent",
                "categoryDescription": "Gasolineras Pemex"
            }
        },
        {
            "cardTransactionId": "000001",
            "orderDate": "2023-12-05T13:23:23",
            "acquirerReferenceNumber": "000001",
            "amount": {
                "amount": 1000.0,
                "currency": "484"
            },
            "clearing": {
                "cashBackPercentage": 5,
                "cashBackAmount": {
                    "amount": 50.0,
                    "currency": "MXP"
                }
            },
            "merchant": {
                "name": "Great Gifts",
                "categoryCode": "Ent",
                "categoryDescription": "Gasolineras Pemex"
            }
        },
        {
            "cardTransactionId": "000003",
            "orderDate": "2023-12-05T13:23:23",
            "acquirerReferenceNumber": "000003",
            "amount": {
                "amount": 1000.0,
                "currency": "484"
            },
            "clearing": {
                "cashBackPercentage": 5,
                "cashBackAmount": {
                    "amount": 50.0,
                    "currency": "MXP"
                }
            },
            "merchant": {
                "name": "Great Gifts",
                "categoryCode": "Ent",
                "categoryDescription": "Gasolineras Pemex"
            }
        },
        {
            "cardTransactionId": "000007",
            "orderDate": "2023-12-05T13:23:23",
            "acquirerReferenceNumber": "000007",
            "amount": {
                "amount": 1000.0,
                "currency": "484"
            },
            "clearing": {
                "cashBackPercentage": 5,
                "cashBackAmount": {
                    "amount": 50.0,
                    "currency": "MXP"
                }
            },
            "merchant": {
                "name": "Great Gifts",
                "categoryCode": "Ent",
                "categoryDescription": "Gasolineras Pemex"
            }
        },
        ],
        "paginationMetadata": {
        "count": 21,
        "_first": {
            "href": "&_offset=0&_limit=10"
        },
        "_prev": {
            "href": "&_offset=0&_limit=10"
        },
        "_next": {
            "href": "&_offset=0&_limit=10"
        },
        "_last": {
            "href": "&_offset=0&_limit=10"
        },
        "self": {
            "href": "&_offset=0&_limit=10"
        }
        }
    };
    
    resultsuccessResponse3 = {
        "purchases": [
          {
            "cardTransactionId": "0000015",
            "orderDate": "2023-12-05T13:23:23",
            "acquirerReferenceNumber": "0000015",
            "amount": {
                "amount": 1000.0,
                "currency": "484"
            },
            "clearing": {
                "cashBackPercentage": 5,
                "cashBackAmount": {
                    "amount": 50.0,
                    "currency": "MXP"
                }
            },
            "merchant": {
                "name": "Great Gifts",
                "categoryCode": "Ent",
                "categoryDescription": "Gasolineras Pemex"
            }
          }
        ],
        "paginationMetadata": {
          "count": 21,
          "_first": {
              "href": "&_offset=0&_limit=10"
          },
          "_prev": {
              "href": "&_offset=0&_limit=10"
          },
          "_next": {
              "href": "&_offset=0&_limit=10"
          },
          "_last": {
              "href": "&_offset=0&_limit=10"
          },
          "self": {
              "href": "&_offset=0&_limit=10"
          }
        }
    }

  getPurchases(body: any) {
    switch( body.pageNumber ) {
      case 0:
        if( Object.keys(this.resultsuccessResponse1).length !== 0) {
            return this.resultsuccessResponse1;
        } else {
            return this.errorResponse;
        }
        break;
      case 1:
        return this.resultsuccessResponse2;
        break;
      case 2:
        return this.resultsuccessResponse3;
        break;
      default:
        return
    }
  }

  random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
