import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PromotionsService } from './promotions/promotions.service';
import { PurchasesService } from './purchases/purchases.service';
import { CardsService } from './cards/cards.service';
import { SummaryService } from './summary/summary.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    CardsService,
    SummaryService,
    PromotionsService,
    PurchasesService,
  ],
})
export class AppModule {}
