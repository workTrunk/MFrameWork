// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: Manager_DB.proto

#define INTERNAL_SUPPRESS_PROTOBUF_FIELD_DEPRECATION
#include "Manager_DB.pb.h"

#include <algorithm>

#include <google/protobuf/stubs/common.h>
#include <google/protobuf/stubs/port.h>
#include <google/protobuf/stubs/once.h>
#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/wire_format_lite_inl.h>
#include <google/protobuf/descriptor.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/reflection_ops.h>
#include <google/protobuf/wire_format.h>
// @@protoc_insertion_point(includes)

namespace PManager_DB {
class Point_FbDefaultTypeInternal : public ::google::protobuf::internal::ExplicitlyConstructed<Point_Fb> {
} _Point_Fb_default_instance_;

namespace protobuf_Manager_5fDB_2eproto {


namespace {

::google::protobuf::Metadata file_level_metadata[1];

}  // namespace

PROTOBUF_CONSTEXPR_VAR ::google::protobuf::internal::ParseTableField
    const TableStruct::entries[] = {
  {0, 0, 0, ::google::protobuf::internal::kInvalidMask, 0, 0},
};

PROTOBUF_CONSTEXPR_VAR ::google::protobuf::internal::AuxillaryParseTableField
    const TableStruct::aux[] = {
  ::google::protobuf::internal::AuxillaryParseTableField(),
};
PROTOBUF_CONSTEXPR_VAR ::google::protobuf::internal::ParseTable const
    TableStruct::schema[] = {
  { NULL, NULL, 0, -1, -1, false },
};

const ::google::protobuf::uint32 TableStruct::offsets[] = {
  ~0u,  // no _has_bits_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Point_Fb, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
};

static const ::google::protobuf::internal::MigrationSchema schemas[] = {
  { 0, -1, sizeof(Point_Fb)},
};

static ::google::protobuf::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::google::protobuf::Message*>(&_Point_Fb_default_instance_),
};

namespace {

void protobuf_AssignDescriptors() {
  AddDescriptors();
  ::google::protobuf::MessageFactory* factory = NULL;
  AssignDescriptors(
      "Manager_DB.proto", schemas, file_default_instances, TableStruct::offsets, factory,
      file_level_metadata, NULL, NULL);
}

void protobuf_AssignDescriptorsOnce() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &protobuf_AssignDescriptors);
}

void protobuf_RegisterTypes(const ::std::string&) GOOGLE_ATTRIBUTE_COLD;
void protobuf_RegisterTypes(const ::std::string&) {
  protobuf_AssignDescriptorsOnce();
  ::google::protobuf::internal::RegisterAllTypes(file_level_metadata, 1);
}

}  // namespace

void TableStruct::Shutdown() {
  _Point_Fb_default_instance_.Shutdown();
  delete file_level_metadata[0].reflection;
}

void TableStruct::InitDefaultsImpl() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  ::google::protobuf::internal::InitProtobufDefaults();
  ::PCommon_Base::protobuf_Common_5fBase_2eproto::InitDefaults();
  ::PDB_Base::protobuf_DB_5fBase_2eproto::InitDefaults();
  _Point_Fb_default_instance_.DefaultConstruct();
}

void InitDefaults() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &TableStruct::InitDefaultsImpl);
}
void AddDescriptorsImpl() {
  InitDefaults();
  static const char descriptor[] = {
      "\n\020Manager_DB.proto\022\013PManager_DB\032\021Common_"
      "Base.proto\032\rDB_Base.proto\"\n\n\010Point_Fbb\006p"
      "roto3"
  };
  ::google::protobuf::DescriptorPool::InternalAddGeneratedFile(
      descriptor, 85);
  ::google::protobuf::MessageFactory::InternalRegisterGeneratedFile(
    "Manager_DB.proto", &protobuf_RegisterTypes);
  ::PCommon_Base::protobuf_Common_5fBase_2eproto::AddDescriptors();
  ::PDB_Base::protobuf_DB_5fBase_2eproto::AddDescriptors();
  ::google::protobuf::internal::OnShutdown(&TableStruct::Shutdown);
}

void AddDescriptors() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &AddDescriptorsImpl);
}
// Force AddDescriptors() to be called at static initialization time.
struct StaticDescriptorInitializer {
  StaticDescriptorInitializer() {
    AddDescriptors();
  }
} static_descriptor_initializer;

}  // namespace protobuf_Manager_5fDB_2eproto


// ===================================================================

#if !defined(_MSC_VER) || _MSC_VER >= 1900
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900

Point_Fb::Point_Fb()
  : ::google::protobuf::Message(), _internal_metadata_(NULL) {
  if (GOOGLE_PREDICT_TRUE(this != internal_default_instance())) {
    protobuf_Manager_5fDB_2eproto::InitDefaults();
  }
  SharedCtor();
  // @@protoc_insertion_point(constructor:PManager_DB.Point_Fb)
}
Point_Fb::Point_Fb(const Point_Fb& from)
  : ::google::protobuf::Message(),
      _internal_metadata_(NULL),
      _cached_size_(0) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  // @@protoc_insertion_point(copy_constructor:PManager_DB.Point_Fb)
}

