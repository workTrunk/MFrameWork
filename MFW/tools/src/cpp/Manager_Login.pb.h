// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: Manager_Login.proto

#ifndef PROTOBUF_Manager_5fLogin_2eproto__INCLUDED
#define PROTOBUF_Manager_5fLogin_2eproto__INCLUDED

#include <string>

#include <google/protobuf/stubs/common.h>

#if GOOGLE_PROTOBUF_VERSION < 3003000
#error This file was generated by a newer version of protoc which is
#error incompatible with your Protocol Buffer headers.  Please update
#error your headers.
#endif
#if 3003000 < GOOGLE_PROTOBUF_MIN_PROTOC_VERSION
#error This file was generated by an older version of protoc which is
#error incompatible with your Protocol Buffer headers.  Please
#error regenerate this file with a newer version of protoc.
#endif

#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/arena.h>
#include <google/protobuf/arenastring.h>
#include <google/protobuf/generated_message_table_driven.h>
#include <google/protobuf/generated_message_util.h>
#include <google/protobuf/metadata.h>
#include <google/protobuf/message.h>
#include <google/protobuf/repeated_field.h>  // IWYU pragma: export
#include <google/protobuf/extension_set.h>  // IWYU pragma: export
#include <google/protobuf/generated_enum_reflection.h>
#include <google/protobuf/unknown_field_set.h>
#include "Common_Base.pb.h"
#include "DB_Base.pb.h"
// @@protoc_insertion_point(includes)
namespace PCommon_Base {
class MTest1;
class MTest1DefaultTypeInternal;
extern MTest1DefaultTypeInternal _MTest1_default_instance_;
class MTest2;
class MTest2DefaultTypeInternal;
extern MTest2DefaultTypeInternal _MTest2_default_instance_;
class NetHead;
class NetHeadDefaultTypeInternal;
extern NetHeadDefaultTypeInternal _NetHead_default_instance_;
class NetTransferMsg;
class NetTransferMsgDefaultTypeInternal;
extern NetTransferMsgDefaultTypeInternal _NetTransferMsg_default_instance_;
class NetTransferMsgs;
class NetTransferMsgsDefaultTypeInternal;
extern NetTransferMsgsDefaultTypeInternal _NetTransferMsgs_default_instance_;
class PUserInfo;
class PUserInfoDefaultTypeInternal;
extern PUserInfoDefaultTypeInternal _PUserInfo_default_instance_;
}  // namespace PCommon_Base
namespace PDB_Base {
class DBAccount;
class DBAccountDefaultTypeInternal;
extern DBAccountDefaultTypeInternal _DBAccount_default_instance_;
class DBUserInfo;
class DBUserInfoDefaultTypeInternal;
extern DBUserInfoDefaultTypeInternal _DBUserInfo_default_instance_;
}  // namespace PDB_Base
namespace PManager_Login {
class LM_ClientKey;
class LM_ClientKeyDefaultTypeInternal;
extern LM_ClientKeyDefaultTypeInternal _LM_ClientKey_default_instance_;
class ML_ClientKey;
class ML_ClientKeyDefaultTypeInternal;
extern ML_ClientKeyDefaultTypeInternal _ML_ClientKey_default_instance_;
}  // namespace PManager_Login

