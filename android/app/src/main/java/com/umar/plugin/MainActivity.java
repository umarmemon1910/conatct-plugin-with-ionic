package com.umar.plugin;
import com.proteansoftware.capacitor.square.CapacitorSquarePlugin;
import com.getcapacitor.BridgeActivity;
import android.os.Bundle;
import com.getcapacitor.Plugin;
import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
            registerPlugin(CapacitorSquarePlugin.class);
  }
}
