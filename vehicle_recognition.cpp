#include <BLEDevice.h>
#include <BLEUtils.h>
#include<BlEServer.h>
#include<BLEAdvertising.h>

#define BEACON_UUID "ABCDEFG"
#define TX_ Power ESP_PWR_LVL_N0

void setup() {
    Serial.begin(115200);
Serial.println("Starting BLE Beacon...");
BLEDevice::init("ESP32_BLE_Beacon");
esp_ble_tx_power_set(ESP_BLE_PWR_TYPE_DEFAULT, TX_Power);
BlEServer *pServer=BLEDevice::createServer();
BLEAdvertising *pAdvertising=pServer->getAdvertising();
BLEService *pService=pServer->createService(BEACON_UUID);
BLECharacteristic *pCharacteristic=pService->createCharacteristic(BLEUUID((uint16_t)0x2A56),
BLECharacteristic::PROPERTY_READ
BLECharacteristic::PROPERTY_NOTIFY);
pCharacteristic->setValue("1234");
pService->start();
pAdvertising->start();
Serial.println("Advertising BLE beacon with code:1234");
while (true){
delay(1000);
}
}
void loop(){
}