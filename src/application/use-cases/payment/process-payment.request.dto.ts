import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsPositive } from 'class-validator';

import { PaymentProvider } from '../../../domain/payment/payment-provider.enum';

export class ProcessPaymentRequestDto {
  @ApiProperty({ example: 150.0, description: 'Amount to pay' })
  @IsNumber()
  @IsPositive()
  amount: number;

  @ApiProperty({
    example: PaymentProvider.MercadoPago,
    description: 'Payment provider',
    enum: PaymentProvider,
  })
  @IsEnum(PaymentProvider)
  provider: PaymentProvider;
}
