/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.PDB_Option.DG_GetDBPlayerSignIn');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('proto.PDB_Base.DBPlayerSignIn');


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
proto.PDB_Option.DG_GetDBPlayerSignIn = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PDB_Option.DG_GetDBPlayerSignIn, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PDB_Option.DG_GetDBPlayerSignIn.displayName = 'proto.PDB_Option.DG_GetDBPlayerSignIn';
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
proto.PDB_Option.DG_GetDBPlayerSignIn.prototype.toObject = function(opt_includeInstance) {
  return proto.PDB_Option.DG_GetDBPlayerSignIn.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PDB_Option.DG_GetDBPlayerSignIn} msg The msg instance to transform.
 * @return {!Object}
 */
proto.PDB_Option.DG_GetDBPlayerSignIn.toObject = function(includeInstance, msg) {
  var f, obj = {
    uiaccid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    iret: jspb.Message.getFieldWithDefault(msg, 2, 0),
    stdbplayersignin: (f = msg.getStdbplayersignin()) && proto.PDB_Base.DBPlayerSignIn.toObject(includeInstance, f)
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
 * @return {!proto.PDB_Option.DG_GetDBPlayerSignIn}
 */
proto.PDB_Option.DG_GetDBPlayerSignIn.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PDB_Option.DG_GetDBPlayerSignIn;
  return proto.PDB_Option.DG_GetDBPlayerSignIn.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PDB_Option.DG_GetDBPlayerSignIn} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PDB_Option.DG_GetDBPlayerSignIn}
 */
proto.PDB_Option.DG_GetDBPlayerSignIn.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIret(value);
      break;
    case 3:
      var value = new proto.PDB_Base.DBPlayerSignIn;
      reader.readMessage(value,proto.PDB_Base.DBPlayerSignIn.deserializeBinaryFromReader);
      msg.setStdbplayersignin(value);
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
proto.PDB_Option.DG_GetDBPlayerSignIn.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PDB_Option.DG_GetDBPlayerSignIn.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PDB_Option.DG_GetDBPlayerSignIn} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.PDB_Option.DG_GetDBPlayerSignIn.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUiaccid();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getIret();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getStdbplayersignin();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.PDB_Base.DBPlayerSignIn.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 uiaccid = 1;
 * @return {number}
 */
proto.PDB_Option.DG_GetDBPlayerSignIn.prototype.getUiaccid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.PDB_Option.DG_GetDBPlayerSignIn.prototype.setUiaccid = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 iRet = 2;
 * @return {number}
 */
proto.PDB_Option.DG_GetDBPlayerSignIn.prototype.getIret = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.PDB_Option.DG_GetDBPlayerSignIn.prototype.setIret = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional PDB_Base.DBPlayerSignIn stDBPlayerSignIn = 3;
 * @return {?proto.PDB_Base.DBPlayerSignIn}
 */
proto.PDB_Option.DG_GetDBPlayerSignIn.prototype.getStdbplayersignin = function() {
  return /** @type{?proto.PDB_Base.DBPlayerSignIn} */ (
    jspb.Message.getWrapperField(this, proto.PDB_Base.DBPlayerSignIn, 3));
};


/** @param {?proto.PDB_Base.DBPlayerSignIn|undefined} value */
proto.PDB_Option.DG_GetDBPlayerSignIn.prototype.setStdbplayersignin = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.PDB_Option.DG_GetDBPlayerSignIn.prototype.clearStdbplayersignin = function() {
  this.setStdbplayersignin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.PDB_Option.DG_GetDBPlayerSignIn.prototype.hasStdbplayersignin = function() {
  return jspb.Message.getField(this, 3) != null;
};


