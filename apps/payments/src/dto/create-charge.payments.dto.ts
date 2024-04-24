import { IsEmail } from 'class-validator';
import { CreateChargeDto } from '../../../../libs/common/src/dto/create-charge.dto';

export class PaymentsCreateChargeDto extends CreateChargeDto {
  @IsEmail()
  email: string;
}
