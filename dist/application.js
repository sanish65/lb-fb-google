"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/example-passport-login
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuth2LoginApplication = void 0;
const authentication_1 = require("@loopback/authentication");
const boot_1 = require("@loopback/boot");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const rest_crud_1 = require("@loopback/rest-crud");
const service_proxy_1 = require("@loopback/service-proxy");
const sequence_1 = require("./sequence");
class OAuth2LoginApplication extends boot_1.BootMixin(service_proxy_1.ServiceMixin(repository_1.RepositoryMixin(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
        this.component(authentication_1.AuthenticationComponent);
        this.component(rest_crud_1.CrudRestComponent);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
    }
}
exports.OAuth2LoginApplication = OAuth2LoginApplication;
//# sourceMappingURL=application.js.map