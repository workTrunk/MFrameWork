/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.PCommon_Base.CFGDB');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PCommon_Base.CFGDB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PCommon_Base.CFGDB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PCommon_Base.CFGDB.displayName = 'proto.PCommon_Base.CFGDB';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PCommon_Base.CFGDB.prototype.toObject = function(opt_includeInstance) {
  return proto.PCommon_Base.CFGDB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PCommon_Base.CFGDB} msg The msg instance to transform.
 * @return {!Object}
 */
proto.PCommon_Base.CFGDB.toObject = function(includeInstance, msg) {
  var f, obj = {
    ipLogin: jspb.Message.getFieldWithDefault(msg, 1, ""),
    portLogin: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ipLogic: jspb.Message.getFieldWithDefault(msg, 3, ""),
    portLogic: jspb.Message.getFieldWithDefault(msg, 4, 0),
    ipMysql: jspb.Message.getFieldWithDefault(msg, 5, ""),
    portMysql: jspb.Message.getFieldWithDefault(msg, 6, 0),
    userMysql: jspb.Message.getFieldWithDefault(msg, 7, 0),
    pwdMysql: jspb.Message.getFieldWithDefault(msg, 8, 0),
    dbMysql: jspb.Message.getFieldWithDefault(msg, 9, 0),
    ipRedis: jspb.Message.getFieldWithDefault(msg, 10, ""),
    portRedis: jspb.Message.getFieldWithDefault(msg, 11, 0),
    userRedis: jspb.Message.getFieldWithDefault(msg, 12, 0),
    pwdRedis: jspb.Message.getFieldWithDefault(msg, 13, 0),
    dbRedis: jspb.Message.getFieldWithDefault(msg, 14, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PCommon_Base.CFGDB}
 */
proto.PCommon_Base.CFGDB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PCommon_Base.CFGDB;
  return proto.PCommon_Base.CFGDB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PCommon_Base.CFGDB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PCommon_Base.CFGDB}
 */
proto.PCommon_Base.CFGDB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpLogin(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPortLogin(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpLogic(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPortLogic(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpMysql(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPortMysql(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserMysql(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPwdMysql(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDbMysql(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpRedis(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPortRedis(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserRedis(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPwdRedis(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDbRedis(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PCommon_Base.CFGDB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PCommon_Base.CFGDB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PCommon_Base.CFGDB} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.PCommon_Base.CFGDB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIpLogin();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPortLogin();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getIpLogic();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPortLogic();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getIpMysql();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPortMysql();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getUserMysql();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getPwdMysql();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getDbMysql();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getIpRedis();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPortRedis();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getUserRedis();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getPwdRedis();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getDbRedis();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
};


/**
 * optional string IP_Login = 1;
 * @return {string}
 */
proto.PCommon_Base.CFGDB.prototype.getIpLogin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.PCommon_Base.CFGDB.prototype.setIpLogin = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 Port_Login = 2;
 * @return {number}
 */
proto.PCommon_Base.CFGDB.prototype.getPortLogin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.PCommon_Base.CFGDB.prototype.setPortLogin = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string IP_Logic = 3;
 * @return {string}
 */
proto.PCommon_Base.CFGDB.prototype.getIpLogic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.PCommon_Base.CFGDB.prototype.setIpLogic = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int32 Port_Logic = 4;
 * @return {number}
 */
proto.PCommon_Base.CFGDB.prototype.getPortLogic = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.PCommon_Base.CFGDB.prototype.setPortLogic = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string Ip_Mysql = 5;
 * @return {string}
 */
proto.PCommon_Base.CFGDB.prototype.getIpMysql = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.PCommon_Base.CFGDB.prototype.setIpMysql = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional int32 Port_Mysql = 6;
 * @return {number}
 */
proto.PCommon_Base.CFGDB.prototype.getPortMysql = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.PCommon_Base.CFGDB.prototype.setPortMysql = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional int32 User_Mysql = 7;
 * @return {number}
 */
proto.PCommon_Base.CFGDB.prototype.getUserMysql = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.PCommon_Base.CFGDB.prototype.setUserMysql = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional int32 Pwd_Mysql = 8;
 * @return {number}
 */
proto.PCommon_Base.CFGDB.prototype.getPwdMysql = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.PCommon_Base.CFGDB.prototype.setPwdMysql = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional int32 DB_Mysql = 9;
 * @return {number}
 */
proto.PCommon_Base.CFGDB.prototype.getDbMysql = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.PCommon_Base.CFGDB.prototype.setDbMysql = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * optional string Ip_Redis = 10;
 * @return {string}
 */
proto.PCommon_Base.CFGDB.prototype.getIpRedis = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.PCommon_Base.CFGDB.prototype.setIpRedis = function(value) {
  jspb.Message.setField(this, 10, value);
};


/**
 * optional int32 Port_Redis = 11;
 * @return {number}
 */
proto.PCommon_Base.CFGDB.prototype.getPortRedis = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.PCommon_Base.CFGDB.prototype.setPortRedis = function(value) {
  jspb.Message.setField(this, 11, value);
};


/**
 * optional int32 User_Redis = 12;
 * @return {number}
 */
proto.PCommon_Base.CFGDB.prototype.getUserRedis = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.PCommon_Base.CFGDB.prototype.setUserRedis = function(value) {
  jspb.Message.setField(this, 12, value);
};


/**
 * optional int32 Pwd_Redis = 13;
 * @return {number}
 */
proto.PCommon_Base.CFGDB.prototype.getPwdRedis = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.PCommon_Base.CFGDB.prototype.setPwdRedis = function(value) {
  jspb.Message.setField(this, 13, value);
};


/**
 * optional int32 DB_Redis = 14;
 * @return {number}
 */
proto.PCommon_Base.CFGDB.prototype.getDbRedis = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {number} value */
proto.PCommon_Base.CFGDB.prototype.setDbRedis = function(value) {
  jspb.Message.setField(this, 14, value);
};

