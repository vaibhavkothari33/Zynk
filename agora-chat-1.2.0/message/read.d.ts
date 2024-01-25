export interface ReadMsgSetParameters {
	/** The message ID. */
	id: string;
	/** The recipient. */
	to: string;
	/** The sender, which can only be the current user and can not be changed. */
	from?: string;
	/** The session type. */
	chatType: 'singleChat' | 'groupChat';
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
export interface ReadMsgBody extends ReadMsgSetParameters {
	/** The message type. */
	type: 'read';
	/** Session type. */
	chatType: 'singleChat' | 'groupChat';
	/** The ID of the read message */
	ackId: string;
	/** The ID of the read message This parameter has the same value as ackId.*/
	mid?: string;
	/** The number of group members that have read the messages. */
	groupReadCount?: {
		[key: string]: number;
	};
	/** The message content. */
	ackContent?: string;
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
export interface ReadParameters {
	/** The message type. */
	type: 'read';
	/** The recipient. */
	id: string;
}
export interface CreateReadMsgParameters {
	/** The recipient. */
	to: string;
	/** The sender, which can only be the current user and can not be changed. */
	from?: string;
	/** The message type. */
	type: 'read';
	/** The session type. */
	chatType: 'singleChat' | 'groupChat';
	/** The ID of the read message. */
	id: string;
	/** The message content. */
	ackContent?: string;
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
export declare class Read {
	id: string;
	type: 'read';
	body?: ReadMsgBody;
	constructor(parameters: ReadParameters);
	/**
	 * @hidden
	 */
	set(options: ReadMsgSetParameters): void;
	static create(options: CreateReadMsgParameters): ReadMsgBody;
}
