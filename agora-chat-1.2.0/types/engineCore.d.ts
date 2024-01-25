import { GroupId, UserId } from './common';
import { GroupModifyInfo, MemberAttributes } from './groupApi';
declare type OnPresenceMsgType =
	| 'rmChatRoomMute'
	| 'rmGroupMute'
	| 'muteChatRoom'
	| 'muteGroup'
	| 'rmUserFromChatRoomWhiteList'
	| 'rmUserFromGroupWhiteList'
	| 'addUserToChatRoomWhiteList'
	| 'addUserToGroupWhiteList'
	| 'deleteFile'
	| 'uploadFile'
	| 'deleteAnnouncement'
	| 'updateAnnouncement'
	| 'removeMute'
	| 'addMute'
	| 'removeAdmin'
	| 'addAdmin'
	| 'changeOwner'
	| 'direct_joined'
	| 'leaveChatRoom'
	| 'leaveGroup'
	| 'memberJoinChatRoomSuccess'
	| 'memberJoinPublicGroupSuccess'
	| 'unblock'
	| 'block'
	| 'update'
	| 'allow'
	| 'ban'
	| 'getBlackList'
	| 'removedFromGroup'
	| 'invite_decline'
	| 'invite_accept'
	| 'invite'
	| 'joinPublicGroupDeclined'
	| 'joinPublicGroupSuccess'
	| 'joinGroupNotifications'
	| 'leave'
	| 'join'
	| 'deleteGroupChat'
	| 'subscribe'
	| 'unsubscribed'
	| 'subscribed'
	| 'disableGroup'
	| 'ableGroup';
interface PresenceMsg {
	type: OnPresenceMsgType;
	to: string;
	from: string;
	status: string;
	chatroom?: boolean;
	toJid?: string;
	fromJid?: string;
	gid?: string;
	owner?: string;
	reason?: string;
	kicked?: string;
	groupName?: string;
	detail?: GroupModifyInfo;
}
interface SendMsgResult {
	/** The local ID of the message. */
	localMsgId: string;
	/** The ID of the message stored on the server. */
	serverMsgId: string;
}
declare type multiDeviceEventType =
	| 'chatThreadCreate'
	| 'chatThreadDestroy'
	| 'chatThreadJoin'
	| 'chatThreadLeave'
	| 'chatThreadNameUpdate';
interface ThreadMultiDeviceInfo {
	/** Event name of thread multi device event. */
	operation: multiDeviceEventType;
	/** The message thread ID. */
	chatThreadId?: string;
	/** The message thread name. */
	chatThreadName?: string;
	/** The ID of the parent message in the message thread. */
	parentId?: string;
}
interface RoamingDeleteMultiDeviceInfo {
	/** Event name of multi device event. */
	operation: 'deleteRoaming';
	/** The target user ID or group ID. */
	conversationId: string;
	/** The chat type. */
	chatType: 'singleChat' | 'groupChat';
	/** The client resource. */
	resource: string;
}
interface GroupMemberAttributesUpdateMultiDeviceInfo {
	/**
	 * Custom attributes of a group member.
	 */
	attributes: MemberAttributes;
	/** The user ID of the message sender.  */
	from: UserId;
	/** The group ID. */
	id: GroupId;
	/** The name of the multi-device event. */
	operation: 'memberAttributesUpdate';
	/** The user ID of the group member whose custom attributes are set.  */
	userId: UserId;
}
interface ConversationChangedInfo {
	/** The multi-device conversation event. */
	operation:
		| 'pinnedConversation'
		| 'unpinnedConversation'
		| 'deleteConversation';
	/** The conversation ID. */
	conversationId: string;
	/** The conversation type. */
	conversationType: 'singleChat' | 'groupChat';
	/** The UNIX timestamp of the current operation. The unit is millisecond.*/
	timestamp: number;
}
declare type MultiDeviceEvent =
	| ThreadMultiDeviceInfo
	| ConversationChangedInfo
	| RoamingDeleteMultiDeviceInfo
	| GroupMemberAttributesUpdateMultiDeviceInfo;
export type {
	OnPresenceMsgType,
	PresenceMsg,
	SendMsgResult,
	ThreadMultiDeviceInfo,
	ConversationChangedInfo,
	multiDeviceEventType,
	RoamingDeleteMultiDeviceInfo,
	GroupMemberAttributesUpdateMultiDeviceInfo,
	MultiDeviceEvent,
};
