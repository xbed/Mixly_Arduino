"use strict";
goog.provide("Blockly.Blocks.blynk");
goog.require("Blockly.Blocks");
Blockly.Blocks.blynk.HUE0 = 0; //红色
Blockly.Blocks.blynk.HUE1 = 159; //Mountain Meadow
Blockly.Blocks.blynk.HUE2 = 120; //绿色
Blockly.Blocks.blynk.HUE3 = 180; //青色
Blockly.Blocks.blynk.HUE4 = 240; //蓝色
Blockly.Blocks.blynk.HUE5 = 300; //紫色
Blockly.Blocks.blynk.MusicHUE = 200;
Blockly.Blocks.blynk.ICON_WIDTH = 20; //传感器图标宽度
Blockly.Blocks.blynk.ICON_HEIGHT = 20; //传感器图标高度

var HW_TYPE = [
["USB", "USB"],
["WIFI", "WIFI"]
];
//物联网-服务器信息
Blockly.Blocks.blynk_QR = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/QR.png", 50, 50)).appendField(Blockly.blynk_QR);
    this.setTooltip();
    this.setHelpUrl();
  }
};
//物联网-服务器信息
Blockly.Blocks.blynk_usb_server = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/iot.png", 25, 25)).appendField(Blockly.blynk_USB_SERVER_INFO);
    this.appendValueInput("auth_key", String).appendField(Blockly.blynk_IOT_AUTH).setCheck([String, Number]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};
//物联网-一键配网
Blockly.Blocks.blynk_smartconfig_esp8266 = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/smartconfig.png", 20, 20)).appendField(Blockly.blynk_smartconfig);
    this.appendValueInput("server_add").appendField(Blockly.blynk_SERVER_ADD).setCheck(String);
    this.appendValueInput("auth_key", String).appendField(Blockly.blynk_IOT_AUTH).setCheck([String, Number]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl("https://gitee.com/hznupeter/Blynk_IOT/wikis/pages");
  }
};
//物联网-一键配网
Blockly.Blocks.blynk_smartconfig_esp32 = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/smartconfig.png", 20, 20)).appendField(Blockly.blynk_smartconfig);
    this.appendValueInput("server_add").appendField(Blockly.blynk_SERVER_ADD).setCheck(String);
    this.appendValueInput("auth_key", String).appendField(Blockly.blynk_IOT_AUTH).setCheck([String, Number]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl("https://gitee.com/hznupeter/Blynk_IOT/wikis/pages");
  }
};
//物联网-服务器信息
Blockly.Blocks.blynk_server_esp8266 = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/iot.png", 20, 20)).appendField(Blockly.blynk_SERVER_INFO);
    this.appendValueInput("server_add").appendField(Blockly.blynk_SERVER_ADD).setCheck(String);
    this.appendValueInput("wifi_ssid").appendField(Blockly.blynk_WIFI_SSID).setCheck(String);
    this.appendValueInput("wifi_pass").appendField(Blockly.blynk_WIFI_PASS).setCheck(String);
    this.appendValueInput("auth_key", String).appendField(Blockly.blynk_IOT_AUTH).setCheck([String, Number]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl("https://gitee.com/hznupeter/Blynk_IOT/wikis/pages");
  }
};
//物联网-服务器信息
Blockly.Blocks.blynk_server_esp32 = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/iot.png", 20, 20)).appendField(Blockly.blynk_SERVER_INFO);
    this.appendValueInput("server_add").appendField(Blockly.blynk_SERVER_ADD).setCheck(String);
    this.appendValueInput("wifi_ssid").appendField(Blockly.blynk_WIFI_SSID).setCheck(String);
    this.appendValueInput("wifi_pass").appendField(Blockly.blynk_WIFI_PASS).setCheck(String);
    this.appendValueInput("auth_key", String).appendField(Blockly.blynk_IOT_AUTH).setCheck([String, Number]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl("https://gitee.com/hznupeter/Blynk_IOT/wikis/pages");
  }
};

//虚拟管脚选择
var BLYNK_VIRTUALPIN_SELECT = [
["V0", "V0"],
["V1", "V1"],
["V2", "V2"],
["V3", "V3"],
["V4", "V4"],
["V5", "V5"],
["V6", "V6"],
["V7", "V7"],
["V8", "V8"],
["V9", "V9"],
["V10", "V10"],
["V11", "V11"],
["V12", "V12"],
["V13", "V13"],
["V14", "V14"],
["V15", "V15"],
["V16", "V16"],
["V17", "V17"],
["V18", "V18"],
["V19", "V19"],
["V20", "V20"],
["V21", "V21"],
["V22", "V22"],
["V23", "V23"],
["V24", "V24"],
["V25", "V25"],
["V26", "V26"],
["V27", "V27"],
["V28", "V28"],
["V29", "V29"],
["V30", "V30"],
["V31", "V31"],
["V32", "V32"],
["V33", "V33"],
["V34", "V34"],
["V35", "V35"],
["V36", "V36"],
["V37", "V37"],
["V38", "V38"],
["V39", "V39"],
["V40", "V40"]
];
//虚拟管脚选择
var BLYNK_TIMER_SELECT = [
["1", "1"],
["2", "2"],
["3", "3"],
["4", "4"],
["5", "5"],
["6", "6"],
["7", "7"],
["8", "8"],
["9", "9"],
["10", "10"],
["11", "11"],
["12", "12"],
["13", "13"],
["14", "14"],
["15", "15"],
["16", "16"],
];
//物联网-发送数据到app
Blockly.Blocks.blynk_iot_push_data = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/iot.png", 20, 20)).appendField(Blockly.blynk_IOT_PUSH_DATA);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.appendValueInput("data").appendField(Blockly.blynk_IOT_DATA);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(" ");
    this.setHelpUrl();
  }
};

