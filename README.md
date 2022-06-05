# price_monitoring_service

PriceMonitoringService - JavaScript client for price_monitoring_service
Price Monitoring Service
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.0.1
- Package version: 0.0.1
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install price_monitoring_service --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var PriceMonitoringService = require('price_monitoring_service');

var api = new PriceMonitoringService.AuthApi()
var body = new PriceMonitoringService.Login(); // {Login} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.authLoginCreate(body, callback);
```

## Documentation for API Endpoints

All URIs are relative to */*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*PriceMonitoringService.AuthApi* | [**authLoginCreate**](docs/AuthApi.md#authLoginCreate) | **POST** /auth/login/ | 
*PriceMonitoringService.AuthApi* | [**authRefreshCreate**](docs/AuthApi.md#authRefreshCreate) | **POST** /auth/refresh/ | 
*PriceMonitoringService.AuthApi* | [**authRegisterCreate**](docs/AuthApi.md#authRegisterCreate) | **POST** /auth/register/ | 
*PriceMonitoringService.UsersApi* | [**usersCreate**](docs/UsersApi.md#usersCreate) | **POST** /users/ | 
*PriceMonitoringService.UsersApi* | [**usersList**](docs/UsersApi.md#usersList) | **GET** /users/ | 
*PriceMonitoringService.UsersApi* | [**usersRetrieve**](docs/UsersApi.md#usersRetrieve) | **GET** /users/{id}/ | 
*PriceMonitoringService.UsersApi* | [**usersTrackItemsCreate**](docs/UsersApi.md#usersTrackItemsCreate) | **POST** /users/{user_id}/track-items/ | 
*PriceMonitoringService.UsersApi* | [**usersTrackItemsDestroy**](docs/UsersApi.md#usersTrackItemsDestroy) | **DELETE** /users/{user_id}/track-items/{id}/ | 
*PriceMonitoringService.UsersApi* | [**usersTrackItemsList**](docs/UsersApi.md#usersTrackItemsList) | **GET** /users/{user_id}/track-items/ | 
*PriceMonitoringService.UsersApi* | [**usersTrackItemsPartialUpdate**](docs/UsersApi.md#usersTrackItemsPartialUpdate) | **PATCH** /users/{user_id}/track-items/{id}/ | 
*PriceMonitoringService.UsersApi* | [**usersTrackItemsRetrieve**](docs/UsersApi.md#usersTrackItemsRetrieve) | **GET** /users/{user_id}/track-items/{id}/ | 
*PriceMonitoringService.UsersApi* | [**usersTrackItemsUpdate**](docs/UsersApi.md#usersTrackItemsUpdate) | **PUT** /users/{user_id}/track-items/{id}/ | 

## Documentation for Models

 - [PriceMonitoringService.Login](docs/Login.md)
 - [PriceMonitoringService.PatchedTrackItemHeader](docs/PatchedTrackItemHeader.md)
 - [PriceMonitoringService.Register](docs/Register.md)
 - [PriceMonitoringService.TokenRefresh](docs/TokenRefresh.md)
 - [PriceMonitoringService.TrackItemHeader](docs/TrackItemHeader.md)
 - [PriceMonitoringService.User](docs/User.md)

## Documentation for Authorization


### cookieAuth

- **Type**: API key
- **API key parameter name**: sessionid
- **Location**: URL query string

### jwtAuth


