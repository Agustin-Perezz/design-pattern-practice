import { PaymentStrategy } from '../payment-strategy.interface';

export class MercadoPagoStrategy implements PaymentStrategy {
  execute(amount: number): void {
    // 1. Initialize MercadoPago SDK with access token
    // const mp = new MercadoPago({ accessToken: process.env.MP_ACCESS_TOKEN });

    // 2. Create a payment preference
    // const preference = await mp.preferences.create({ ... });

    // 3. Process the payment
    // const payment = await mp.payment.create({ transaction_amount: amount, ... });

    console.log(`Processing payment of $${amount} via MercadoPago`);
  }
}
