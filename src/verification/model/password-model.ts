import { Difficulty } from "src/enums/verification-difficulty-enum";

export class PasswordModel {

    constructor(
        public text = '',
        public difficulty = 'Normal',
    ) {}
}