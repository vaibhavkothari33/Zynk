/**
 * The threading types.
 * @module TYPES
 */
import { UserId } from './common';
import { MessageBody } from './message';
/** The message thread interface. */
interface ChatThread {
	/** The ID of the parent message in the message thread. */
	messageId: string;
	/** The group ID to which the message thread belongs. */
	parentId: string;
	/** The message thread name. */
	chatThreadName: SVGStringList;
}
/** The message thread overview interface. */
interface ChatThreadOverview {
	/** The message thread ID. */
	id: string;
	/** The group ID to which the message thread belongs. */
	parentId: string;
	/** The message thread name. */
	name: string;
	/** The last threaded reply. */
	lastMessage: LastMessage;
	/** The Unix timestamp when the message thread is created. The unit is millisecond. */
	createTimestamp: number;
	/** The Unix timestamp when the message thread overview is updated. The unit is millisecond. */
	updateTimestamp: number;
	/** The number of threaded replies. */
	messageCount: number;
}
/** The interface for the last threaded reply. */
interface LastMessage {
	/** The message ID. */
	id: string;
	/** The user ID of the sender. */
	from: string;
	/** The user ID of the recipient. */
	to: string;
	/** The Unix timestamp when the message is sent. The unit is millisecond. */
	timestamp: number;
	/** The message content. */
	payload: any;
}
export declare type Operation = 'create' | 'update' | 'delete' | 'update_msg';
/** The interface for message thread events. */
interface ThreadNotifyServerMsg {
	/** The event type. */
	operation: Operation;
	/** The ID of the parent message in the message thread. */
	msg_parent_id?: string;
	/** The message thread ID. */
	id: string;
	/** The group ID to which the message thread belongs. */
	muc_parent_id: string;
	/** The message thread name. */
	name: string;
	/** The Unix timestamp when an event occurs. The unit is millisecond. */
	timestamp: number;
	/** The operator. */
	from?: string;
	/** The last threaded reply. */
	last_message?: LastMessage;
	/** The number of threaded replies. */
	message_count?: number;
}
/** The interface for the message thread creation result. */
interface CreateChatThreadResult {
	/** The message thread ID. */
	chatThreadId: string;
}
/** The interface for the message thread name changes. */
interface ChangeChatThreadName {
	/** The message thread name. */
	name: string;
}
/** The interface for the message thread member list. */
interface ChatThreadMembers {
	/** The list of members in a message thread. */
	affiliations: string[];
}
/** The definition for the result of removing a member from the message thread. */
declare type RemoveMemberResult = {
	/** Whether the member is successfully removed from the message thread.
	 * - `true`: Yes.
	 * - `false`: No.
	 */
	result: boolean;
	/** The ID of the removed message thread member. */
	user: UserId;
};
/** The interface for the message thread details. */
interface ChatThreadDetail {
	/** The message thread ID. */
	id: string;
	/** The message thread name. */
	name: string;
	/** The message thread creator. */
	owner: string;
	/** The Unix timestamp when the message thread is created. The unit is millisecond. */
	created: number;
	/** The member count of the message thread. */
	affiliationsCount?: number;
	/** The group ID to which the message thread belongs. */
	parentId: string;
	/** The ID of the parent message. */
	messageId: string;
}
/** The interface for the result of joining the message thread. */
interface JoinChatThreadResult {
	/** Whether the current user successfully joins the message thread. The value is `OK`, indicating that the user successfully joins the message thread.*/
	status: string;
	/** The message thread details. */
	detail: ChatThreadDetail;
}
/** The interface for the last threaded reply. */
interface ChatThreadLastMessage {
	/** The message thread ID. */
	chatThreadId: string;
	/** The last threaded reply. */
	lastMessage: MessageBody;
}
/**
 * The definition of the message thread event types: <br/>
 * create: Occurs when creating a chat thread.<br/>
 * update: Occurs when there is a new message in the chat thread.<br/>
 * destroy: Occurs when a chat thread is deleted.<br/>
 * userRemove: Occurs when you were kicked out of chat thread.<br/>
 */
declare type onChatThreadChangeType =
	| 'create'
	| 'update'
	| 'destroy'
	| 'userRemove';
/** The interface for the message thread event details. */
interface ThreadChangeInfo {
	/** The message thread ID. */
	id: string;
	/** The message thread name. */
	name: string;
	/** The operator. */
	operator: string;
	/** The event type. */
	operation: onChatThreadChangeType;
	/** The group ID to which the message thread belongs. */
	parentId: string;
	/** The ID of the parent message. */
	messageId?: string;
	/** The number of threaded replies. */
	messageCount?: number;
	/** The last threaded reply. */
	lastMessage?: MessageBody | {};
	/** The operation object. */
	userName?: string;
	/** The Unix timestamp when the event occurs. The unit is millisecond. */
	timestamp?: number;
	/** The Unix timestamp when the message thread is created. The unit is millisecond.*/
	createTimestamp?: number;
}
export type {
	ChatThread,
	ThreadNotifyServerMsg,
	LastMessage,
	ChatThreadOverview,
	CreateChatThreadResult,
	ChangeChatThreadName,
	ChatThreadMembers,
	RemoveMemberResult,
	ChatThreadDetail,
	JoinChatThreadResult,
	ChatThreadLastMessage,
	ThreadChangeInfo,
	onChatThreadChangeType,
};
