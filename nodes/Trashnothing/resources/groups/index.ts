import type { INodeProperties } from 'n8n-workflow';

export const groupsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					]
				}
			},
			"options": [
				{
					"name": "Search Groups",
					"value": "Search Groups",
					"action": "Search groups",
					"description": "Search groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups"
						}
					}
				},
				{
					"name": "Get Groups By Ids",
					"value": "Get Groups By Ids",
					"action": "Retrieve multiple groups",
					"description": "Retrieve multiple groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/multiple"
						}
					}
				},
				{
					"name": "Join Groups",
					"value": "Join Groups",
					"action": "Join groups",
					"description": "Request membership to one or more groups. <br /><br /> NOTE: Any group with a has_questions field set to true will also require answers to the groups' new member questionnaire to be submitted.  Groups waiting for answers will have their membership field set to 'pending-questions'.  And the questionnaire that needs to be answered can be found in the membership.questionnaire field of the group after a subscribe request is made to that group.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/subscribe"
						}
					}
				},
				{
					"name": "Get Group",
					"value": "Get Group",
					"action": "Retrieve a group",
					"description": "Retrieve a group",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group_id\"]}}"
						}
					}
				},
				{
					"name": "Submit Answers",
					"value": "Submit Answers",
					"action": "Submit group answers",
					"description": "Submits answers to a groups' membership questionnaire. <br /><br /> The request body should be a JSON object mapping each question from the group membership.questionnaire.questions field to an answer (eg. {\"Where do you live?\": \"New York City\"} ). All questions are required so no null or empty string answers are allowed.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group_id\"]}}/answers"
						}
					}
				},
				{
					"name": "Contact Moderators",
					"value": "Contact Moderators",
					"action": "Contact group moderators",
					"description": "Contact group moderators",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group_id\"]}}/contact"
						}
					}
				},
				{
					"name": "Leave Group",
					"value": "Leave Group",
					"action": "Leave a group",
					"description": "Leave a group",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group_id\"]}}/unsubscribe"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Search Groups"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Find groups that have the given text somewhere in their name (case insensitive).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Search Groups"
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
						"Groups"
					],
					"operation": [
						"Search Groups"
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
						"Groups"
					],
					"operation": [
						"Search Groups"
					]
				}
			}
		},
		{
			"displayName": "Distance",
			"name": "distance",
			"description": "When latitude and longitude are passed, distance can optionally be passed to only return groups within a certain distance (in kilometers) from the point specified by the latitude and longitude.  The distance must be > 0 and <= 150 and will default to 100.\n",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "distance",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Search Groups"
					]
				}
			}
		},
		{
			"displayName": "Country",
			"name": "country",
			"description": "Find groups in the given country where country is a 2 letter country code for the country (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ).\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "country",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Search Groups"
					]
				}
			}
		},
		{
			"displayName": "Region",
			"name": "region",
			"description": "For countries with regions (AU, CA, GB, US), search groups in a specific region as specified by the region abbreviation.  The supported regions and their abbreviations are listed below. <br /><br /> NOTE: The region and postal_code parameters cannot be used at the same time and if both are passed then the postal_code will take priority. <br /><br /> --- <br /><br /> **AU**<br /> - QLD: Queensland<br /> - SA: South Australia<br /> - TAS: Tasmania<br /> - VIC: Victoria<br /> - WA: Western Australia<br /> - NT: Northern Territory<br /> - NSW: New South Wales - ACT<br /> <br /> **CA**<br /> - AB: Alberta<br /> - BC: British Columbia<br /> - MB: Manitoba<br /> - NB: New Brunswick<br /> - NL: Newfoundland and Labrador<br /> - NS: Nova Scotia<br /> - ON: Ontario<br /> - QC: Quebec<br /> - SK: Saskatchewan<br /> - PE: Prince Edward Island<br /> <br /> **GB**<br /> - E: East<br /> - EM: East Midlands<br /> - LDN: London<br /> - NE: North East<br /> - NW: North West<br /> - NI: Northern Ireland<br /> - SC: Scotland<br /> - SE: South East<br /> - SW: South West<br /> - WA: Wales<br /> - WM: West Midlands<br /> - YH: Yorkshire and the Humber<br /> <br /> **US**<br /> All 50 states and the District of Columbia are supported.  For the abbreviations, see: https://github.com/jasonong/List-of-US-States/blob/master/states.csv\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "region",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Search Groups"
					]
				}
			}
		},
		{
			"displayName": "Postal Code",
			"name": "postal_code",
			"description": "Find groups in the given postal code.  Only a few countries support postal code searches (US, CA, AU, GB).  The country parameter must be passed when the postal_code parameter is set. <br /><br /> NOTE: The region and postal_code parameters cannot be used at the same time and if both are passed then the postal_code will take priority.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "postal_code",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Search Groups"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of groups to return.",
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
						"Groups"
					],
					"operation": [
						"Search Groups"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"description": "The number of groups to return per page (must be >= 1 and <= 100).",
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
						"Groups"
					],
					"operation": [
						"Search Groups"
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
						"Groups"
					],
					"operation": [
						"Search Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/multiple",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Get Groups By Ids"
					]
				}
			}
		},
		{
			"displayName": "Group Ids",
			"name": "group_ids",
			"required": true,
			"description": "The IDs of the groups to retrieve.  If more than 20 group IDs are passed, only the first 20 groups will be returned.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_ids",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Get Groups By Ids"
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
						"Groups"
					],
					"operation": [
						"Get Groups By Ids"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/subscribe",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Join Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/subscribe<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Join Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Get Group"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "group_id",
			"required": true,
			"description": "The ID of the group to retrieve.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Get Group"
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
						"Groups"
					],
					"operation": [
						"Get Group"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group_id}/answers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Submit Answers"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "group_id",
			"required": true,
			"description": "The group ID of the group that the user is submitting answers for.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Submit Answers"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group_id}/contact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Contact Moderators"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "group_id",
			"required": true,
			"description": "The group ID of the group whose moderators will be contacted.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Contact Moderators"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group_id}/contact<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Contact Moderators"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group_id}/unsubscribe",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Leave Group"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "group_id",
			"required": true,
			"description": "The ID of the group to leave.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Leave Group"
					]
				}
			}
		},
];