namespace PManager_Login {

namespace protobuf_Manager_5fLogin_2eproto {
// Internal implementation detail -- do not call these.
struct TableStruct {
  static const ::google::protobuf::internal::ParseTableField entries[];
  static const ::google::protobuf::internal::AuxillaryParseTableField aux[];
  static const ::google::protobuf::internal::ParseTable schema[];
  static const ::google::protobuf::uint32 offsets[];
  static void InitDefaultsImpl();
  static void Shutdown();
};
void AddDescriptors();
void InitDefaults();
}  // namespace protobuf_Manager_5fLogin_2eproto

enum EMC_CMD {
  EMC_CMD_None = 0,
  EMC_CMD_ClientKey = 4001,
  EMC_CMD_INT_MIN_SENTINEL_DO_NOT_USE_ = ::google::protobuf::kint32min,
  EMC_CMD_INT_MAX_SENTINEL_DO_NOT_USE_ = ::google::protobuf::kint32max
};
bool EMC_CMD_IsValid(int value);
const EMC_CMD EMC_CMD_MIN = EMC_CMD_None;
const EMC_CMD EMC_CMD_MAX = EMC_CMD_ClientKey;
const int EMC_CMD_ARRAYSIZE = EMC_CMD_MAX + 1;

const ::google::protobuf::EnumDescriptor* EMC_CMD_descriptor();
inline const ::std::string& EMC_CMD_Name(EMC_CMD value) {
  return ::google::protobuf::internal::NameOfEnum(
    EMC_CMD_descriptor(), value);
}
inline bool EMC_CMD_Parse(
    const ::std::string& name, EMC_CMD* value) {
  return ::google::protobuf::internal::ParseNamedEnum<EMC_CMD>(
    EMC_CMD_descriptor(), name, value);
}
// ===================================================================

class LM_ClientKey : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:PManager_Login.LM_ClientKey) */ {
 public:
  LM_ClientKey();
  virtual ~LM_ClientKey();

  LM_ClientKey(const LM_ClientKey& from);

  inline LM_ClientKey& operator=(const LM_ClientKey& from) {
    CopyFrom(from);
    return *this;
  }

  static const ::google::protobuf::Descriptor* descriptor();
  static const LM_ClientKey& default_instance();

  static inline const LM_ClientKey* internal_default_instance() {
    return reinterpret_cast<const LM_ClientKey*>(
               &_LM_ClientKey_default_instance_);
  }
  static PROTOBUF_CONSTEXPR int const kIndexInFileMessages =
    0;

  void Swap(LM_ClientKey* other);

  // implements Message ----------------------------------------------

  inline LM_ClientKey* New() const PROTOBUF_FINAL { return New(NULL); }

  LM_ClientKey* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const LM_ClientKey& from);
  void MergeFrom(const LM_ClientKey& from);
  void Clear() PROTOBUF_FINAL;
  bool IsInitialized() const PROTOBUF_FINAL;

  size_t ByteSizeLong() const PROTOBUF_FINAL;
  bool MergePartialFromCodedStream(
      ::google::protobuf::io::CodedInputStream* input) PROTOBUF_FINAL;
  void SerializeWithCachedSizes(
      ::google::protobuf::io::CodedOutputStream* output) const PROTOBUF_FINAL;
  ::google::protobuf::uint8* InternalSerializeWithCachedSizesToArray(
      bool deterministic, ::google::protobuf::uint8* target) const PROTOBUF_FINAL;
  int GetCachedSize() const PROTOBUF_FINAL { return _cached_size_; }
  private:
  void SharedCtor();
  void SharedDtor();
  void SetCachedSize(int size) const PROTOBUF_FINAL;
  void InternalSwap(LM_ClientKey* other);
  private:
  inline ::google::protobuf::Arena* GetArenaNoVirtual() const {
    return NULL;
  }
  inline void* MaybeArenaPtr() const {
    return NULL;
  }
  public:

  ::google::protobuf::Metadata GetMetadata() const PROTOBUF_FINAL;

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  // int64 Uid = 1;
  void clear_uid();
  static const int kUidFieldNumber = 1;
  ::google::protobuf::int64 uid() const;
  void set_uid(::google::protobuf::int64 value);

  // int64 ConId = 2;
  void clear_conid();
  static const int kConIdFieldNumber = 2;
  ::google::protobuf::int64 conid() const;
  void set_conid(::google::protobuf::int64 value);

  // @@protoc_insertion_point(class_scope:PManager_Login.LM_ClientKey)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::google::protobuf::int64 uid_;
  ::google::protobuf::int64 conid_;
  mutable int _cached_size_;
  friend struct protobuf_Manager_5fLogin_2eproto::TableStruct;
};
// -------------------------------------------------------------------

class ML_ClientKey : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:PManager_Login.ML_ClientKey) */ {
 public:
  ML_ClientKey();
  virtual ~ML_ClientKey();

  ML_ClientKey(const ML_ClientKey& from);

  inline ML_ClientKey& operator=(const ML_ClientKey& from) {
    CopyFrom(from);
    return *this;
  }

