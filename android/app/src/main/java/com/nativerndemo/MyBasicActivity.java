package com.nativerndemo;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.ViewManager;

import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MyBasicActivity extends ReactContextBaseJavaModule {
    ReactApplicationContext context;
    private Promise mPickerPromise=null;
    MyBasicActivity(ReactApplicationContext reactContext ) {
        this.context = reactContext; // This is where you get the context
        reactContext.addActivityEventListener(mActivityEventListener);
    }


    @NonNull
    @Override
    public String getName() {
//        return null;
        return "MyModule";
    }
    @ReactMethod
    public void launchNativeScreen(final Promise promise) {
        // ... implementation ...
//        Log.d("Android","Hello world RN");
        mPickerPromise = promise;
        Intent intent = new Intent(context, DemoMainActivity.class);
        context.startActivityForResult(intent,1,null);

    }


    private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {
        @Override
        public void onActivityResult(Activity activity, int i, int i1, @Nullable Intent intent) {
            if (intent == null) {
                Log.d("TAGDATA===============>", "$firstName $lastName");
                mPickerPromise.reject("not found","No data found");

            } else {
                String firstName = intent.getStringExtra("key");
                Log.d("TAGDATA===============>", "$firstName $lastName " + firstName);
                mPickerPromise.resolve(firstName);
            }
        }
    };

}


//    @Override
//    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
//
//        if(data == null){
//            Log.d("TAGDATA===============>", "$firstName $lastName");
//
//        }else {
//            String firstName = data.getStringExtra("message");
//            Log.d("TAGDATA===============>", "$firstName $lastName"+firstName);
//
//        }
//    }
