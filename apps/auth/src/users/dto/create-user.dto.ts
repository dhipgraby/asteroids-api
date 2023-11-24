import { IsEmail, MaxLength, MinLength, IsEmpty } from "class-validator";

export class CreateUserDto {

    @IsEmail()
    email: string;

    @MinLength(4)
    @MaxLength(12)
    password: string;

    @MinLength(3)
    @MaxLength(15)
    name: string;

}
