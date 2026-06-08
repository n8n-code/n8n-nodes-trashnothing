import type { INodeProperties } from 'n8n-workflow';

export const miscDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Misc"
					]
				}
			},
			"options": [
				{
					"name": "Send Feedback",
					"value": "Send Feedback",
					"action": "Send feedback",
					"description": "Allows users to send feedback about the trashnothing.com site or apps.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/feedback"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /feedback",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Misc"
					],
					"operation": [
						"Send Feedback"
					]
				}
			}
		},
		{
			"displayName": "POST /feedback<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Misc"
					],
					"operation": [
						"Send Feedback"
					]
				}
			}
		},
];
