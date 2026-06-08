import type { INodeProperties } from 'n8n-workflow';

export const messagesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					]
				}
			},
			"options": [
				{
					"name": "Get Conversations",
					"value": "Get Conversations",
					"action": "List conversations",
					"description": "List conversations",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/conversations"
						}
					}
				},
				{
					"name": "Archive All Conversations",
					"value": "Archive All Conversations",
					"action": "Archive all conversations",
					"description": "Archive all conversations",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/conversations/archive-all"
						}
					}
				},
				{
					"name": "Mark All Conversations Read",
					"value": "Mark All Conversations Read",
					"action": "Mark all conversations as read",
					"description": "Mark all conversations as read",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/conversations/mark-all-read"
						}
					}
				},
				{
					"name": "Search Conversations",
					"value": "Search Conversations",
					"action": "Search conversations",
					"description": "Searches all conversations except blocked conversations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/conversations/search"
						}
					}
				},
				{
					"name": "Delete Conversation",
					"value": "Delete Conversation",
					"action": "Delete conversation",
					"description": "Delete conversation",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/conversations/{{$parameter[\"conversation_id\"]}}"
						}
					}
				},
				{
					"name": "Archive Conversation",
					"value": "Archive Conversation",
					"action": "Archive conversation",
					"description": "Archive conversation",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/conversations/{{$parameter[\"conversation_id\"]}}/archive"
						}
					}
				},
				{
					"name": "Block Conversation",
					"value": "Block Conversation",
					"action": "Block conversation",
					"description": "Block conversation",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/conversations/{{$parameter[\"conversation_id\"]}}/block"
						}
					}
				},
				{
					"name": "Mark Conversation Read",
					"value": "Mark Conversation Read",
					"action": "Mark conversation as read",
					"description": "Mark conversation as read",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/conversations/{{$parameter[\"conversation_id\"]}}/mark-read"
						}
					}
				},
				{
					"name": "Get Conversation Messages",
					"value": "Get Conversation Messages",
					"action": "List conversation messages",
					"description": "List conversation messages",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/conversations/{{$parameter[\"conversation_id\"]}}/messages"
						}
					}
				},
				{
					"name": "Reply To Conversation",
					"value": "Reply To Conversation",
					"action": "Reply to conversation",
					"description": "Reply to conversation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/conversations/{{$parameter[\"conversation_id\"]}}/reply"
						}
					}
				},
				{
					"name": "Report Conversation",
					"value": "Report Conversation",
					"action": "Report conversation",
					"description": "Report conversation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/conversations/{{$parameter[\"conversation_id\"]}}/report"
						}
					}
				},
				{
					"name": "Unarchive Conversation",
					"value": "Unarchive Conversation",
					"action": "Unarchive conversation",
					"description": "Unarchive conversation",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/conversations/{{$parameter[\"conversation_id\"]}}/unarchive"
						}
					}
				},
				{
					"name": "Unblock Conversation",
					"value": "Unblock Conversation",
					"action": "Unblock conversation",
					"description": "Unblock conversation",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/conversations/{{$parameter[\"conversation_id\"]}}/unblock"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /conversations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Get Conversations"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"description": "Used to filter messases by category.  Must be set to one of the following three categories: inbox, archived, blocked\n",
			"default": "inbox",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "category",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Get Conversations"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of conversations to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Get Conversations"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"description": "The number of conversations to return per page (must be >= 1 and <= 30).",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "per_page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Get Conversations"
					]
				}
			}
		},
		{
			"displayName": "Num Messages",
			"name": "num_messages",
			"description": "The number of recent messages to return with each conversation. Additional messages can be retrieved using get conversation messages endpoint.\n",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "num_messages",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Get Conversations"
					]
				}
			}
		},
		{
			"displayName": "Include Num Unread",
			"name": "include_num_unread",
			"description": "If set to 1, the num_unread field in the response will be set to the count of the total number of conversations that have unread messages. <br /><br /> This is useful for showing users the total number of unread messages that they have in their inbox. Calculating the count will slow the request down a bit so setting this should be avoided for requests where it's not needed (eg. requesting archived or blocked conversations or requests that are just paging through older conversations).\n",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_num_unread",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Get Conversations"
					]
				}
			}
		},
		{
			"displayName": "Device Pixel Ratio",
			"name": "device_pixel_ratio",
			"description": "Client device pixel ratio used to determine thumbnail size (default 1.0).",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "device_pixel_ratio",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Get Conversations"
					]
				}
			}
		},
		{
			"displayName": "PUT /conversations/archive-all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Archive All Conversations"
					]
				}
			}
		},
		{
			"displayName": "PUT /conversations/archive-all<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Archive All Conversations"
					]
				}
			}
		},
		{
			"displayName": "PUT /conversations/mark-all-read",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Mark All Conversations Read"
					]
				}
			}
		},
		{
			"displayName": "PUT /conversations/mark-all-read<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Mark All Conversations Read"
					]
				}
			}
		},
		{
			"displayName": "GET /conversations/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Search Conversations"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"required": true,
			"description": "The search query used to find conversations and messages.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Search Conversations"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of conversations to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Search Conversations"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"description": "The number of conversations to return per page (must be >= 1 and <= 30).",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "per_page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Search Conversations"
					]
				}
			}
		},
		{
			"displayName": "Device Pixel Ratio",
			"name": "device_pixel_ratio",
			"description": "Client device pixel ratio used to determine thumbnail size (default 1.0).",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "device_pixel_ratio",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Search Conversations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /conversations/{conversation_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Delete Conversation"
					]
				}
			}
		},
		{
			"displayName": "Conversation Id",
			"name": "conversation_id",
			"required": true,
			"description": "The ID of the conversation to delete.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Delete Conversation"
					]
				}
			}
		},
		{
			"displayName": "Message Id",
			"name": "message_id",
			"required": true,
			"description": "The ID of the newest message in the conversation that the client has downloaded.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "message_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Delete Conversation"
					]
				}
			}
		},
		{
			"displayName": "PUT /conversations/{conversation_id}/archive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Archive Conversation"
					]
				}
			}
		},
		{
			"displayName": "Conversation Id",
			"name": "conversation_id",
			"required": true,
			"description": "The ID of the conversation to archive.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Archive Conversation"
					]
				}
			}
		},
		{
			"displayName": "PUT /conversations/{conversation_id}/block",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Block Conversation"
					]
				}
			}
		},
		{
			"displayName": "Conversation Id",
			"name": "conversation_id",
			"required": true,
			"description": "The ID of the conversation to block.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Block Conversation"
					]
				}
			}
		},
		{
			"displayName": "PUT /conversations/{conversation_id}/mark-read",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Mark Conversation Read"
					]
				}
			}
		},
		{
			"displayName": "Conversation Id",
			"name": "conversation_id",
			"required": true,
			"description": "The ID of the conversation to mark as read.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Mark Conversation Read"
					]
				}
			}
		},
		{
			"displayName": "PUT /conversations/{conversation_id}/mark-read<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Mark Conversation Read"
					]
				}
			}
		},
		{
			"displayName": "GET /conversations/{conversation_id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Get Conversation Messages"
					]
				}
			}
		},
		{
			"displayName": "Conversation Id",
			"name": "conversation_id",
			"required": true,
			"description": "The ID of the conversation to return messages from.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Get Conversation Messages"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of messages to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Get Conversation Messages"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"description": "The number of messages to return per page (must be >= 1 and <= 30).",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "per_page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Get Conversation Messages"
					]
				}
			}
		},
		{
			"displayName": "Device Pixel Ratio",
			"name": "device_pixel_ratio",
			"description": "Client device pixel ratio used to determine thumbnail size (default 1.0).",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "device_pixel_ratio",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Get Conversation Messages"
					]
				}
			}
		},
		{
			"displayName": "Include Conversation",
			"name": "include_conversation",
			"description": "If set to 1, the conversation will be returned along with the messages.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_conversation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Get Conversation Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /conversations/{conversation_id}/reply",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Reply To Conversation"
					]
				}
			}
		},
		{
			"displayName": "Conversation Id",
			"name": "conversation_id",
			"required": true,
			"description": "The ID of the conversation to reply to.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Reply To Conversation"
					]
				}
			}
		},
		{
			"displayName": "POST /conversations/{conversation_id}/reply<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Reply To Conversation"
					]
				}
			}
		},
		{
			"displayName": "POST /conversations/{conversation_id}/report",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Report Conversation"
					]
				}
			}
		},
		{
			"displayName": "Conversation Id",
			"name": "conversation_id",
			"required": true,
			"description": "The ID of the conversation to report.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Report Conversation"
					]
				}
			}
		},
		{
			"displayName": "POST /conversations/{conversation_id}/report<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Report Conversation"
					]
				}
			}
		},
		{
			"displayName": "PUT /conversations/{conversation_id}/unarchive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Unarchive Conversation"
					]
				}
			}
		},
		{
			"displayName": "Conversation Id",
			"name": "conversation_id",
			"required": true,
			"description": "The ID of the conversation to unarchive.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Unarchive Conversation"
					]
				}
			}
		},
		{
			"displayName": "PUT /conversations/{conversation_id}/unblock",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Unblock Conversation"
					]
				}
			}
		},
		{
			"displayName": "Conversation Id",
			"name": "conversation_id",
			"required": true,
			"description": "The ID of the conversation to unblock.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Unblock Conversation"
					]
				}
			}
		},
];
