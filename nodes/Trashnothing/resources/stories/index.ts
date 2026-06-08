import type { INodeProperties } from 'n8n-workflow';

export const storiesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Stories"
					]
				}
			},
			"options": [
				{
					"name": "Get Stories",
					"value": "Get Stories",
					"action": "List stories",
					"description": "List stories",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/stories"
						}
					}
				},
				{
					"name": "Submit Story",
					"value": "Submit Story",
					"action": "Submit a story",
					"description": "Submit a story",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/stories"
						}
					}
				},
				{
					"name": "Get Story",
					"value": "Get Story",
					"action": "Retrieve a story",
					"description": "Retrieve a story",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/stories/{{$parameter[\"story_id\"]}}"
						}
					}
				},
				{
					"name": "Like Story",
					"value": "Like Story",
					"action": "Like a story",
					"description": "Like a story",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/stories/{{$parameter[\"story_id\"]}}/like"
						}
					}
				},
				{
					"name": "Unlike Story",
					"value": "Unlike Story",
					"action": "Unlike a story",
					"description": "Unlike a story",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/stories/{{$parameter[\"story_id\"]}}/unlike"
						}
					}
				},
				{
					"name": "Viewed Story",
					"value": "Viewed Story",
					"action": "Record story viewed",
					"description": "Records every time a user views the full story (and not just a preview or snippet),",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/stories/{{$parameter[\"story_id\"]}}/viewed"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /stories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stories"
					],
					"operation": [
						"Get Stories"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of stories to return.",
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
						"Stories"
					],
					"operation": [
						"Get Stories"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"description": "The number of stories to return per page (must be >= 1 and <= 50).",
			"default": 20,
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
						"Stories"
					],
					"operation": [
						"Get Stories"
					]
				}
			}
		},
		{
			"displayName": "Sort By",
			"name": "sort_by",
			"description": "How to sort the stories that are returned.  One of: date, distance, likes, views <br /><br /> Setting sort_by to date will sort posts from newest to oldest.  Setting sort_by to distance will sort posts from nearest to farthest.  Setting sort_by to likes will sort posts with the most likes first.  Setting sort_by to views will show the posts with the most views first.\n",
			"default": "date",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort_by",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stories"
					],
					"operation": [
						"Get Stories"
					]
				}
			}
		},
		{
			"displayName": "Latitude",
			"name": "latitude",
			"description": "Find groups near the given latitude and longitude.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "latitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stories"
					],
					"operation": [
						"Get Stories"
					]
				}
			}
		},
		{
			"displayName": "Longitude",
			"name": "longitude",
			"description": "Find groups near the given latitude and longitude.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "longitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stories"
					],
					"operation": [
						"Get Stories"
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
						"Stories"
					],
					"operation": [
						"Get Stories"
					]
				}
			}
		},
		{
			"displayName": "Api Key",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "Provides access to specific public API endpoints which don't require user authorization. <br /><br /> The API currently allows api key access to list, search and retrieve posts (for public posts and posts on open archive groups) and to list, search and retrieve groups. <br /><br /> NOTE: Some API endpoints behave differently when requests are made using api keys instead of oauth (because api key requests have no user associated with them).  Check the documentation for each endpoint for a description of the differences.\n",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stories"
					],
					"operation": [
						"Get Stories"
					]
				}
			}
		},
		{
			"displayName": "POST /stories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stories"
					],
					"operation": [
						"Submit Story"
					]
				}
			}
		},
		{
			"displayName": "POST /stories<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stories"
					],
					"operation": [
						"Submit Story"
					]
				}
			}
		},
		{
			"displayName": "GET /stories/{story_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stories"
					],
					"operation": [
						"Get Story"
					]
				}
			}
		},
		{
			"displayName": "Story Id",
			"name": "story_id",
			"required": true,
			"description": "The ID of the story to retrieve.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Stories"
					],
					"operation": [
						"Get Story"
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
						"Stories"
					],
					"operation": [
						"Get Story"
					]
				}
			}
		},
		{
			"displayName": "Api Key",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "Provides access to specific public API endpoints which don't require user authorization. <br /><br /> The API currently allows api key access to list, search and retrieve posts (for public posts and posts on open archive groups) and to list, search and retrieve groups. <br /><br /> NOTE: Some API endpoints behave differently when requests are made using api keys instead of oauth (because api key requests have no user associated with them).  Check the documentation for each endpoint for a description of the differences.\n",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stories"
					],
					"operation": [
						"Get Story"
					]
				}
			}
		},
		{
			"displayName": "PUT /stories/{story_id}/like",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stories"
					],
					"operation": [
						"Like Story"
					]
				}
			}
		},
		{
			"displayName": "Story Id",
			"name": "story_id",
			"required": true,
			"description": "The ID of the story to like.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Stories"
					],
					"operation": [
						"Like Story"
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
						"Stories"
					],
					"operation": [
						"Like Story"
					]
				}
			}
		},
		{
			"displayName": "PUT /stories/{story_id}/unlike",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stories"
					],
					"operation": [
						"Unlike Story"
					]
				}
			}
		},
		{
			"displayName": "Story Id",
			"name": "story_id",
			"required": true,
			"description": "The ID of the story to unlike.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Stories"
					],
					"operation": [
						"Unlike Story"
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
						"Stories"
					],
					"operation": [
						"Unlike Story"
					]
				}
			}
		},
		{
			"displayName": "POST /stories/{story_id}/viewed",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stories"
					],
					"operation": [
						"Viewed Story"
					]
				}
			}
		},
		{
			"displayName": "Story Id",
			"name": "story_id",
			"required": true,
			"description": "The ID of the story viewed.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Stories"
					],
					"operation": [
						"Viewed Story"
					]
				}
			}
		},
		{
			"displayName": "Api Key",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "Provides access to specific public API endpoints which don't require user authorization. <br /><br /> The API currently allows api key access to list, search and retrieve posts (for public posts and posts on open archive groups) and to list, search and retrieve groups. <br /><br /> NOTE: Some API endpoints behave differently when requests are made using api keys instead of oauth (because api key requests have no user associated with them).  Check the documentation for each endpoint for a description of the differences.\n",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stories"
					],
					"operation": [
						"Viewed Story"
					]
				}
			}
		},
];
