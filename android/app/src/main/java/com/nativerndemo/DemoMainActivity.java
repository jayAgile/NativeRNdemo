package com.nativerndemo;
import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;



public class DemoMainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_demo_main);
        Button button = findViewById(R.id.okk);

//        calibrationLauncher(50,150);
        Log.d("Demo activity","success");
//        finish();
        Log.d("Demo activity","failed");
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String message = "Hello from Android!";
                Intent intent = new Intent();
                intent.putExtra("key", message);
                setResult(RESULT_OK, intent);

//                setResult(1, new Intent().putExtra("key", "1"));
                finish();
            }
        });

//        finish();
    }
//    void calibrationLauncher(int weight, int height) {
//        if (TextUtils.isEmpty(String.valueOf(weight))) {
////            showToast("enter weight");
//        } else if (TextUtils.isEmpty(String.valueOf(height))) {
////            showToast("enter height");
//        } else {
//            calibrationLauncher.launch(
//                    new StartCalibrationModel(
//                            weight,
//                            height
//                    )
//            );
//        }
//    }

//    ActivityResultLauncher<StartCalibrationModel> calibrationLauncher = IglooKt.registerIglooCalibrationLauncher(this, result -> {
//        Log.d("Tag Data",result.toString());
//        setResult(1, new Intent().putExtra("key", result.toString()));
//    finish();
//        if (new ResultResponse().isCalibrationSuccess(result)) {
//            /**
//             * store string in db
//             * Gson().toJson(calibration)
//             */
//            String string = new ResultResponse().getCalibration(result);
//            Log.d("TAGADAT", string);
//            showToast("calibration success");
//            measurementLauncher(50,150,new ResultResponse().getS());
//        } else {
//            Log.d("Igloo------------>", "Error ${it.exceptionOrNull()?.message}");
//        }
//    });
}