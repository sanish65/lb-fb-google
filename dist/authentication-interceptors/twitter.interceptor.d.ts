import { Interceptor, InvocationContext, Next, Provider } from '@loopback/core';
import { ExpressRequestHandler } from '@loopback/rest';
export declare class TwitterOauthInterceptor implements Provider<Interceptor> {
    twitterStrategy: ExpressRequestHandler;
    constructor(twitterStrategy: ExpressRequestHandler);
    value(): (invocationCtx: InvocationContext, next: Next) => Promise<import("@loopback/core").NonVoid>;
}
