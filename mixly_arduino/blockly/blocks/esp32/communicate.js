'use strict';

goog.provide('Blockly.Blocks.communicate');
goog.require('Blockly.Blocks');

Blockly.Blocks.communicate.HUE = 140//'#3288dd';


Blockly.Blocks['i2c_init'] = {
  init: function() {
   this.setColour(Blockly.Blocks.communicate.HUE);
   this.appendValueInput('SUB')
   .appendField("I2C " + Blockly.MIXLY_SETUP)
   .setCheck("var");
   this.appendValueInput("RX", Number)
       //.appendField(Blockly.MIXLY_SETUP)
       // .appendField(Blockly.MIXLY_MICROBIT_JS_I2C_SETUP)
       .appendField("sda")
       .setCheck(Number)
       .setAlign(Blockly.ALIGN_RIGHT);
       this.appendValueInput("TX", Number)
       .appendField("scl")
       .setCheck(Number)
       .setAlign(Blockly.ALIGN_RIGHT);
       this.appendValueInput('freq')
       .setCheck(Number)
       .appendField(Blockly.MIXLY_FREQUENCY)
       .setAlign(Blockly.ALIGN_RIGHT);
       this.setPreviousStatement(true, null);
       this.setNextStatement(true, null);
       this.setInputsInline(true);
     }
   };

Blockly.Blocks['i2c_read'] = {
init:function(){
  this.setColour(Blockly.Blocks.communicate.HUE);
  this.appendValueInput('VAR')
   .appendField("I2C")
   .setCheck("var");
  this.appendValueInput('address')
  .setCheck(Number)
  .appendField(Blockly.MIXLY_ESP32_RNUMBER);
  this.appendValueInput('data')
  .setCheck(Number)
  .appendField(Blockly.MIXLY_MICROBIT_JS_I2C_BIT);
    //this.appendDummyInput()
        //.appendField(Blockly.Msg.CONTROLS_REPEAT_TITLE_REPEAT)
        //.appendField(new Blockly.FieldCheckbox(false), "is_repeated");
        this.setOutput(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_MICROBIT_JS_I2C_READ);
      }
    }

  Blockly.Blocks['i2c_write'] = {
    init:function(){
      this.setColour(Blockly.Blocks.communicate.HUE);
      this.appendValueInput('VAR')
           .appendField("I2C")
           .setCheck("var");
      this.appendValueInput('address')
      .setCheck(Number)
      .appendField(Blockly.MIXLY_ESP32_WNUMBER);
      this.appendValueInput('data')
      .setCheck(Number)
      .appendField(Blockly.MIXLY_MICROBIT_JS_I2C_VALUE);
  //this.appendDummyInput()
      //.appendField(Blockly.Msg.CONTROLS_REPEAT_TITLE_REPEAT)
      //.appendField(new Blockly.FieldCheckbox(false), "is_repeated");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setInputsInline(true);
      this.setTooltip(Blockly.MIXLY_MICROBIT_JS_I2C_WRITE);
    }
  }

  Blockly.Blocks['i2c_scan'] = {
    init:function(){
        this.setColour(Blockly.Blocks.communicate.HUE);
        this.appendValueInput('VAR')
           .setCheck("var")
            .appendField(Blockly.MIXLY_ESP32_I2C_SCAN1);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_ESP32_I2C_SCAN2);
        this.setOutput(true);
        this.setInputsInline(true);
        // this.setTooltip(Blockly.MIXLY_MICROBIT_JS_I2C_READ);
      }
    }

  // Blockly.Blocks['spi_init'] = {
  //   init : function () {
  //     this.jsonInit({
  //       "colour" : Blockly.Blocks.communicate.HUE,
  //       "nextStatement" : null,
  //       "previousStatement" : null,
  //       "message0" : Blockly.MIXLY_MICROBIT_SPI_INIT,
  //       "args0" : [{
  //         "value" : 1000000,
  //         "type" : "field_number",
  //         "name" : "freq"
  //       }, {
  //         "type" : "input_dummy"
  //       }, {
  //         "value" : 1,
  //         "type" : "field_number",
  //         "name" : "polarity"
  //       }, {
  //         "type" : "input_dummy"
  //       }, {
  //         "value" : 0,
  //         "type" : "field_number",
  //         "name" : "phase"
  //       }, {
  //         "type" : "input_dummy"
  //       }, {
  //         "name" : "sck",
  //         "options" : profile.default.digital,
  //         "type" : "field_dropdown"
  //       }, {
  //         "name" : "mosi",
  //         "options" : profile.default.digital,
  //         "type" : "field_dropdown"
  //       }, {
  //         "name" : "miso",
  //         "options" : profile.default.digital,
  //         "type" : "field_dropdown"
  //       }
  //       ]
  //     });
  //     this.setFieldValue("4","mosi")
  //     this.setFieldValue("5","miso")
  //     this.setFieldValue("0","sck")
  //   }
  // };

  Blockly.Blocks['spi_init'] = {
 init: function() {    
    this.setColour(Blockly.Blocks.communicate.HUE);
    this.appendValueInput('VAR')
        .setCheck('var')
        .appendField(Blockly.MIXLY_ESP32_SPI_INIT);
    this.appendValueInput('freq')
        .setCheck(Number)
        .appendField(Blockly.MIXLY_SERIAL_BEGIN);
    this.appendValueInput('polarity')
        .setCheck(Number)
        .appendField('polarity');   
    this.appendValueInput('phase')
        .setCheck(Number)
        .appendField('phase');   
    this.appendValueInput('sck')
        .setCheck(Number)
        .appendField('SCK');   
    this.appendValueInput('mosi')
        .setCheck(Number)
        .appendField('MOSI');                       
    this.appendValueInput('miso')
        .setCheck(Number)
        .appendField('MISO');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
   //this.setTooltip(Blockly.Msg.TURTLE_WRITE_TOOLTIP);    
  }
};

  
  Blockly.Blocks['spi_set'] = {
    init: function () {
      this.setColour(Blockly.Blocks.communicate.HUE);
      this.appendValueInput('VAR')
            .setCheck('var')
            .appendField(Blockly.blockpy_turtle_setxy+" SPI")
      this.appendValueInput('data')
          .setCheck(Number)
          .appendField(Blockly.MIXLY_SERIAL_BEGIN);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    }
  };

  Blockly.Blocks['spi_buffer'] = {
    init: function () {
      this.setColour(Blockly.Blocks.communicate.HUE);
      this.appendValueInput('VAR')
            .setCheck('var')
            .appendField(Blockly.MIXLY_ESP32_SET+'SPI');
      this.appendValueInput('data')
          .setCheck(Number)
          .appendField(Blockly.MIXLY_ESP32_SPI_BUFFER);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    }
  };

  Blockly.Blocks['spi_read'] = {
    init:function(){
        this.setColour(Blockly.Blocks.communicate.HUE);
        this.appendValueInput('VAR')
            .setCheck('var')
            .appendField('SPI');
        this.appendValueInput('data')
            .setCheck(Number)
            .appendField(Blockly.MIXLY_SERIAL_READ);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_4DIGITDISPLAY_NOMBER2+Blockly.MIXLY_MICROBIT_JS_I2C_BIT)
        this.setOutput(true);
        this.setInputsInline(true);
        // this.setTooltip(Blockly.MIXLY_MICROBIT_JS_I2C_READ);
      }
    }

