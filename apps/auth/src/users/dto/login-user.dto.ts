import { IsEmail, MaxLength, MinLength, IsEmpty, IsOptional, IsNotEmpty } from "class-validator";

export class LoginUserDto {

    @IsNotEmpty()
    identifyer: string;


    @MinLength(4)
    @MaxLength(12)
    password: string;

}
