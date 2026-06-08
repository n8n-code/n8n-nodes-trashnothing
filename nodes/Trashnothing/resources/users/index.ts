import type { INodeProperties } from 'n8n-workflow';

export const usersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					]
				}
			},
			"options": [
				{
					"name": "Get Current User",
					"value": "Get Current User",
					"action": "Retrieve current user",
					"description": "Retrieve current user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/me"
						}
					}
				},
				{
					"name": "Update Current User",
					"value": "Update Current User",
					"action": "Update current user",
					"description": "Update the current user.  All fields are optional so requests can update just one or multiple user properties at a time.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/me"
						}
					}
				},
				{
					"name": "Get Alerts",
					"value": "Get Alerts",
					"action": "List current users' email alerts",
					"description": "List current users' email alerts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/me/alerts"
						}
					}
				},
				{
					"name": "Create Alert",
					"value": "Create Alert",
					"action": "Create an email alert",
					"description": "Create an email alert",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/me/alerts"
						}
					}
				},
				{
					"name": "Delete Alert",
					"value": "Delete Alert",
					"action": "Delete an email alert",
					"description": "Delete an email alert",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/me/alerts/{{$parameter[\"alert_id\"]}}"
						}
					}
				},
				{
					"name": "Change Email",
					"value": "Change Email",
					"action": "Change email address",
					"description": "Change the users' current email address.  A verification link will be emailed to the new email address to verify that the email account belongs to the user.  The email change will not take effect until the user clicks the link in the verification email.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/me/email"
						}
					}
				},
				{
					"name": "Set Email Not Bouncing",
					"value": "Set Email Not Bouncing",
					"action": "Set users' email address as not bouncing",
					"description": "Resets an email address bouncing state to false.  The users' email address may be automatically marked as bouncing again if further emails sent to it are bounced.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/me/email/not-bouncing"
						}
					}
				},
				{
					"name": "Get Current User Groups",
					"value": "Get Current User Groups",
					"action": "List current users' groups",
					"description": "List current users' groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/me/groups"
						}
					}
				},
				{
					"name": "Update Location",
					"value": "Update Location",
					"action": "Update location",
					"description": "Update the current users' location. The location is used to determine which posts are shown to the user (both public posts and group posts).\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/me/location"
						}
					}
				},
				{
					"name": "Get User Group Notices",
					"value": "Get User Group Notices",
					"action": "List current users' group notices",
					"description": "List current users' group notices",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/me/notices"
						}
					}
				},
				{
					"name": "Get Post Locations",
					"value": "Get Post Locations",
					"action": "List current users' post locations",
					"description": "Only the most recent 3 post locations are returned.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/me/post-locations"
						}
					}
				},
				{
					"name": "Save Post Location",
					"value": "Save Post Location",
					"action": "Save a post location for the current user",
					"description": "Creates or updates a post location for the current user. Updates will happen when the name of the post location matches a previous post location.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/me/post-locations"
						}
					}
				},
				{
					"name": "Get Current User Posts",
					"value": "Get Current User Posts",
					"action": "List current users' posts",
					"description": "NOTE: In order to make it easier to see all a users&#39; posts, the current users&#39; location preferences are not applied when listing or searching posts from a single user.  If location based filtering of the posts is needed, the latitude, longitude and radius parameters may be used.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/me/posts"
						}
					}
				},
				{
					"name": "Search Current User Posts",
					"value": "Search Current User Posts",
					"action": "Search current users' posts",
					"description": "Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/me/posts/search"
						}
					}
				},
				{
					"name": "Set Profile Image",
					"value": "Set Profile Image",
					"action": "Set a profile image",
					"description": "Profile images must be at least 90 pixels wide and tall.  And if the image used is not square it will be automatically cropped to be square.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/me/profile-image"
						}
					}
				},
				{
					"name": "Get Profile Images",
					"value": "Get Profile Images",
					"action": "List current users' profile images",
					"description": "List current users' profile images",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/me/profile-images"
						}
					}
				},
				{
					"name": "Resend Account Verification Email",
					"value": "Resend Account Verification Email",
					"action": "Resend account verification email",
					"description": "Resend account verification email",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/me/resend-verification"
						}
					}
				},
				{
					"name": "Send Password Reset Email",
					"value": "Send Password Reset Email",
					"action": "Send password reset email",
					"description": "Send password reset email",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/me/reset-password"
						}
					}
				},
				{
					"name": "Report User",
					"value": "Report User",
					"action": "Report a user",
					"description": "Report a user",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/report"
						}
					}
				},
				{
					"name": "Get User",
					"value": "Get User",
					"action": "Retrieve a user",
					"description": "Retrieve a user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user_id\"]}}"
						}
					}
				},
				{
					"name": "Get User And Related Data",
					"value": "Get User And Related Data",
					"action": "Retrieve user display info",
					"description": "Retrieve a user and information related to the user (eg. recent posts) that is useful for displaying a more detailed view of the user.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user_id\"]}}/display"
						}
					}
				},
				{
					"name": "Remove User Feedback",
					"value": "Remove User Feedback",
					"action": "Remove feedback on a user",
					"description": "Allows the current user to remove feedback that they left on a user.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user_id\"]}}/feedback"
						}
					}
				},
				{
					"name": "Submit User Feedback",
					"value": "Submit User Feedback",
					"action": "Submit feedback on a user",
					"description": "Allows the current user to submit feedback on a user.  The current user can only leave feedback on a user if the feedback allowed property on that user is set to true (see User definition for more details). And the system will only store the most recent feedback submission that the current user has submitted on a user. If the current user submits feedback multiple times, the newest feedback will overwrite the older feedback. This allows users to update their feedback as long as the feedback allowed property allows it.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user_id\"]}}/feedback"
						}
					}
				},
				{
					"name": "Get User Posts",
					"value": "Get User Posts",
					"action": "List posts by a user",
					"description": "NOTE: In order to make it easier to see all a users&#39; posts, the current users&#39; location preferences are not applied when listing or searching posts from a single user.  If location based filtering of the posts is needed, the latitude, longitude and radius parameters may be used.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user_id\"]}}/posts"
						}
					}
				},
				{
					"name": "Search User Posts",
					"value": "Search User Posts",
					"action": "Search posts by a user",
					"description": "Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user_id\"]}}/posts/search"
						}
					}
				},
				{
					"name": "Get Profile Image File",
					"value": "Get Profile Image File",
					"action": "Retrieve a users' profile image",
					"description": "This is designed to be used as the src attribute of an HTML &lt;img&gt; tag to show the profile image of the given user.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user_id\"]}}/profile-image"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/me",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Current User"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/me",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update Current User"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/me<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /users/me/alerts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Alerts"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/me/alerts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Create Alert"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/me/alerts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Create Alert"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/me/alerts/{alert_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Delete Alert"
					]
				}
			}
		},
		{
			"displayName": "Alert Id",
			"name": "alert_id",
			"required": true,
			"description": "The ID of the email alert to delete.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Delete Alert"
					]
				}
			}
		},
		{
			"displayName": "POST /users/me/email",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Change Email"
					]
				}
			}
		},
		{
			"displayName": "POST /users/me/email<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Change Email"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/me/email/not-bouncing",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Set Email Not Bouncing"
					]
				}
			}
		},
		{
			"displayName": "GET /users/me/groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Current User Groups"
					]
				}
			}
		},
		{
			"displayName": "Membership",
			"name": "membership",
			"description": "Set the membership parameter to only return certain groups. The options are: <br /><br /> - **subscribed**: Only return groups the user is a member of.<br /> - **pending-questions**: Only return groups where the user needs to respond to a new member questionnaire.<br /> - **pending**: Only return groups where the user is waiting for their membership request to be approved (excludes groups which are pending-questions). <br /><br /> If unset, all groups the user is a member of and pending membership on will be returned.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "membership",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Current User Groups"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/me/location",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update Location"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/me/location<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update Location"
					]
				}
			}
		},
		{
			"displayName": "GET /users/me/notices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get User Group Notices"
					]
				}
			}
		},
		{
			"displayName": "Group Ids",
			"name": "group_ids",
			"description": "A comma separated list of group IDs to return notices for.  If unset, notices for all the users groups will be returned.",
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
						"Users"
					],
					"operation": [
						"Get User Group Notices"
					]
				}
			}
		},
		{
			"displayName": "GET /users/me/post-locations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Post Locations"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/me/post-locations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Save Post Location"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/me/post-locations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Save Post Location"
					]
				}
			}
		},
		{
			"displayName": "GET /users/me/posts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Current User Posts"
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
						"Users"
					],
					"operation": [
						"Get Current User Posts"
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
						"Users"
					],
					"operation": [
						"Get Current User Posts"
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
						"Users"
					],
					"operation": [
						"Get Current User Posts"
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
						"Users"
					],
					"operation": [
						"Get Current User Posts"
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
						"Users"
					],
					"operation": [
						"Get Current User Posts"
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
						"Users"
					],
					"operation": [
						"Get Current User Posts"
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
						"Users"
					],
					"operation": [
						"Get Current User Posts"
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
						"Users"
					],
					"operation": [
						"Get Current User Posts"
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
						"Users"
					],
					"operation": [
						"Get Current User Posts"
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
						"Users"
					],
					"operation": [
						"Get Current User Posts"
					]
				}
			}
		},
		{
			"displayName": "Date Min",
			"name": "date_min",
			"description": "Only posts newer than or equal to this UTC date and time will be returned.\n",
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
						"Users"
					],
					"operation": [
						"Get Current User Posts"
					]
				}
			}
		},
		{
			"displayName": "Date Max",
			"name": "date_max",
			"description": "Only posts older than this UTC date and time will be returned.",
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
						"Users"
					],
					"operation": [
						"Get Current User Posts"
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
						"Users"
					],
					"operation": [
						"Get Current User Posts"
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
						"Users"
					],
					"operation": [
						"Get Current User Posts"
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
						"Users"
					],
					"operation": [
						"Get Current User Posts"
					]
				}
			}
		},
		{
			"displayName": "GET /users/me/posts/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Search Current User Posts"
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
						"Users"
					],
					"operation": [
						"Search Current User Posts"
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
						"Users"
					],
					"operation": [
						"Search Current User Posts"
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
						"Users"
					],
					"operation": [
						"Search Current User Posts"
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
						"Users"
					],
					"operation": [
						"Search Current User Posts"
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
						"Users"
					],
					"operation": [
						"Search Current User Posts"
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
						"Users"
					],
					"operation": [
						"Search Current User Posts"
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
						"Users"
					],
					"operation": [
						"Search Current User Posts"
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
						"Users"
					],
					"operation": [
						"Search Current User Posts"
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
						"Users"
					],
					"operation": [
						"Search Current User Posts"
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
						"Users"
					],
					"operation": [
						"Search Current User Posts"
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
						"Users"
					],
					"operation": [
						"Search Current User Posts"
					]
				}
			}
		},
		{
			"displayName": "Date Min",
			"name": "date_min",
			"description": "Only posts newer than or equal to this UTC date and time will be returned.\n",
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
						"Users"
					],
					"operation": [
						"Search Current User Posts"
					]
				}
			}
		},
		{
			"displayName": "Date Max",
			"name": "date_max",
			"description": "Only posts older than this UTC date and time will be returned.",
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
						"Users"
					],
					"operation": [
						"Search Current User Posts"
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
						"Users"
					],
					"operation": [
						"Search Current User Posts"
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
						"Users"
					],
					"operation": [
						"Search Current User Posts"
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
						"Users"
					],
					"operation": [
						"Search Current User Posts"
					]
				}
			}
		},
		{
			"displayName": "POST /users/me/profile-image",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Set Profile Image"
					]
				}
			}
		},
		{
			"displayName": "POST /users/me/profile-image<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Set Profile Image"
					]
				}
			}
		},
		{
			"displayName": "GET /users/me/profile-images",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Profile Images"
					]
				}
			}
		},
		{
			"displayName": "POST /users/me/resend-verification",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Resend Account Verification Email"
					]
				}
			}
		},
		{
			"displayName": "POST /users/me/reset-password",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Send Password Reset Email"
					]
				}
			}
		},
		{
			"displayName": "POST /users/report",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Report User"
					]
				}
			}
		},
		{
			"displayName": "POST /users/report<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Report User"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get User"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "user_id",
			"required": true,
			"description": "A user ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get User"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user_id}/display",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get User And Related Data"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "user_id",
			"required": true,
			"description": "A user ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get User And Related Data"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user_id}/feedback",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Remove User Feedback"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "user_id",
			"required": true,
			"description": "A user ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Remove User Feedback"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user_id}/feedback",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Submit User Feedback"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "user_id",
			"required": true,
			"description": "A user ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Submit User Feedback"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user_id}/feedback<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Submit User Feedback"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user_id}/posts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get User Posts"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "user_id",
			"required": true,
			"description": "The user ID of the user whose posts will be retrieved. Using 'me' as the user_id will return the posts for the current user.\n",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get User Posts"
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
						"Users"
					],
					"operation": [
						"Get User Posts"
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
						"Users"
					],
					"operation": [
						"Get User Posts"
					]
				}
			}
		},
		{
			"displayName": "Sources",
			"name": "sources",
			"required": true,
			"description": "A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or all the open archive groups the requested user has posted to if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.\n",
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
						"Users"
					],
					"operation": [
						"Get User Posts"
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
						"Users"
					],
					"operation": [
						"Get User Posts"
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
						"Users"
					],
					"operation": [
						"Get User Posts"
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
						"Users"
					],
					"operation": [
						"Get User Posts"
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
						"Users"
					],
					"operation": [
						"Get User Posts"
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
						"Users"
					],
					"operation": [
						"Get User Posts"
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
						"Users"
					],
					"operation": [
						"Get User Posts"
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
						"Users"
					],
					"operation": [
						"Get User Posts"
					]
				}
			}
		},
		{
			"displayName": "Date Min",
			"name": "date_min",
			"description": "Only posts newer than or equal to this UTC date and time will be returned.\n",
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
						"Users"
					],
					"operation": [
						"Get User Posts"
					]
				}
			}
		},
		{
			"displayName": "Date Max",
			"name": "date_max",
			"description": "Only posts older than this UTC date and time will be returned.",
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
						"Users"
					],
					"operation": [
						"Get User Posts"
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
						"Users"
					],
					"operation": [
						"Get User Posts"
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
						"Users"
					],
					"operation": [
						"Get User Posts"
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
						"Users"
					],
					"operation": [
						"Get User Posts"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user_id}/posts/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Search User Posts"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "user_id",
			"required": true,
			"description": "The user ID of the user whose posts will be retrieved. Using 'me' as the user_id will return the posts for the current user.\n",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Search User Posts"
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
						"Users"
					],
					"operation": [
						"Search User Posts"
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
						"Users"
					],
					"operation": [
						"Search User Posts"
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
						"Users"
					],
					"operation": [
						"Search User Posts"
					]
				}
			}
		},
		{
			"displayName": "Sources",
			"name": "sources",
			"required": true,
			"description": "A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or all the open archive groups the requested user has posted to if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.\n",
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
						"Users"
					],
					"operation": [
						"Search User Posts"
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
						"Users"
					],
					"operation": [
						"Search User Posts"
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
						"Users"
					],
					"operation": [
						"Search User Posts"
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
						"Users"
					],
					"operation": [
						"Search User Posts"
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
						"Users"
					],
					"operation": [
						"Search User Posts"
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
						"Users"
					],
					"operation": [
						"Search User Posts"
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
						"Users"
					],
					"operation": [
						"Search User Posts"
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
						"Users"
					],
					"operation": [
						"Search User Posts"
					]
				}
			}
		},
		{
			"displayName": "Date Min",
			"name": "date_min",
			"description": "Only posts newer than or equal to this UTC date and time will be returned.\n",
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
						"Users"
					],
					"operation": [
						"Search User Posts"
					]
				}
			}
		},
		{
			"displayName": "Date Max",
			"name": "date_max",
			"description": "Only posts older than this UTC date and time will be returned.",
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
						"Users"
					],
					"operation": [
						"Search User Posts"
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
						"Users"
					],
					"operation": [
						"Search User Posts"
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
						"Users"
					],
					"operation": [
						"Search User Posts"
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
						"Users"
					],
					"operation": [
						"Search User Posts"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user_id}/profile-image",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Profile Image File"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "user_id",
			"required": true,
			"description": "The user ID of the user to return the profile image of.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Profile Image File"
					]
				}
			}
		},
		{
			"displayName": "Default",
			"name": "default",
			"description": "A default image URL to use when the user has no profile image. Or to use one of the Gravatar default images, you can set default to any one of (404, mm, identicon, monsterid, wavatar, retro, blank). <br /><br /> To learn how the Gravatar default images options work, see the Default Image section on the page at:<br /> https://en.gravatar.com/site/implement/images/\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "default",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Profile Image File"
					]
				}
			}
		},
];
