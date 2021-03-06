/// <reference types="express" />
import { AuthenticationStrategy } from '@loopback/authentication';
import { StrategyAdapter } from '@loopback/authentication-passport';
import { Getter } from '@loopback/core';
import { RedirectRoute, Request } from '@loopback/rest';
import { UserProfile } from '@loopback/security';
import { Strategy } from 'passport-oauth2';
import { User } from '../models';
export declare class Oauth2AuthStrategy implements AuthenticationStrategy {
    /**
     * enable extensions for provider specific oauth2 implementations
     * reroute to the specific extension based on given provider name
     */
    private getStrategies;
    passportstrategy: Strategy;
    name: string;
    protected strategy: StrategyAdapter<User>;
    /**
     * create an oauth2 strategy
     */
    constructor(
    /**
     * enable extensions for provider specific oauth2 implementations
     * reroute to the specific extension based on given provider name
     */
    getStrategies: Getter<Oauth2AuthStrategy[]>, passportstrategy: Strategy);
    /**
     * authenticate a request
     * @param request
     */
    authenticate(request: Request): Promise<UserProfile | RedirectRoute>;
}
