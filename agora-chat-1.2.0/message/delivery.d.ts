export interface DeliveryParameters {
	/** The ID of the delivery receipt. */
	id: string;
	/** The message type. */
	type: 'delivery';
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
export interface DeliveryMsgSetParameters {
	/** The ID of the delivered message. This parameter has the same value as mid. */
	ackId: string;
	/** The recipient. */
	to: string;
	/** The sender, which can only be the current user and can not be changed. */
	from?: string;
}
export interface DeliveryMsgBody {
	/** The ID of the delivery receipt. */
	id: string;
	/** The ID of the delivered message. */
	mid?: string;
	/** The ID of the delivered message. This parameter has the same value as mid. */
	ackId: string;
	/** The message type. */
	type: 'delivery';
	/** The recipient. */
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
export interface CreateDeliveryMsgParameters {
	/** The ID of the delivered message. */
	ackId: string;
	/** The message type. */
	type: 'delivery';
	/** The recipient. */
	to: string;
	/** The sender, which can only be the current user and can not be changed.*/
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
export declare class Delivery {
	id: string;
	type: 'delivery';
	body?: DeliveryMsgBody;
	constructor(parameters: DeliveryParameters);
	/**
	 * @hidden
	 */
	set(options: DeliveryMsgSetParameters): void;
	static create(options: CreateDeliveryMsgParameters): DeliveryMsgBody;
}
