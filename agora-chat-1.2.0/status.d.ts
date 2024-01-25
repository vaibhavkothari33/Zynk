/**
 * The error codes in the SDK.
 * Defines error codes commonly used in the SDK.
 * @module StatusCode
 */
declare enum Code {
    /** No error. */
    REQUEST_SUCCESS = 0,
    /** The server response times out. */
    REQUEST_TIMEOUT = -1,
    /** A general error.  */
    REQUEST_UNKNOWN = -2,
    /** The parameter is invalid. */
    REQUEST_PARAMETER_ERROR = -3,
    /** The request is canceled. */
    REQUEST_ABORT = -4,
    /** @hidden */
    WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR = 0,
    /** Login failed.  */
    WEBIM_CONNCTION_OPEN_ERROR = 1,
    /** The user authentication fails. The reasons are as follows. The SDK is not initiated. The user is not login. */
    WEBIM_CONNCTION_AUTH_ERROR = 2,
    /** Fails to get the token. */
    WEBIM_CONNCTION_GETROSTER_ERROR = 12,
    /** Websocket is disconnected */
    WEBIM_CONNCTION_DISCONNECTED = 16,
    /** A general error.  */
    WEBIM_CONNCTION_AJAX_ERROR = 17,
    /** The App Key is invalid. */
    WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR = 27,
    /** The token is invalid. */
    WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR = 28,
    /** The callback inner error code while the message is successfully sent. */
    WEBIM_CONNCTION_CALLBACK_INNER_ERROR = 31,
    /** The current user is offline. */
    WEBIM_CONNCTION_CLIENT_OFFLINE = 32,
    /** The user is not logged in.*/
    WEBIM_CONNECTION_CLOSED = 39,
    /** The user authentication fails. */
    WEBIM_CONNECTION_ERROR = 40,
    /** The upper limit is reached. */
    MAX_LIMIT = 50,
    /** The message is not found. */
    MESSAGE_NOT_FOUND = 51,
    /** Unauthorized operation. */
    NO_PERMISSION = 52,
    /** Unsupported Operation. */
    OPERATION_UNSUPPORTED = 53,
    /** An operation that is not allowed. */
    OPERATION_NOT_ALLOWED = 54,
    /** The uploading of the file failed. */
    WEBIM_UPLOADFILE_ERROR = 101,
    /** The current user is not logged in when uploading the file. */
    WEBIM_UPLOADFILE_NO_LOGIN = 102,
    /** File-downloading failed. */
    WEBIM_DOWNLOADFILE_ERROR = 200,
    /** Parse file failed. */
    PARSE_FILE_ERROR = 203,
    /** User does not found. */
    USER_NOT_FOUND = 204,
    /** The message parameter is invalid. */
    MESSAGE_PARAMETER_ERROR = 205,
    /** The user is logged in on another device. */
    WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE = 206,
    /** The user was removed. */
    WEBIM_CONNCTION_USER_REMOVED = 207,
    /** The password is renewed. */
    WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD = 216,
    /** The user was kicked off from another device. */
    WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE = 217,
    /** Global muted. */
    USER_MUTED_BY_ADMIN = 219,
    /**
     * The user is not on your contact list, and you cannot send messages to him or her.
     * Note: You can send messages to strangers by default. This error occurs only when you enable the function of allowing to send messages only to your contacts.
     */
    USER_NOT_FRIEND = 221,
    /** The server is busy. */
    SERVER_BUSY = 500,
    /** The message content contains illegal or sensitive words. */
    MESSAGE_INCLUDE_ILLEGAL_CONTENT = 501,
    /** The message was blocked. */
    MESSAGE_EXTERNAL_LOGIC_BLOCKED = 502,
    /** Unknown error. */
    SERVER_UNKNOWN_ERROR = 503,
    /** The message recall has exceeded the time limit.*/
    MESSAGE_RECALL_TIME_LIMIT = 504,
    /** The service is not enabled. */
    SERVICE_NOT_ENABLED = 505,
    /** The message fails to be delivered because the user is not on the allow list.*/
    SERVICE_NOT_ALLOW_MESSAGING = 506,
    /** The current user is muted. */
    SERVICE_NOT_ALLOW_MESSAGING_MUTE = 507,
    /** The message is blocked by the Moderation service. */
    MESSAGE_MODERATION_BLOCKED = 508,
    /** Group chat ID current limiting. */
    MESSAGE_CURRENT_LIMITING = 509,
    /** The network is disconnected, causing message sending failure. */
    MESSAGE_WEBSOCKET_DISCONNECTED = 510,
    /** You have exceeded the maximum allowed size of a message body.*/
    MESSAGE_SIZE_LIMIT = 511,
    /** The group is not found. */
    GROUP_NOT_EXIST = 605,
    /** The user being operated is not in the group. */
    GROUP_NOT_JOINED = 602,
    /** The number of members in the group reaches the limit. */
    GROUP_MEMBERS_FULL = 606,
    /** Permission denied. */
    PERMISSION_DENIED = 603,
    /** Internal error. */
    WEBIM_LOAD_MSG_ERROR = 604,
    /** The current user is already in the group. */
    GROUP_ALREADY_JOINED = 601,
    /** The maximum number of group members exceeds the limit during group creation. */
    GROUP_MEMBERS_LIMIT = 607,
    /** Group disabled */
    /** @hidden */
    GROUP_IS_DISABLED = 608,
    /** Failed to set the custom attributes of a group member. */
    GROUP_MEMBER_ATTRIBUTES_SET_FAILED = 609,
    /** Invalid token or App Key. */
    REST_PARAMS_STATUS = 700,
    /** The user being operated is not in the chatroom. */
    CHATROOM_NOT_JOINED = 702,
    /** The number of chatroom members reaches the limit.*/
    CHATROOM_MEMBERS_FULL = 704,
    /** The chatroom is not found. */
    CHATROOM_NOT_EXIST = 705,
    /** Websocket error. */
    SDK_RUNTIME_ERROR = 999,
    /** The parameter length exceeds the limit when posting custom presence status. */
    PRESENCE_PARAM_EXCEED = 1100,
    /** The Reaction already exists. */
    REACTION_ALREADY_ADDED = 1101,
    /** A Reaction is being created by multiple users at the same time. */
    REACTION_CREATING = 1102,
    /** The user does not have the permission for the Reaction operation. For example, the user who does not add the reaction attempts to delete it, or the user that is neither the sender nor recipient of the one-to-one message attempts to add the Reaction. */
    REACTION_OPERATION_IS_ILLEGAL = 1103,
    /** Invalid language code. */
    TRANSLATION_NOT_VALID = 1200,
    /** The translated text is too long. */
    TRANSLATION_TEXT_TOO_LONG = 1201,
    /** Failed to obtain the translation service. */
    TRANSLATION_FAILED = 1204,
    /** The chatThread is not found. */
    THREAD_NOT_EXIST = 1300,
    /** Chat thread already exists. */
    THREAD_ALREADY_EXIST = 1301,
    /** The message to modify does not exist. */
    MODIFY_MESSAGE_NOT_EXIST = 1302,
    /** The format of the modified messaged is incorrect. */
    MODIFY_MESSAGE_FORMAT_ERROR = 1303,
    /** The message modification failed. */
    MODIFY_MESSAGE_FAILED = 1304,
    /** The current conversation not exist . */
    CONVERSATION_NOT_EXIST = 1400
}
export { Code };
