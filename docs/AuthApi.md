# PriceMonitoringService.AuthApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authLoginCreate**](AuthApi.md#authLoginCreate) | **POST** /auth/login/ | 
[**authRefreshCreate**](AuthApi.md#authRefreshCreate) | **POST** /auth/refresh/ | 
[**authRegisterCreate**](AuthApi.md#authRegisterCreate) | **POST** /auth/register/ | 

<a name="authLoginCreate"></a>
# **authLoginCreate**
> Login authLoginCreate(body)



### Example
```javascript
import {PriceMonitoringService} from 'price_monitoring_service';

let apiInstance = new PriceMonitoringService.AuthApi();
let body = new PriceMonitoringService.Login(); // Login | 

apiInstance.authLoginCreate(body, (error, data, response) => {
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
 **body** | [**Login**](Login.md)|  | 

### Return type

[**Login**](Login.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authRefreshCreate"></a>
# **authRefreshCreate**
> TokenRefresh authRefreshCreate(body)



### Example
```javascript
import {PriceMonitoringService} from 'price_monitoring_service';

let apiInstance = new PriceMonitoringService.AuthApi();
let body = new PriceMonitoringService.TokenRefresh(); // TokenRefresh | 

apiInstance.authRefreshCreate(body, (error, data, response) => {
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
 **body** | [**TokenRefresh**](TokenRefresh.md)|  | 

### Return type

[**TokenRefresh**](TokenRefresh.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authRegisterCreate"></a>
# **authRegisterCreate**
> Register authRegisterCreate(body)



### Example
```javascript
import {PriceMonitoringService} from 'price_monitoring_service';

let apiInstance = new PriceMonitoringService.AuthApi();
let body = new PriceMonitoringService.Register(); // Register | 

apiInstance.authRegisterCreate(body, (error, data, response) => {
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
 **body** | [**Register**](Register.md)|  | 

### Return type

[**Register**](Register.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

