/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.PDB_Base.DBPlayerSignIn');

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
proto.PDB_Base.DBPlayerSignIn = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PDB_Base.DBPlayerSignIn, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PDB_Base.DBPlayerSignIn.displayName = 'proto.PDB_Base.DBPlayerSignIn';
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
proto.PDB_Base.DBPlayerSignIn.prototype.toObject = function(opt_includeInstance) {
  return proto.PDB_Base.DBPlayerSignIn.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PDB_Base.DBPlayerSignIn} msg The msg instance to transform.
 * @return {!Object}
 */
proto.PDB_Base.DBPlayerSignIn.toObject = function(includeInstance, msg) {
  var f, obj = {
    uluid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ssignin: msg.getSsignin_asB64()
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
 * @return {!proto.PDB_Base.DBPlayerSignIn}
 */
proto.PDB_Base.DBPlayerSignIn.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PDB_Base.DBPlayerSignIn;
  return proto.PDB_Base.DBPlayerSignIn.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PDB_Base.DBPlayerSignIn} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PDB_Base.DBPlayerSignIn}
 */
proto.PDB_Base.DBPlayerSignIn.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUluid(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSsignin(value);
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
proto.PDB_Base.DBPlayerSignIn.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PDB_Base.DBPlayerSignIn.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PDB_Base.DBPlayerSignIn} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.PDB_Base.DBPlayerSignIn.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUluid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getSsignin_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional uint64 ulUid = 1;
 * @return {number}
 */
proto.PDB_Base.DBPlayerSignIn.prototype.getUluid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.PDB_Base.DBPlayerSignIn.prototype.setUluid = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes sSignIn = 2;
 * @return {string}
 */
proto.PDB_Base.DBPlayerSignIn.prototype.getSsignin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes sSignIn = 2;
 * This is a type-conversion wrapper around `getSsignin()`
 * @return {string}
 */
proto.PDB_Base.DBPlayerSignIn.prototype.getSsignin_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSsignin()));
};


/**
 * optional bytes sSignIn = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSsignin()`
 * @return {!Uint8Array}
 */
proto.PDB_Base.DBPlayerSignIn.prototype.getSsignin_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSsignin()));
};


/** @param {!(string|Uint8Array)} value */
proto.PDB_Base.DBPlayerSignIn.prototype.setSsignin = function(value) {
  jspb.Message.setField(this, 2, value);
};


