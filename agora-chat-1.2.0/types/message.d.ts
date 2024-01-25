import { Reaction } from './reactionApi';
import { TranslationResult } from './translation';
import { ChatThread, ChatThreadOverview } from './threadApi';
import { CreateCombineMsgParameters } from '../message/combine';
import { SendMsgResult } from './engineCore';
import { FileObj } from '../message/img';
declare type MessageType =
	| 'read'
	| 'delivery'
	| 'channel'
	| 'txt'
	| 'cmd'
	| 'custom'
	| 'loc'
	| 'img'
	| 'audio'
	| 'file'
	| 'video'
	| 'combine';
declare type ChatType = 'singleChat' | 'groupChat' | 'chatRoom';
/** The online/offline states of messages. */
export declare enum ONLINESTATETYPE {
	/** Offline message. */
	OFFLINE = 0,
	/** Online message. */
	ONLINE = 1,
	/** Unknown state. */
	UNKNOWN = 2,
	/** Message online status is not enabled. */
	NONE = 3,
}
interface ReadMsgSetParameters {
	id: string;
	to: string;
	from?: string;
}
interface ReadMsgBody extends ReadMsgSetParameters {
	type: 'read';
	ackId?: string;
	mid?: string;
	groupReadCount?: number;
	ackContent?: string;
	onlineState?: ONLINESTATETYPE;
}
interface ReadParameters {
	type: 'read';
	id: string;
}
interface CreateReadMsgParameters {
	/** The recipient. */
	to: string;
	/** The sender, which can only be the current user and can not be changed. */
	from?: string;
	/** The message type. */
	type: 'read';
	/** The ID of the read message */
	id: string;
}
interface DeliveryMsgSetParameters {
	ackId: string;
	to: string;
	from?: string;
}
interface DeliveryMsgBody {
	id: string;
	mid?: string;
	ackId?: string;
	type: 'delivery';
	to: string;
	from?: string;
	onlineState?: ONLINESTATETYPE;
}
interface CreateDeliveryMsgParameters {
	/** The ID of the delivered message. */
	ackId: string;
	/** The message type. */
	type: 'delivery';
	/** The recipient. */
	to: string;
	/** The sender, which can only be the current user and can not be changed. */
	from?: string;
}
interface TextMsgSetParameters {
	chatType: ChatType;
	to: string;
	msg: string;
	from?: string;
	roomType?: boolean;
	success?: (data: SendMsgResult) => void;
	fail?: () => void;
	ext?: {
		[key: string]: any;
	};
}
interface TextMsgBody {
	id: string;
	chatType: ChatType;
	type: 'txt';
	to: string;
	msg: string;
	from?: string;
	roomType?: boolean;
	group?: string;
	success?: (data: SendMsgResult) => void;
	fail?: () => void;
	ext?: {
		[key: string]: any;
	};
	msgConfig?: {
		[key: string]: any;
	};
	time: number;
	reactions?: Reaction;
	translations?: TranslationResult;
	chatThread?: ChatThread;
	chatThreadOverview?: ChatThreadOverview;
	onlineState?: ONLINESTATETYPE;
	priority?: MessagePriority;
	deliverOnlineOnly?: boolean;
	modifiedInfo?: ModifiedMsgInfo;
}
interface CreateTextMsgParameters {
	/** The conversation type. */
	chatType: ChatType;
	/** The message type. */
	type: 'txt';
	/** The recipient. */
	to: string;
	/** The message content. */
	msg: string;
	/** The sender, which can only be the current user and can not be changed. */
	from?: string;
	/** Message extension. */
	ext?: {
		[key: string]: any;
	};
}
interface CmdMsgSetParameters {
	chatType: ChatType;
	to: string;
	action: string;
	from?: string;
	roomType?: boolean;
	success?: (data: SendMsgResult) => void;
	fail?: () => void;
	ext?: {
		[key: string]: any;
	};
}
interface CmdMsgBody {
	id: string;
	chatType: ChatType;
	type: 'cmd';
	to: string;
	action: string;
	from?: string;
	roomType?: boolean;
	group?: string;
	success?: (data: SendMsgResult) => void;
	fail?: () => void;
	ext?: {
		[key: string]: any;
	};
	msgConfig?: {
		[key: string]: any;
	};
	time: number;
	reactions?: Reaction;
	chatThread?: ChatThread;
	chatThreadOverview?: ChatThreadOverview;
	onlineState?: ONLINESTATETYPE;
	priority?: MessagePriority;
	deliverOnlineOnly?: boolean;
}
interface CreateCmdMsgParameters {
	/** The message type. */
	type: 'cmd';
	/** The conversation type. */
	chatType: ChatType;
	/** The recipient. */
	to: string;
	/** The command. */
	action: string;
	/** The sender, which can only be the current user and can not be changed. */
	from?: string;
	/** The message extension. */
	ext?: {
		[key: string]: any;
	};
}
interface CustomMsgSetParameters {
	chatType: ChatType;
	to: string;
	customEvent: string;
	customExts: {
		[key: string]: any;
	};
	from?: string;
	roomType?: boolean;
	success?: () => void;
	fail?: () => void;
	ext?: {
		[key: string]: any;
	};
}
interface CustomMsgBody {
	id: string;
	chatType: ChatType;
	type: 'custom';
	to: string;
	customEvent: string;
	customExts: {
		[key: string]: any;
	};
	from?: string;
	roomType?: boolean;
	group?: string;
	params?: {
		[key: string]: any;
	};
	success?: (data: SendMsgResult) => void;
	fail?: () => void;
	ext?: {
		[key: string]: any;
	};
	msgConfig?: {
		[key: string]: any;
	};
	time: number;
	reactions?: Reaction;
	chatThread?: ChatThread;
	chatThreadOverview?: ChatThreadOverview;
	onlineState?: ONLINESTATETYPE;
	priority?: MessagePriority;
	deliverOnlineOnly?: boolean;
}
interface CreateCustomMsgParameters {
	/** The message type. */
	type: 'custom';
	/** The conversation type. */
	chatType: ChatType;
	/** The recipient. */
	to: string;
	/** The custom event. */
	customEvent: string;
	/** The custom event extension. */
	customExts: {
		[key: string]: any;
	};
	/** The sender, which can only be the current user and can not be changed. */
	from?: string;
	/** Message extension. */
	ext?: {
		[key: string]: any;
	};
}
interface LocationMsgSetParameters {
	chatType: ChatType;
	to: string;
	addr: string;
	buildingName: string;
	lat: number;
	lng: number;
	from?: string;
	roomType?: boolean;
	success?: (data: SendMsgResult) => void;
	fail?: () => void;
	ext?: {
		[key: string]: any;
	};
}
interface LocationMsgBody {
	id: string;
	chatType: ChatType;
	type: 'loc';
	to: string;
	addr: string;
	buildingName: string;
	lat: number;
	lng: number;
	from?: string;
	roomType?: boolean;
	group?: string;
	success?: (data: SendMsgResult) => void;
	fail?: () => void;
	ext?: {
		[key: string]: any;
	};
	msgConfig?: {
		[key: string]: any;
	};
	time: number;
	reactions?: Reaction;
	chatThread?: ChatThread;
	chatThreadOverview?: ChatThreadOverview;
	onlineState?: ONLINESTATETYPE;
	priority?: MessagePriority;
	deliverOnlineOnly?: boolean;
}
interface CreateLocationMsgParameters {
	/** The message type. */
	type: 'loc';
	/** The conversation type. */
	chatType: ChatType;
	/** The recipient. */
	to: string;
	/** The building name. */
	buildingName: string;
	/** Address. */
	addr: string;
	/** The latitude. */
	lat: number;
	/** The longitude. */
	lng: number;
	/** The sender, which can only be the current user and can not be changed. */
	from?: string;
	/** Message extension. */
	ext?: {
		[key: string]: any;
	};
}
interface ImgMsgSetParameters {
	chatType: ChatType;
	to: string;
	file?: FileObj;
	width?: number;
	height?: number;
	file_length?: number;
	fileInputId?: string;
	from?: string;
	roomType?: boolean;
	group?: string;
	success?: (data: SendMsgResult) => void;
	fail?: () => void;
	ext?: {
		[key: string]: any;
	};
	url?: string;
	onFileUploadError?: (error: any) => void;
	onFileUploadComplete?: (data: any) => void;
	onFileUploadProgress?: (data: any) => void;
	uploadError?: () => void;
	uploadComplete?: () => void;
	msgConfig?: {
		[key: string]: any;
	};
	body?: {
		url: string;
		type: string;
		filename: string;
	};
}
interface ImgMsgBody extends ImgMsgSetParameters {
	id: string;
	type: 'img';
	time: number;
	secret?: string;
	thumb?: string;
	thumb_secret?: string;
	reactions?: Reaction;
	chatThread?: ChatThread;
	chatThreadOverview?: ChatThreadOverview;
	onlineState?: ONLINESTATETYPE;
	priority?: MessagePriority;
	deliverOnlineOnly?: boolean;
}
interface CreateImgMsgParameters {
	/** The message type. */
	type: 'img';
	/** The conversation type. */
	chatType: ChatType;
	/** The file object. */
	file: File;
	/** The file URL. If the file has been uploaded, you can directly use the URL. */
	url?: string;
	/** The image width. */
	width?: number;
	/** The image height. */
	height?: number;
	/** The recipient. */
	to: string;
	/** The sender, which can only be the current user and can not be changed. */
	from?: string;
	/** The image file length. */
	file_length: number;
	/** The callback of file upload error. */
	onFileUploadError?: (error: any) => void;
	/** The callback of file upload completion. */
	onFileUploadComplete?: (data: any) => void;
	/** The callback of file upload progress. */
	onFileUploadProgress?: (data: any) => void;
	/** Message extension. */
	ext?: {
		[key: string]: any;
	};
	/** The message body. */
	body?: {
		/** The file URL. */
		url: string;
		/** The file type. */
		type: string;
		/** The file name. */
		filename: string;
	};
}
interface AudioMsgSetParameters {
	chatType: ChatType;
	file: object;
	filename: string;
	length?: number;
	file_length?: number;
	fileInputId?: string;
	to: string;
	from?: string;
	roomType?: boolean;
	success?: (data: SendMsgResult) => void;
	fail?: () => void;
	ext?: {
		[key: string]: any;
	};
	apiUrl?: string;
	onFileUploadError?: (err: any) => void;
	onFileUploadComplete?: (data: any) => void;
	onFileUploadProgress?: (data: ProgressEvent) => void;
	body?: {
		url: string;
		type: string;
		filename: string;
	};
}
interface AudioMsgBody extends AudioMsgSetParameters {
	id: string;
	type: 'audio';
	url?: string;
	secret?: string;
	filetype?: string;
	accessToken?: string;
	group?: string;
	msgConfig?: {
		[key: string]: any;
	};
	time: number;
	reactions?: Reaction;
	chatThread?: ChatThread;
	chatThreadOverview?: ChatThreadOverview;
	onlineState?: ONLINESTATETYPE;
	priority?: MessagePriority;
	deliverOnlineOnly?: boolean;
}
interface CreateAudioMsgParameters {
	/** The message type. */
	type: 'video';
	/** The conversation type. */
	chatType: ChatType;
	/** The file object. */
	file: object;
	/** The file name. */
	filename: string;
	/** The video duration. */
	length: number;
	/** The video file length. */
	file_length: number;
	/** The input ID of the uploaded file. */
	fileInputId?: string;
	/** The recipient. */
	to: string;
	/** The sender, which can only be the current user and can not be changed. */
	from?: string;
	/** Message extension. */
	ext?: {
		[key: string]: any;
	};
	/** The callback of file upload error. */
	onFileUploadError?: (error: any) => void;
	/** The callback of file upload completion. */
	onFileUploadComplete?: (data: any) => void;
	/** The callback of file upload progress. */
	onFileUploadProgress?: (data: any) => void;
	/** The message body. */
	body?: {
		/** The file URL. */
		url: string;
		/** The file type. */
		type: string;
		/** The file type. */
		filename: string;
	};
}
interface VideoMsgSetParameters {
	chatType: ChatType;
	file: object;
	filename?: string;
	length?: number;
	file_length?: number;
	fileInputId?: string;
	to: string;
	from?: string;
	roomType?: boolean;
	success?: (data: SendMsgResult) => void;
	fail?: () => void;
	ext?: {
		[key: string]: any;
	};
	apiUrl?: string;
	onFileUploadError?: (err: any) => void;
	onFileUploadComplete?: (data: any) => void;
	onFileUploadProgress?: (data: ProgressEvent) => void;
	body?: {
		url: string;
		type: string;
		filename: string;
	};
}
interface VideoMsgBody extends VideoMsgSetParameters {
	id: string;
	type: 'video';
	url?: string;
	secret?: string;
	filetype?: string;
	accessToken?: string;
	msgConfig?: {
		[key: string]: any;
	};
	group?: string;
	time: number;
	reactions?: Reaction;
	chatThread?: ChatThread;
	chatThreadOverview?: ChatThreadOverview;
	onlineState?: ONLINESTATETYPE;
	priority?: MessagePriority;
	deliverOnlineOnly?: boolean;
}
interface CreateVideoMsgParameters {
	/** The message type. */
	type: 'video';
	/** The conversation type. */
	chatType: ChatType;
	/** The file object. */
	file: object;
	/** The file name. */
	filename: string;
	/** The video duration. */
	length: number;
	/** The video file length. */
	file_length: number;
	/** The input ID of the uploaded file. */
	fileInputId?: string;
	/** The recipient. */
	to: string;
	/** The sender, which can only be the current user and can not be changed. */
	from?: string;
	/** Message extension. */
	ext?: {
		[key: string]: any;
	};
	/** The callback of file upload error. */
	onFileUploadError?: (error: any) => void;
	/** The callback of file upload completion. */
	onFileUploadComplete?: (data: any) => void;
	/** The callback of file upload progress. */
	onFileUploadProgress?: (data: any) => void;
	/** The message body. */
	body?: {
		/** The file URL. */
		url: string;
		/** The file type. */
		type: string;
		/** The file name. */
		filename: string;
	};
}
interface FileMsgSetParameters {
	chatType: ChatType;
	file: any;
	filename?: string;
	fileInputId?: string;
	to: string;
	from?: string;
	roomType?: boolean;
	success?: (data: SendMsgResult) => void;
	fail?: () => void;
	ext?: {
		[key: string]: any;
	};
	apiUrl?: string;
	onFileUploadError?: (err: any) => void;
	onFileUploadComplete?: (data: any) => void;
	onFileUploadProgress?: (data: any) => void;
	body?: {
		url: string;
		type: string;
		filename: string;
	};
}
interface FileMsgBody extends FileMsgSetParameters {
	id: string;
	type: 'file';
	group?: string;
	url?: string;
	secret?: string;
	length?: number;
	file_length?: number;
	filetype?: string;
	accessToken?: string;
	msgConfig?: {
		[key: string]: any;
	};
	time: number;
	reactions?: Reaction;
	chatThread?: ChatThread;
	chatThreadOverview?: ChatThreadOverview;
	onlineState?: ONLINESTATETYPE;
	priority?: MessagePriority;
	deliverOnlineOnly?: boolean;
}
interface CreateFileMsgParameters {
	/** The message type. */
	type: 'file';
	/** The conversation type. */
	chatType: ChatType;
	/** The file object. */
	file: any;
	/** The file name. */
	filename: string;
	/** The input ID of the uploaded file. */
	fileInputId?: string;
	/** The recipient. */
	to: string;
	/** The sender, which can only be the current user and can not be changed. */
	from?: string;
	/** Message extension. */
	ext?: {
		[key: string]: any;
	};
	/** The callback of file upload error. */
	onFileUploadError?: (error: any) => void;
	/** The callback of file upload completion. */
	onFileUploadComplete?: (data: any) => void;
	/** The callback of file upload progress. */
	onFileUploadProgress?: (data: any) => void;
	/** The message body. */
	body?: {
		/** The file URL. */
		url: string;
		/** The file type. */
		type: string;
		/** The file name. */
		filename: string;
	};
}
interface ReceivedMsgBody {
	id: string;
	mid: string;
	to: string;
	time: number;
}
interface RecallMsgBody {
	id: string;
	from: string;
	to: string;
	mid: string;
}
interface ModifiedMsgInfo {
	/** Gets the user ID of the operator that modified the message last time. */
	operatorId: string;
	/** Gets the number of times a message is modified. A message can be modified at most five times.*/
	operationCount: number;
	/** Gets the UNIX timestamp of the last message modification, in milliseconds. */
	operationTime: number;
}
/** The modified message. */
declare type ModifiedMsg = TextMsgBody;
interface MuteMsgBody {
	mid: string;
}
interface ContactMsgBody {
	/** The message type: subscribe: requests a contact; unsubscribed: cancels or refuses to add a contact; subscribed: succeeds in adding a contact. */
	type: 'subscribe' | 'unsubscribed' | 'subscribed';
	/** The message recipient. */
	to: string;
	/** The message sender. */
	from: string;
	/** Reason. */
	status?: string;
}
interface ChannelMsgSetParameters {
	chatType: ChatType;
	to: string;
	from?: string;
}
interface ChannelMsgBody extends ChannelMsgSetParameters {
	id: string;
	group?: string;
	type: 'channel';
	time: number;
	onlineState?: ONLINESTATETYPE;
}
interface CreateChannelMsgParameters {
	/** The message type. */
	type: 'channel';
	/** The conversation type. */
	chatType: ChatType;
	/** The recipient. */
	to: string;
	/** The sender, which can only be the current user and can not be changed. */
	from?: string;
}
interface CombineMsgBody {
	/** The message ID. */
	id: string;
	/** The conversation type. */
	chatType: ChatType;
	/** The message type. */
	type: 'combine';
	/** The recipient. */
	to: string;
	/** The sender, which can only be the current user and can not be changed.*/
	from?: string;
	/** Message extension. */
	ext?: {
		[key: string]: any;
	};
	/** Whether message read receipts are required during a group conversation. */
	msgConfig?: {
		allowGroupAck?: boolean;
		languages?: string[];
	};
	/** Time. */
	time: number;
	/** Whether the message is a threaded message. */
	isChatThread?: boolean;
	/** The message priority. */
	priority?: MessagePriority;
	/** Whether the message is delivered only when the recipient(s) is/are online:
	 *  - `true`: The message is delivered only when the recipient(s) is/are online. If the recipient is offline, the message is discarded.
	 *  - (Default) `false`: The message is delivered when the recipient(s) is/are online. If the recipient(s) is/are offline, the message will not be delivered to them until they get online.
	 */
	deliverOnlineOnly?: boolean;
	/** The list of message recipients. */
	receiverList?: string[];
	/** The file URL. */
	url?: string;
	/** The secret key required to download the file. */
	secret?: string;
	/** The file size. */
	file_length?: number;
	/** The file name. */
	filename: string;
	/** The title of the combined message. */
	title: string;
	/** The summary list of the combined message. */
	summary: string;
	/** The Reaction list of the message. */
	reactions?: Reaction;
	/** The information of a threaded message. */
	chatThread?: ChatThread;
	/** The overview of a threaded message. */
	chatThreadOverview?: ChatThreadOverview;
	/** The online state. */
	onlineState?: ONLINESTATETYPE;
	/** The compatible text of the combined message. */
	compatibleText: string;
	/** The level of the combined message. */
	combineLevel: number;
}
declare type MessagesType =
	| TextMsgBody
	| DeliveryMsgBody
	| ChannelMsgBody
	| CmdMsgBody
	| CustomMsgBody
	| ImgMsgBody
	| LocationMsgBody
	| AudioMsgBody
	| VideoMsgBody
	| FileMsgBody
	| ReadMsgBody
	| CombineMsgBody;
