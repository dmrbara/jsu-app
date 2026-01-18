import { ErrorCode} from "@/constants/errors";

export class AppError extends Error {
    public readonly code: ErrorCode;

    constructor(code: ErrorCode, technicalMessage?: string) {
        super(technicalMessage || code);
        this.code = code;
        this.name = 'AppError';
        Object.setPrototypeOf(this, new.target.prototype);
    }
}