import { Input } from '../input';
export declare class Validator {
    element: Input;
    methods: Array<string>;
    errors: {
        message?: string;
        method?: string;
    }[];
    constructor(element: Input);
    validate(instance: Input): FormResult;
    prepare(): void;
    results(): FormResult;
    tests(): void;
    addError(method: string, message: string): void;
    checkString(): boolean;
    checkEmpty(): void;
    checkEmail(): void;
    checkColor(): void;
    checkURL(): void;
    checkIP(): void;
    checkTelephone(): void;
    checkPassword(): void;
    checkMatches(): void;
}