declare type MessageSetParameters =
	| ReadMsgSetParameters
	| DeliveryMsgSetParameters
	| ChannelMsgSetParameters
	| TextMsgSetParameters
	| CmdMsgSetParameters
	| CustomMsgSetParameters
	| LocationMsgSetParameters
	| ImgMsgSetParameters
	| AudioMsgSetParameters
	| VideoMsgSetParameters
	| FileMsgSetParameters;
declare type CreateMsgType =
	| CreateTextMsgParameters
	| CreateImgMsgParameters
	| CreateCmdMsgParameters
	| CreateFileMsgParameters
	| CreateVideoMsgParameters
	| CreateCustomMsgParameters
	| CreateLocationMsgParameters
	| CreateChannelMsgParameters
	| CreateDeliveryMsgParameters
	| CreateReadMsgParameters
	| CreateCombineMsgParameters
	| CreateAudioMsgParameters;
declare type MessageBody =
	| ReadMsgBody
	| DeliveryMsgBody
	| ChannelMsgBody
	| TextMsgBody
	| CmdMsgBody
	| CustomMsgBody
	| LocationMsgBody
	| ImgMsgBody
	| AudioMsgBody
	| VideoMsgBody
	| FileMsgBody
	| CombineMsgBody;
/**
 * The priority of chat room messages.
 *
 *  Currently, this attribute is available only to chat room messages. If this attribute is not set, messages are assigned a medium priority. */
