import * as IndexTypes from '../types/indexApi';
import * as ReactionTypes from '../types/reactionApi';
import { AsyncResult, UserId } from '../types/common';
import { MessageType } from '../types/message';
export interface Contact {
	/**
	 * Gets the blocklist.
	 *
	 * ```typescript
	 * connection.getBlocklist()
	 * ```
	 */
	getBlocklist(): Promise<AsyncResult<UserId[]>>;

	/**
	 * Gets the contact list.
	 *
	 * ```typescript
	 * connection.getContacts()
	 * ```
	 */
	getContacts(): Promise<AsyncResult<UserId[]>>;

	/**
	 * Uploads the token to the server. This method is used when the SDK is used on a native client on which a third-party push service is to be integrated.
	 *
	 * ```typescript
	 * connection.uploadPushToken({deviceId: 'deviceId', deviceToken: 'deviceToken', notifierName: 'notifierName'})
	 * ```
	 */
	uploadPushToken(params: {
		/** The device ID that identifies the device. Custom device IDs are allowed. */
		deviceId: string;
		/** The push token, which identifies a device during message push. Custom push tokens are allowed.*/
		deviceToken: string;
		/** The app ID for the push service, which is the senderID for Firebase Cloud Messaging (FCM) and "appId+#+AppKey" for the vivo push service. */
		notifierName: string;
	}): Promise<AsyncResult<IndexTypes.UploadTokenResult>>;

	/**
	 * Gets the conversation list.
	 *
	 * ```typescript
	 * connection.getConversationlist()
	 * ```
	 */
	getConversationlist(parames?: {
		/** The current page number, starting from 1. */
		pageNum?: number;
		/** The number of conversations that you expect to get on each page. The value cannot exceed 20. */
		pageSize?: number;
	}): Promise<AsyncResult<IndexTypes.SessionInfo[]>>;

	/**
	 * Deletes the conversation.
	 *
	 * ```typescript
	 * connection.deleteConversation()
	 * ```
	 */
	deleteConversation(params: {
		/** The conversation ID: the peer's user ID or group ID. */
		channel: string;
		/** The conversation type.
		 * - `singleChat`: one-to-one chat;
		 * - `groupChat`: group chat.
		 */
		chatType: 'singleChat' | 'groupChat';
		/** Whether to delete server roaming messages during conversation deletion.
		 * - `true`: Yes;
		 * - `false`: No.
		 */
		deleteRoam: boolean;
	}): Promise<AsyncResult<IndexTypes.DeleteSessionResult>>;

	/**
	 * Modifies the user's attributes.
	 *
	 * ```typescript
	 * connection.updateUserInfo({nickname: 'Tom', avatarurl: 'avatarurl', mail: 'abc@gmail,com', ext: JSON.stringify({hobby: 'football'})})
	 *
	 * connection.updateUserInfo('nickname', 'Tom')
	 * ```
	 */
	updateOwnUserInfo(
		params: IndexTypes.UpdateOwnUserInfoParams | IndexTypes.ConfigurableKey,
		value?: string
	): Promise<AsyncResult<IndexTypes.UpdateOwnUserInfoParams>>;

	/**
	 * Queries the user attributes.
	 *
	 * ```typescript
	 * connection.fetchUserInfoById('user1') | fetchUserInfoById(['user1', 'user2'])
	 * ```
	 */
	fetchUserInfoById(
		/** The array of IDs of users or user ID to query.  */
		userId: UserId | UserId[],
		/** User properties to query. If the parameter is blank, query all. */
		properties?: IndexTypes.ConfigurableKey[] | IndexTypes.ConfigurableKey
	): Promise<AsyncResult<IndexTypes.UpdateOwnUserInfoParams>>;

	/**
	 * Changes the nickname shown when the message push notification is received. This nickname is specified during user registration and it's not the same as the nickname attribute of the user.
	 *
	 * ```typescript
	 * connection.updateCurrentUserNick('Tom')
	 * ```
	 */
	updateCurrentUserNick(
		/** The nickname shown when a message push notification is received. */
		nick: string
	): Promise<AsyncResult<IndexTypes.BaseUserInfo[]>>;

