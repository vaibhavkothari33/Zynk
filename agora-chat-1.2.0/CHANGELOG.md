# Changes to Agora chat

## v1.2.0 (September 21, 2023)

#### New features

-   Adds a new message type: 'combine':
    -   `CreateCombineMsgParameters`: The props of creating combined message.
    -   `CombineMsgBody`: The combined message body type.
    -   `downloadAndParseCombineMessage`: Downloads and parses combined messages.
-   Adds the function of modifying a text message that is sent:
    -   `modifyMessage`: Modifies a text message that is sent.
    -   `onModifiedMessage`: Occurs when a sent message is modified. The message recipient receives this event.
    -   `ModifiedMsgInfo#operationTime`: Indicates when the content of a sent message is modified last time.
    -   `ModifiedMsgInfo#operatorId`: Indicates the user ID of user that modifies the message that is sent.
    -   `ModifiedMsgInfo#operatorCount`: Indicates the number of times a sent message is modified.
-   Adds the function of pinning a conversation:
    -   `pinConversation`: Pins a conversation.
    -   `PinConversation#isPinned`: Specifies whether the conversation is pinned.
    -   `PinConversation#pinnedTime`: Specifies when the conversation is pinned.
-   Adds the `getServerConversations` method to get the conversation list from the server.
-   Adds the `getServerPinnedConversations` method to get the pinned conversations from the server.
-   Adds `searchOptions` as the parameter configuration for the `getHistoryMessages` method parameter for pulling historical messages from the server.

    -   `searchOptions#direction`: Specifies the message search direction.
    -   `searchOptions#from`: Specifies the user ID of the message sender.
    -   `searchOptions#msgTypes`: Specifies the list of message types for query.
    -   `searchOptions#startTime`: Specifies the start time for message query.
    -   `searchOptions#endTime`: Specifies the end time for message query.

-   Adds the `Message#deliverOnlineOnly` field to set whether the message is delivered only when the recipient(s) is/are online.

-   Adds the function of managing custom attributes of group members:

    -   `setGroupMemberAttributes`: Sets custom attributes of a group member.
    -   `getGroupMemberAttributes`: Gets custom attributes of group members.
    -   `GroupEvent#memberAttributesUpdate`: Occurs when a custom attribute is changed for a group member.

-   Adds the `MultiDeviceEvent#RoamingDeleteMultiDeviceInfo` event that occurs when historical messages in a conversation are deleted from the server on one device. This event is received by other devices.

-   Adds the `MultiDeviceEvent#ConversationChangedInfo` event that occurs when an operation is conducted on a conversation on one device in a multi-device login scenario. This event is received by other devices.

#### Improvements

-   Sending image messages supports setting thumbnail size
-   Add the `isLast` field to the return content of `getHistoryMessages`
-   `addContact`, `acceptInvitation`, `declineInvitation`, `addToBlackList`, `removeFromBlackList` supports Promise

#### Issues fixed

-   Fix when pull history messages, an ack will be replied
-   GroupEvent

## 1.0.8 (Dec 19, 2022)

-   Optimize the send message fail callback when no network
-   fix file_length is not valid issue for message attachment

## 1.0.7 (Sep 23, 2022)

-   SDK modular split
-   Chat room KV
-   Add log callback
-   Add in-line comments
-   Fix file upload failure without callback error
-   Adds the `needAffiliations` and `needRole` parameters in the `getJoinedGroups` method to allow you to get the number of members in a group and your own group role.
-   Fix the compatibility with Internet Explorer
-   Fixed bug where UniApp could not find 'addEventListener' when running on the phone
-   Set the maximum token expiration time
-   Optimize reconnection logic

## 1.0.5 (Jun 17, 2022)

-   'GetGroupInfo' supports bulk query
-   Add group event:onGroupEvent
-   Add chatroom event:onChatroomEvent
-   Add the limit when sending group messages
-   Invite to join the group callback returns the group name

## 1.0.4 (May 25, 2022)

-   Add chatThread feature
-   Add the API to the session list to parse the last message
-   Modify the implementation of obtaining roaming messages
-   Add the mark of offline message in the message

## 1.0.3 (April 19, 2022)

-   Add presence feature
-   Add translation feature
-   Fixed failure to modify desc when creating a group
-   Fixed SSR compatibility

## 1.0.2 (January 19, 2022)

-   Fix 'renewtoken' failed to replace the token
-   Add 'downloadGroupSharedFile' api
-   'fetchGroupSharedFileList' supports paging

## 1.0.1 (January 14, 2022)

-   Add delete session api
-   Add field 'buildingName' to the location message
-   Add restrictions on messages sent by non-friends
-   Add the error event of sending failure due to global mute
-   Fix missing onChannelMessage callback
-   Fix some known bugs

## 1.0.0 (December 10, 2021)

-   1.0.0 version init
