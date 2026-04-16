import { Injectable } from '@nestjs/common';

import { ProcessPaymentRequestDto } from './process-payment.request.dto';
import { PaymentContext } from '../../../domain/payment/payment-context';
import { PaymentProvider } from '../../../domain/payment/payment-provider.enum';
import { MercadoPagoStrategy } from '../../../domain/payment/strategies/mercado-pago.strategy';
import { StripeStrategy } from '../../../domain/payment/strategies/stripe.strategy';

// Concrete subclass — the only place that "knows" which strategies exist
class AppPaymentContext extends PaymentContext {}

@Injectable()
export class ProcessPaymentUseCase {
  execute(dto: ProcessPaymentRequestDto): void {
    const context = new AppPaymentContext();

    if (dto.provider === PaymentProvider.MercadoPago) {
      context.setStrategy(new MercadoPagoStrategy());
    } else {
      context.setStrategy(new StripeStrategy());
    }

    context.pay(dto.amount);
  }
}
