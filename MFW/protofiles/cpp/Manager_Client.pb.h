// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: Manager_Client.proto

#ifndef PROTOBUF_Manager_5fClient_2eproto__INCLUDED
#define PROTOBUF_Manager_5fClient_2eproto__INCLUDED

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
namespace PManager_Client {
class Point_Fb;
class Point_FbDefaultTypeInternal;
extern Point_FbDefaultTypeInternal _Point_Fb_default_instance_;
}  // namespace PManager_Client

namespace PManager_Client {

namespace protobuf_Manager_5fClient_2eproto {
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
}  // namespace protobuf_Manager_5fClient_2eproto

// ===================================================================

class Point_Fb : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:PManager_Client.Point_Fb) */ {
 public:
  Point_Fb();
  virtual ~Point_Fb();

  Point_Fb(const Point_Fb& from);

  inline Point_Fb& operator=(const Point_Fb& from) {
    CopyFrom(from);
    return *this;
  }

  static const ::google::protobuf::Descriptor* descriptor();
  static const Point_Fb& default_instance();

  static inline const Point_Fb* internal_default_instance() {
    return reinterpret_cast<const Point_Fb*>(
               &_Point_Fb_default_instance_);
  }
  static PROTOBUF_CONSTEXPR int const kIndexInFileMessages =
    0;

  void Swap(Point_Fb* other);

  // implements Message ----------------------------------------------

  inline Point_Fb* New() const PROTOBUF_FINAL { return New(NULL); }

  Point_Fb* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const Point_Fb& from);
  void MergeFrom(const Point_Fb& from);
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
  void InternalSwap(Point_Fb* other);
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

  // @@protoc_insertion_point(class_scope:PManager_Client.Point_Fb)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  mutable int _cached_size_;
  friend struct protobuf_Manager_5fClient_2eproto::TableStruct;
};
// ===================================================================


// ===================================================================

#if !PROTOBUF_INLINE_NOT_IN_HEADERS
// Point_Fb

#endif  // !PROTOBUF_INLINE_NOT_IN_HEADERS

// @@protoc_insertion_point(namespace_scope)


}  // namespace PManager_Client

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_Manager_5fClient_2eproto__INCLUDED