	/**
	 * Gets the message history.
	 *
	 * ```typescript
	 * connection.getHistoryMessages({targetId:'targetId',chatType:'groupChat', pageSize: 20})
	 * ```
	 */
	getHistoryMessages(options: {
		/** The user ID of the other party or the group ID. */
		targetId: string;
		/** The starting message ID for this query. The default value is -1, which means to start retrieving from the latest message. */
		cursor?: number | string | null;
		/** The number of messages to retrieve each time. The default value is 20,The maximum value is 50. */
		pageSize?: number;
		/** The chat type for SDK:
		 * - `singleChat`: one-to-one chat;
		 * - `groupChat`: group chat;
		 * - (Default)`singleChat`: No.
		 */
		chatType?: 'singleChat' | 'groupChat';
		/** Whether to select pull history messages in positive order(Pull message from the oldest to the latest).
		 * - `up`: means searching from the newer messages to the older messages.
		 * - `down`: means searching from the older messages to the newer messages.
		 * - (Default)`up`.
		 */
		searchDirection?: 'down' | 'up';
		/** Query conditions. */
		searchOptions?: {
			/** The user ID of the message sender. This parameter is used only for group chat. */
			from?: UserId;
			/** An array of message types for query. If no value is passed in, all message types will be queried. */
			msgTypes?: Array<
				Exclude<MessageType, 'read' | 'delivery' | 'channel'>
			>;
			/** The start timestamp for query. The unit is millisecond. */
			startTime?: number;
			/** The end timestamp for query. The unit is millisecond. */
			endTime?: number;
		};
	}): Promise<IndexTypes.HistoryMessages>;

	/**
	 * Adds a friend.
	 *
	 * ```typescript
	 * connection.addContact('user1', 'I am Bob')
	 * ```
	 */
	addContact(
		/** The user ID of the other party. */
		to: string,
		/** The validation message. */
		message?: string
	): Promise<void>;

	/**
	 * Deletes the contact.
	 *
	 * ```typescript
	 * connection.deleteContact('user1')
	 * ```
	 */
	deleteContact(
		/** The user ID of the other party. */
		to: string
	): Promise<void>;

	/**
	 * Accepts a friend request.
	 *
	 * ```typescript
	 * connection.acceptContactInvite('user1')
	 * ```
	 */
	acceptContactInvite(
		/** The user ID of the other party. */
		to: string
	): Promise<void>;

	/**
	 * Declines a friend request.
	 *
	 * ```typescript
	 * connection.declineContactInvite('user1')
	 * ```
	 */
	declineContactInvite(
		/** The user ID of the other party. */
		to: string
	): Promise<void>;

	/**
	 * Adds a contact to the blocklist.
	 *
	 * ```typescript
	 * connection.addUsersToBlocklist({name: 'user1'})
	 * ```
	 */
	addUsersToBlocklist(options: {
		/** The user ID. You can type a specific user ID to add a single user to the blocklist or type an array of user IDs, like ["user1","user2"], to add multiple users. */
		name: UserId | UserId[];
	}): Promise<void>;

	/**
	 *
	 * Removes contacts from the blocklist.
	 *
	 * ```typescript
	 * connection.removeUserFromBlocklist({name: 'user1'})
	 * ```
	 */
	removeUserFromBlocklist(options: {
		/** The user ID. You can type a specific user ID to remove a single user from the blocklist or type an array of user IDs, like ["user1","user2"], to remove multiple users. */
		name: UserId | UserId[];
	}): Promise<void>;

	/**
	 * Recalls a message.
	 *
	 * ```typescript
	 * connection.recallMessage({mid: 'messageId', to: 'user1', type: 'singleChat'})
	 * ```
	 */
	recallMessage(option: {
		/** The ID of the message to be recalled. */
		mid: string;
		/** The recipient of the message. */
		to: UserId;
		/** The chat type for SDK:
		 * - `singleChat`: one-to-one chat;
		 * - `groupChat`: group chat;
		 * - `chatroom`: chat room.
		 */
		chatType?: 'singleChat' | 'groupChat' | 'chatRoom';
		/** Whether the message is in the thread. */
		isChatThread?: boolean;
	}): Promise<IndexTypes.SendMsgResult>;

	/**
	 * Adds a reaction to the message.
	 *
	 * ```typescript
	 * connection.addReaction({messageId: 'messageId', action: 'action'})
	 * ```
	 */
	addReaction(params: {
		/** The message ID. */
		messageId: string;
		/** The reaction to be added to the message. The length is limited to 128 characters. */
		reaction: string;
	}): Promise<void>;

	/**
	 * Removes a reaction from a message.
	 *
	 * ```typescript
	 * connection.deleteReaction({reactionId: 'reactionId'})
	 * ```
	 */
	deleteReaction(params: {
		/** The message reaction to delete.  */
		reaction: string;
		/** The message ID. */
		messageId: string;
	}): Promise<void>;

	/**
	 * Gets the reaction list for the message.
	 *
	 * ```typescript
	 * connection.getReactionlist({chatType: 'chatType', messageId: 'messageId'})
	 * ```
	 */
	getReactionList(params: {
		/** The conversation type:
		 * - singleChat;
		 * - groupChat;
		 */
		chatType: 'singleChat' | 'groupChat';
		/** The message ID. */
		messageId: string | Array<string>;
		/** The group ID. */
		groupId?: string;
	}): Promise<AsyncResult<ReactionTypes.GetReactionListResult[]>>;

