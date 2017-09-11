/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.PCommon_Base.MTest1');

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
proto.PCommon_Base.MTest1 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PCommon_Base.MTest1, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PCommon_Base.MTest1.displayName = 'proto.PCommon_Base.MTest1';
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
proto.PCommon_Base.MTest1.prototype.toObject = function(opt_includeInstance) {
  return proto.PCommon_Base.MTest1.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PCommon_Base.MTest1} msg The msg instance to transform.
 * @return {!Object}
 */
proto.PCommon_Base.MTest1.toObject = function(includeInstance, msg) {
  var f, obj = {
    a: jspb.Message.getFieldWithDefault(msg, 1, 0),
    b: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.PCommon_Base.MTest1}
 */
proto.PCommon_Base.MTest1.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PCommon_Base.MTest1;
  return proto.PCommon_Base.MTest1.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PCommon_Base.MTest1} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PCommon_Base.MTest1}
 */
proto.PCommon_Base.MTest1.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setA(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setB(value);
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
proto.PCommon_Base.MTest1.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PCommon_Base.MTest1.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PCommon_Base.MTest1} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.PCommon_Base.MTest1.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getA();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getB();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 a = 1;
 * @return {number}
 */
proto.PCommon_Base.MTest1.prototype.getA = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.PCommon_Base.MTest1.prototype.setA = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 b = 2;
 * @return {number}
 */
proto.PCommon_Base.MTest1.prototype.getB = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.PCommon_Base.MTest1.prototype.setB = function(value) {
  jspb.Message.setField(this, 2, value);
};