//从app端获取数据
Blockly.Blocks.blynk_iot_get_data = {
    /**
   * Block for defining a procedure with no return value.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/iot.png", 20, 20)).appendField(Blockly.blynk_IOT_GET_DATA);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.appendDummyInput().appendField("", "PARAMS");
    //add Gear to left top
    this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"]));
    this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP);
    this.arguments_ = [];//新增参数名称
    this.argumentstype_ = [];//新增参数类型
    this.setStatements_(true);
    this.setInputsInline(true);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.statementConnection_ = null;
  },

  getVars: function () {
    return [this.getFieldValue("VAR")];
  },

  renameVar: function (oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue("VAR"))) {
      this.setTitleValue(newName, "VAR");
    }
  },

  /**
   * Add or remove the statement block from this function definition.
   * @param {boolean} hasStatements True if a statement block is needed.
   * @this Blockly.Block
   */
   setStatements_: function(hasStatements) {
    if (this.hasStatements_ === hasStatements) {
      return;
    }
    if (hasStatements) {
      this.appendStatementInput("STACK")
      .appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_DO);
      if (this.getInput("RETURN")) {
        this.moveInputBefore("STACK", "RETURN");
      }
    } else {
      this.removeInput("STACK", true);
    }
    this.hasStatements_ = hasStatements;
  },
  /**
   * Update the display of parameters for this procedure definition block.
   * Display a warning if there are duplicately named parameters.
   * @private
   * @this Blockly.Block
   */
   updateParams_: function() {
    // Check for duplicated arguments.
    var badArg = false;
    var hash = {};
    for (var i = 0; i < this.arguments_.length; i++) {
      if (hash["arg_" + this.arguments_[i].toLowerCase()]) {
        badArg = true;
        break;
      }
      hash["arg_" + this.arguments_[i].toLowerCase()] = true;
    }
    if (badArg) {
      this.setWarningText(Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING);
    } else {
      this.setWarningText(null);
    }
    // Merge the arguments into a human-readable list.
    var paramString = "";
    if (this.arguments_.length) {
      paramString = Blockly.Msg.PROCEDURES_BEFORE_PARAMS +
      " " + this.arguments_.join(", ");
    }
    // The params field is deterministic based on the mutation,
    // no need to fire a change event.
    Blockly.Events.disable();
    this.setFieldValue(paramString, "PARAMS");
    Blockly.Events.enable();
  },
  /**
   * Create XML to represent the argument inputs.
   * @param {=boolean} opt_paramIds If true include the IDs of the parameter
   *     quarks.  Used by Blockly.Procedures.mutateCallers for reconnection.
   * @return {!Element} XML storage element.
   * @this Blockly.Block
   */
   mutationToDom: function() {
    var container = document.createElement("mutation");
    for (var i = 0; i < this.arguments_.length; i++) {
      var parameter = document.createElement("arg");
      parameter.setAttribute("name", this.arguments_[i]);
      parameter.setAttribute("vartype", this.argumentstype_[i]);//新增
      container.appendChild(parameter);
    }

    // Save whether the statement input is visible.
    if (!this.hasStatements_) {
      container.setAttribute("statements", "false");
    }
    return container;
  },
   /**
   * Parse XML to restore the argument inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
   domToMutation: function(xmlElement) {
    this.arguments_ = [];
    this.argumentstype_ = [];//新增
    for (var i = 0, childNode; childNode = xmlElement.childNodes[i]; i++) {
      if (childNode.nodeName.toLowerCase() == "arg") {
        this.arguments_.push(childNode.getAttribute("name"));
  this.argumentstype_.push(childNode.getAttribute("vartype"));//新增
}
}
this.updateParams_();
Blockly.Procedures.mutateCallers(this);

    // Show or hide the statement input.
    this.setStatements_(xmlElement.getAttribute("statements") !== "false");
  },
  /**
   * Populate the mutator"s dialog with this block"s components.
   * @param {!Blockly.Workspace} workspace Mutator"s workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
   decompose: function(workspace) {
    var containerBlock = workspace.newBlock("procedures_mutatorcontainer");
    containerBlock.initSvg();

    // Check/uncheck the allow statement box.
    if (this.getInput("RETURN")) {
      containerBlock.setFieldValue(this.hasStatements_ ? "TRUE" : "FALSE",
       "STATEMENTS");
    } else {
      containerBlock.getInput("STATEMENT_INPUT").setVisible(false);
    }

    // Parameter list.
    var connection = containerBlock.getInput("STACK").connection;
    for (var i = 0; i < this.arguments_.length; i++) {
      var paramBlock = workspace.newBlock("procedures_mutatorarg");
      paramBlock.initSvg();
      paramBlock.setFieldValue(this.arguments_[i], "NAME");
      paramBlock.setFieldValue(this.argumentstype_[i], "TYPEVAR");//新增
      // Store the old location.
      paramBlock.oldLocation = i;
      connection.connect(paramBlock.previousConnection);
      connection = paramBlock.nextConnection;
    }
    // Initialize procedure"s callers with blank IDs.
    Blockly.Procedures.mutateCallers(this);
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog"s components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
   compose: function(containerBlock) {
    // Parameter list.
    this.arguments_ = [];
    this.paramIds_ = [];
    this.argumentstype_= [];//新增
    var paramBlock = containerBlock.getInputTargetBlock("STACK");
    while (paramBlock) {
      this.arguments_.push(paramBlock.getFieldValue("NAME"));
      this.argumentstype_.push(paramBlock.getFieldValue("TYPEVAR"));//新增
      this.paramIds_.push(paramBlock.id);
      paramBlock = paramBlock.nextConnection &&
      paramBlock.nextConnection.targetBlock();
    }
    this.updateParams_();
    Blockly.Procedures.mutateCallers(this);

    // Show/hide the statement input.
    var hasStatements = containerBlock.getFieldValue("STATEMENTS");
    if (hasStatements !== null) {
      hasStatements = hasStatements == "TRUE";
      if (this.hasStatements_ != hasStatements) {
        if (hasStatements) {
          this.setStatements_(true);
          // Restore the stack, if one was saved.
          Blockly.Mutator.reconnect(this.statementConnection_, this, "STACK");
          this.statementConnection_ = null;
        } else {
          // Save the stack, then disconnect it.
          var stackConnection = this.getInput("STACK").connection;
          this.statementConnection_ = stackConnection.targetConnection;
          if (this.statementConnection_) {
            var stackBlock = stackConnection.targetBlock();
            stackBlock.unplug();
            stackBlock.bumpNeighbours_();
          }
          this.setStatements_(false);
        }
      }
    }
  },
  /**
   * Dispose of any callers.
   * @this Blockly.Block
   */
   dispose: function() {
    var name = this.getFieldValue("NAME");
    Blockly.Procedures.disposeCallers(name, this.workspace);
    // Call parent"s destructor.
    this.constructor.prototype.dispose.apply(this, arguments);
  },
  /**
   * Return the signature of this procedure definition.
   * @return {!Array} Tuple containing three elements:
   *     - the name of the defined procedure,
   *     - a list of all its arguments,
   *     - that it DOES NOT have a return value.
   * @this Blockly.Block
   */
   getProcedureDef: function() {
    return ["ignoreProcedureIotGetData", this.arguments_, false];
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
   getVars: function() {
    return this.arguments_;
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block"s variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
   renameVar: function(oldName, newName) {
    var change = false;
    for (var i = 0; i < this.arguments_.length; i++) {
      if (Blockly.Names.equals(oldName, this.arguments_[i])) {
        this.arguments_[i] = newName;
        change = true;
      }
    }
    if (change) {
      this.updateParams_();
      // Update the mutator"s variables if the mutator is open.
      if (this.mutator.isVisible()) {
        var blocks = this.mutator.workspace_.getAllBlocks();
        for (var i = 0, block; block = blocks[i]; i++) {
          if (block.type == "procedures_mutatorarg" &&
            Blockly.Names.equals(oldName, block.getFieldValue("NAME"))) {
            block.setFieldValue(newName, "NAME");
        }
      }
    }
  }
},
  /**
   * Add custom menu options to this block"s context menu.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
   customContextMenu: function(options) {
    // Add option to create caller.
    var option = {enabled: true};
    var name = this.getFieldValue("NAME");
    option.text = Blockly.Msg.PROCEDURES_CREATE_DO.replace("%1", name);
    var xmlMutation = goog.dom.createDom("mutation");
    xmlMutation.setAttribute("name", name);
    for (var i = 0; i < this.arguments_.length; i++) {
      var xmlArg = goog.dom.createDom("arg");
      xmlArg.setAttribute("name", this.arguments_[i]);
      xmlArg.setAttribute("type", this.argumentstype_[i]);//新增
      xmlMutation.appendChild(xmlArg);
    }
    var xmlBlock = goog.dom.createDom("block", null, xmlMutation);
    xmlBlock.setAttribute("type", this.callType_);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);

    // Add options to create getters for each parameter.
    if (!this.isCollapsed()) {
      for (var i = 0; i < this.arguments_.length; i++) {
        var option = {enabled: true};
        var name = this.arguments_[i];
        option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1", name);
        var xmlField = goog.dom.createDom("field", null, name);
        xmlField.setAttribute("name", "VAR");
  xmlField.setAttribute("type", "TYPEVAR");//新增
  var xmlBlock = goog.dom.createDom("block", null, xmlField);
  xmlBlock.setAttribute("type", "variables_get");
  option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
  options.push(option);
}
}
},
callType_: "procedures_callnoreturn"
};


Blockly.Blocks["procedures_mutatorarg"] = {
  /**
   * Mutator block for procedure argument.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput()
    .appendField(Blockly.Msg.PROCEDURES_MUTATORARG_TITLE)
    .appendField(new Blockly.FieldDropdown([[Blockly.LANG_MATH_INT, "int"], [Blockly.LANG_MATH_LONG, "long"], [Blockly.LANG_MATH_FLOAT, "float"], [Blockly.LANG_MATH_BOOLEAN, "boolean"], [Blockly.LANG_MATH_BYTE, "byte"], [Blockly.LANG_MATH_CHAR, "char"], [Blockly.LANG_MATH_STRING, "String"]]), "TYPEVAR")
    .appendField(new Blockly.FieldTextInput("x", this.validator_), "NAME");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP);
    this.contextMenu = false;
  },
  /**
   * Obtain a valid name for the procedure.
   * Merge runs of whitespace.  Strip leading and trailing whitespace.
   * Beyond this, all names are legal.
   * @param {string} newVar User-supplied name.
   * @return {?string} Valid name, or null if a name was not specified.
   * @private
   * @this Blockly.Block
   */
   validator_: function(newVar) {
    newVar = newVar.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
    return newVar || null;
  }
};


//blynk定时器
Blockly.Blocks.Blynk_iot_timer = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendValueInput("TIME")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.blynk_TIMER).appendField(new Blockly.FieldDropdown(BLYNK_TIMER_SELECT), "timerNo");
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_MILLIS);
    this.appendStatementInput("DO")
    .appendField(Blockly.MIXLY_MSTIMER2_DO);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
  }
};
//blynk硬件已连接
Blockly.Blocks.Blynk_iot_BLYNK_CONNECTED = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("")
    .appendField(Blockly.BLYNK_CONNECTED);
    this.appendStatementInput("DO")
    .appendField(Blockly.MIXLY_MSTIMER2_DO);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
  }
};

