import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid"
import { BellIcon, BookmarkIcon, ClipboardIcon, HashtagIcon, InboxIcon, UserIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon } from "@heroicons/react/outline"
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Sidebar() {
  const { data: session } = useSession()
  return (
    <div className="fixed flex-col hidden h-full p-2 sm:flex xl:items-start xl:ml-24">

      {/* Twitter logo */}
      <div className="p-0 hoverEffect hover:bg-blue-100 xl:px-1">
        <Image width="50" height="50" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt="" />
      </div>

      {/* Menu */}
      <div className="mt-4 xl:items-start">
        <Link href="/">
          <a>
            <SidebarMenuItem text="Home" Icon={HomeIcon} active />
          </a>
        </Link>
        
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        {session && (
          <>
            <SidebarMenuItem text="Notifications" Icon={BellIcon} />
            <SidebarMenuItem text="Messages" Icon={InboxIcon} />
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
            <SidebarMenuItem text="Profile" Icon={UserIcon} />
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
          </>
        )}
        
      </div>

      {/* Button */}
      {session ? (
        <>
         <button className="hidden w-56 h-12 mt-12 text-lg font-bold text-white bg-blue-400 rounded-full shadow-md hover:brightness-95 xl:inline">Tweet</button>

          {/* Mini-profile */}
          <div className="flex items-center justify-center text-gray-700 hoverEffect xl:justify-start">
            <img onClick={signOut} src={session.user.image} alt="user-img" className="w-10 h-10 rounded-full xl:mr-2" />
            <div className="hidden leading-5 xl:inline">
              <h4 className="font-bold">{session.user.name}</h4>
              <p className="text-gray-500">@{session.user.username}</p>
            </div>
          </div>
          <DotsHorizontalIcon className="h-5 xl:ml-8 xl:inline" />
        </>
      ) : (
        <button onClick={signIn} className="hidden h-12 mt-12 text-lg font-bold text-white bg-blue-400 rounded-full shadow-md w-36 hover:brightness-95 xl:inline">Sign In</button>
      )}
      
    </div>
  )
}
