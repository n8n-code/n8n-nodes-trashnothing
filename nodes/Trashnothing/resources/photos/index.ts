import type { INodeProperties } from 'n8n-workflow';

export const photosDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Photos"
					]
				}
			},
			"options": [
				{
					"name": "Upload Photo",
					"value": "Upload Photo",
					"action": "Create a photo",
					"description": "Create a photo",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/photos"
						}
					}
				},
				{
					"name": "Get Photos By Ids",
					"value": "Get Photos By Ids",
					"action": "Retrieve multiple photos",
					"description": "Retrieve multiple photos",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/photos/multiple"
						}
					}
				},
				{
					"name": "Delete Photo",
					"value": "Delete Photo",
					"action": "Delete a photo",
					"description": "Delete a photo",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/photos/{{$parameter[\"photo_id\"]}}"
						}
					}
				},
				{
					"name": "Rotate Photo",
					"value": "Rotate Photo",
					"action": "Rotate a photo",
					"description": "Rotate a photo",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/photos/{{$parameter[\"photo_id\"]}}/rotate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /photos",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Photos"
					],
					"operation": [
						"Upload Photo"
					]
				}
			}
		},
		{
			"displayName": "POST /photos<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Photos"
					],
					"operation": [
						"Upload Photo"
					]
				}
			}
		},
		{
			"displayName": "GET /photos/multiple",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Photos"
					],
					"operation": [
						"Get Photos By Ids"
					]
				}
			}
		},
		{
			"displayName": "Photo Ids",
			"name": "photo_ids",
			"required": true,
			"description": "The IDs of the photos to retrieve.  If more than 50 photo IDs are passed, only the first 50 photos will be returned.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "photo_ids",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Photos"
					],
					"operation": [
						"Get Photos By Ids"
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
						"Photos"
					],
					"operation": [
						"Get Photos By Ids"
					]
				}
			}
		},
		{
			"displayName": "DELETE /photos/{photo_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Photos"
					],
					"operation": [
						"Delete Photo"
					]
				}
			}
		},
		{
			"displayName": "Photo Id",
			"name": "photo_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Photos"
					],
					"operation": [
						"Delete Photo"
					]
				}
			}
		},
		{
			"displayName": "POST /photos/{photo_id}/rotate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Photos"
					],
					"operation": [
						"Rotate Photo"
					]
				}
			}
		},
		{
			"displayName": "Photo Id",
			"name": "photo_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Photos"
					],
					"operation": [
						"Rotate Photo"
					]
				}
			}
		},
		{
			"displayName": "Degrees",
			"name": "degrees",
			"required": true,
			"description": "Rotation in degrees - currently only 90, 180 and 270 are supported which correspond to rotate left, rotate upside down and rotate right.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "degrees",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Photos"
					],
					"operation": [
						"Rotate Photo"
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
						"Photos"
					],
					"operation": [
						"Rotate Photo"
					]
				}
			}
		},
];