void Point_Fb::SharedCtor() {
  _cached_size_ = 0;
}

Point_Fb::~Point_Fb() {
  // @@protoc_insertion_point(destructor:PManager_DB.Point_Fb)
  SharedDtor();
}

void Point_Fb::SharedDtor() {
}

void Point_Fb::SetCachedSize(int size) const {
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
}
const ::google::protobuf::Descriptor* Point_Fb::descriptor() {
  protobuf_Manager_5fDB_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_Manager_5fDB_2eproto::file_level_metadata[kIndexInFileMessages].descriptor;
}

const Point_Fb& Point_Fb::default_instance() {
  protobuf_Manager_5fDB_2eproto::InitDefaults();
  return *internal_default_instance();
}

Point_Fb* Point_Fb::New(::google::protobuf::Arena* arena) const {
  Point_Fb* n = new Point_Fb;
  if (arena != NULL) {
    arena->Own(n);
  }
  return n;
}

void Point_Fb::Clear() {
// @@protoc_insertion_point(message_clear_start:PManager_DB.Point_Fb)
}

bool Point_Fb::MergePartialFromCodedStream(
    ::google::protobuf::io::CodedInputStream* input) {
#define DO_(EXPRESSION) if (!GOOGLE_PREDICT_TRUE(EXPRESSION)) goto failure
  ::google::protobuf::uint32 tag;
  // @@protoc_insertion_point(parse_start:PManager_DB.Point_Fb)
  for (;;) {
    ::std::pair< ::google::protobuf::uint32, bool> p = input->ReadTagWithCutoffNoLastTag(127u);
    tag = p.first;
    if (!p.second) goto handle_unusual;
  handle_unusual:
    if (tag == 0 ||
        ::google::protobuf::internal::WireFormatLite::GetTagWireType(tag) ==
        ::google::protobuf::internal::WireFormatLite::WIRETYPE_END_GROUP) {
      goto success;
    }
    DO_(::google::protobuf::internal::WireFormatLite::SkipField(input, tag));
  }
success:
  // @@protoc_insertion_point(parse_success:PManager_DB.Point_Fb)
  return true;
failure:
  // @@protoc_insertion_point(parse_failure:PManager_DB.Point_Fb)
  return false;
#undef DO_
}

void Point_Fb::SerializeWithCachedSizes(
    ::google::protobuf::io::CodedOutputStream* output) const {
  // @@protoc_insertion_point(serialize_start:PManager_DB.Point_Fb)
  ::google::protobuf::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // @@protoc_insertion_point(serialize_end:PManager_DB.Point_Fb)
}

::google::protobuf::uint8* Point_Fb::InternalSerializeWithCachedSizesToArray(
    bool deterministic, ::google::protobuf::uint8* target) const {
  // @@protoc_insertion_point(serialize_to_array_start:PManager_DB.Point_Fb)
  ::google::protobuf::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // @@protoc_insertion_point(serialize_to_array_end:PManager_DB.Point_Fb)
  return target;
}

size_t Point_Fb::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:PManager_DB.Point_Fb)
  size_t total_size = 0;

  int cached_size = ::google::protobuf::internal::ToCachedSize(total_size);
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = cached_size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
  return total_size;
}

void Point_Fb::MergeFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:PManager_DB.Point_Fb)
  GOOGLE_DCHECK_NE(&from, this);
  const Point_Fb* source =
      ::google::protobuf::internal::DynamicCastToGenerated<const Point_Fb>(
          &from);
  if (source == NULL) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:PManager_DB.Point_Fb)
    ::google::protobuf::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:PManager_DB.Point_Fb)
    MergeFrom(*source);
  }
}

void Point_Fb::MergeFrom(const Point_Fb& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:PManager_DB.Point_Fb)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::google::protobuf::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

}

void Point_Fb::CopyFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:PManager_DB.Point_Fb)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void Point_Fb::CopyFrom(const Point_Fb& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:PManager_DB.Point_Fb)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool Point_Fb::IsInitialized() const {
  return true;
}

void Point_Fb::Swap(Point_Fb* other) {
  if (other == this) return;
  InternalSwap(other);
}
void Point_Fb::InternalSwap(Point_Fb* other) {
  std::swap(_cached_size_, other->_cached_size_);
}

::google::protobuf::Metadata Point_Fb::GetMetadata() const {
  protobuf_Manager_5fDB_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_Manager_5fDB_2eproto::file_level_metadata[kIndexInFileMessages];
}

#if PROTOBUF_INLINE_NOT_IN_HEADERS
// Point_Fb

#endif  // PROTOBUF_INLINE_NOT_IN_HEADERS

// @@protoc_insertion_point(namespace_scope)

}  // namespace PManager_DB

// @@protoc_insertion_point(global_scope)
