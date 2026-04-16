import { PaymentStrategy } from './payment-strategy.interface';

export abstract class PaymentContext {
  private strategy: PaymentStrategy;

  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  pay(amount: number): void {
    if (!this.strategy) {
      throw new Error('Payment strategy not set. Call setStrategy() first.');
    }
    this.strategy.execute(amount);
  }
}
