# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: Common_Base.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
from google.protobuf import descriptor_pb2
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='Common_Base.proto',
  package='PCommon_Base',
  syntax='proto3',
  serialized_pb=_b('\n\x11\x43ommon_Base.proto\x12\x0cPCommon_Base\"U\n\x07NetHead\x12\x0b\n\x03\x43md\x18\x01 \x01(\x05\x12\r\n\x05Index\x18\x02 \x01(\x05\x12\r\n\x05\x43ount\x18\x03 \x01(\x05\x12\x12\n\nDataLength\x18\x04 \x01(\x05\x12\x0b\n\x03key\x18\x05 \x01(\x05\"\x1e\n\x06MTest1\x12\t\n\x01\x61\x18\x01 \x01(\x05\x12\t\n\x01\x62\x18\x02 \x01(\x05\"\x1e\n\x06MTest2\x12\t\n\x01\x61\x18\x02 \x01(\x05\x12\t\n\x01\x62\x18\x03 \x01(\x05*(\n\x05\x45Test\x12\t\n\x05Test1\x10\x00\x12\t\n\x05Test2\x10\x01\x12\t\n\x05Test3\x10\x02\x62\x06proto3')
)

_ETEST = _descriptor.EnumDescriptor(
  name='ETest',
  full_name='PCommon_Base.ETest',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='Test1', index=0, number=0,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='Test2', index=1, number=1,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='Test3', index=2, number=2,
      options=None,
      type=None),
  ],
  containing_type=None,
  options=None,
  serialized_start=186,
  serialized_end=226,
)
_sym_db.RegisterEnumDescriptor(_ETEST)

ETest = enum_type_wrapper.EnumTypeWrapper(_ETEST)
Test1 = 0
Test2 = 1
Test3 = 2



_NETHEAD = _descriptor.Descriptor(
  name='NetHead',
  full_name='PCommon_Base.NetHead',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='Cmd', full_name='PCommon_Base.NetHead.Cmd', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='Index', full_name='PCommon_Base.NetHead.Index', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='Count', full_name='PCommon_Base.NetHead.Count', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='DataLength', full_name='PCommon_Base.NetHead.DataLength', index=3,
      number=4, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='key', full_name='PCommon_Base.NetHead.key', index=4,
      number=5, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=35,
  serialized_end=120,
)


_MTEST1 = _descriptor.Descriptor(
  name='MTest1',
  full_name='PCommon_Base.MTest1',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='a', full_name='PCommon_Base.MTest1.a', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='b', full_name='PCommon_Base.MTest1.b', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=122,
  serialized_end=152,
)


_MTEST2 = _descriptor.Descriptor(
  name='MTest2',
  full_name='PCommon_Base.MTest2',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='a', full_name='PCommon_Base.MTest2.a', index=0,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='b', full_name='PCommon_Base.MTest2.b', index=1,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=154,
  serialized_end=184,
)

DESCRIPTOR.message_types_by_name['NetHead'] = _NETHEAD
DESCRIPTOR.message_types_by_name['MTest1'] = _MTEST1
DESCRIPTOR.message_types_by_name['MTest2'] = _MTEST2
DESCRIPTOR.enum_types_by_name['ETest'] = _ETEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

NetHead = _reflection.GeneratedProtocolMessageType('NetHead', (_message.Message,), dict(
  DESCRIPTOR = _NETHEAD,
  __module__ = 'Common_Base_pb2'
  # @@protoc_insertion_point(class_scope:PCommon_Base.NetHead)
  ))
_sym_db.RegisterMessage(NetHead)

MTest1 = _reflection.GeneratedProtocolMessageType('MTest1', (_message.Message,), dict(
  DESCRIPTOR = _MTEST1,
  __module__ = 'Common_Base_pb2'
  # @@protoc_insertion_point(class_scope:PCommon_Base.MTest1)
  ))
_sym_db.RegisterMessage(MTest1)

MTest2 = _reflection.GeneratedProtocolMessageType('MTest2', (_message.Message,), dict(
  DESCRIPTOR = _MTEST2,
  __module__ = 'Common_Base_pb2'
  # @@protoc_insertion_point(class_scope:PCommon_Base.MTest2)
  ))
_sym_db.RegisterMessage(MTest2)


# @@protoc_insertion_point(module_scope)
