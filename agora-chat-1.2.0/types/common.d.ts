import { Code } from '../status';
import ErrorEvent from '../error/error';
import { GroupModifyInfo } from './groupApi';
interface AsyncResult<T = any> {
	/** Status of the request. */
	type: Code;
	/** Data returned by successful request. */
	data?: T;
	/** Data returned by successful request. */
	entities?: T;
	/** message. */
	message?: string;
	[key: string]: any;
}
declare type UserId = string;
declare type GroupId = string;
interface CommonRequestResult {
	/** The result of request. */
	result: boolean;
	/** Action. */
	action: string;
	/** The reason of failure. */
	reason?: string;
	/** The user ID. */
	user: string;
	/** The group/chat room ID. */
	id: string;
}
interface Jid {
	appKey: string;
	clientResource: string;
	domain: string;
	name: string;
}
interface EventData {
	/** The type of operation. */
	operation: string;
	/** The ID of a group or chatroom. */
	id: string;
	/** Message sender. */
	from: string;
	/** The modified group info. */
	detail?: GroupModifyInfo;
	/** The name of a group or chatroom.  */
	name?: string;
	/** The userId of a group event.  */
	userId?: string;
	/** Custom Attributes.  */
	attributes?:
		| Array<string>
		| {
				[key: string]: string;
		  };
}
interface AttributeRespData {
	is_forced: boolean;
	operator: string;
	properties: {
		[key: string]: string;
	};
	result: {
		errorKeys: {
			[key: string]: string;
		};
		successKeys: Array<string>;
	};
	keys?: Array<string>;
	auto_delete?: boolean;
}
export type {
	AsyncResult,
	UserId,
	CommonRequestResult,
	GroupId,
	ErrorEvent,
	Jid,
	EventData,
	AttributeRespData,
};
