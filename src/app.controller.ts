import { Body, Controller, Post, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PromotionsService } from './promotions/promotions.service';
import { PurchasesService } from './purchases/purchases.service';
import { CardsService } from './cards/cards.service';
import { SummaryService } from './summary/summary.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly cardsService: CardsService,
    private readonly summaryService: SummaryService,
    private readonly promotionsService: PromotionsService,
    private readonly purchasesService: PurchasesService,
  ) {}

  @Get('api/session')
  getSession(): any {
    return {
      SecObjRec: {
        SecObjInfoBean: {
          SecObjData: [
            {
              SecObjDataKey: 'buc',
              SecObjDataValue: '12345679',
              SecObjDataType: 'STRING',
            },
            {
              SecObjDataKey: 'redirectUrl',
              SecObjDataValue: 'http://url.com',
              SecObjDataType: 'STRING',
            },
          ],
        },
      },
    };
  }

  @Get('api/csrf')
  getCsrf(): any {
    return {
      token: "bx1vD2aJN1_HL-0LRr3VnYGCNf5RHEH2b97pYfXjs4EQfeCEXHwLN17sBmfqHt45JZDh_-KxGMdiKXDbCr-LAJTUgOQjT9fh"
    }
  }

  @Post('api/items')
  getCards(@Body() body: any) {
    return this.cardsService.getCards();
  }

  @Post('api/promotions')
  getPromotions() {
    return this.promotionsService.getPromotions();
  }

  @Post('api/movements')
  getSummary(@Body() body: any) {
    return this.summaryService.getSummary(body);
  }

  @Post('api/purchases')
  getPurchases(@Body() body: any) {
    return this.purchasesService.getPurchases(body);
  }
}