Blockly.Blocks['spi_read_output'] = {
    init:function(){
        this.setColour(Blockly.Blocks.communicate.HUE);
        this.appendValueInput('VAR')
            .setCheck('var')
            .appendField('SPI');
        this.appendValueInput('data')
            .setCheck(Number)
            .appendField(Blockly.MIXLY_SERIAL_READ);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_4DIGITDISPLAY_NOMBER2+Blockly.MIXLY_MICROBIT_JS_I2C_BIT+','+Blockly.MIXLY_ESP32_SPI_OUTPUT);
        this.appendValueInput('val')
            .setCheck(Number);
        this.setOutput(true);
        this.setInputsInline(true);
        // this.setTooltip(Blockly.MIXLY_MICROBIT_JS_I2C_READ);
      }
    }

Blockly.Blocks['spi_readinto'] = {
    init:function(){
        this.setColour(Blockly.Blocks.communicate.HUE);
        this.appendValueInput('VAR')
            .setCheck('var')
            .appendField('SPI');
        this.appendValueInput('data')
            .setCheck('var')
            .appendField(Blockly.MIXLY_SERIAL_READ+Blockly.MIXLY_ESP32_SPI_BUFFER);
        this.setOutput(true);
        this.setInputsInline(true);
        // this.setTooltip(Blockly.MIXLY_MICROBIT_JS_I2C_READ);
      }
    }