//blynk硬件已连接
Blockly.Blocks.Blynk_iot_BLYNK_APP_CONNECTED = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("")
    .appendField(Blockly.BLYNK_APP_CONNECTED);
    this.appendStatementInput("DO")
    .appendField(Blockly.MIXLY_MSTIMER2_DO);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
  }
};

//blynk硬件已连接
Blockly.Blocks.Blynk_iot_BLYNK_APP_DISCONNECTED = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("")
    .appendField(Blockly.BLYNK_APP_DISCONNECTED);
    this.appendStatementInput("DO")
    .appendField(Blockly.MIXLY_MSTIMER2_DO);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
  }
};


//blynk 同步所有管脚状态
Blockly.Blocks.Blynk_iot_BLYNK_syncAll = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("")
    .appendField(Blockly.BLYNK_syncAll);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

//blynk 同步虚拟管脚状态
Blockly.Blocks.blynk_iot_syncVirtual = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/iot.png", 20, 20)).appendField(Blockly.blynk_IOT_syncVirtual);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(" ");
    this.setHelpUrl();
  }
};
//物联网-LED组件颜色&开关
Blockly.Blocks.blynk_iot_WidgetLED_COLOR = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/widget_led.png", 20, 20)).appendField(Blockly.blynk_IOT_WidgetLED);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin").appendField(Blockly.blynk_iot_WidgetLED_COLOR);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldColour("#ff0000"), "RGB_LED_COLOR");
    this.appendDummyInput("").appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_HIGH, "HIGH"], [Blockly.MIXLY_LOW, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(" ");
    this.setHelpUrl();
  }
};

//物联网-LED组件颜色&亮度
Blockly.Blocks.blynk_iot_WidgetLED_VALUE = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/widget_led.png", 20, 20)).appendField(Blockly.blynk_IOT_WidgetLED);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin").appendField(Blockly.blynk_iot_WidgetLED_COLOR);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldColour("#ff0000"), "RGB_LED_COLOR");
    this.appendValueInput("NUM", Number)
    .appendField(Blockly.blynk_IOT_WidgetLED_VALUE)
    .setCheck(Number);
    //this.appendValueInput("data").appendField(Blockly.blynk_IOT_DATA);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(" ");
    this.setHelpUrl();
  }
};

var AC_TYPE = [
[Blockly.blynk_IOT_GREE, "Gree"],
[Blockly.blynk_IOT_MIDEA, "Midea"],
];

