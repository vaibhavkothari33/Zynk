type ChatType = 'singleChat' | 'groupChat' | 'chatRoom';
export interface TextParameters {
	/** The message type. */
	type: 'txt';
	/** The message ID. */
	id: string;
}
/** The delivery priority of chat room messages.
 *  Currently, this attribute is available only to chat room messages. If this attribute is not set, messages are assigned a medium priority. */
export type MessagePriority =
	/** High. */
	| 'high'
	/** Medium. */
	| 'normal'
	/** Low. */
	| 'low';
export interface TextMsgSetParameters {
	/** The session type. */
	chatType: ChatType;
	/** The recipient. */
	to: string;
	/** The message content. */
	msg: string;
	/** The sender, which can only be the current user and can not be changed.*/
	from?: string;
	/** @deprecated Whether the session type is chat room. */
	roomType?: boolean;
	/** The callback for message sending success. */
	success?: () => void;
	/** The callback for a message sending failure. */
	fail?: () => void;
	/** Message extension. */
	ext?: {
		[key: string]: any;
	};
	/** Whether the message is a thread message. */
	isChatThread?: boolean;
}
export interface TextMsgBody {
	/** The message ID. */
	id: string;
	/** The session type. */
	chatType: ChatType;
	/** The message type. */
	type: 'txt';
	/** The recipient. */
	to: string;
	/** The message content. */
	msg: string;
	/** The sender, which can only be the current user and can not be changed.*/
	from?: string;
	/** @deprecated Whether the session type is chat room. */
	roomType?: boolean;
	/** @deprecated Whether the session type is group. */
	group?: string;
	/** The callback for message sending success. */
	success?: () => void;
	/** The callback for a message sending failure. */
	fail?: () => void;
	/** Message extension. */
	ext?: {
		[key: string]: any;
	};
	/** Whether read receipts are required during a group session. */
	msgConfig?: {
		allowGroupAck?: boolean;
		languages?: string[];
	};
	/** Time. */
	time: number;
	/** Whether the message is a thread message. */
	isChatThread?: boolean;
	/** Message priority. */
	priority?: MessagePriority;
	/** Whether the message is delivered only when the recipient(s) is/are online:
	 *  - `true`: The message is delivered only when the recipient(s) is/are online. If the recipient is offline, the message is discarded.
	 *  - (Default) `false`: The message is delivered when the recipient(s) is/are online. If the recipient(s) is/are offline, the message will not be delivered to them until they get online.
	 */
	deliverOnlineOnly?: boolean;
	/** The list of message recipients. */
	receiverList?: string[];
}
export interface CreateTextMsgParameters {
	/** The session type. */
	chatType: ChatType;
	/** The message type. */
	type: 'txt';
	/** The recipient. */
	to: string;
	/** The message content. */
	msg: string;
	/** The sender, which can only be the current user and can not be changed. */
	from?: string;
	/** The message extension. */
	ext?: {
		[key: string]: any;
	};
	/** Whether read receipts are required during a group session. */
	msgConfig?: {
		allowGroupAck?: boolean;
		languages?: string[];
	};
	/** Whether the message is a thread message. */
	isChatThread?: boolean;
	/** Message priority. */
	priority?: MessagePriority;
	/** Whether the message is delivered only when the recipient(s) is/are online:
	 *  - `true`: The message is delivered only when the recipient(s) is/are online. If the recipient is offline, the message is discarded.
	 *  - (Default) `false`: The message is delivered when the recipient(s) is/are online. If the recipient(s) is/are offline, the message will not be delivered to them until they get online.
	 */
	deliverOnlineOnly?: boolean;
	/** The list of message recipients. */
	receiverList?: string[];
}
export declare class Text {
	id: string;
	type: 'txt';
	value: string;
	body?: TextMsgBody;
	constructor(parameters: TextParameters);
	/**
	 * @hidden
	 */
	set(options: TextMsgSetParameters): void;
	/**
	 * @hidden
	 */
	setChatType(chatType: ChatType): boolean;
	/**
	 * @hidden
	 */
	setGroup(group: string): boolean;
	static create(options: CreateTextMsgParameters): TextMsgBody;
}
