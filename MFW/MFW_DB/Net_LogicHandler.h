#pragma once
#include "NNTCPServerMgr.h"
#include "Singleton.h"
#include "Net_Handler.h"

/*
网络消息分发处理类
用于：服务器接收的消息分发至对应的处理类

*/
class Net_LogicHandler :public MFW::Singleton<Net_LogicHandler>, public NetServer_Handler
{
private:

public:
	Net_LogicHandler();
	virtual void OnRead(std::shared_ptr<NNTCPLinkNode>  session, std::string data, NNTCPNode& netNode);
	virtual void OnConnected(std::shared_ptr<NNTCPLinkNode>  session, NNTCPNode& netNode);
	virtual void OnDisConnected(std::shared_ptr<NNTCPLinkNode>  session, NNTCPNode& netNode);
	virtual void OnTimered(uv_timer_t* handle);

	//业务消息处理函数
	virtual void OnIdentification(std::shared_ptr<NNTCPLinkNode>&  session, const int& cmd, std::string& data, NNTCPNode& netNode);

};