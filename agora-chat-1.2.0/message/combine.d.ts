import { ChannelMsgBody, ChatType, DeliveryMsgBody, MessagePriority, MessagesType, ReadMsgBody } from '../types/message';
export interface CombineParameters {
    /** The message type. */
    type: 'combine';
    /** The message ID. */
    id: string;
}
export interface CombineMsgBody {
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
    /** @deprecated Whether the conversation type is chat room. */
    roomType?: boolean;
    /** @deprecated Whether the conversation type is group. */
    group?: string;
    /** Message extension. */
    ext?: {
        [key: string]: any;
    };
    /** Whether read receipts are required during a group conversation. */
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
    /** The compatibility information for combining message. */
    compatibleText: string;
    /** The title of the combined message. */
    title: string;
    /** The summary list of the combined message. */
    summary: string;
    /** The message list of the combined message. */
    messageList: MessagesType[];
    /** The callback of a file upload error. */
    onFileUploadError?: (error: any) => void;
    /** The callback of file upload completion. */
    onFileUploadComplete?: (data: {
        url: string;
        secret: string;
    }) => void;
}
export interface CreateCombineMsgParameters {
    /** The conversation type. */
    chatType: ChatType;
    /** The message type. */
    type: 'combine';
    /** The recipient. */
    to: string;
    /** The sender, which can only be the current user and can not be changed. */
    from?: string;
    /** The message extension. */
    ext?: {
        [key: string]: any;
    };
    /** Whether read receipts are required during a group conversation. */
    msgConfig?: {
        allowGroupAck?: boolean;
        languages?: string[];
    };
    /** Whether the message is a threaded message. */
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
    /** The compatible text of the combined message. */
    compatibleText: string;
    /** The title of the combined message. */
    title: string;
    /** The summary list of the combined message. */
    summary: string;
    /** The message list of the combined message. */
    messageList: Exclude<MessagesType, DeliveryMsgBody | ReadMsgBody | ChannelMsgBody>[];
    /** The callback of a file upload error. */
    onFileUploadError?: (error: any) => void;
    /** The callback of file upload completion. */
    onFileUploadComplete?: (data: {
        url: string;
        secret: string;
    }) => void;
}
export declare class Combine {
    id: string;
    type: 'combine';
    value: string;
    body?: CombineMsgBody;
    constructor(parameters: CombineParameters);
    static create(options: CreateCombineMsgParameters): CombineMsgBody;
}
