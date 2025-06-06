export = Request;
declare function Request(): void;
declare class Request {
    content: string;
    contentLength: number;
    contentType: string;
    xml: string;
    localAddress: string;
    localHost: string;
    localPort: number;
    remoteAddress: string;
    remoteHost: string;
    remotePort: number;
    host: string;
    method: string;
    methodType: string;
    acceptLanguage: string;
    path: string;
    referer: string;
    userAgent: string;
    httpMessage: string;
    cookieCount: number;
    params: any;
    headers: Record<string, string>;
    body: RequestBody;
    parameterCount: number;
    readTimeout: number;
    getParameter(indexOrName: number | string): string;
    param(name: string, opt_default: any): string;
    getParameterName(index: number | string): void;
    getCookie(indexOrName: number | string): void;
    getCookieName(index: any): void;
    getHeader(name: any): string;
    read(size: number): string;
    isHttps(trustProxy?: boolean): boolean;
}
declare namespace Request {
    export { DBKey };
}
import RequestBody = require('./RequestBody.js');
type DBKey = any;
