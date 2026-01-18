export enum ErrorCode {
  // Auth
  INVALID_CREDENTIALS = 'AUTH_001',
  SESSION_EXPIRED = 'AUTH_002',
  
  // Network/Server
  NETWORK_ERROR = 'NET_001',
  SERVER_ERROR = 'SRV_001',

  // Defaults
  UNKNOWN = 'GEN_001',
}

export const ERROR_MESSAGES: Record<ErrorCode, string> = {
  [ErrorCode.INVALID_CREDENTIALS]: "Autentificare eșuată. Verifică utilizatorul și parola.",
  [ErrorCode.SESSION_EXPIRED]: "Sesiunea a expirat. Te rugăm să te autentifici din nou.",
  
  [ErrorCode.NETWORK_ERROR]: "Eroare de conexiune. Verifică conexiunea la internet.",
  [ErrorCode.SERVER_ERROR]: "Eroare de server. Încearcă din nou mai târziu.",

  [ErrorCode.UNKNOWN]: "A apărut o eroare neașteptată.",
};