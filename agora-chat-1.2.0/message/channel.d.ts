type ChatType = 'singleChat' | 'groupChat' | 'chatRoom';
export interface ChannelMsgSetParameters {
	/** The session type. */
	chatType: ChatType;
	/** The receipt. */
	to: string;
	/** The sender, which can only be the current user and can not be changed. */
	from?: string;
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
export interface ChannelMsgBody extends ChannelMsgSetParameters {
	/** The message ID. */
	id: string;
	/** Whether it's group chat. */
	group?: string;
	/** The message type. */
	type: 'channel';
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
}
export interface ChannelParameters {
	/** The message type. */
	type: 'channel';
	/** The message ID. */
	id: string;
}
export interface CreateChannelMsgParameters {
	/** The message type. */
	type: 'channel';
	/** The session type. */
	chatType: ChatType;
	/** The receipt. */
	to: string;
	/** The sender, which can only be the current user and can not be changed. */
	from?: string;
	/** Whether the message is a thread message. */
	isChatThread?: boolean;
	/** Message priority. */
	priority?: MessagePriority;
	/** Whether the message is delivered only when the recipient(s) is/are online:
	 *  - `true`: The message is delivered only when the recipient(s) is/are online. If the recipient is offline, the message is discarded.
	 *  - (Default) `false`: The message is delivered when the recipient(s) is/are online. If the recipient(s) is/are offline, the message will not be delivered to them until they get online.
	 */
	deliverOnlineOnly?: boolean;
}
export declare class Channel {
	id: string;
	type: 'channel';
	body?: ChannelMsgBody;
	constructor(parameters: ChannelParameters);
	/**
	 * @hidden
	 */
	set(options: ChannelMsgSetParameters): void;
	/**
	 * @hidden
	 */
	setChatType(chatType: ChatType): boolean;
	/**
	 * @hidden
	 */
	setGroup(group: string): boolean;
	static create(options: CreateChannelMsgParameters): ChannelMsgBody;
}
