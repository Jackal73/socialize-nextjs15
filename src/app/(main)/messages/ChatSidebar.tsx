import { ChannelList } from "stream-chat-react";
import { useSession } from "../SessionProvider";

// interface ChatSidebarProps {
//   open: boolean;
//   onClose: () => void;
// }

export default function ChatSidebar() {
  const { user } = useSession();

  return (
    <div className="size-full flex-col border-e md:flex md:w-72">
      <ChannelList
        filters={{
          type: "messaging",
          members: { $in: [user.id] },
        }}
        showChannelSearch
        options={{ state: true, presence: true, limit: 8 }}
        sort={{ last_message_at: -1 }}
        additionalChannelSearchProps={{
          searchForChannels: true,
          searchQueryParams: {
            channelFilters: {
              filters: { members: { $in: [user.id] } },
            },
          },
        }}
      />
    </div>
  );
}