var AC_POWER = [
[Blockly.blynk_IOT_ON, "true"],
[Blockly.blynk_IOT_OFF, "false"]
];
var AC_MODE = [
[Blockly.blynk_IOT_FAN, "FAN"], 
[Blockly.blynk_IOT_HEAT, "HEAT"],
[Blockly.blynk_IOT_COOL, "COOL"],
[Blockly.blynk_IOT_DRY, "DRY"], 
[Blockly.blynk_IOT_AUTO, "AUTO"]];
var AC_FAN = [
[Blockly.blynk_IOT_FAN_3, "FAN_3"],
[Blockly.blynk_IOT_FAN_2, "FAN_2"],
[Blockly.blynk_IOT_FAN_1, "FAN_1"], 
[Blockly.blynk_IOT_FAN_0, "FAN_0"]];

//红外控制空调
Blockly.Blocks.blynk_iot_ir_send_ac = {
  init: function () {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(Blockly.blynk_IOT_IR_SEND).appendField(new Blockly.FieldDropdown(AC_TYPE), "AC_TYPE");
    this.appendValueInput("PIN", Number).appendField(Blockly.MIXLY_PIN).setCheck(Number);
    this.appendDummyInput("").appendField(Blockly.blynk_IOT_IR_POWER).appendField(new Blockly.FieldDropdown(AC_POWER), "AC_POWER");
    this.appendDummyInput("").appendField(Blockly.blynk_IOT_IR_MODE).appendField(new Blockly.FieldDropdown(AC_MODE), "AC_MODE");
    this.appendDummyInput("").appendField(Blockly.blynk_IOT_IR_FAN).appendField(new Blockly.FieldDropdown(AC_FAN), "AC_FAN");
    this.appendValueInput("AC_TEMP", Number).appendField(Blockly.blynk_IOT_IR_TEMP).setCheck(Number);
    this.setPreviousStatement(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_IR_SEND_NEC_TOOLTIP);
  }
};

//红外接收模块(raw)
Blockly.Blocks.blynk_iot_ir_recv_raw = {
  init: function () {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendValueInput("PIN", Number).appendField(Blockly.blynk_IOT_IR_RECEIVE_RAW).setCheck(Number);
      //  this.appendValueInput("PIN", Number).appendField(Blockly.MIXLY_PIN).setCheck(Number);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setInputsInline(true);
      this.setTooltip(Blockly.blynk_IOT_IR_RECEIVE_RAW_TOOLTIP);
    }
  };

//红外发送
Blockly.Blocks.blynk_iot_ir_send = {
  init: function () {
   this.setColour(Blockly.Blocks.blynk.HUE1);
   this.appendValueInput("PIN", Number).appendField(Blockly.blynk_IOT_IR_SEND).setCheck(Number);
   this.appendDummyInput("").appendField(Blockly.blynk_IOT_IR_SEND_CODE).appendField(new Blockly.FieldTextInput('0,0,0'), 'IR_CODE');
   this.setPreviousStatement(true);
   this.setNextStatement(true);
   this.setInputsInline(true);
   this.setTooltip(Blockly.blynk_IOT_IR_SEND_CODE_TOOLTIP);
 }
}


//物联网-发送邮件
Blockly.Blocks.blynk_email = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/widget_email.png", 20, 20)).appendField(Blockly.blynk_EMAIL);
    this.appendValueInput("email_add").appendField(Blockly.blynk_EMAIL_ADD).setCheck(String);
    this.appendValueInput("Subject").appendField(Blockly.blynk_EMAIL_SUBJECT).setCheck(String);
    this.appendValueInput("content").appendField(Blockly.blynk_EMAIL_CONTENT).setCheck(String);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};
//物联网-发送通知
Blockly.Blocks.blynk_notify = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/widget_push_notifications.png", 20, 20)).appendField(Blockly.blynk_NOTIFY);
    this.appendValueInput("content").appendField(Blockly.blynk_NOTIFY_CONTENT).setCheck([String,Number,Boolean]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip();
    this.setHelpUrl();
  }
};

//物联网-终端组件显示文本
Blockly.Blocks.blynk_terminal = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/widget_terminal.png", 20, 20)).appendField(Blockly.blynk_terminal);
    this.appendValueInput("content").appendField(Blockly.blynk_NOTIFY_CONTENT).setCheck([String,Number,Boolean]);
    this.appendDummyInput("").appendField(Blockly.BLYNK_VIRTUALPIN);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip();
    this.setHelpUrl();
  }
};
//物联网-视频流
Blockly.Blocks.blynk_videourl = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/widget_video.png", 20, 20));
    this.appendValueInput("url").appendField(Blockly.blynk_VIDEOURL).setCheck(String);
    this.appendDummyInput("").appendField(Blockly.BLYNK_VIRTUALPIN);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};
//物联网-桥接授权码
Blockly.Blocks.blynk_bridge_auth = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/widget_bridge.png", 20, 20));
    this.appendValueInput("auth").appendField(Blockly.blynk_BRIDGE_AUTH).setCheck(String);
    this.appendDummyInput("").appendField(Blockly.BLYNK_VIRTUALPIN);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};

//物联网-桥接数字输出
Blockly.Blocks.blynk_bridge_digitalWrite = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/widget_bridge.png", 20, 20)).appendField(Blockly.blynk_bridge_digitalWrite);
    this.appendValueInput("PIN", Number).appendField(Blockly.MIXLY_PIN).setCheck(Number);
    this.appendValueInput("STAT").appendField(Blockly.MIXLY_STAT).setCheck([Number,Boolean]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};

//物联网-桥接模拟输出
Blockly.Blocks.blynk_bridge_AnaloglWrite = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/widget_bridge.png", 20, 20)).appendField(Blockly.blynk_bridge_AnaloglWrite);
    this.appendValueInput("PIN", Number).appendField(Blockly.MIXLY_PIN).setCheck(Number);
    this.appendValueInput("NUM", Number).appendField(Blockly.MIXLY_VALUE2).setCheck(Number);  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};

//物联网-桥接虚拟管脚
Blockly.Blocks.blynk_bridge_VPin = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/widget_bridge.png", 20, 20)).appendField(Blockly.BLYNK_BRIDGE_VIRTUALPIN);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.appendValueInput("NUM").appendField(Blockly.MIXLY_VALUE2);  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};

//物联网-RTC组件初始化
Blockly.Blocks.blynk_WidgetRTC_init = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/widget_rtc.png", 20, 20)).appendField(Blockly.blynk_WidgetRTC_init);
    this.appendValueInput("NUM", Number).appendField(Blockly.blynk_WidgetRTC_setSyncInterval).setCheck(Number); 
    this.appendDummyInput("").appendField(Blockly.blynk_WidgetRTC_mintues);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};

