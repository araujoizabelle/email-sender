import { IsNotEmpty, IsString } from 'class-validator';

export class SubscribeDto {
  @IsNotEmpty({ message: 'Email não pode ser vazio' })
  @IsString()
  email: string;

  @IsNotEmpty({ message: 'Token não pode ser vazio' })
  @IsString()
  token: string;
}
