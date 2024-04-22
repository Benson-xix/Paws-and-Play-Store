declare module 'jsonwebtoken' {
    export function sign(
      payload: string | Buffer | object,
      secretOrPrivateKey: string,
      options?: SignOptions
    ): string;
  
    export function verify(
      token: string,
      secretOrPublicKey: string,
      options?: VerifyOptions
    ): object | string;
  
    export function decode(token: string, options?: DecodeOptions): null | { [key: string]: any } | string;
  }
  
  interface SignOptions {
    algorithm?: string;
    expiresIn?: string | number;
    notBefore?: string | number;
    audience?: string | string[];
    issuer?: string;
    jwtid?: string;
    subject?: string;
    noTimestamp?: boolean;
    header?: object;
    encoding?: string;
  }
  
  interface VerifyOptions {
    algorithms?: string[];
    audience?: string | string[];
    issuer?: string | string[];
    ignoreExpiration?: boolean;
    ignoreNotBefore?: boolean;
    subject?: string;
    clockTolerance?: number;
    maxAge?: string | number;
    clockTimestamp?: number;
    nonce?: string;
    [key: string]: any;
  }
  
  interface DecodeOptions {
    complete?: boolean;
    json?: boolean;
  }
  