  static const ::google::protobuf::Descriptor* descriptor();
  static const ML_ClientKey& default_instance();

  static inline const ML_ClientKey* internal_default_instance() {
    return reinterpret_cast<const ML_ClientKey*>(
               &_ML_ClientKey_default_instance_);
  }
  static PROTOBUF_CONSTEXPR int const kIndexInFileMessages =
    1;

  void Swap(ML_ClientKey* other);

  // implements Message ----------------------------------------------

  inline ML_ClientKey* New() const PROTOBUF_FINAL { return New(NULL); }

  ML_ClientKey* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const ML_ClientKey& from);
  void MergeFrom(const ML_ClientKey& from);
  void Clear() PROTOBUF_FINAL;
  bool IsInitialized() const PROTOBUF_FINAL;

  size_t ByteSizeLong() const PROTOBUF_FINAL;
  bool MergePartialFromCodedStream(
      ::google::protobuf::io::CodedInputStream* input) PROTOBUF_FINAL;
  void SerializeWithCachedSizes(
      ::google::protobuf::io::CodedOutputStream* output) const PROTOBUF_FINAL;
  ::google::protobuf::uint8* InternalSerializeWithCachedSizesToArray(
      bool deterministic, ::google::protobuf::uint8* target) const PROTOBUF_FINAL;
  int GetCachedSize() const PROTOBUF_FINAL { return _cached_size_; }
  private:
  void SharedCtor();
  void SharedDtor();
  void SetCachedSize(int size) const PROTOBUF_FINAL;
  void InternalSwap(ML_ClientKey* other);
  private:
  inline ::google::protobuf::Arena* GetArenaNoVirtual() const {
    return NULL;
  }
  inline void* MaybeArenaPtr() const {
    return NULL;
  }
  public:

  ::google::protobuf::Metadata GetMetadata() const PROTOBUF_FINAL;

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  // string key = 2;
  void clear_key();
  static const int kKeyFieldNumber = 2;
  const ::std::string& key() const;
  void set_key(const ::std::string& value);
  #if LANG_CXX11
  void set_key(::std::string&& value);
  #endif
  void set_key(const char* value);
  void set_key(const char* value, size_t size);
  ::std::string* mutable_key();
  ::std::string* release_key();
  void set_allocated_key(::std::string* key);

  // int64 ConId = 3;
  void clear_conid();
  static const int kConIdFieldNumber = 3;
  ::google::protobuf::int64 conid() const;
  void set_conid(::google::protobuf::int64 value);

  // int64 Uid = 4;
  void clear_uid();
  static const int kUidFieldNumber = 4;
  ::google::protobuf::int64 uid() const;
  void set_uid(::google::protobuf::int64 value);

  // int32 ret = 1;
  void clear_ret();
  static const int kRetFieldNumber = 1;
  ::google::protobuf::int32 ret() const;
  void set_ret(::google::protobuf::int32 value);

  // @@protoc_insertion_point(class_scope:PManager_Login.ML_ClientKey)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::google::protobuf::internal::ArenaStringPtr key_;
  ::google::protobuf::int64 conid_;
  ::google::protobuf::int64 uid_;
  ::google::protobuf::int32 ret_;
  mutable int _cached_size_;
  friend struct protobuf_Manager_5fLogin_2eproto::TableStruct;
};
// ===================================================================


// ===================================================================

#if !PROTOBUF_INLINE_NOT_IN_HEADERS
// LM_ClientKey

// int64 Uid = 1;
inline void LM_ClientKey::clear_uid() {
  uid_ = GOOGLE_LONGLONG(0);
}
inline ::google::protobuf::int64 LM_ClientKey::uid() const {
  // @@protoc_insertion_point(field_get:PManager_Login.LM_ClientKey.Uid)
  return uid_;
}
inline void LM_ClientKey::set_uid(::google::protobuf::int64 value) {
  
  uid_ = value;
  // @@protoc_insertion_point(field_set:PManager_Login.LM_ClientKey.Uid)
}

