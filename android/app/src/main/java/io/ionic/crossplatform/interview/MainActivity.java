package io.ionic.crossplatform.interview;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(TodoPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