//传感器-实时时钟块_时间变量
var RTC_TIME_TYPE = [
[Blockly.MIXLY_YEAR, "year"],
[Blockly.MIXLY_MONTH, "month"],
[Blockly.MIXLY_DAY, "day"],
[Blockly.MIXLY_HOUR, "hour"],
[Blockly.MIXLY_MINUTE, "minute"],
[Blockly.MIXLY_SECOND, "second"],
[Blockly.MIXLY_WEEK, "weekday"]
];

//传感器-实时时钟块_获取时间
Blockly.Blocks.blynk_WidgetRTC_get_time = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/widget_rtc.png", 20, 20)).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.blynk_WidgetRTC_get_time);

    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(RTC_TIME_TYPE), "TIME_TYPE");
    this.setInputsInline(true);
    this.setOutput(true, Number);
  }
};

//播放音乐
Blockly.Blocks.blynk_iot_playmusic = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/widget_player.png", 20, 20)).appendField(Blockly.blynk_iot_playmusic);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.appendStatementInput('DO').appendField('');
    this.setInputsInline(true);
    this.setTooltip("");
  }
};
//从终端获取字符串
Blockly.Blocks.blynk_iot_terminal_get = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/widget_terminal.png", 20, 20)).appendField(Blockly.blynk_IOT_terminal_get);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.appendStatementInput('DO').appendField('');
    this.setInputsInline(true);
    this.setTooltip("");
  }
};

//光线传感器
Blockly.Blocks.blynk_light = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/widget_light_sensor.png", 20, 20)).appendField(Blockly.blynk_LIGHT);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.appendStatementInput('DO').appendField('');
    this.setInputsInline(true);
    this.setTooltip("");
  }
};

//重力传感器
Blockly.Blocks.blynk_gravity = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/widget_gravity_sensor.png", 20, 20)).appendField(Blockly.blynk_GRAVITY);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.appendStatementInput('DO').appendField('');
    this.setInputsInline(true);
    this.setTooltip("");
  }
};

//加速度传感器
Blockly.Blocks.blynk_acc = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/widget_accelerometer_sensor.png", 20, 20)).appendField(Blockly.blynk_ACC);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.appendStatementInput('DO').appendField('');
    this.setInputsInline(true);
    this.setTooltip(Blockly.blynk_ACC_tooltip);
  }
};

//时间输入-简单
Blockly.Blocks.blynk_time_input_1 = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.HUE1);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/blynk/widget_timeinput.png", 20, 20)).appendField(Blockly.blynk_time_input_1);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.appendStatementInput('DO').appendField('');
    this.setInputsInline(true);
    this.setTooltip(Blockly.blynk_ACC_tooltip);
  }
};

//RGB
Blockly.Blocks.display_rgb_init = {
  init: function () {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_RGB)
    this.appendValueInput("PIN", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_PIN);
    this.appendValueInput("LEDCOUNT")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_RGB_COUNT);
    this.appendValueInput("Brightness")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_BRIGHTNESS);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks.display_rgb = {
  init: function () {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_RGB)
    this.appendValueInput("PIN", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_PIN);
    this.appendValueInput("_LED_")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_RGB_NUM);
    this.appendValueInput("RVALUE")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_RGB_R);
    this.appendValueInput("GVALUE")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_RGB_G);
    this.appendValueInput("BVALUE")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_RGB_B);

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};
Blockly.Blocks.display_rgb2 = {
  init: function () {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_RGB)
    this.appendValueInput("PIN", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_PIN);
    this.appendValueInput("_LED_")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_RGB_NUM);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(new Blockly.FieldColour("#ff0000"), "RGB_LED_COLOR");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks.display_rgb_rainbow1 = {
  init: function () {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_RGB)
    this.appendValueInput("PIN", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_PIN);
    this.appendValueInput("WAIT")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_RGBdisplay_rgb_rainbow1);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.display_rgb_rainbow2 = {
  init: function () {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_RGB)
    this.appendValueInput("PIN", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_PIN);
    this.appendValueInput("WAIT")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_RGBdisplay_rgb_rainbow2);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

var DISPLAY_RAINBOW_TYPE = [
[Blockly.MIXLY_RGB_DISPLAY_RAINBOW_TYPE_1, "normal"],
[Blockly.MIXLY_RGB_DISPLAY_RAINBOW_TYPE_2, "change"]
];

Blockly.Blocks.display_rgb_rainbow3 = {
  init: function () {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_RGB)
    this.appendValueInput("PIN", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_PIN);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(DISPLAY_RAINBOW_TYPE), "TYPE");
    this.appendValueInput("rainbow_color")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_RGB_display_rgb_rainbow3);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

//显示-OLED-变量
var WorH = [
[Blockly.OLED_HEIGHT, 'Height'],
[Blockly.OLED_WIDTH, 'Width']
];

var LINESELECT = [
[Blockly.OLED_HOR, "H"],
[Blockly.OLED_VER, "V"]
];
var FRAMESELECT = [
[Blockly.OLED_HOLLOW, "drawFrame"],
[Blockly.OLED_SOLID, "drawBox"]
];
var CIRCLESELECT = [
[Blockly.OLED_HOLLOW, "drawCircle"],
[Blockly.OLED_SOLID, "drawDisc"]
];
//
var RADSELECT = [
[Blockly.OLED_HOLLOW, "drawRFrame"],
[Blockly.OLED_SOLID, "drawRBox"]
];
//圆选择
var CIRCLEOPTELECT = [
[Blockly.OLED_WHOLE_CICILE, "U8G_DRAW_ALL"],
[Blockly.OLED_UP_R, "U8G_DRAW_UPPER_RIGHT"],
[Blockly.OLED_UP_L, "U8G_DRAW_UPPER_LEFT"],
[Blockly.OLED_LOW_R, "U8G_DRAW_LOWER_RIGHT"],
[Blockly.OLED_LOW_L, "U8G_DRAW_LOWER_LEFT"]
];
//空心、实心椭圆
var ELLIPSESELECT = [
[Blockly.OLED_HOLLOW, "drawEllipse"],
[Blockly.OLED_SOLID, "drawFilledEllipse"]
];

//字体选择
var FONT_TYPE_SELECT = [
["timR14", "timR14_tr"],
["timR08", "timR08_tr"],
["timR18", "timR18_tr"],
["timR24", "timR24_tr"],
["fur11", "fur11_tf"],
["fur14", "fur14_tf"],
["fur17", "fur17_tf"],
["fur20", "fur20_tf"],
["ncenR10", "ncenR10_tf"],
["ncenR12", "ncenR12_tf"],
["ncenR14", "ncenR14_tf"],
["ncenR18", "ncenR18_tf"],
["ncenR24", "ncenR24_tf"]
];

