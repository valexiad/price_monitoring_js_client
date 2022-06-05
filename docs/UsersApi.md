# PriceMonitoringService.UsersApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersCreate**](UsersApi.md#usersCreate) | **POST** /users/ | 
[**usersList**](UsersApi.md#usersList) | **GET** /users/ | 
[**usersRetrieve**](UsersApi.md#usersRetrieve) | **GET** /users/{id}/ | 
[**usersTrackItemsCreate**](UsersApi.md#usersTrackItemsCreate) | **POST** /users/{user_id}/track-items/ | 
[**usersTrackItemsDestroy**](UsersApi.md#usersTrackItemsDestroy) | **DELETE** /users/{user_id}/track-items/{id}/ | 
[**usersTrackItemsList**](UsersApi.md#usersTrackItemsList) | **GET** /users/{user_id}/track-items/ | 
[**usersTrackItemsPartialUpdate**](UsersApi.md#usersTrackItemsPartialUpdate) | **PATCH** /users/{user_id}/track-items/{id}/ | 
[**usersTrackItemsRetrieve**](UsersApi.md#usersTrackItemsRetrieve) | **GET** /users/{user_id}/track-items/{id}/ | 
[**usersTrackItemsUpdate**](UsersApi.md#usersTrackItemsUpdate) | **PUT** /users/{user_id}/track-items/{id}/ | 

<a name="usersCreate"></a>
# **usersCreate**
> User usersCreate(body)



retrieve:     Return a user instance.  list:     Return all users, ordered by most recently joined.  create:     Create a new user.  delete:     Remove an existing user.  partial_update:     Update one or more fields on an existing user.  update:     Update a user.

### Example
```javascript
import {PriceMonitoringService} from 'price_monitoring_service';
let defaultClient = PriceMonitoringService.ApiClient.instance;

// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new PriceMonitoringService.UsersApi();
let body = new PriceMonitoringService.User(); // User | 

apiInstance.usersCreate(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersList"></a>
# **usersList**
> [User] usersList(opts)



retrieve:     Return a user instance.  list:     Return all users, ordered by most recently joined.  create:     Create a new user.  delete:     Remove an existing user.  partial_update:     Update one or more fields on an existing user.  update:     Update a user.

### Example
```javascript
import {PriceMonitoringService} from 'price_monitoring_service';
let defaultClient = PriceMonitoringService.ApiClient.instance;

// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new PriceMonitoringService.UsersApi();
let opts = { 
  'ordering': "ordering_example" // String | Which field to use when ordering the results.
};
apiInstance.usersList(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersRetrieve"></a>
# **usersRetrieve**
> User usersRetrieve(id)



retrieve:     Return a user instance.  list:     Return all users, ordered by most recently joined.  create:     Create a new user.  delete:     Remove an existing user.  partial_update:     Update one or more fields on an existing user.  update:     Update a user.

### Example
```javascript
import {PriceMonitoringService} from 'price_monitoring_service';
let defaultClient = PriceMonitoringService.ApiClient.instance;

// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new PriceMonitoringService.UsersApi();
let id = 56; // Number | A unique integer value identifying this user.

apiInstance.usersRetrieve(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this user. | 

### Return type

[**User**](User.md)

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersTrackItemsCreate"></a>
# **usersTrackItemsCreate**
> TrackItemHeader usersTrackItemsCreate(body, userId)



retrieve:     Return a track item instance.  list:     Return all track items of the user, ordered by most recently joined.  create:     Create a new track item .  delete:     Remove an existing track item.  partial_update:     Update one or more fields on an existing track item.  update:     Update a track item.

### Example
```javascript
import {PriceMonitoringService} from 'price_monitoring_service';
let defaultClient = PriceMonitoringService.ApiClient.instance;


let apiInstance = new PriceMonitoringService.UsersApi();
let body = new PriceMonitoringService.TrackItemHeader(); // TrackItemHeader | 
let userId = "userId_example"; // String | 

apiInstance.usersTrackItemsCreate(body, userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TrackItemHeader**](TrackItemHeader.md)|  | 
 **userId** | **String**|  | 

### Return type

[**TrackItemHeader**](TrackItemHeader.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersTrackItemsDestroy"></a>
# **usersTrackItemsDestroy**
> usersTrackItemsDestroy(id, userId)



retrieve:     Return a track item instance.  list:     Return all track items of the user, ordered by most recently joined.  create:     Create a new track item .  delete:     Remove an existing track item.  partial_update:     Update one or more fields on an existing track item.  update:     Update a track item.

### Example
```javascript
import {PriceMonitoringService} from 'price_monitoring_service';
let defaultClient = PriceMonitoringService.ApiClient.instance;


let apiInstance = new PriceMonitoringService.UsersApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | A UUID string identifying this track item header.
let userId = "userId_example"; // String | 

apiInstance.usersTrackItemsDestroy(id, userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| A UUID string identifying this track item header. | 
 **userId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usersTrackItemsList"></a>
# **usersTrackItemsList**
> [TrackItemHeader] usersTrackItemsList(userId)



retrieve:     Return a track item instance.  list:     Return all track items of the user, ordered by most recently joined.  create:     Create a new track item .  delete:     Remove an existing track item.  partial_update:     Update one or more fields on an existing track item.  update:     Update a track item.

### Example
```javascript
import {PriceMonitoringService} from 'price_monitoring_service';
let defaultClient = PriceMonitoringService.ApiClient.instance;


let apiInstance = new PriceMonitoringService.UsersApi();
let userId = "userId_example"; // String | 

apiInstance.usersTrackItemsList(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

[**[TrackItemHeader]**](TrackItemHeader.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersTrackItemsPartialUpdate"></a>
# **usersTrackItemsPartialUpdate**
> TrackItemHeader usersTrackItemsPartialUpdate(id, userId, opts)



retrieve:     Return a track item instance.  list:     Return all track items of the user, ordered by most recently joined.  create:     Create a new track item .  delete:     Remove an existing track item.  partial_update:     Update one or more fields on an existing track item.  update:     Update a track item.

### Example
```javascript
import {PriceMonitoringService} from 'price_monitoring_service';
let defaultClient = PriceMonitoringService.ApiClient.instance;


let apiInstance = new PriceMonitoringService.UsersApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | A UUID string identifying this track item header.
let userId = "userId_example"; // String | 
let opts = { 
  'body': new PriceMonitoringService.PatchedTrackItemHeader() // PatchedTrackItemHeader | 
};
apiInstance.usersTrackItemsPartialUpdate(id, userId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| A UUID string identifying this track item header. | 
 **userId** | **String**|  | 
 **body** | [**PatchedTrackItemHeader**](PatchedTrackItemHeader.md)|  | [optional] 

### Return type

[**TrackItemHeader**](TrackItemHeader.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersTrackItemsRetrieve"></a>
# **usersTrackItemsRetrieve**
> TrackItemHeader usersTrackItemsRetrieve(id, userId)



retrieve:     Return a track item instance.  list:     Return all track items of the user, ordered by most recently joined.  create:     Create a new track item .  delete:     Remove an existing track item.  partial_update:     Update one or more fields on an existing track item.  update:     Update a track item.

### Example
```javascript
import {PriceMonitoringService} from 'price_monitoring_service';
let defaultClient = PriceMonitoringService.ApiClient.instance;


let apiInstance = new PriceMonitoringService.UsersApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | A UUID string identifying this track item header.
let userId = "userId_example"; // String | 

apiInstance.usersTrackItemsRetrieve(id, userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| A UUID string identifying this track item header. | 
 **userId** | **String**|  | 

### Return type

[**TrackItemHeader**](TrackItemHeader.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersTrackItemsUpdate"></a>
# **usersTrackItemsUpdate**
> TrackItemHeader usersTrackItemsUpdate(body, id, userId)



retrieve:     Return a track item instance.  list:     Return all track items of the user, ordered by most recently joined.  create:     Create a new track item .  delete:     Remove an existing track item.  partial_update:     Update one or more fields on an existing track item.  update:     Update a track item.

### Example
```javascript
import {PriceMonitoringService} from 'price_monitoring_service';
let defaultClient = PriceMonitoringService.ApiClient.instance;


let apiInstance = new PriceMonitoringService.UsersApi();
let body = new PriceMonitoringService.TrackItemHeader(); // TrackItemHeader | 
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | A UUID string identifying this track item header.
let userId = "userId_example"; // String | 

apiInstance.usersTrackItemsUpdate(body, id, userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TrackItemHeader**](TrackItemHeader.md)|  | 
 **id** | [**String**](.md)| A UUID string identifying this track item header. | 
 **userId** | **String**|  | 

### Return type

[**TrackItemHeader**](TrackItemHeader.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

