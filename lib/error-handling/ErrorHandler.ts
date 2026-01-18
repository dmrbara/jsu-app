import { Alert } from 'react-native';
import { AppError } from './AppError';
import { ErrorCode, ERROR_MESSAGES } from '@/constants/errors';

interface SupabaseError {
    message: string;
    code?: string;
    details?: string;
    hint?: string;
}

export class ErrorHandler {
    static show(error: unknown, title: string = "Eroare") {
        // 1. LOGGING (Developers see this)
        if (__DEV__) {
            console.error('[ErrorHandler] Caught:', error);
        }

        const appError = this.normalizeError(error);

        // 3. GET ROMANIAN TEXT
        const userMessage = ERROR_MESSAGES[appError.code] || ERROR_MESSAGES[ErrorCode.UNKNOWN];

        // 4. DISPLAY
        Alert.alert(title, userMessage, [{ text: "OK", style: "cancel" }]);
    }

    /**
     * This function looks at the error object and decides which ErrorCode it matches.
     */
    private static normalizeError(error: unknown): AppError {
        // A. If it's already our custom AppError, just return it
        if (error instanceof AppError) {
            return error;
        }

        // B. Check for Supabase/Network specific patterns
        if (typeof error === 'object' && error !== null) {
            const sbError = error as SupabaseError;
            const msg = (sbError.message || '').toLowerCase();

            // "Invalid login credentials"
            if (msg.includes('invalid login credentials')) {
                return new AppError(ErrorCode.INVALID_CREDENTIALS, sbError.message);
            }

            // "User not found" (sometimes happens on password reset)
            if (msg.includes('user not found')) {
                return new AppError(ErrorCode.INVALID_CREDENTIALS, sbError.message);
            }

            // "JWT expired"
            if (msg.includes('jwt expired')) {
                return new AppError(ErrorCode.SESSION_EXPIRED, sbError.message);
            }

            // React Native fetch error
            if (msg.includes('network request failed')) {
                return new AppError(ErrorCode.NETWORK_ERROR, sbError.message);
            }

            // Supabase timeout
            if (msg.includes('timeout') || msg.includes('connection error')) {
                return new AppError(ErrorCode.NETWORK_ERROR, sbError.message);
            }
        }

        // C. Fallback for completely unknown errors
        return new AppError(ErrorCode.UNKNOWN, String(error));
    }
}