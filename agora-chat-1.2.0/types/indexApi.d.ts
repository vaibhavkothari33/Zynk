import { Jid } from './common';
import { MessageBody, MessagesType, ModifiedMsg } from './message';
interface UpdateOwnUserInfoParams {
	/** The nickname. */
	nickname?: string;
	/** The avatar URL. */
	avatarurl?: string;
	/** The email address. */
	mail?: string;
	/** The phone number. */
	phone?: string;
	/** Gender. You can define it with the following type: string, number, boolean. */
	gender?: string | number | boolean;
	/** Signature. */
	sign?: string;
	/** Birthday. */
	birth?: string;
	/** Extension. You can define it with the following type: string, number, boolean. */
	ext?: string;
}
/** Configurable fields. */
declare type ConfigurableKey =
	| 'nickname'
	| 'avatarurl'
	| 'mail'
	| 'phone'
	| 'gender'
	| 'sign'
	| 'birth'
	| 'ext';
interface RosterData {
	name: string;
	subscription: 'both';
	jid: Jid;
}
interface BaseUserInfo {
	/** Whether the current user is enabled. - `true`: Yes; - `false`: No.*/
	activated: boolean;
	/** The timestamp when the current user is created. */
	created: number;
	/** The time when the user information is last modified. */
	modified: number;
	/** The display name in the message push notification. */
	nickname: string;
	/** The user type. */
	type: string;
	/** The user ID. */
	username: string;
	/** The user uuid on the server. */
	uuid: string;
}
export interface PushInfo {
	/** The device ID, used to identify a device, which can be customized.*/
	device_id: string;
	/** The push token, which can be defined by yourself, is generally used to identify the same device. */
	device_token: string;
	/** The Push service appId, senderID for FCM, "appId+#+AppKey" for Vivo */
	notifier_name: string;
}
interface UploadTokenResult extends BaseUserInfo {
	/** The push information. */
	pushInfo: PushInfo[];
}
interface SessionInfo {
	/** The conversation ID. */
	channel_id: string;
	/** The content of the last message.*/
	meta: {
		/** The message sender. */
		from: string;
		/** The message ID. */
		id: string;
		/** The message content. */
		payload: string;
		/** The time when the message is received. */
		timestamp: number;
		/** The message recipient. */
		to: string;
	};
	/** The number of unread messages. */
	unread_num: number;
}
interface ConversationList {
	/** The conversation ID. */
	channel_id: string;
	/** Overview of the latest news. */
	lastMessage: MessageBody | Record<string, never>;
	/** The number of unread messages. */
	unread_num: number;
}
interface ConversationInfo {
	/** The conversation list. */
	channel_infos: ConversationList[];
}
interface DeleteSessionResult {
	/** The result of request. */
	result: 'ok';
}
interface SendMsgResult {
	/** The local ID of the message. */
	localMsgId: string;
	/** The message ID on the server. */
	serverMsgId: string;
}
interface ModifyMsgResult extends SendMsgResult {
	/** The modified message. */
	message: ModifiedMsg;
}
interface HistoryMessages {
	/** The starting message ID for the next query. If the number of messages returned by the SDK is smaller than the requested number, the cursor will be `undefined`. */
	cursor?: string;
	/** The historical messages. */
	messages: MessagesType[];
	/** Whether it is the last page of data.
	 *  - `true`: Yes;
	 *  - `false`: No.
	 * If the number of data entries is smaller than the message count set in the request, `false` is returned; otherwise, `true` is returned.
	 */
	isLast: boolean;
}
interface ServerConversations {
	/** The conversation list. */
	conversations: ConversationItem[];
	/** The position from which to start getting data for the next query. If the number of returned data entries is smaller than that specified in the request, the cursor is an empty string (''), which indicates that the current page is the last page; otherwise, the SDK returns the specific cursor position which indicates where to start getting data for the next query.*/
	cursor: string;
}
interface ConversationItem {
	/** The conversation ID. */
	conversationId: string;
	/** The conversation type. */
	conversationType: 'singleChat' | 'groupChat';
	/** Whether the conversation is pinned. `true`:pinned; `false`: unpinned. */
	isPinned: boolean;
	/** The UNIX timestamp when the conversation is pinned. The unit is millisecond. This value is `0` when conversation is not pinned. */
	pinnedTime: number;
	/** Overview of the latest message. */
	lastMessage: MessageBody | Record<string, never> | null;
	/** The number of unread messages. */
	unReadCount: number;
}
interface PinConversation {
	/** Whether the conversation is pinned. `true`: pinned; `false`: unpinned.*/
	isPinned: boolean;
	/** The UNIX timestamp when the conversation is pinned. The unit is millisecond. This value is `0` when the conversation is not pinned. */
	pinnedTime: number;
}
export type {
	UploadTokenResult,
	SessionInfo,
	ConversationList,
	BaseUserInfo,
	DeleteSessionResult,
	SendMsgResult,
	ConversationInfo,
	ServerConversations,
	ConversationItem,
	PinConversation,
	RosterData,
	UpdateOwnUserInfoParams,
	ConfigurableKey,
	HistoryMessages,
	ModifyMsgResult,
};
