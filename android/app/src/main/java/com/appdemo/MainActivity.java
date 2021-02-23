package com.appdemo;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
    // static MyListener listener;
    // static Tencent tencent;

    // @Override
    // protected void onCreate(Bundle savedInstanceState) {
    //     super.onCreate(savedInstanceState);

    //     tencent = Tencent.createInstance("AppId", this);
    //     listener = new MyListener();

    // }

    // private static class MyListener implements IUiListener {
    //     @Override
    //     public void onComplete(Object o) {
    //         JSONObject jsonObject = (JSONObject) o;
    //         try {
    //             String openid = jsonObject.getString("openid");
    //             WritableMap map = Arguments.createMap();
    //             map.putString("openid", openid);
    //             MyModule.promise.resolve(map);
    //         } catch (JSONException e) {
    //             MyModule.promise.reject(new Exception("操作失败"));
    //         }

    //     }

    //     @Override
    //     public void onError(UiError uiError) {
    //         MyModule.promise.reject(new Exception("操作失败"));
    //     }

    //     @Override
    //     public void onCancel() {
    //         MyModule.promise.reject(new Exception("操作失败"));
    //     }
    // }

    // @Override
    // public void onActivityResult(int requestCode, int resultCode, Intent data) {
    //     super.onActivityResult(requestCode, resultCode, data);
    //     Tencent.onActivityResultData(requestCode, resultCode, data, listener);
    // }
    @Override
    protected String getMainComponentName() {
        return "appDemo";
    }
}