//显示-OLED-初始化2(iic)
Blockly.Blocks.oled_init2 = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_INIT2);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.OLED_INIT2_TOOLTIP);
  }
};
//显示-OLED-清屏幕
Blockly.Blocks.oled_clear = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_CLEAR);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip();
  }
};
//显示-OLED-获取高度/宽度
Blockly.Blocks.oled_getHeight_or_Width = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);

    this.appendDummyInput("").appendField(Blockly.OLEDGET).appendField(new Blockly.FieldDropdown(WorH), "WHAT");
    this.setOutput(true, Number);
    this.setTooltip(Blockly.OLED_GET_HEIGHT_TOOLTIP);
  }
};

//显示-OLED-图像（汉字）高度选择
var OLED_BITMAP_HEIGHT_SELECT = [
["16", "16"],
["8", "8"],
["24", "24"],
["32", "32"],
["40", "40"],
["48", "48"],
["56", "56"],
["64", "64"]
];

//显示-OLED-图像（汉字）宽度选择
var OLED_BITMAP_WIDTH_SELECT = [
["16", "16"],
["8", "8"],
["24", "24"],
["32", "32"],
["40", "40"],
["48", "48"],
["56", "56"],
["64", "64"],
["72", "72"],
["80", "80"],
["88", "88"],
["96", "96"],
["104", "104"],
["112", "112"],
["120", "120"],
["128", "128"]
];

//显示-oled-定义字模名称和数据
Blockly.Blocks['oled_define_bitmap_data'] = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_BITMAP_NAME).appendField(new Blockly.FieldTextInput('bitmap1'), 'VAR').appendField(Blockly.OLED_BITMAP_DATA).appendField(new Blockly.FieldTextInput('0x80,0x00,0x84,0x10,0x88,0x10,0x90,0x08,0x90,0x04,0x80,0x00,0xFE,0x3F,0xC0,0x01, 0xA0,0x02,0xA0,0x02,0x90,0x04,0x88,0x08,0x84,0x10,0x83,0x60,0x80,0x00,0x80,0x00'), 'TEXT');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.OLED_DEF_BMP_DATA_TOOLTIP);
  }
}

//显示-OLED-显示位图（汉字）
Blockly.Blocks.oled_showBitmap = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_BITMAP);
    this.appendValueInput("START_X", Number).appendField(Blockly.OLED_POSX).setCheck(Number);
    this.appendValueInput("START_Y", Number).appendField(Blockly.OLED_POSY).setCheck(Number);
    this.appendDummyInput("").appendField(Blockly.OLED_WIDTH).appendField(new Blockly.FieldDropdown(OLED_BITMAP_WIDTH_SELECT), "WIDTH");
    this.appendDummyInput("").appendField(Blockly.OLED_HEIGHT).appendField(new Blockly.FieldDropdown(OLED_BITMAP_HEIGHT_SELECT), "HEIGHT");
    this.appendValueInput("bitmap_name", String).appendField(Blockly.OLED_BITMAP_NAME).setCheck(String);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.OLED_SHOW_BMP_TOOLTIP);
  }
};

//显示-OLED-画点
Blockly.Blocks.oled_drawPixe = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_DRAWPIXE);
    this.appendValueInput("POS_X", Number).appendField(Blockly.OLED_POSX).setCheck(Number);
    this.appendValueInput("POS_Y", Number).appendField(Blockly.OLED_POSY).setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.OLED_DRAW_PIXE_TOOLTIP);
  }
};

//显示-OLED-画线
Blockly.Blocks.oled_drawLine = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_DRAWLINE);
    this.appendValueInput("START_X", Number).appendField(Blockly.OLED_START_X).setCheck(Number);
    this.appendValueInput("START_Y", Number).appendField(Blockly.OLED_START_Y).setCheck(Number);
    this.appendValueInput("END_X", Number).appendField(Blockly.OLED_END_X).setCheck(Number);
    this.appendValueInput("END_Y", Number).appendField(Blockly.OLED_END_Y).setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.OLED_DRAW_LINE_TOOLTIP);
  }
};

//显示-OLED-画直线
Blockly.Blocks.oled_draw_Str_Line = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_DRAWSTRLINE);
    this.appendValueInput("START_X", Number).appendField(Blockly.OLED_START_X).setCheck(Number);
    this.appendValueInput("START_Y", Number).appendField(Blockly.OLED_START_Y).setCheck(Number);
    this.appendValueInput("LENGTH", Number).appendField(Blockly.OLED_LENGTH).setCheck(Number);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(LINESELECT), "TYPE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("x(0~127),y(0~63)");
  }
};

//显示-OLED-新建页面
Blockly.Blocks.oled_page = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput().appendField(Blockly.OLED_PAGE);
    this.appendStatementInput('DO').appendField('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.oled_page_tooltip);
  }
};

//显示-OLED-画三角
Blockly.Blocks.oled_drawTriangle = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_DRAW_TRIANGLE);
    this.appendValueInput("D0_X", Number).appendField(Blockly.OLED_D0_X).setCheck(Number);
    this.appendValueInput("D0_Y", Number).appendField(Blockly.OLED_D0_Y).setCheck(Number);
    this.appendValueInput("D1_X", Number).appendField(Blockly.OLED_D1_X).setCheck(Number);
    this.appendValueInput("D1_Y", Number).appendField(Blockly.OLED_D1_Y).setCheck(Number);
    this.appendValueInput("D2_X", Number).appendField(Blockly.OLED_D2_X).setCheck(Number);
    this.appendValueInput("D2_Y", Number).appendField(Blockly.OLED_D2_Y).setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("");
  }
};

//显示-OLED-画长方形
Blockly.Blocks.oled_drawFrame = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_DRAW_RECTANGLE);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(FRAMESELECT), "TYPE");
    this.appendValueInput("D0_X", Number).appendField(Blockly.OLED_L_U_X).setCheck(Number);
    this.appendValueInput("D0_Y", Number).appendField(Blockly.OLED_L_U_Y).setCheck(Number);
    this.appendValueInput("WIDTH", Number).appendField(Blockly.OLED_WIDTH).setCheck(Number);
    this.appendValueInput("HEIGHT", Number).appendField(Blockly.OLED_HEIGHT).setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("x(0~127),y(0~63)");
  }
};

//显示-OLED-画圆角矩形
Blockly.Blocks.oled_drawRFrame = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_DRAW_RAD_RECTANGLE);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(RADSELECT), "TYPE");
    this.appendValueInput("D0_X", Number).appendField(Blockly.OLED_L_U_X).setCheck(Number);
    this.appendValueInput("D0_Y", Number).appendField(Blockly.OLED_L_U_Y).setCheck(Number);
    this.appendValueInput("WIDTH", Number).appendField(Blockly.OLED_WIDTH).setCheck(Number);
    this.appendValueInput("HEIGHT", Number).appendField(Blockly.OLED_HEIGHT).setCheck(Number);
    this.appendValueInput("RADIUS", Number).appendField(Blockly.OLED_RADIUS).setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("x(0~127),y(0~63)");
  }
};

