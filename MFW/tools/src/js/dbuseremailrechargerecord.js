/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.PDB_Base.DBUserEmailRechargeRecord');

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
proto.PDB_Base.DBUserEmailRechargeRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PDB_Base.DBUserEmailRechargeRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PDB_Base.DBUserEmailRechargeRecord.displayName = 'proto.PDB_Base.DBUserEmailRechargeRecord';
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
proto.PDB_Base.DBUserEmailRechargeRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.PDB_Base.DBUserEmailRechargeRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PDB_Base.DBUserEmailRechargeRecord} msg The msg instance to transform.
 * @return {!Object}
 */
proto.PDB_Base.DBUserEmailRechargeRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    ulid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ulsenduid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ulrecvuid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    charrechargetime: jspb.Message.getFieldWithDefault(msg, 4, ""),
    ulproductaddcount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    ulemailtype: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.PDB_Base.DBUserEmailRechargeRecord}
 */
proto.PDB_Base.DBUserEmailRechargeRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PDB_Base.DBUserEmailRechargeRecord;
  return proto.PDB_Base.DBUserEmailRechargeRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PDB_Base.DBUserEmailRechargeRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PDB_Base.DBUserEmailRechargeRecord}
 */
proto.PDB_Base.DBUserEmailRechargeRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUlid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUlsenduid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUlrecvuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCharrechargetime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUlproductaddcount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUlemailtype(value);
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
proto.PDB_Base.DBUserEmailRechargeRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PDB_Base.DBUserEmailRechargeRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PDB_Base.DBUserEmailRechargeRecord} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.PDB_Base.DBUserEmailRechargeRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUlid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getUlsenduid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getUlrecvuid();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getCharrechargetime();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUlproductaddcount();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getUlemailtype();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
};


/**
 * optional uint64 ulId = 1;
 * @return {number}
 */
proto.PDB_Base.DBUserEmailRechargeRecord.prototype.getUlid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.PDB_Base.DBUserEmailRechargeRecord.prototype.setUlid = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint64 ulSendUid = 2;
 * @return {number}
 */
proto.PDB_Base.DBUserEmailRechargeRecord.prototype.getUlsenduid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.PDB_Base.DBUserEmailRechargeRecord.prototype.setUlsenduid = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint64 ulRecvUid = 3;
 * @return {number}
 */
proto.PDB_Base.DBUserEmailRechargeRecord.prototype.getUlrecvuid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.PDB_Base.DBUserEmailRechargeRecord.prototype.setUlrecvuid = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string charRechargeTime = 4;
 * @return {string}
 */
proto.PDB_Base.DBUserEmailRechargeRecord.prototype.getCharrechargetime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.PDB_Base.DBUserEmailRechargeRecord.prototype.setCharrechargetime = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint64 ulProductAddCount = 5;
 * @return {number}
 */
proto.PDB_Base.DBUserEmailRechargeRecord.prototype.getUlproductaddcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.PDB_Base.DBUserEmailRechargeRecord.prototype.setUlproductaddcount = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint64 ulEmailType = 6;
 * @return {number}
 */
proto.PDB_Base.DBUserEmailRechargeRecord.prototype.getUlemailtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.PDB_Base.DBUserEmailRechargeRecord.prototype.setUlemailtype = function(value) {
  jspb.Message.setField(this, 6, value);
};


