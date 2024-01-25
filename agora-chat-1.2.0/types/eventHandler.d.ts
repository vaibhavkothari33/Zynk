import {
	TextMsgBody,
	CombineMsgBody,
	DeliveryMsgBody,
	ChannelMsgBody,
	CmdMsgBody,
	CustomMsgBody,
	ImgMsgBody,
	LocationMsgBody,
	AudioMsgBody,
	VideoMsgBody,
	FileMsgBody,
	ReceivedMsgBody,
	ReadMsgBody,
	RecallMsgBody,
	ContactMsgBody,
	ModifiedMsg,
} from '../types/message';
import { PresenceMsg, MultiDeviceEvent } from './engineCore';
import { ErrorEvent } from './error';
import { PresenceType } from './presenceApi';
import { ReactionMessage } from './reactionApi';
import { ThreadChangeInfo } from './threadApi';
import { EventData } from './common';
import { GroupModifyInfo } from './groupApi';
export declare type OnPresenceMsgType =
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
interface OnPresenceMsg {
	type: OnPresenceMsgType;
	to: string;
	from: string;
	status: string;
	chatroom?: boolean;
	toJid?: string;
	fromJid?: string;
	gid?: string;
	owner?: string;
}
declare type Event =
	| 'onOpened'
	| 'onPresence'
	| 'onTextMessage'
	| 'onCombineMessage'
	| 'onImageMessage'
	| 'onAudioMessage'
	| 'onVideoMessage'
	| 'onFileMessage'
	| 'onLocationMessage'
	| 'onCmdMessage'
	| 'onCustomMessage'
	| 'onReceivedMessage'
	| 'onDeliveredMessage'
	| 'onReadMessage'
	| 'onRecallMessage'
	| 'onChannelMessage'
	| 'onModifiedMessage'
	| 'onError'
	| 'onOffline'
	| 'onOnline'
	| 'onStatisticMessage'
	| 'onContactAgreed'
	| 'onContactRefuse'
	| 'onContactDeleted'
	| 'onContactAdded'
	| 'onTokenWillExpire'
	| 'onTokenExpired'
	| 'onContactInvited'
	| 'onConnected'
	| 'onReconnecting'
	| 'onDisconnected'
	| 'onGroupChange'
	| 'onChatroomChange'
	| 'onContactChange'
	| 'onPresenceStatusChange'
	| 'onReactionChange'
	| 'onChatThreadChange'
	| 'onMultiDeviceEvent'
	| 'onGroupEvent'
	| 'onChatroomEvent';
