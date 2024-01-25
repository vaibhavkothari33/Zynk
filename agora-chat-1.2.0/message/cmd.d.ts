type ChatType = 'singleChat' | 'groupChat' | 'chatRoom';
export interface CmdParameters {
	/** The message type. */
	type: 'cmd';
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

export interface CmdMsgSetParameters {
	/** The session type. */
	chatType: ChatType;
	/** The recipient. */
	to: string;
	/** The command. */
	action: string;
	/** The sender, which can only be the current user and can not be changed. */
	from?: string;
	/** @deprecated Whether the session type is chat room. */
	roomType?: boolean;
	/** The callback for message sending success. */
	success?: () => void;
	/** The callback for a message sending failure. */
	fail?: () => void;
	/** The message extension. */
	ext?: {
		[key: string]: any;
	};
}
export interface CmdMsgBody {
	/** The message ID. */
	id: string;
	/** The message type. */
	type: 'cmd';
	/** The session type. */
	chatType: ChatType;
	/** The recipient. */
	to: string;
	/** The command. */
	action: string;
	/** The sender, which can only be the current user and can not be changed. */
	from?: string;
	/** @deprecated Whether the session type is chat room. */
	roomType?: boolean;
	/** @deprecated Whether the session type is chat room. */
	group?: string;
	/** Whether read receipts are required during a group session. */
	msgConfig?: {
		allowGroupAck: boolean;
	};
	/** The callback for message sending success. */
	success?: () => void;
	/** The callback for a message sending failure. */
	fail?: () => void;
	/** The message extension. */
	ext?: {
		[key: string]: any;
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
export interface CreateCmdMsgParameters {
	/** The message type. */
	type: 'cmd';
	/** The session type. */
	chatType: ChatType;
	/** The recipient. */
	to: string;
	/** The command. */
	action: string;
	/** The sender, which can only be the current user and can not be changed.*/
	from?: string;
	/** The message extension. */
	ext?: {
		[key: string]: any;
	};
	/** Whether read receipts are required during a group session. */
	msgConfig?: {
		allowGroupAck: boolean;
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
export declare class Cmd {
	id: string;
	type: 'cmd';
	body?: CmdMsgBody;
	constructor(parameters: CmdParameters);
	/**
	 * @hidden
	 */
	set(options: CmdMsgSetParameters): void;
	/**
	 * @hidden
	 */
	setChatType(chatType: ChatType): boolean;
	/**
	 * @hidden
	 */
	setGroup(group: string): boolean;
	static create(options: CreateCmdMsgParameters): CmdMsgBody;
}