// int64 ConId = 2;
inline void LM_ClientKey::clear_conid() {
  conid_ = GOOGLE_LONGLONG(0);
}
inline ::google::protobuf::int64 LM_ClientKey::conid() const {
  // @@protoc_insertion_point(field_get:PManager_Login.LM_ClientKey.ConId)
  return conid_;
}
inline void LM_ClientKey::set_conid(::google::protobuf::int64 value) {
  
  conid_ = value;
  // @@protoc_insertion_point(field_set:PManager_Login.LM_ClientKey.ConId)
}

// -------------------------------------------------------------------

// ML_ClientKey

// int32 ret = 1;
inline void ML_ClientKey::clear_ret() {
  ret_ = 0;
}
inline ::google::protobuf::int32 ML_ClientKey::ret() const {
  // @@protoc_insertion_point(field_get:PManager_Login.ML_ClientKey.ret)
  return ret_;
}
inline void ML_ClientKey::set_ret(::google::protobuf::int32 value) {
  
  ret_ = value;
  // @@protoc_insertion_point(field_set:PManager_Login.ML_ClientKey.ret)
}

// string key = 2;
inline void ML_ClientKey::clear_key() {
  key_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& ML_ClientKey::key() const {
  // @@protoc_insertion_point(field_get:PManager_Login.ML_ClientKey.key)
  return key_.GetNoArena();
}
inline void ML_ClientKey::set_key(const ::std::string& value) {
  
  key_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:PManager_Login.ML_ClientKey.key)
}
#if LANG_CXX11
inline void ML_ClientKey::set_key(::std::string&& value) {
  
  key_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:PManager_Login.ML_ClientKey.key)
}
#endif
inline void ML_ClientKey::set_key(const char* value) {
  GOOGLE_DCHECK(value != NULL);
  
  key_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:PManager_Login.ML_ClientKey.key)
}
inline void ML_ClientKey::set_key(const char* value, size_t size) {
  
  key_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:PManager_Login.ML_ClientKey.key)
}
inline ::std::string* ML_ClientKey::mutable_key() {
  
  // @@protoc_insertion_point(field_mutable:PManager_Login.ML_ClientKey.key)
  return key_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* ML_ClientKey::release_key() {
  // @@protoc_insertion_point(field_release:PManager_Login.ML_ClientKey.key)
  
  return key_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void ML_ClientKey::set_allocated_key(::std::string* key) {
  if (key != NULL) {
    
  } else {
    
  }
  key_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), key);
  // @@protoc_insertion_point(field_set_allocated:PManager_Login.ML_ClientKey.key)
}

// int64 ConId = 3;
inline void ML_ClientKey::clear_conid() {
  conid_ = GOOGLE_LONGLONG(0);
}
inline ::google::protobuf::int64 ML_ClientKey::conid() const {
  // @@protoc_insertion_point(field_get:PManager_Login.ML_ClientKey.ConId)
  return conid_;
}
inline void ML_ClientKey::set_conid(::google::protobuf::int64 value) {
  
  conid_ = value;
  // @@protoc_insertion_point(field_set:PManager_Login.ML_ClientKey.ConId)
}

// int64 Uid = 4;
inline void ML_ClientKey::clear_uid() {
  uid_ = GOOGLE_LONGLONG(0);
}
inline ::google::protobuf::int64 ML_ClientKey::uid() const {
  // @@protoc_insertion_point(field_get:PManager_Login.ML_ClientKey.Uid)
  return uid_;
}
inline void ML_ClientKey::set_uid(::google::protobuf::int64 value) {
  
  uid_ = value;
  // @@protoc_insertion_point(field_set:PManager_Login.ML_ClientKey.Uid)
}

#endif  // !PROTOBUF_INLINE_NOT_IN_HEADERS
// -------------------------------------------------------------------


// @@protoc_insertion_point(namespace_scope)


}  // namespace PManager_Login

#ifndef SWIG
namespace google {
namespace protobuf {

template <> struct is_proto_enum< ::PManager_Login::EMC_CMD> : ::google::protobuf::internal::true_type {};
template <>
inline const EnumDescriptor* GetEnumDescriptor< ::PManager_Login::EMC_CMD>() {
  return ::PManager_Login::EMC_CMD_descriptor();
}

}  // namespace protobuf
}  // namespace google
#endif  // SWIG

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_Manager_5fLogin_2eproto__INCLUDED
