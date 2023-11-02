import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Purchase } from '../common/purchase';
import { PaymentInfo } from '../common/payment-info';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private paymentIntentUrl = environment.shopApiUrl + '/checkout/payment-intent';
  private purchaseUrl = environment.shopApiUrl + '/checkout/purchase';

  constructor(private httpClient: HttpClient) { }

createPaymentIntent(paymentInfo:PaymentInfo):Observable<any>{
  return this.httpClient.post<PaymentInfo>(this.paymentIntentUrl,paymentInfo);
}

  placeOrder(purchase: Purchase): Observable<any> {
    return this.httpClient.post<Purchase>(this.purchaseUrl, purchase);    
  }
  
}