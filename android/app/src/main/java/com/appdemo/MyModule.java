// package com.appdemo;

// import android.widget.Toast;

// import com.facebook.react.bridge.NativeModule;
// import com.facebook.react.bridge.ReactApplicationContext;
// import com.facebook.react.bridge.ReactContext;
// import com.facebook.react.bridge.ReactContextBaseJavaModule;
// import com.facebook.react.bridge.ReactMethod;

// import java.util.Map;
// import java.util.HashMap;

// public class MyModule extends ReactContextBaseJavaModule {

//     private static ReactApplicationContext reactApplicationContext;
//     public static Promise promise;

//     @NonNull
//     @Override
//     public String getName() {
//         return "MyModule";
//     }

//     MyModule(@NonNull ReactApplicationContext reactContext) {
//         super(reactContext);
//         reactApplicationContext = reactContext;
//     }

//     @ReactMethod
//     public void qqLogin(Promise promise) {
//         MyModule.promise = promise;
//         MainActivity.tencent.login(getCurrentActivity(), "all", MainActivity.listener);
//     }

// }