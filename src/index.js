/*
 * Price Monitoring Service
 * Price Monitoring Service
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from './ApiClient';
import {Login} from './model/Login';
import {PatchedTrackItemHeader} from './model/PatchedTrackItemHeader';
import {Register} from './model/Register';
import {TokenRefresh} from './model/TokenRefresh';
import {TrackItemHeader} from './model/TrackItemHeader';
import {User} from './model/User';
import {AuthApi} from './api/AuthApi';
import {UsersApi} from './api/UsersApi';

/**
* Price_Monitoring_Service.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var PriceMonitoringService = require('index'); // See note below*.
* var xxxSvc = new PriceMonitoringService.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new PriceMonitoringService.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new PriceMonitoringService.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new PriceMonitoringService.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.0.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Login model constructor.
     * @property {module:model/Login}
     */
    Login,

    /**
     * The PatchedTrackItemHeader model constructor.
     * @property {module:model/PatchedTrackItemHeader}
     */
    PatchedTrackItemHeader,

    /**
     * The Register model constructor.
     * @property {module:model/Register}
     */
    Register,

    /**
     * The TokenRefresh model constructor.
     * @property {module:model/TokenRefresh}
     */
    TokenRefresh,

    /**
     * The TrackItemHeader model constructor.
     * @property {module:model/TrackItemHeader}
     */
    TrackItemHeader,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
    * The AuthApi service constructor.
    * @property {module:api/AuthApi}
    */
    AuthApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi
};