	/**
	 * Gets the details of a reaction.
	 *
	 * ```typescript
	 * getReactionDetail({messageId: 'messageId', reaction: 'reaction', cursor: '', pageSize: 20})
	 * ```
	 */
	getReactionDetail(params: {
		/** The message ID. */
		messageId: string;
		/** The reactions to retrieve. */
		reaction: string;
		/** The cursor that specifies where to start to get data. If there will be data on the next page, this method will return the value of this field to indicate the position to start to get data of the next page. If it is null, the data of the first page will be retrieved.*/
		cursor?: string;
		/** The number of reactions per page. The default value is 20, and the maximum value is 100. */
		pageSize?: number;
	}): Promise<AsyncResult<ReactionTypes.GetReactionDetailResult>>;

	/**
	 * Reports an inappropriate message.
	 *
	 * ```typescript
	 * reportMessage()
	 * ```
	 */
	reportMessage(params: {
		/** The type of reporting. */
		reportType: string;
		/** The reason for reporting. You need to type a specific reason. */
		reportReason: string;
		/** The ID of the message to report. */
		messageId: string;
	}): Promise<void>;

	/**
	 * Unidirectionally deletes historical messages from the server.
	 *
	 * ```typescript
	 * connection.removeHistoryMessages({targetId: 'userId', chatType: 'singleChat', beforeTimeStamp: Date.now()})
	 *
	 * connection.removeHistoryMessages({targetId: 'userId', chatType: 'singleChat', messageIds: ['messageId']})
	 * ```
	 */
	removeHistoryMessages(options: {
		/** The ID of the peer user or group ID. */
		targetId: string;
		/**
		 * The conversation type:
		 * - `singleChat`: one-to-one chat;
		 * - `groupChat`: group chat.
		 */
		chatType: 'singleChat' | 'groupChat';
		/** The ID list of messages to be deleted. A maximum of 20 message IDs can be passed. */
		messageIds?: Array<string>;
		/** The starting timestamp for message deletion. Messages with the timestamp before the specified one will be deleted. */
		beforeTimeStamp?: number;
	}): Promise<void>;

	/**
	 * Gets the list of conversations from the server with pagination.
	 *
	 * The SDK returns the list of conversations in the reverse chronological order of their active time (the timestamp of the last message).
	 *
	 * If there is no message in the conversation, the SDK retrieves the list of conversations in the reverse chronological order of their creation time.
	 *
	 * ```typescript
	 * connection.getServerConversations({pageSize:50, cursor: ''})
	 * ```
	 */
	getServerConversations(params: {
		/** The number of conversations that you expect to get on each page. The value range is [1,50] and the default value is `20`. */
		pageSize?: number;
		/** The position from which to start getting data. If you set `cursor` to an empty string (''), the SDK retrieves conversations from the latest active one.*/
		cursor?: string;
	}): Promise<AsyncResult<IndexTypes.ServerConversations>>;

	/**
	 * Get the list of pinned conversations from the server with pagination.
	 *
	 * The SDK returns the pinned conversations in the reverse chronological order of their pinning.
	 *
	 * ```typescript
	 * connection.getServerPinnedConversations({pageSize:50, cursor: ''})
	 * ```
	 */
	getServerPinnedConversations(params: {
		/** The number of conversations that you expect to get on each page. The value range is [1,50] and the default value is `20`. */
		pageSize?: number;
		/** The position from which to start getting data. If you pass in an empty string (''), the SDK retrieves conversations from the latest pinned one.*/
		cursor?: string;
	}): Promise<AsyncResult<IndexTypes.ServerConversations>>;

	/**
	 * Sets whether to pin a conversation.
	 *
	 * ```typescript
	 * connection.pinConversation({conversationId:'conversationId',conversationType: 'singleChat', isPinned: boolean})
	 * ```
	 */
	pinConversation(params: {
		/** The conversation ID. */
		conversationId: string;
		/** The conversation type. */
		conversationType: 'singleChat' | 'groupChat';
		/** Whether to pin the conversation:
		 * - `true`: Yes.
		 * - `false`: No. The conversation is unpinned.
		 */
		isPinned: boolean;
	}): Promise<AsyncResult<IndexTypes.PinConversation>>;

	modifyMessage(option: {
		/** The ID of the message to modify.*/
		messageId: string;
		/** The modified message.*/
		modifiedMessage: ModifiedMsg;
	}): Promise<IndexTypes.ModifyMsgResult>;
}

export { IndexTypes, ReactionTypes, AsyncResult, UserId, MessageType };
