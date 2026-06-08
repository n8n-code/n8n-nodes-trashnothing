import type { INodeProperties } from 'n8n-workflow';

export const postsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					]
				}
			},
			"options": [
				{
					"name": "Get Posts",
					"value": "Get Posts",
					"action": "List posts",
					"description": "NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.\nNOTE: Passing the latitude, longitude and radius parameters filters all posts by their location and so these parameters will temporarily override the current users' location preferences. When latitude, longitude and radius are not specified, public posts will be filtered by the current users' location preferences.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/posts"
						}
					}
				},
				{
					"name": "Submit Post",
					"value": "Submit Post",
					"action": "Submit a post",
					"description": "Submits a new post.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/posts"
						}
					}
				},
				{
					"name": "Get All Posts",
					"value": "Get All Posts",
					"action": "List all posts",
					"description": "This endpoint provides an easy way to get a feed of all the publicly published posts on trash nothing. It provides access to all publicly published offer and wanted posts from the last 30 days. The posts are sorted by date (newest first). <br /><br /> There are fewer options for filtering, sorting and searching posts with this endpoint but there is no 1,000 post limit and posts that are crossposted to multiple groups are not merged together in the response.  In most cases, crossposted posts are easy to detect because they have the same user_id, title and content.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/posts/all"
						}
					}
				},
				{
					"name": "Get All Posts Changes",
					"value": "Get All Posts Changes",
					"action": "List all post changes",
					"description": "This endpoint provides an easy way to get a feed of all the changes that have been made to publicly published posts on trash nothing.  Similar to the /posts/all endpoint, only data from the last 30 days is available and the changes are sorted by date (newest first).  Every change includes the date of the change, the post_id of the post that was changed and the type of change. <br /><br /> The different types of changes that are returned are listed below. <br /><br /> - deleted<br /> - undeleted<br /> - satisfied<br /> - promised<br /> - unpromised<br /> - withdrawn<br /> - edited<br /> <br /> For edited changes, clients can use the retrieve post API endpoint to get the edits that have been made to the post.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/posts/all/changes"
						}
					}
				},
				{
					"name": "Get Posts By Ids",
					"value": "Get Posts By Ids",
					"action": "Retrieve multiple posts",
					"description": "Retrieve multiple posts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/posts/multiple"
						}
					}
				},
				{
					"name": "Search Posts",
					"value": "Search Posts",
					"action": "Search posts",
					"description": "Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.\nNOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/posts/search"
						}
					}
				},
				{
					"name": "Delete Post",
					"value": "Delete Post",
					"action": "Delete a post",
					"description": "Users can delete posts they have made that have been satisfied or withdrawn or that have expired. Deleting posts isn't intended to be a normal part of the posting process since it makes reposting and viewing old posts harder.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/posts/{{$parameter[\"post_id\"]}}"
						}
					}
				},
				{
					"name": "Get Post",
					"value": "Get Post",
					"action": "Retrieve a post",
					"description": "Retrieve a post",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/posts/{{$parameter[\"post_id\"]}}"
						}
					}
				},
				{
					"name": "Update Post",
					"value": "Update Post",
					"action": "Update a post",
					"description": "Users can update posts to fix mistakes with their post, add photos, or add more details about the items. Updates should not be used to say that items in a post have been taken or received since the post satisfy endpoint is designed to do that.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/posts/{{$parameter[\"post_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Bookmark",
					"value": "Delete Bookmark",
					"action": "Delete a post bookmark",
					"description": "Delete a post bookmark",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/posts/{{$parameter[\"post_id\"]}}/bookmark"
						}
					}
				},
				{
					"name": "Bookmark Post",
					"value": "Bookmark Post",
					"action": "Bookmark a post",
					"description": "Bookmark a post",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/posts/{{$parameter[\"post_id\"]}}/bookmark"
						}
					}
				},
				{
					"name": "Get Post And Related Data",
					"value": "Get Post And Related Data",
					"action": "Retrieve post display data",
					"description": "Retrieve a post and other data related to the post that is useful for displaying the post such as data about the user who posted the post and the groups the post was posted on.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/posts/{{$parameter[\"post_id\"]}}/display"
						}
					}
				},
				{
					"name": "Promise Post",
					"value": "Promise Post",
					"action": "Promise an offer post",
					"description": "Mark an offer by the current user as promised to someone. This helps people viewing the post know that the items being offered may soon be given away as long as the person who was promised the items picks them up.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/posts/{{$parameter[\"post_id\"]}}/promise"
						}
					}
				},
				{
					"name": "Reply To Post",
					"value": "Reply To Post",
					"action": "Reply to a post",
					"description": "Send a reply to a post from the current user to the post author.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/posts/{{$parameter[\"post_id\"]}}/reply"
						}
					}
				},
				{
					"name": "Report Post",
					"value": "Report Post",
					"action": "Report a post",
					"description": "Reports a post to be reviewed by the moderators.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/posts/{{$parameter[\"post_id\"]}}/report"
						}
					}
				},
				{
					"name": "Satisfy Post",
					"value": "Satisfy Post",
					"action": "Satisfy a post",
					"description": "Mark an offer or wanted post by the current user as satisfied (eg. an offer has been taken or a wanted has been received).",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/posts/{{$parameter[\"post_id\"]}}/satisfy"
						}
					}
				},
				{
					"name": "Share Post",
					"value": "Share Post",
					"action": "Share a post",
					"description": "Forwards a copy of the post to the current user so that they can forward it to friends.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/posts/{{$parameter[\"post_id\"]}}/share"
						}
					}
				},
				{
					"name": "Unpromise Post",
					"value": "Unpromise Post",
					"action": "Unpromise an offer post",
					"description": "Mark an offer by the current user as unpromised.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/posts/{{$parameter[\"post_id\"]}}/unpromise"
						}
					}
				},
				{
					"name": "Withdraw Post",
					"value": "Withdraw Post",
					"action": "Withdraw a post",
					"description": "Mark an offer or wanted post by the current user as withdrawn.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/posts/{{$parameter[\"post_id\"]}}/withdraw"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /posts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Get Posts"
					]
				}
			}
		},
		{
			"displayName": "Sort By",
			"name": "sort_by",
			"description": "How to sort the posts that are returned.  One of: date, active, distance <br /><br />\nDate sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.\n",
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
						"Posts"
					],
					"operation": [
						"Get Posts"
					]
				}
			}
		},
		{
			"displayName": "Types",
			"name": "types",
			"required": true,
			"description": "A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "types",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Get Posts"
					]
				}
			}
		},
		{
			"displayName": "Sources",
			"name": "sources",
			"required": true,
			"description": "A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or the current users' location if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sources",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Get Posts"
					]
				}
			}
		},
		{
			"displayName": "Group Ids",
			"name": "group_ids",
			"description": "A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.\n",
			"default": "The group IDs of every group the current user is a member of.",
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
						"Posts"
					],
					"operation": [
						"Get Posts"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"description": "The number of posts to return per page (must be >= 1 and <= 100).",
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
						"Posts"
					],
					"operation": [
						"Get Posts"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of posts to return.",
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
						"Posts"
					],
					"operation": [
						"Get Posts"
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
						"Posts"
					],
					"operation": [
						"Get Posts"
					]
				}
			}
		},
		{
			"displayName": "Latitude",
			"name": "latitude",
			"description": "The latitude of a point around which to return posts.\n",
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
						"Posts"
					],
					"operation": [
						"Get Posts"
					]
				}
			}
		},
		{
			"displayName": "Longitude",
			"name": "longitude",
			"description": "The longitude of a point around which to return posts.\n",
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
						"Posts"
					],
					"operation": [
						"Get Posts"
					]
				}
			}
		},
		{
			"displayName": "Radius",
			"name": "radius",
			"description": "The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.\n",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "radius",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Get Posts"
					]
				}
			}
		},
		{
			"displayName": "Date Min",
			"name": "date_min",
			"description": "Only posts newer than or equal to this UTC date and time will be returned.  If unset, defaults to the current date and time minus 90 days.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "date_min",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Get Posts"
					]
				}
			}
		},
		{
			"displayName": "Date Max",
			"name": "date_max",
			"description": "Only posts older than this UTC date and time will be returned.  If unset, defaults to the current date and time.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "date_max",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Get Posts"
					]
				}
			}
		},
		{
			"displayName": "Outcomes",
			"name": "outcomes",
			"description": "A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to 'all', all posts will be returned no matter what outcome the posts have. If set to 'not-promised', only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "outcomes",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Get Posts"
					]
				}
			}
		},
		{
			"displayName": "User State",
			"name": "user_state",
			"description": "If user_state is set, only posts matching the state specified will be returned.  Only one state may be passed and it must be one of the following: viewed, replied, bookmarked <br><br> NOTE: This option will only work with oauth requests.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Get Posts"
					]
				}
			}
		},
		{
			"displayName": "Include Reposts",
			"name": "include_reposts",
			"description": "If set to 1 (the default), posts that are reposts will be included. If set to 0, reposts will be excluded. See the repost_count field of post objects for details about how reposts are identified.\n",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_reposts",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Get Posts"
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
						"Posts"
					],
					"operation": [
						"Get Posts"
					]
				}
			}
		},
		{
			"displayName": "POST /posts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Submit Post"
					]
				}
			}
		},
		{
			"displayName": "POST /posts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Submit Post"
					]
				}
			}
		},
		{
			"displayName": "GET /posts/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Get All Posts"
					]
				}
			}
		},
		{
			"displayName": "Types",
			"name": "types",
			"required": true,
			"description": "A comma separated list of the post types to return.  The available post types are: offer, wanted\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "types",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Get All Posts"
					]
				}
			}
		},
		{
			"displayName": "Date Min",
			"name": "date_min",
			"required": true,
			"description": "Only posts newer than or equal to this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_max. And the date and time must be within the last 30 days. And the date and time must be rounded to the nearest second.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "date_min",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Get All Posts"
					]
				}
			}
		},
		{
			"displayName": "Date Max",
			"name": "date_max",
			"required": true,
			"description": "Only posts older than this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_min. And the date and time must be rounded to the nearest second.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "date_max",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Get All Posts"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"description": "The number of posts to return per page (must be >= 1 and <= 50).",
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
						"Posts"
					],
					"operation": [
						"Get All Posts"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of posts to return.",
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
						"Posts"
					],
					"operation": [
						"Get All Posts"
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
						"Posts"
					],
					"operation": [
						"Get All Posts"
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
						"Posts"
					],
					"operation": [
						"Get All Posts"
					]
				}
			}
		},
		{
			"displayName": "GET /posts/all/changes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Get All Posts Changes"
					]
				}
			}
		},
		{
			"displayName": "Date Min",
			"name": "date_min",
			"required": true,
			"description": "Only changes newer than or equal to this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_max. And the date and time must be within the last 30 days. And the date and time must be rounded to the nearest second.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "date_min",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Get All Posts Changes"
					]
				}
			}
		},
		{
			"displayName": "Date Max",
			"name": "date_max",
			"required": true,
			"description": "Only changes older than this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_min. And the date and time must be rounded to the nearest second.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "date_max",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Get All Posts Changes"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"description": "The number of changes to return per page (must be >= 1 and <= 50).",
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
						"Posts"
					],
					"operation": [
						"Get All Posts Changes"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of changes to return.",
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
						"Posts"
					],
					"operation": [
						"Get All Posts Changes"
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
						"Posts"
					],
					"operation": [
						"Get All Posts Changes"
					]
				}
			}
		},
		{
			"displayName": "GET /posts/multiple",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Get Posts By Ids"
					]
				}
			}
		},
		{
			"displayName": "Post Ids",
			"name": "post_ids",
			"required": true,
			"description": "A comma separated list of the post IDs. If more than 10 post IDs are passed, only the first 10 posts will be returned.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "post_ids",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Get Posts By Ids"
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
						"Posts"
					],
					"operation": [
						"Get Posts By Ids"
					]
				}
			}
		},
		{
			"displayName": "GET /posts/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Search Posts"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"required": true,
			"description": "The search query used to find posts.",
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
						"Posts"
					],
					"operation": [
						"Search Posts"
					]
				}
			}
		},
		{
			"displayName": "Sort By",
			"name": "sort_by",
			"description": "How to sort the posts that are returned.  One of: relevance, date, active, distance <br /><br /> Relevance sorting will sort the posts that best match the search query first. Date sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.\n",
			"default": "relevance",
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
						"Posts"
					],
					"operation": [
						"Search Posts"
					]
				}
			}
		},
		{
			"displayName": "Types",
			"name": "types",
			"required": true,
			"description": "A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "types",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Search Posts"
					]
				}
			}
		},
		{
			"displayName": "Sources",
			"name": "sources",
			"required": true,
			"description": "A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or the current users' location if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sources",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Search Posts"
					]
				}
			}
		},
		{
			"displayName": "Group Ids",
			"name": "group_ids",
			"description": "A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.\n",
			"default": "The group IDs of every group the current user is a member of.",
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
						"Posts"
					],
					"operation": [
						"Search Posts"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"description": "The number of posts to return per page (must be >= 1 and <= 100).",
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
						"Posts"
					],
					"operation": [
						"Search Posts"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of posts to return.",
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
						"Posts"
					],
					"operation": [
						"Search Posts"
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
						"Posts"
					],
					"operation": [
						"Search Posts"
					]
				}
			}
		},
		{
			"displayName": "Latitude",
			"name": "latitude",
			"description": "The latitude of a point around which to return posts.\n",
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
						"Posts"
					],
					"operation": [
						"Search Posts"
					]
				}
			}
		},
		{
			"displayName": "Longitude",
			"name": "longitude",
			"description": "The longitude of a point around which to return posts.\n",
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
						"Posts"
					],
					"operation": [
						"Search Posts"
					]
				}
			}
		},
		{
			"displayName": "Radius",
			"name": "radius",
			"description": "The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.\n",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "radius",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Search Posts"
					]
				}
			}
		},
		{
			"displayName": "Date Min",
			"name": "date_min",
			"description": "Only posts newer than or equal to this UTC date and time will be returned.  If unset, defaults to the current date and time minus 90 days.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "date_min",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Search Posts"
					]
				}
			}
		},
		{
			"displayName": "Date Max",
			"name": "date_max",
			"description": "Only posts older than this UTC date and time will be returned.  If unset, defaults to the current date and time.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "date_max",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Search Posts"
					]
				}
			}
		},
		{
			"displayName": "Outcomes",
			"name": "outcomes",
			"description": "A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to 'all', all posts will be returned no matter what outcome the posts have. If set to 'not-promised', only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "outcomes",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Search Posts"
					]
				}
			}
		},
		{
			"displayName": "User State",
			"name": "user_state",
			"description": "If user_state is set, only posts matching the state specified will be returned.  Only one state may be passed and it must be one of the following: viewed, replied, bookmarked <br><br> NOTE: This option will only work with oauth requests.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Search Posts"
					]
				}
			}
		},
		{
			"displayName": "Include Reposts",
			"name": "include_reposts",
			"description": "If set to 1 (the default), posts that are reposts will be included. If set to 0, reposts will be excluded. See the repost_count field of post objects for details about how reposts are identified.\n",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_reposts",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Search Posts"
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
						"Posts"
					],
					"operation": [
						"Search Posts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /posts/{post_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Delete Post"
					]
				}
			}
		},
		{
			"displayName": "Post Id",
			"name": "post_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Delete Post"
					]
				}
			}
		},
		{
			"displayName": "GET /posts/{post_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Get Post"
					]
				}
			}
		},
		{
			"displayName": "Post Id",
			"name": "post_id",
			"required": true,
			"description": "The ID of the post to retrieve.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Get Post"
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
						"Posts"
					],
					"operation": [
						"Get Post"
					]
				}
			}
		},
		{
			"displayName": "PUT /posts/{post_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Update Post"
					]
				}
			}
		},
		{
			"displayName": "Post Id",
			"name": "post_id",
			"required": true,
			"description": "The ID of the post to update.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Update Post"
					]
				}
			}
		},
		{
			"displayName": "PUT /posts/{post_id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Update Post"
					]
				}
			}
		},
		{
			"displayName": "DELETE /posts/{post_id}/bookmark",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Delete Bookmark"
					]
				}
			}
		},
		{
			"displayName": "Post Id",
			"name": "post_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Delete Bookmark"
					]
				}
			}
		},
		{
			"displayName": "PUT /posts/{post_id}/bookmark",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Bookmark Post"
					]
				}
			}
		},
		{
			"displayName": "Post Id",
			"name": "post_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Bookmark Post"
					]
				}
			}
		},
		{
			"displayName": "GET /posts/{post_id}/display",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Get Post And Related Data"
					]
				}
			}
		},
		{
			"displayName": "Post Id",
			"name": "post_id",
			"required": true,
			"description": "The ID of the post to retrieve.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Get Post And Related Data"
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
						"Posts"
					],
					"operation": [
						"Get Post And Related Data"
					]
				}
			}
		},
		{
			"displayName": "PUT /posts/{post_id}/promise",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Promise Post"
					]
				}
			}
		},
		{
			"displayName": "Post Id",
			"name": "post_id",
			"required": true,
			"description": "The ID of the post to promise.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Promise Post"
					]
				}
			}
		},
		{
			"displayName": "POST /posts/{post_id}/reply",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Reply To Post"
					]
				}
			}
		},
		{
			"displayName": "Post Id",
			"name": "post_id",
			"required": true,
			"description": "The ID of the post to reply to.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Reply To Post"
					]
				}
			}
		},
		{
			"displayName": "POST /posts/{post_id}/reply<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Reply To Post"
					]
				}
			}
		},
		{
			"displayName": "POST /posts/{post_id}/report",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Report Post"
					]
				}
			}
		},
		{
			"displayName": "Post Id",
			"name": "post_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Report Post"
					]
				}
			}
		},
		{
			"displayName": "POST /posts/{post_id}/report<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Report Post"
					]
				}
			}
		},
		{
			"displayName": "PUT /posts/{post_id}/satisfy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Satisfy Post"
					]
				}
			}
		},
		{
			"displayName": "Post Id",
			"name": "post_id",
			"required": true,
			"description": "The ID of the post to satisfy.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Satisfy Post"
					]
				}
			}
		},
		{
			"displayName": "POST /posts/{post_id}/share",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Share Post"
					]
				}
			}
		},
		{
			"displayName": "Post Id",
			"name": "post_id",
			"required": true,
			"description": "The ID of the post to share.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Share Post"
					]
				}
			}
		},
		{
			"displayName": "PUT /posts/{post_id}/unpromise",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Unpromise Post"
					]
				}
			}
		},
		{
			"displayName": "Post Id",
			"name": "post_id",
			"required": true,
			"description": "The ID of the post to unpromise.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Unpromise Post"
					]
				}
			}
		},
		{
			"displayName": "PUT /posts/{post_id}/withdraw",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Withdraw Post"
					]
				}
			}
		},
		{
			"displayName": "Post Id",
			"name": "post_id",
			"required": true,
			"description": "The ID of the post to withdraw.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"Withdraw Post"
					]
				}
			}
		},
];