declare type MessagePriority =
	/** High. */
	| 'high'
	/** Medium. */
	| 'normal'
	/** Low. */
	| 'low';
interface PriorityExt {
	chatroom_msg_tag: number;
}
export type {
	MessageType,
	ReadMsgSetParameters,
	ReadParameters,
	DeliveryMsgSetParameters,
	ChannelMsgSetParameters,
	TextMsgSetParameters,
	CmdMsgSetParameters,
	CustomMsgSetParameters,
	LocationMsgSetParameters,
	ImgMsgSetParameters,
	AudioMsgSetParameters,
	VideoMsgSetParameters,
	FileMsgSetParameters,
	ChatType,
	TextMsgBody,
	CombineMsgBody,
	ModifiedMsg,
	ModifiedMsgInfo,
	DeliveryMsgBody,
	ChannelMsgBody,
	CmdMsgBody,
	CustomMsgBody,
	ImgMsgBody,
	CreateImgMsgParameters,
	LocationMsgBody,
	AudioMsgBody,
	VideoMsgBody,
	FileMsgBody,
	ReceivedMsgBody,
	ReadMsgBody,
	RecallMsgBody,
	MuteMsgBody,
	ContactMsgBody,
	MessagesType,
	MessageSetParameters,
	CreateMsgType,
	MessageBody,
	CreateTextMsgParameters,
	CreateCmdMsgParameters,
	CreateFileMsgParameters,
	CreateVideoMsgParameters,
	CreateCustomMsgParameters,
	CreateLocationMsgParameters,
	CreateChannelMsgParameters,
	CreateDeliveryMsgParameters,
	CreateReadMsgParameters,
	CreateAudioMsgParameters,
	MessagePriority,
	PriorityExt,
};
