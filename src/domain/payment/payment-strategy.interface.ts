export interface PaymentStrategy {
  execute(amount: number): void;
}
