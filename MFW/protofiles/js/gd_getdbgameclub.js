/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.PDB_Option.GD_GetDBGameClub');

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
proto.PDB_Option.GD_GetDBGameClub = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PDB_Option.GD_GetDBGameClub, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PDB_Option.GD_GetDBGameClub.displayName = 'proto.PDB_Option.GD_GetDBGameClub';
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
proto.PDB_Option.GD_GetDBGameClub.prototype.toObject = function(opt_includeInstance) {
  return proto.PDB_Option.GD_GetDBGameClub.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PDB_Option.GD_GetDBGameClub} msg The msg instance to transform.
 * @return {!Object}
 */
proto.PDB_Option.GD_GetDBGameClub.toObject = function(includeInstance, msg) {
  var f, obj = {
    uiaccid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uldbgameclubid: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.PDB_Option.GD_GetDBGameClub}
 */
proto.PDB_Option.GD_GetDBGameClub.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PDB_Option.GD_GetDBGameClub;
  return proto.PDB_Option.GD_GetDBGameClub.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PDB_Option.GD_GetDBGameClub} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PDB_Option.GD_GetDBGameClub}
 */
proto.PDB_Option.GD_GetDBGameClub.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUiaccid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUldbgameclubid(value);
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
proto.PDB_Option.GD_GetDBGameClub.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PDB_Option.GD_GetDBGameClub.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PDB_Option.GD_GetDBGameClub} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.PDB_Option.GD_GetDBGameClub.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUiaccid();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getUldbgameclubid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint32 uiaccid = 1;
 * @return {number}
 */
proto.PDB_Option.GD_GetDBGameClub.prototype.getUiaccid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.PDB_Option.GD_GetDBGameClub.prototype.setUiaccid = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint64 ulDBGameClubid = 2;
 * @return {number}
 */
proto.PDB_Option.GD_GetDBGameClub.prototype.getUldbgameclubid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.PDB_Option.GD_GetDBGameClub.prototype.setUldbgameclubid = function(value) {
  jspb.Message.setField(this, 2, value);
};