Blockly.Blocks['spi_readinto_output'] = {
    init:function(){
        this.setColour(Blockly.Blocks.communicate.HUE);
        this.appendValueInput('VAR')
            .setCheck('var')
            .appendField('SPI');
        this.appendValueInput('data')
            .setCheck('var')
            .appendField(Blockly.MIXLY_SERIAL_READ+Blockly.MIXLY_ESP32_SPI_BUFFER);
        this.appendValueInput('val')
            .setCheck(Number)
            .appendField(','+Blockly.MIXLY_ESP32_SPI_OUTPUT);
        this.setOutput(true);
        this.setInputsInline(true);
        // this.setTooltip(Blockly.MIXLY_MICROBIT_JS_I2C_READ);
      }
    }

  Blockly.Blocks['spi_write'] = {
    init: function () {
      this.setColour(Blockly.Blocks.communicate.HUE);
      this.appendValueInput('VAR')
            .setCheck('var')
            .appendField('SPI');
      this.appendValueInput('data')
      .setCheck(Number)
      .appendField(Blockly.MIXLY_ESP32_WRITE);
      this.setOutput(true, Number);
      this.setInputsInline(true);
      this.setTooltip(Blockly.MIXLY_MICROBIT_JS_SPI_WRITE);
    }
  };

  Blockly.Blocks['spi_write_readinto'] = {
    init: function () {
      this.setColour(Blockly.Blocks.communicate.HUE);
      this.appendValueInput('VAR')
            .setCheck('var')
            .appendField('SPI');
      this.appendValueInput('data')
          .setCheck(['var',Number])
          .appendField(Blockly.MIXLY_ESP32_WRITE)
          .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_MICROBIT_JS_I2C_BIT, "byte"], [Blockly.MIXLY_ESP32_SPI_BUFFER, "buffer"]]), "op");
      this.appendValueInput('val')
          .setCheck('var')
          .appendField(','+Blockly.MIXLY_ESP32_BUFFER_READ);
      this.setOutput(true);
      this.setInputsInline(true);
      this.setTooltip(Blockly.MIXLY_MICROBIT_JS_SPI_WRITE);
    }
  };

  Blockly.Blocks['network_init'] = {
    init: function () {
      this.setColour(Blockly.Blocks.storage.HUE);
      this.appendValueInput('VAR')
      .appendField(Blockly.MIXLY_NETWORK_INIT)
      .setCheck("var");
      this.appendDummyInput()
      .appendField(Blockly.MIXLY_NETWORK_MODE)
      .appendField(new Blockly.FieldDropdown([['STA', "STA"], ['AP', "AP"]]), "mode");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    }
  }; 


  Blockly.Blocks['network_open'] = {
    init: function () {
      this.setColour(Blockly.Blocks.storage.HUE);
      this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_NETWORK_WIFI_OPEN, "True"], [Blockly.MIXLY_NETWORK_WIFI_CLOSE, "False"]]), "op");
      this.appendValueInput('VAR')
      .setCheck("var")
      this.appendDummyInput("")
      .appendField(Blockly.MIXLY_NETWORK_WIFI_FLAG)
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    }
  };

  Blockly.Blocks['network_scan'] = {
    init: function () {
      this.setColour(Blockly.Blocks.storage.HUE);
      this.appendValueInput('VAR')
      .setCheck("var")
      .appendField(Blockly.MIXLY_NETWORK_WIFI_SCAN)
      this.appendDummyInput("")
      .appendField(Blockly.MIXLY_BELONG)
      this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["ssid", "0"], ["bssid", "1"], ["channel", "2"], ["RSSI", "3"], ["authmode", "4"], ["hidden", "5"], [Blockly.MIXLY_NETWORK_WIFI_SCAN_ATTRIBUTE, "all"]]), "op");    
      this.setOutput(true);
      this.setInputsInline(true);
    }
  };

  Blockly.Blocks['network_connect'] = {
    init:function(){
      this.setColour(Blockly.Blocks.storage.HUE);
      this.appendValueInput('VAR')
      .setCheck("var")   
      .appendField(Blockly.MIXLY_ESP32_NETWORK_CONNECT);
      this.appendValueInput('id')
      .setCheck(String)
      .appendField(Blockly.MIXLY_ESP32_NETWORK_ID);
      this.appendValueInput('password')
      .setCheck(String)
      .appendField(Blockly.MIXLY_ESP32_NETWORK_PASSWORD);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setInputsInline(true);
    }
  };

  Blockly.Blocks['network_wifi_connect'] = {
    init : function () {
     this.setColour(Blockly.Blocks.storage.HUE);
     this.appendValueInput('VAR')
     .setCheck("var")    
     .appendField(Blockly.MIXLY_NETWORK_WIFI_CONNECT);
     this.appendDummyInput("")    
     .appendField(Blockly.MIXLY_SYMBOL_QUESTION);
     this.setOutput(true,Boolean);
     this.setInputsInline(true);
   }
 };

 Blockly.Blocks['network_get_connect'] = {
  init:function(){
    this.setColour(Blockly.Blocks.storage.HUE);
    this.appendValueInput('VAR')
    .setCheck("var")    
    .appendField(Blockly.MIXLY_ESP32_NETWORK_GET_CONNECT);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ESP32_NETWORK_IP, "0"], [Blockly.MIXLY_ESP32_NETWORK_MASK, "1"], [Blockly.MIXLY_ESP32_NETWORK_GATEWAY, "2"], ["DNS", "3"]]), "mode");
    this.setOutput(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['network_stop'] = {
  init: function () {
    this.setColour(Blockly.Blocks.storage.HUE);
    this.appendValueInput('VAR')
    .setCheck("var")    
    .appendField(Blockly.MIXLY_ESP32_NETWORK_STOP_CONNECT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['network_get_wifi'] = {
  init:function(){
    this.setColour(Blockly.Blocks.storage.HUE);
    this.appendValueInput('VAR')
    .setCheck("var")    
    .appendField(Blockly.MIXLY_ESP32_NETWORK_GET_WIFI);
    this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_NETWORK_WIFI_ESSID, "essid"], [Blockly.MIXLY_NETWORK_WIFI_CHANNEL, "channel"]]), "op");
    this.setOutput(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['network_ap_connect'] = {
  init:function(){
    this.setColour(Blockly.Blocks.storage.HUE);
    this.appendValueInput('VAR')
    .setCheck("var")    
    .appendField(Blockly.Msg.LISTS_SET_INDEX_SET);
    this.appendValueInput('essid')
    .setCheck(String)
    .appendField(Blockly.MIXLY_NETWORK_WIFI_ESSID);
    this.appendValueInput('channel')
    .setCheck(Number)
    .appendField(Blockly.MIXLY_NETWORK_WIFI_CHANNEL);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks.i2c_master_reader2 = {
  init: function () {
    this.setColour(Blockly.Blocks.communicate.HUE);
    this.appendValueInput('VAR')
    .setCheck("var")    
    .appendField("I2C");
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_ESP32_READ);
    this.setOutput(true, Number);
  }
};
Blockly.Blocks.i2c_available = {
  init: function () {
    this.setColour(Blockly.Blocks.communicate.HUE);
    this.appendValueInput('VAR')
    .setCheck("var")    
    .appendField(Blockly.MIXLY_ESP32_READ+"I2C");
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_ESP32_SUCCESS);
    this.setOutput(true, Boolean);
  }
};

Blockly.Blocks.i2c_slave_onreceive = {
  init: function () {
    this.setColour(Blockly.Blocks.communicate.HUE);
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_I2C_SLAVE_ONRECEIVE)
    .setCheck(Number);
    this.appendStatementInput('DO')
    .appendField(Blockly.MIXLY_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks['network_server'] = {
  init:function(){
    this.setColour(Blockly.Blocks.storage.HUE);
    this.appendValueInput('VAR')
    .setCheck("var")    
    .appendField(Blockly.MIXLY_ESP32_NETWORK_SERVER1);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ESP32_NETWORK_SERVER2);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};


Blockly.Blocks['ow_init'] = {
  init:function(){
    this.setColour(Blockly.Blocks.communicate.HUE);
    this.appendValueInput('VAR')
            .setCheck('var')
            .appendField('OneWire(18b20)');
    this.appendValueInput('BUS')
        .setCheck(Number)    
        .appendField(Blockly.MIXLY_ESP32_ONEWIRE_INIT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['ow_scan'] = {
  init: function () {
    this.setColour(Blockly.Blocks.communicate.HUE);
    this.appendValueInput('VAR')
            .setCheck('var')
            .appendField('OneWire(18b20)');
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_ESP32_ONEWIRE_SCAN);
    this.setOutput(true, 'List');
  }
};

Blockly.Blocks['ow_read'] = {
  init: function () {
    this.setColour(Blockly.Blocks.communicate.HUE);
    this.appendValueInput('VAR')
            .setCheck('var')
            .appendField('OneWire(18b20)');
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_ESP32_ONEWIRE_READ);
    this.setOutput(true);
  }
};

Blockly.Blocks['ow_write'] = {
  init:function(){
    this.setColour(Blockly.Blocks.communicate.HUE);
    this.appendValueInput('VAR')
            .setCheck('var')
            .appendField('OneWire(18b20)');
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_ESP32_WRITE)
        .appendField(new Blockly.FieldDropdown([[Blockly.LANG_MATH_STRING, "write"], [Blockly.LANG_MATH_BYTE, "writebyte"]]), "op");
    this.appendValueInput('byte')
        .setCheck(Number,String);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['ow_select'] = {
  init:function(){
    this.setColour(Blockly.Blocks.communicate.HUE);
    this.appendValueInput('VAR')
            .setCheck('var')
        .appendField(Blockly.MIXLY_ESP32_ONEWIRE_SELECT)
    this.appendValueInput('byte')
        .setCheck(Number)    
        .appendField("ROM");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};


Blockly.Blocks['ow_reset'] = {
  init: function () {
    this.setColour(Blockly.Blocks.communicate.HUE);
    this.appendValueInput('VAR')
        .setCheck('var')
        .appendField(Blockly.MIXLY_ESP32_ONEWIRE_RESET);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setOutput(false);
  }
};