//显示-OLED-画圆（空心，实心）
Blockly.Blocks.oled_drawCircle = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_DRAW_CIRCLE);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(CIRCLESELECT), "TYPE");
    this.appendValueInput("D0_X", Number).appendField(Blockly.OLED_CENTER_CIRCLE_X).setCheck(Number);
    this.appendValueInput("D0_Y", Number).appendField(Blockly.OLED_CENTER_CIRCLE_Y).setCheck(Number);
    this.appendValueInput("RADIUS", Number).appendField(Blockly.OLED_CIRCLE_RADIUS).setCheck(Number);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(CIRCLEOPTELECT), "OPT");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("x(0~127),y(0~63)");
  }
};

//显示-OLED-画椭圆（空心，实心）
Blockly.Blocks.oled_drawEllipse = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_DRAW_ELLIPSE);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(ELLIPSESELECT), "TYPE");
    this.appendValueInput("D0_X", Number).appendField(Blockly.OLED_CENTER_CIRCLE_X).setCheck(Number);
    this.appendValueInput("D0_Y", Number).appendField(Blockly.OLED_CENTER_CIRCLE_Y).setCheck(Number);
    this.appendValueInput("RADIUS_X", Number).appendField(Blockly.OLED_ELLIPSE_RADIUS_X).setCheck(Number);
    this.appendValueInput("RADIUS_Y", Number).appendField(Blockly.OLED_ELLIPSE_RADIUS_Y).setCheck(Number);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(CIRCLEOPTELECT), "OPT");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.OLED_DRAW_ELLIPSE_TOOLTIP);
  }
};

//显示-OLED-显示字符串
Blockly.Blocks.oled_drawStr = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_DRAWSTR);
    this.appendValueInput("POS_X", Number).appendField(Blockly.OLED_START_X).setCheck(Number);
    this.appendValueInput("POS_Y", Number).appendField(Blockly.OLED_START_Y).setCheck(Number);
    this.appendValueInput("TEXT", String).appendField(Blockly.OLED_STRING).setCheck([Number, String]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("x(0~127),y(0~63)");
  }
};

//显示-OLED-设置字体
Blockly.Blocks.oled_setFont = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_SET_FONT);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(FONT_TYPE_SELECT), "TYPE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.oled_setFont_tooltip);
  }
};

//显示-OLED-显示字符串
Blockly.Blocks.oled_print = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_PRINT_VAR);
    this.appendValueInput("POS_X", Number).appendField(Blockly.OLED_START_X).setCheck(Number);
    this.appendValueInput("POS_Y", Number).appendField(Blockly.OLED_START_Y).setCheck(Number);
    this.appendValueInput("TEXT", String).appendField(Blockly.OLED_STRING).setCheck([Number, String]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.oled_print_tooltip);
  }
};

//显示-OLED-显示多行文本
Blockly.Blocks.oled_draw4Str = {
  init: function() {
    this.appendDummyInput().appendField(Blockly.oled_draw4Str);
    this.appendDummyInput().appendField(Blockly.OLED_PRINT);
    this.appendValueInput("Text_line1", 'String').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.OLED_LINE1);
    this.appendValueInput("Text_line2", 'String').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.OLED_LINE2);
    this.appendValueInput("Text_line3", 'String').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.OLED_LINE3);
    this.appendValueInput("Text_line4", 'String').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.OLED_LINE4);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.display.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


//蜂鸣器频率
var TONE_NOTES = [
["NOTE_C5", "532"],
["NOTE_D5", "587"],
["NOTE_E5", "659"],
["NOTE_F5", "698"],
["NOTE_G5", "784"],
["NOTE_A5", "880"],
["NOTE_B5", "988"],
["NOTE_C6", "1048"],
["NOTE_D6", "1176"],
["NOTE_E6", "1320"],
["NOTE_F6", "1396"],
["NOTE_G6", "1568"],
["NOTE_A6", "1760"],
["NOTE_B6", "1976"],
["NOTE_C7", "2096"],
["NOTE_D7", "2352"],
["NOTE_E7", "2640"],
["NOTE_F7", "2792"],
["NOTE_G7", "3136"],
["NOTE_A7", "3520"],
["NOTE_B7", "3952"]];

//执行器-蜂鸣器的频率选择
Blockly.Blocks.tone_notes = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.MusicHUE);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(TONE_NOTES), 'STAT');
    this.setOutput(true, Number);
  }
};

//执行器-蜂鸣器模块
Blockly.Blocks.controls_tone2 = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.MusicHUE);
    this.appendDummyInput("").appendField(Blockly.MIXLY_DF_BUZZER);
    this.appendValueInput("PIN", Number).appendField(Blockly.MIXLY_PIN).setCheck(Number);
    this.appendValueInput('FREQUENCY').setCheck(Number).appendField(Blockly.MIXLY_FREQUENCY);
    this.appendValueInput('DURATION', Number).setCheck(Number).appendField(Blockly.MIXLY_DURATION);
    this.appendDummyInput("").appendField(Blockly.MIXLY_DELAY_MS);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

