#pragma once
#include "Ogre.h"
#include <SDL_video.h>
#include <SDL_syswm.h>
#include "MFW3D_Input.h"

#include "Singleton.h"
extern "C" struct SDL_Window;
namespace MFW3D
{
	class MFW3D_InputMgr:public MFW::Singleton<MFW3D_InputMgr>
	{
	private:
		SDL_Window*	mSDLWindow;
		std::set<MFW3D_InputListener*> mInputListeners;
		Ogre::Root* mRoot = nullptr;
		Ogre::RenderWindow* mWindow = nullptr;
		std::function<void(Ogre::RenderWindow* rw)> OnwindowResized = nullptr;
	public:
		void init(Ogre::RenderWindow* window, std::function<void(Ogre::RenderWindow* rw)> onwindowResized);
		SDL_SysWMinfo InitWindow(Ogre::String mAppName, Ogre::Root* root);
		void SetupWindow(bool _grab);
		void PollEvent();
		void addInputListener(MFW3D_InputListener* lis) {
			mInputListeners.insert(lis);
		}
		void removeInputListener(MFW3D_InputListener* lis) {
			mInputListeners.erase(lis);
		}
		void FrameRenderQueue(const Ogre::FrameEvent& evt);
		void Destroy();
	};
}
