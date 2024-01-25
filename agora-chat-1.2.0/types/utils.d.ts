import { Code } from '../status';
interface AsyncResult<T = any> {
	/** Status of the request. */
	type: Code;
	/** Data returned by successful request. */
	data?: T;
	/** message. */
	message?: string;
	[key: string]: any;
}
interface uri {
	url: string;
	filename: string;
	filetype: string;
	data: File | null;
}
interface KVString {
	[key: string]: string;
}
interface AjaxOptions {
	url: string;
	dataType?: string;
	type?: string;
	data?: any;
	headers?: KVString;
	responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text';
	mimeType?: string;
	success?: (res: any) => void;
	error?: (res: any) => void;
}
interface UploadFileOptions {
	onFileUploadProgress?: (msg: any) => void;
	onFileUploadComplete?: (msg: any) => void;
	onFileUploadError?: (msg: any) => void;
	onFileUploadCanceled?: (msg: any) => void;
	accessToken: string;
	appKey: string;
	apiUrl: string;
	uploadUrl?: string;
	file: any;
}
declare type Fns = (...args: any) => any;
declare enum PLATFORM {
	WEB = 'web',
	WX = 'wx',
	ZFB = 'zfb',
	DD = 'dd',
	TT = 'tt',
	BAIDU = 'baidu',
	QUICK_APP = 'quick_app',
	UNI = 'uni',
	NODE = 'node',
}
interface EnvInfo {
	platform: PLATFORM;
	global: any;
}
interface DownloadParams {
	onFileDownloadComplete: (data: any) => void;
	onFileDownloadError: (error: any) => void;
	id: string;
	secret: string;
	[key: string]: any;
}
interface Utils {
	/** @hidden */
	autoIncrement: number;
	getUniqueId: () => string;
	/** @hidden */
	ajax: (options: AjaxOptions) => Promise<AsyncResult<any>>;
	getFileUrl: (fileInputId: string | HTMLInputElement) => uri;
	uploadFile: (options: UploadFileOptions) => void;
	/** @hidden */
	flow: (fns: Fns[]) => any;
	listenNetwork: (online: () => void, offline: () => void) => void;
	getEnvInfo: () => EnvInfo;
	/** @hidden */
	wxRequest: (options: AjaxOptions) => Promise<AsyncResult<any>>;
	/** @hidden */
	parseDownloadResponse: (res: any) => string;
	download: (params: DownloadParams) => void;
}
export type {
	Utils,
	DownloadParams,
	EnvInfo,
	PLATFORM,
	UploadFileOptions,
	uri,
};
