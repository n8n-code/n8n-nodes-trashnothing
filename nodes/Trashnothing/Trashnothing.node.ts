import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { usersDescription } from './resources/users';
import { postsDescription } from './resources/posts';
import { groupsDescription } from './resources/groups';
import { photosDescription } from './resources/photos';
import { messagesDescription } from './resources/messages';
import { storiesDescription } from './resources/stories';
import { miscDescription } from './resources/misc';

export class Trashnothing implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'trashnothing',
		name: 'N8nDevTrashnothing',
		icon: { light: 'file:./trashnothing.png', dark: 'file:./trashnothing.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'The REST API for trashnothing.com.',
		defaults: { name: 'trashnothing' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevTrashnothingApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Users",
					"value": "Users",
					"description": "Retrieve and update user data."
				},
				{
					"name": "Posts",
					"value": "Posts",
					"description": "Retrieve and update posts."
				},
				{
					"name": "Groups",
					"value": "Groups",
					"description": "Search, subscribe and unsubscribe to groups."
				},
				{
					"name": "Photos",
					"value": "Photos",
					"description": "Upload, delete and rotate photos."
				},
				{
					"name": "Messages",
					"value": "Messages",
					"description": "Manage conversations and messages with other users. <br /><br /> It's important to note that messages are always sent by email to the users.   So it's possible to create a fully functional app using the trash nothing API without using any of the conversations or messages API endpoints.  These API endpoints are useful for developers who want to build a complete messaging interface into their app.\n"
				},
				{
					"name": "Stories",
					"value": "Stories",
					"description": "Retrieve and submit stories."
				},
				{
					"name": "Misc",
					"value": "Misc",
					"description": "Miscellaneous functionality."
				}
			],
			"default": ""
		},
		...usersDescription,
		...postsDescription,
		...groupsDescription,
		...photosDescription,
		...messagesDescription,
		...storiesDescription,
		...miscDescription
		],
	};
}
