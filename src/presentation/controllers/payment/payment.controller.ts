import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { ProcessPaymentRequestDto } from '../../../application/use-cases/payment/process-payment.request.dto';
import { ProcessPaymentUseCase } from '../../../application/use-cases/payment/process-payment.use-case';

@ApiTags('Payments')
@Controller('payments')
export class PaymentController {
  constructor(private readonly processPaymentUseCase: ProcessPaymentUseCase) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Process a payment (Strategy pattern demo)' })
  @ApiResponse({ status: 200, description: 'Payment processed successfully' })
  @ApiResponse({ status: 400, description: 'Invalid provider or amount' })
  pay(@Body() dto: ProcessPaymentRequestDto): void {
    this.processPaymentUseCase.execute(dto);
  }
}
