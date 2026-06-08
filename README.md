# @n8n-dev/n8n-nodes-trashnothing

![trashnothing Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-trashnothing.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-trashnothing)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing trashnothing API integrations by hand.**

Every time you connect n8n to trashnothing, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to trashnothing took 5 minutes, not half a day?**

This node gives you **7+ resources** out of the box: **Users**, **Posts**, **Groups**, **Photos**, **Messages**, and 2 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-trashnothing
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-trashnothing`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **trashnothing API** → paste your API key
3. Drag the **trashnothing** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Users | GET Retrieve current user, PUT Update current user, GET List current users' email alerts, PUT Create an email alert, DELETE Delete an email alert, POST Change email address, PUT Set users' email address as not bouncing, GET List current users' groups, PUT Update location, GET List current users' group notices, GET List current users' post locations, PUT Save a post location for the current user, GET List current users' posts, GET Search current users' posts, POST Set a profile image, GET List current users' profile images, POST Resend account verification email, POST Send password reset email, POST Report a user, GET Retrieve a user, GET Retrieve user display info, DELETE Remove feedback on a user, POST Submit feedback on a user, GET List posts by a user, GET Search posts by a user, GET Retrieve a users' profile image |
| Posts | GET List posts, POST Submit a post, GET List all posts, GET List all post changes, GET Retrieve multiple posts, GET Search posts, DELETE Delete a post, GET Retrieve a post, PUT Update a post, DELETE Delete a post bookmark, PUT Bookmark a post, GET Retrieve post display data, PUT Promise an offer post, POST Reply to a post, POST Report a post, PUT Satisfy a post, POST Share a post, PUT Unpromise an offer post, PUT Withdraw a post |
| Groups | GET Search groups, GET Retrieve multiple groups, POST Join groups, GET Retrieve a group, POST Submit group answers, POST Contact group moderators, POST Leave a group |
| Photos | POST Create a photo, GET Retrieve multiple photos, DELETE Delete a photo, POST Rotate a photo |
| Messages | GET List conversations, PUT Archive all conversations, PUT Mark all conversations as read, GET Search conversations, DELETE Delete conversation, PUT Archive conversation, PUT Block conversation, PUT Mark conversation as read, GET List conversation messages, POST Reply to conversation, POST Report conversation, PUT Unarchive conversation, PUT Unblock conversation |
| Stories | GET List stories, POST Submit a story, GET Retrieve a story, PUT Like a story, PUT Unlike a story, POST Record story viewed |
| Misc | POST Send feedback |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from trashnothing docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official trashnothing OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **trashnothing** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the trashnothing API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