export interface ChatroomEvent {
	/** The type of operation. <br/>
	 * destroy:  Occurs when the chat room was destroyed.<br/>
	 * removeMember:  Occurs when you are removed from a chat room or added to block list. Only the removed person receives this event.<br/>
	 * unblockMember: Occurs when being removed from the block list. Only the removed person receives this event.<br/>
	 * updateInfo: Occurs when modifying chat room. <br/>
	 * memberPresence: Occurs when someone joined the chat room. <br/>
	 * memberAbsence: Occurs when someone leaved the chat room. <br/>
	 * setAdmin: Occurs when being set as administrator. Only the person who is set to administrator can receive this event.<br/>
	 * removeAdmin: Occurs when you are removed as an administrator. Only the removed person can receive this event.  <br/>
	 * muteMember: Occurs when you are muted. Only the person who is muted can receive this event. <br/>
	 * unmuteMember: Occurs when you are unmuted. Only the person who is unmuted can receive this event. <br/>
	 * updateAnnouncement: Occurs when the chat room announcement was updated.  <br/>
	 * deleteAnnouncement: Occurs when the chat room announcement was deleted.  <br/>
	 * uploadFile: Occurs when a shared file is uploaded.    <br/>
	 * deleteFile: Occurs when a shared file is deleted.  <br/>
	 * addUserToAllowlist: Occurs when being added to the allow list.   <br/>
	 * removeAllowlistMember: Occurs when being removed from the allow list.  <br/>
	 * muteAllMembers: Occurs when the chat room was set with a ban for all members.  <br/>
	 * unmuteAllMembers: Occurs when the chat room lifted the ban.  <br/>
	 * updateChatRoomAttributes: Occurs when the chat room attributes are updated.  <br/>
	 * removeChatRoomAttributes: when the chat room attributes are deleted. <br/>
	 */
	operation:
		| 'destroy'
		| 'removeMember'
		| 'unblockMember'
		| 'updateInfo'
		| 'memberPresence'
		| 'memberAbsence'
		| 'setAdmin'
		| 'removeAdmin'
		| 'muteMember'
		| 'unmuteMember'
		| 'updateAnnouncement'
		| 'deleteAnnouncement'
		| 'uploadFile'
		| 'deleteFile'
		| 'addUserToAllowlist'
		| 'removeAllowlistMember'
		| 'muteAllMembers'
		| 'unmuteAllMembers'
		| 'updateChatRoomAttributes'
		| 'removeChatRoomAttributes';
	/** The ID of a chatroom. */
	id: string;
	/** Message sender. */
	from: string;
	/** The name of a chatroom.  */
	name?: string;
	/** ChatRoom Attributes.  */
	attributes?:
		| Array<string>
		| {
				[key: string]: string;
		  };
}
export interface GroupEvent {
	/** The type of operation. <br/>
	 * create: Occurs when the current user created a group on another device.<br/>
	 * destroy:  Occurs when the group was destroyed.<br/>
	 * requestToJoin: Occurs when someone applied to join the group. Only the group owner and administrator will receive this event. <br/>
	 * acceptRequest: Occurs when your group adding application is approved. Only the person who applies for group will receive this event.<br/>
	 * joinPublicGroupDeclined: Occurs when your group adding application is refused. Only the person who applies for group will receive this event.<br/>
	 * inviteToJoin: Occurs when you receive an invitation to join a group. <br/>
	 * acceptInvite: Occurs when someone accepted your invitation to join the group. <br/>
	 * rejectInvite: Occurs when someone refused your invitation to join the group. <br/>
	 * removeMember:  Occurs when you are removed from a group or added to block list. Only the removed person receives this event.<br/>
	 * unblockMember: Occurs when being removed from the block list. Only the removed person receives this event.<br/>
	 * updateInfo: Occurs when modifying group. <br/>
	 * memberPresence: Occurs when someone joined the group. <br/>
	 * memberAbsence: Occurs when someone leaved the group. <br/>
	 * directJoined: Occurs when you are directly pulled into the group and no consent is required. <br/>
	 * changeOwner: Occurs when transferring group. Only new and old group owners can receive this event. <br/>
	 * setAdmin: Occurs when being set as administrator. Only the person who is set to administrator can receive this event.<br/>
	 * removeAdmin: Occurs when you are removed as an administrator. Only the removed person can receive this event.  <br/>
	 * muteMember: Occurs when you are muted. Only the person who is muted can receive this event. <br/>
	 * unmuteMember: Occurs when you are unmuted. Only the person who is unmuted can receive this event. <br/>
	 * updateAnnouncement: Occurs when the group announcement was updated.  <br/>
	 * deleteAnnouncement: Occurs when the group announcement was deleted.  <br/>
	 * uploadFile: Occurs when a shared file is uploaded.    <br/>
	 * deleteFile: Occurs when a shared file is deleted.  <br/>
	 * addUserToAllowlist: Occurs when being added to the allow list.   <br/>
	 * removeAllowlistMember: Occurs when being removed from the allow list.  <br/>
	 * muteAllMembers: Occurs when the group was set with a ban for all members.  <br/>
	 * unmuteAllMembers: Occurs when the group lifted the ban.  <br/>
	 * memberAttributesUpdate: Occurs when a custom attributes of a group member is updated. <br/>
	 */
	operation:
		| 'create'
		| 'destroy'
		| 'requestToJoin'
		| 'acceptRequest'
		| 'joinPublicGroupDeclined'
		| 'inviteToJoin'
		| 'acceptInvite'
		| 'rejectInvite'
		| 'removeMember'
		| 'unblockMember'
		| 'updateInfo'
		| 'memberPresence'
		| 'memberAbsence'
		| 'directJoined'
		| 'changeOwner'
		| 'setAdmin'
		| 'removeAdmin'
		| 'muteMember'
		| 'unmuteMember'
		| 'updateAnnouncement'
		| 'deleteAnnouncement'
		| 'uploadFile'
		| 'deleteFile'
		| 'addUserToAllowlist'
		| 'removeAllowlistMember'
		| 'muteAllMembers'
		| 'unmuteAllMembers'
		| 'memberAttributesUpdate';
	/** The ID of a group. */
	id: string;
	/** Message sender. */
	from: string;
	/** The name of a group.  */
	name?: string;
	/** The modified group info. */
	detail?: GroupModifyInfo;
}
interface EventHandlerType {
	/** @hidden */
	onOpened?: (msg: any) => void;
	/** @hidden */
	onClosed?: (msg: any) => void;
	/** @hidden */
	onPresence?: (msg: OnPresenceMsg) => void;
	/** The callback to receive a text message. */
	onTextMessage?: (msg: TextMsgBody) => void;
	/** The callback to receive a combine message. */
	onCombineMessage?: (msg: CombineMsgBody) => void;
	/** The callback to receive a image message. */
	onImageMessage?: (msg: ImgMsgBody) => void;
	/** The callback to receive a audio message. */
	onAudioMessage?: (msg: AudioMsgBody) => void;
	/** The callback to receive a video message. */
	onVideoMessage?: (msg: VideoMsgBody) => void;
	/** The callback to receive a file message. */
	onFileMessage?: (msg: FileMsgBody) => void;
	/** The callback to receive a location message. */
	onLocationMessage?: (msg: LocationMsgBody) => void;
	/** The callback to receive a command message. */
	onCmdMessage?: (msg: CmdMsgBody) => void;
	/** The callback to receive a custom message. */
	onCustomMessage?: (msg: CustomMsgBody) => void;
	/** The callback to receive a received ack. */
	onReceivedMessage?: (msg: ReceivedMsgBody) => void;
	/** The callback to receive a delivery ack. */
	onDeliveredMessage?: (msg: DeliveryMsgBody) => void;
	/** The callback to receive a read ack. */
	onReadMessage?: (msg: ReadMsgBody) => void;
	/** The callback to receive a recall message. */
	onRecallMessage?: (msg: RecallMsgBody) => void;
	/** The callback to receive a session read ack. */
	onChannelMessage?: (msg: ChannelMsgBody) => void;
	/** Occurs when the message content is modified. */
	onModifiedMessage?: (msg: ModifiedMsg) => void;
	/** The callback to receive error. */
	onError?: (error: ErrorEvent) => void;
	/** The callback for network disconnection. */
	onOffline?: () => void;
	/** The callback for network connection. */
	onOnline?: () => void;
	/** The callback to receive a statistic message. */
	onStatisticMessage?: (msg: any) => void;
	/** The callback to accept contact request. */
	onContactAgreed?: (msg: ContactMsgBody) => void;
	/** The callback to refuse contact request. */
	onContactRefuse?: (msg: ContactMsgBody) => void;
	/** The callback to deleted a contact. */
	onContactDeleted?: (msg: ContactMsgBody) => void;
	/** The callback to added a contact. */
	onContactAdded?: (msg: ContactMsgBody) => void;
	/** The callback whose token is about to expire. */
	onTokenWillExpire?: () => void;
	/** The callback whose token has expired. */
	onTokenExpired?: () => void;
	/** The callback to contact request was received. */
	onContactInvited?: (msg: ContactMsgBody) => void;
	/** The callback for successful connection. */
	onConnected?: () => void;
	/** The callback for reconnecting. */
	onReconnecting?: () => void;
	/** The callback for disconnected. */
	onDisconnected?: () => void;
	/** @hidden The callback to receive a group event. */
	onGroupChange?: (msg: any) => void;
	/** @hidden The callback to receive a chatroom event. */
	onChatroomChange?: (msg: any) => void;
	/** @hidden The callback to receive a contact event. */
	onContactChange?: (msg: any) => void;
	/** Occurs when the presence state of a subscribed user changes. */
	onPresenceStatusChange?: (msg: PresenceType[]) => void;
	/** The callback to receive a thread event. */
	onChatThreadChange?: (msg: ThreadChangeInfo) => void;
	/** The callback to receive a reaction message. */
	onReactionChange?: (msg: ReactionMessage) => void;
	/** The callback to receive a multi device event. */
	onMultiDeviceEvent?: (msg: MultiDeviceEvent) => void;
	/** The callback to receive a group event. */
	onGroupEvent?: (eventData: GroupEvent) => void;
	/** The callback to receive a chatroom event. */
	onChatroomEvent?: (eventData: ChatroomEvent) => void;
}
interface ListenParameters {
	onOpened?: () => void;
	onPresence?: (msg: PresenceMsg) => void;
	onTextMessage?: (msg: TextMsgBody) => void;
	onPictureMessage?: (msg: ImgMsgBody) => void;
	onAudioMessage?: (msg: AudioMsgBody) => void;
	onVideoMessage?: (msg: VideoMsgBody) => void;
	onFileMessage?: (msg: FileMsgBody) => void;
	onLocationMessage?: (msg: LocationMsgBody) => void;
	onCmdMessage?: (msg: CmdMsgBody) => void;
	onCustomMessage?: (msg: CustomMsgBody) => void;
	onReceivedMessage?: (msg: ReceivedMsgBody) => void;
	onDeliveredMessage?: (msg: DeliveryMsgBody) => void;
	onReadMessage?: (msg: ReadMsgBody) => void;
	onRecallMessage?: (msg: RecallMsgBody) => void;
	onChannelMessage?: (msg: ChannelMsgBody) => void;
	onError?: (error: ErrorEvent) => void;
	onOffline?: () => void;
	onOnline?: () => void;
	onStatisticMessage?: () => void;
	onContactInvited?: (msg: ContactMsgBody) => void;
	onContactAgreed?: (msg: ContactMsgBody) => void;
	onContactRefuse?: (msg: ContactMsgBody) => void;
	onContactDeleted?: (msg: ContactMsgBody) => void;
	onContactAdded?: (msg: ContactMsgBody) => void;
	onTokenWillExpire?: () => void;
	onTokenExpired?: () => void;
	onClosed?: () => void;
	onPresenceStatusChange?: (msg: PresenceType[]) => void;
	onGroupEvent?: (eventData: EventData) => void;
	onChatroomEvent?: (eventData: ChatroomEvent) => void;
}
interface HandlerData {
	[key: string]: EventHandlerType;
}
declare class EventHandler {
	handlerData: HandlerData;
	addEventHandler: (
		eventHandlerId: string,
		eventHandler: EventHandlerType
	) => void;
	removeEventHandler: (eventHandlerId: string) => void;
	protected dispatch: (event: Event, ...args: any[]) => void;
}
export type {
	Event,
	EventHandlerType,
	HandlerData,
	EventHandler,
	OnPresenceMsg,
	ListenParameters,
};