//执行器-蜂鸣器停止模块
Blockly.Blocks.controls_notone = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.MusicHUE);
    this.appendDummyInput("").appendField(Blockly.MIXLY_NOTONE_PIN);
    this.appendValueInput("PIN", Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

//MP3播放控制
var GD5800_MP3_CONTROL_TYPE = [
[Blockly.MIXLY_MP3_PLAY, "play();"],
[Blockly.MIXLY_MP3_PAUSE, "pause();"],
[Blockly.MIXLY_MP3_NEXT, "next();"],
[Blockly.MIXLY_MP3_PREV, "prev();"],
[Blockly.MIXLY_MP3_VOL_UP, "volumeUp();"],
[Blockly.MIXLY_MP3_VOL_DOWN, "volumeDn();"]
];

//GD5800 MP3模块
Blockly.Blocks.GD5800_MP3_CONTROL = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.MusicHUE);
    this.appendDummyInput("").appendField(Blockly.GD5800_MP3);
    this.appendValueInput("RXPIN", Number).appendField(Blockly.MIXLY_TX_PIN).setCheck(Number);
    this.appendValueInput("TXPIN", Number).appendField(Blockly.MIXLY_RX_PIN).setCheck(Number);
    this.appendDummyInput("").appendField(Blockly.MIXLY_STAT).appendField(new Blockly.FieldDropdown(GD5800_MP3_CONTROL_TYPE), "CONTROL_TYPE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};

//MP3循环模式
var GD5800_MP3_LOOP_MODE = [
[Blockly.MIXLY_MP3_LOOP_ALL, "MP3_LOOP_ALL"],
[Blockly.MIXLY_MP3_LOOP_FOLDER, "MP3_LOOP_FOLDER"],
[Blockly.MIXLY_MP3_LOOP_ONE, "MP3_LOOP_ONE"],
[Blockly.MIXLY_MP3_LOOP_RAM, "MP3_LOOP_RAM"]
];

//GD5800 MP3模块循环模式
Blockly.Blocks.GD5800_MP3_LOOP_MODE = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.MusicHUE);
    this.appendDummyInput("").appendField(Blockly.GD5800_MP3);
    this.appendValueInput("RXPIN", Number).appendField(Blockly.MIXLY_PIN).setCheck(Number);
    this.appendValueInput("TXPIN", Number).appendField(Blockly.MIXLY_PIN).setCheck(Number);
    this.appendDummyInput("").appendField(Blockly.MIXLY_MP3_LOOP_MODE).appendField(Blockly.MIXLY_STAT).appendField(new Blockly.FieldDropdown(GD5800_MP3_LOOP_MODE), "LOOP_MODE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};

//MP3 设置EQ
var GD5800_MP3_EQ_MODE = [
[Blockly.MIXLY_MP3_EQ_NORMAL, "MP3_EQ_NORMAL"],
[Blockly.MIXLY_MP3_EQ_POP, "MP3_EQ_POP"],
[Blockly.MIXLY_MP3_EQ_ROCK, "MP3_EQ_ROCK"],
[Blockly.MIXLY_MP3_EQ_JAZZ, "MP3_EQ_JAZZ"],
[Blockly.MIXLY_MP3_EQ_CLASSIC, "MP3_EQ_CLASSIC"],
[Blockly.MIXLY_MP3_EQ_BASS, "MP3_EQ_BASS"]
];

//GD5800 MP3模块EQ模式
Blockly.Blocks.GD5800_MP3_EQ_MODE = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.MusicHUE);
    this.appendDummyInput("").appendField(Blockly.GD5800_MP3);
    this.appendValueInput("RXPIN", Number).appendField(Blockly.MIXLY_PIN).setCheck(Number);
    this.appendValueInput("TXPIN", Number).appendField(Blockly.MIXLY_PIN).setCheck(Number);
    this.appendDummyInput("").appendField(Blockly.MIXLY_MP3_EQ_MODE).appendField(Blockly.MIXLY_STAT).appendField(new Blockly.FieldDropdown(GD5800_MP3_EQ_MODE), "EQ_MODE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};

//GD5800 MP3模块设置音量
Blockly.Blocks.GD5800_MP3_VOL = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.MusicHUE);
    this.appendDummyInput("").appendField(Blockly.GD5800_MP3);
    this.appendValueInput("RXPIN", Number).appendField(Blockly.MIXLY_PIN).setCheck(Number);
    this.appendValueInput("TXPIN", Number).appendField(Blockly.MIXLY_PIN).setCheck(Number);
    this.appendDummyInput("").appendField(Blockly.MIXLY_MP3_VOL);
    this.appendValueInput("vol", Number).appendField(Blockly.MIXLY_STAT).setCheck(Number);  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};

//GD5800 MP3模块播放第N首
Blockly.Blocks.GD5800_MP3_PLAY_NUM = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk.MusicHUE);
    this.appendDummyInput("").appendField(Blockly.GD5800_MP3);
    this.appendValueInput("RXPIN", Number).appendField(Blockly.MIXLY_PIN).setCheck(Number);
    this.appendValueInput("TXPIN", Number).appendField(Blockly.MIXLY_PIN).setCheck(Number);
    this.appendValueInput("NUM", Number).appendField(Blockly.MIXLY_MP3_PLAY_NUM).setCheck(Number);  
    this.appendDummyInput("").appendField("首");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('歌曲顺序按照存入U盘时间排序。');
    this.setHelpUrl();
  }
};


//lm35温度传感器-arduino
Blockly.Blocks.LM35ESP = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput("").appendField(Blockly.MIXLY_LM35);
    this.appendValueInput("PIN", Number).appendField(Blockly.MIXLY_PIN).setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};
//模拟传感器-IIC地址查找
Blockly.Blocks.IICSCAN = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput("").appendField(Blockly.IICSCAN);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks.MAKER17_motorA = {
  init: function() {
    this.setColour(Blockly.Blocks.actuator.HUE);
    this.appendDummyInput("").appendField(Blockly.MAKER17_MOTORA);

    this.appendValueInput("PIN1").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MAKER17_MOTOR_SPEED_PIN);
    this.appendValueInput("PIN2").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MAKER17_MOTOR_DIR_PIN);
    this.appendValueInput('speed').setCheck(Number).appendField(Blockly.MAKER17_MOTOR_SPEED);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
Blockly.Blocks.MAKER17_motorB = {
  init: function() {
    this.setColour(Blockly.Blocks.actuator.HUE);
    this.appendDummyInput("").appendField(Blockly.MAKER17_MOTORB);
    this.appendValueInput("PIN1").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MAKER17_MOTOR_SPEED_PIN);
    this.appendValueInput("PIN2").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MAKER17_MOTOR_DIR_PIN);
    this.appendValueInput('speed').setCheck(Number).appendField(Blockly.MAKER17_MOTOR_SPEED);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.factory_declare2 = {
  init: function() {
    this.setColour(Blockly.Blocks.factory.HUE);
  this.appendDummyInput("")
    .appendField(new Blockly.FieldTextArea('//define user code;'), 'VALUE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

//DHT11温湿度传感器
Blockly.Blocks.DHT = {
    init: function () {
        var WHAT = [[Blockly.MIXLY_DHT11_T, 'temperature'], [Blockly.MIXLY_DHT11_H, 'humidity']];
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput("PIN", Number)
            .appendField(new Blockly.FieldDropdown([['DHT11', '11'], ['DHT21', '21'], ['DHT22', '22']]), 'TYPE')
            .appendField(Blockly.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(WHAT), "WHAT");
        this.setOutput(true, Number);
        var thisBlock = this;
        this.setTooltip(function () {
            var op = thisBlock.getFieldValue('WHAT');
            var TOOLTIPS = {
                'temperature': Blockly.MIXLY_TOOLTIP_BLOCKGROUP_GET_TEM,
                'humidity': Blockly.MIXLY_TOOLTIP_BLOCKGROUP_GET_HUM
            };
            return TOOLTIPS[op];
        });
    }
};