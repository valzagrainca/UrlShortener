import crypto from 'crypto';

export function generateShortId(): string {
  return crypto.randomBytes(3).toString('hex');
}

